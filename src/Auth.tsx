import { Home } from "./Home"
import { useScreens } from "./hooks/screens"
import { Login } from "./Login"
import { Screens } from "./state/screens"

export function Auth() {
	const { screen } = useScreens()

	return screen === Screens.LOGIN ? <Login /> : <Home />
}
