import { api } from "@/api"
import { Screens } from "@/state/screens"
import { jwtDecode } from "jwt-decode"
import { useState } from "react"
import { toast } from "react-toastify"
import { useScreens } from "./screens"
import { useUserInfos } from "./userInfos"

export function useTransaction() {
	const { refreshInfos } = useUserInfos()
	const { changeScreen } = useScreens()
	const [loading, setLoading] = useState(false)

	function userNotLogged() {
		setLoading(false)
		changeScreen(Screens.LOGIN)
		toast.error("Você não está logado")
		return false
	}

	async function handleTransaction(amount: number) {
		setLoading(true)
		const jwToken = localStorage.getItem("token")
		if (!jwToken) {
			return userNotLogged()
		}

		const jwtDecoded = jwtDecode(jwToken)
		if (!jwtDecoded.sub) {
			return userNotLogged()
		}

		try {
			const res = await api.post(
				"/transaction",
				{ amount },
				{
					headers: {
						Authorization: `Bearer ${jwToken}`,
					},
				}
			)

			if (res.data.statusCode === 401) {
				return userNotLogged()
			}

			if (res.data.statusCode === 400) {
				toast.error("Saldo insuficiente!")
				setLoading(false)
				return false
			}

			if (res.data.statusCode !== 201) {
				toast.error("Erro ao realizar a transação")
				setLoading(false)
				return false
			}

			toast.success("Transação realizada com sucesso")
			setLoading(false)
			refreshInfos()
			return true
		} catch (error) {
			console.error(error)
			toast.error("Erro ao realizar a transação")
			setLoading(false)
			return false
		}
	}

	return { loading, handleTransaction }
}
