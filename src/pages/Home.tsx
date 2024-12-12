import { Sidebar } from "@/components/Sidebar"
import { useScreens } from "@/hooks/screens"
import { Screens } from "@/state/screens"
import { History } from "./home/History"
import { Withdraw } from "./home/Withdraw"

export function Home() {
	const { screen } = useScreens()

	return (
		<div className="flex h-screen w-screen gap-8">
			<Sidebar />
			{screen === Screens.HOME ? <Withdraw /> : <History />}
		</div>
	)
}
