import { useState } from "react"
import { SubmitHandler } from "react-hook-form"
import { toast } from "react-toastify"
import { useAuth } from "../hooks/auth"
import { useScreens } from "../hooks/screens"
import { Screens } from "../state/screens"
import { Login } from "./auth/Login"
import { SignUp } from "./auth/SignUp"

interface ILoginProps {
	email: string
	password: string
}
interface ISignUpProps {
	email: string
	password: string
	name: string
}

export function LoginOrSignUp() {
	const { loading, signIn, signUp } = useAuth()
	const { changeScreen } = useScreens()
	const [isLogin, setIsLogin] = useState(true)

	const onSubmitLogin: SubmitHandler<ILoginProps> = async (data) => {
		const singin = await signIn(data.email, data.password)

		if (singin.status) {
			changeScreen(Screens.HOME)
			return toast.success(singin.message)
		}

		toast.error(singin.message)
	}

	const onSubmitSignUp: SubmitHandler<ISignUpProps> = async (data) => {
		const singup = await signUp(data.name, data.email, data.password)

		if (singup.status) {
			setIsLogin(true)
			return toast.success(singup.message)
		}

		toast.error(singup.message)
	}

	return (
		<div className="sm:grid grid-cols-2 h-screen">
			<div className="bg-blue-500 hidden w-full h-full sm:flex flex-col gap-20 items-center justify-center">
				<p className="font-semibold text-5xl text-white">
					Portal
					<span className="font-grotesk italic"> MegaBank</span>
				</p>

				<img src="/login.svg" alt="" className="w-[60%]" />
			</div>
			{isLogin ? (
				<Login loading={loading} setIsLogin={setIsLogin} handleData={onSubmitLogin} />
			) : (
				<SignUp loading={loading} setIsLogin={setIsLogin} handleData={onSubmitSignUp} />
			)}
		</div>
	)
}
