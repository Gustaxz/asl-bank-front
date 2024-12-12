import { yupResolver } from "@hookform/resolvers/yup"
import { CircleNotch, Envelope, LockKey } from "@phosphor-icons/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as yup from "yup"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { useAuth } from "./hooks/auth"

interface ILoginProps {
	email: string
	password: string
}

const schema = yup.object({
	email: yup.string().email("O email deve ser um email válido").required("O email é obrigatório"),
	password: yup
		.string()
		.min(6, "A senha deve ter no mínimo 6 caracteres")
		.required("A senha é obrigatória"),
})

export function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginProps>({
		resolver: yupResolver(schema),
	})
	const { loading, signIn } = useAuth()

	const onSubmit: SubmitHandler<ILoginProps> = async (data) => {
		const singin = await signIn(data.email, data.password)

		if (singin.status) {
			return toast.success(singin.message)
		}

		toast.error(singin.message)
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
			<form
				className="flex flex-col items-center justify-center gap-12"
				onSubmit={handleSubmit(onSubmit)}
			>
				<p className="text-slate-700 text-4xl font-bold">Login</p>
				<div className="flex flex-col gap-4 w-full mx-auto max-w-[40vw]">
					<div className="flex flex-col gap-1">
						<div className="flex items-center relative">
							<Envelope size={24} className="absolute left-4 text-gray-400" />
							<Input
								placeholder="voce@email.com"
								className="py-4 h-14 outline-blue-500 pl-14"
								{...register("email")}
							/>
						</div>
						<p className="text-red-500 text-sm h-2">{errors?.email?.message}</p>
					</div>
					<div className="flex flex-col gap-1">
						<div className="flex items-center relative">
							<LockKey size={24} className="absolute left-4 text-gray-400" />
							<Input
								type="password"
								className="py-4 h-14 outline-blue-500 pl-14"
								placeholder="********"
								{...register("password")}
							/>
						</div>
						<p className="text-red-500 text-sm h-2">{errors?.password?.message}</p>
					</div>
				</div>
				<Button
					type="submit"
					className="w-full mx-auto max-w-[40vw] py-4 h-14 bg-blue-500 text-white font-semibold uppercase text-lg hover:bg-blue-600"
				>
					{loading ? <CircleNotch size={32} className="animate-spin" /> : "Entrar"}
				</Button>
			</form>
		</div>
	)
}
