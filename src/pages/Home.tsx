import { Sidebar } from "@/components/Sidebar"
import { useScreens } from "@/hooks/screens"
import { Screens } from "@/state/screens"
import { History } from "./home/History"
import { Withdraw } from "./home/Withdraw"

export function Home() {
	const { screen } = useScreens()

	return (
		<div className="flex h-screen w-screen">
			<Sidebar />
			<div className="flex justify-center w-full">
				{screen === Screens.HOME ? <Withdraw /> : <History />}
			</div>
		</div>
	)
}
