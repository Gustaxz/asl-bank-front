import { useEffect } from "react"
import { useScreens } from "./hooks/screens"
import { useUserInfos } from "./hooks/userInfos"
import { Home } from "./pages/Home"
import { LoginOrSignUp } from "./pages/LoginOrSignUp"
import { Screens } from "./state/screens"

export function Auth() {
	const { refreshInfos } = useUserInfos()
	const { screen, changeScreen } = useScreens()

	window.addEventListener("load", () => {
		refreshInfos()
	})

	useEffect(() => {
		const token = localStorage.getItem("token")
		if (token) {
			changeScreen(Screens.HOME)
		} else {
			changeScreen(Screens.LOGIN)
		}
	}, [])

	return screen === Screens.LOGIN ? <LoginOrSignUp /> : <Home />
}
