import { api } from "@/api"
import { Screens } from "@/state/screens"
import { jwtDecode } from "jwt-decode"
import { useState } from "react"
import { toast } from "react-toastify"
import { useScreens } from "./screens"

export function useHistory() {
	const { changeScreen } = useScreens()
	const [loading, setLoading] = useState(false)

	function userNotLogged() {
		setLoading(false)
		changeScreen(Screens.LOGIN)
		toast.error("Você não está logado")
		return false
	}

	async function getHistoryByUser() {
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
			const userId = jwtDecoded.sub
			const res = await api.get(`/transaction/${userId}`)

			if (res.data.statusCode !== 200) {
				toast.error("Erro ao buscar histórico")
				setLoading(false)
				return false
			}

			setLoading(false)
			return res.data.history
		} catch (error) {
			console.error(error)
			toast.error("Erro ao buscar histórico")
			setLoading(false)
			return false
		}
	}

	return { loading, getHistoryByUser }
}
