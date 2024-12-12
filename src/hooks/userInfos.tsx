import { api } from "@/api"
import { Screens } from "@/state/screens"
import { userInfoAtom } from "@/state/userInfo"
import { useAtom } from "jotai"
import { jwtDecode } from "jwt-decode"
import { toast } from "react-toastify"
import { useScreens } from "./screens"

export function useUserInfos() {
	const [userInfo, setUserInfo] = useAtom(userInfoAtom)
	const { changeScreen } = useScreens()

	function userNotLogged() {
		changeScreen(Screens.LOGIN)
		return toast.error("Você não está logado")
	}

	async function refreshInfos() {
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
			const res = await api.get(`/user/${userId}`)
			setUserInfo(res.data)
		} catch (error) {
			console.error(error)
			return userNotLogged()
		}
	}

	return { refreshInfos, userInfo }
}
