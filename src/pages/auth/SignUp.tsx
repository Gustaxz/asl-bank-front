import { InputPassword } from "@/components/InputPassword"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { yupResolver } from "@hookform/resolvers/yup"
import { CircleNotch, Envelope, LockKey } from "@phosphor-icons/react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"

interface ISignUpInput {
	name: string
	email: string
	password: string
	confirmPassword: string
}

interface ILoginProps {
	loading: boolean
	setIsLogin: (isLogin: boolean) => void
	handleData: (data: ISignUpInput) => void
}

const schema = yup.object({
	name: yup.string().required("O nome é obrigatório"),
	email: yup.string().email("O email deve ser um email válido").required("O email é obrigatório"),
	password: yup
		.string()
		.min(6, "A senha deve ter no mínimo 6 caracteres")
		.required("A senha é obrigatória"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), ""], "As senhas devem ser iguais")
		.required("A confirmação de senha é obrigatória"),
})

export function SignUp({ loading, setIsLogin, handleData }: ILoginProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUpInput>({
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<ISignUpInput> = async (data) => {
		handleData(data)
	}

	return (
		<form
			className="flex flex-col items-center justify-center gap-12"
			onSubmit={handleSubmit(onSubmit)}
		>
			<p className="text-slate-700 text-4xl font-bold">Cadastre-se</p>
			<div className="flex flex-col gap-4 w-full mx-auto sm:max-w-[40vw] max-w-[90vw]">
				<div className="flex flex-col gap-1">
					<div className="flex items-center relative">
						<Envelope size={24} className="absolute left-4 text-gray-400" />
						<Input
							placeholder="José da Silva"
							className="py-4 h-14 outline-blue-500 pl-14"
							{...register("name")}
						/>
					</div>
					<p className="text-red-500 text-sm h-2">{errors?.name?.message}</p>
				</div>
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
						<InputPassword
							type="password"
							className="py-4 h-14 outline-blue-500 pl-14"
							placeholder="********"
							register={{ ...register("password") }}
						/>
					</div>
					<p className="text-red-500 text-sm h-2">{errors?.password?.message}</p>
				</div>
				<div className="flex flex-col gap-1">
					<div className="flex items-center relative">
						<LockKey size={24} className="absolute left-4 text-gray-400" />
						<InputPassword
							type="password"
							className="py-4 h-14 outline-blue-500 pl-14"
							placeholder="********"
							register={{ ...register("confirmPassword") }}
						/>
					</div>
					<p className="text-red-500 text-sm h-2">{errors?.confirmPassword?.message}</p>
				</div>
			</div>
			<Button
				type="submit"
				className="w-full mx-auto max-w-[40vw] py-4 h-14 bg-blue-500 text-white font-semibold uppercase text-lg hover:bg-blue-600"
			>
				{loading ? <CircleNotch size={32} className="animate-spin" /> : "Cadastrar"}
			</Button>
			<p className="font-normal">
				Já possui conta?{" "}
				<span
					onClick={() => setIsLogin(true)}
					className="underline text-blue-500 cursor-pointer"
				>
					Entre agora
				</span>
				!
			</p>
		</form>
	)
}
