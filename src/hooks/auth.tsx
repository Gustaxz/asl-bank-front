import { api } from "@/api"
import { useState } from "react"

export function useAuth() {
	const [loading, setLoading] = useState(false)

	async function signIn(email: string, password: string) {
		try {
			setLoading(true)

			const res = await api.post("/auth", {
				email,
				password,
			})

			if (res.data.access_token !== null) {
				localStorage.setItem("token", res.data.access_token)
				return {
					message: "Login efetuado com sucesso",
					status: true,
				}
			}

			if (res.data.statusCode === 422) {
				return {
					message: "Usuário ou senha inválidos",
					status: false,
				}
			}
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}

		return {
			message: "Erro ao efetuar login",
			status: false,
		}
	}

	async function signUp(name: string, email: string, password: string) {
		try {
			setLoading(true)

			const res = await api.post("/user", {
				email,
				password,
				name,
				balance: 100,
			})

			if (res.data.statusCode !== 201) {
				return {
					message: "Erro ao efetuar cadastro",
					status: false,
				}
			}

			return {
				message: "Cadastro efetuado com sucesso",
				status: true,
			}
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}

		return {
			message: "Erro ao efetuar cadastro",
			status: false,
		}
	}

	return {
		signIn,
		signUp,
		loading,
	}
}
