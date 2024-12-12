import { useEffect } from "react"
import { useScreens } from "./hooks/screens"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Screens } from "./state/screens"

export function Auth() {
	const { screen, changeScreen } = useScreens()

	useEffect(() => {
		const token = localStorage.getItem("token")
		if (token) {
			changeScreen(Screens.HOME)
		} else {
			changeScreen(Screens.LOGIN)
		}
	}, [])

	return screen === Screens.LOGIN ? <Login /> : <Home />
}
