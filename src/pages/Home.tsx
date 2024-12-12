import { Sidebar } from "@/components/Sidebar"
import { Withdraw } from "./home/Withdraw"

export function Home() {
	return (
		<div className="flex h-screen w-screen gap-8">
			<Sidebar />
			<Withdraw />
		</div>
	)
}
