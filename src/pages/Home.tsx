import { Sidebar } from "@/components/Sidebar"
import { useScreens } from "@/hooks/screens"
import { useUserInfos } from "@/hooks/userInfos"
import { Screens } from "@/state/screens"
import { formatCurrency } from "@/utils/currency"
import { UserCircle } from "@phosphor-icons/react"
import { History } from "./home/History"
import { Withdraw } from "./home/Withdraw"

export function Home() {
	const { userInfo } = useUserInfos()
	const { screen } = useScreens()

	return (
		<div className="flex h-screen w-screen">
			<Sidebar />
			<div className="flex flex-col gap-4 w-full">
				<div className="flex text-lg justify-between w-full py-8 max-w-5xl mx-auto">
					<p className="">
						Seu saldo:{" "}
						<span className="text-green-500">
							{formatCurrency(userInfo?.balance ?? 0)}
						</span>
					</p>
					<div className="flex items-center gap-2">
						<p>Olá, {userInfo?.name.split(" ")[0]}!</p>
						<UserCircle size={32} weight="fill" className="text-gray-600" />
					</div>
				</div>
				<div className="flex justify-center w-full">
					{screen === Screens.HOME ? <Withdraw /> : <History />}
				</div>
			</div>
		</div>
	)
}
