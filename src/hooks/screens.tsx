import { Screens, screensAtom } from "@/state/screens"
import { useAtom } from "jotai"

export function useScreens() {
	const [screen, setScreen] = useAtom(screensAtom)

	function changeScreen(screen: Screens) {
		setScreen(screen)
	}

	function logOut() {
		setScreen(Screens.LOGIN)
		localStorage.removeItem("token")
	}

	return { screen, changeScreen, logOut }
}
