import { useScreens } from "@/hooks/screens"
import { cn } from "@/lib/utils"
import { Screens } from "@/state/screens"
import { Clock, Money } from "@phosphor-icons/react"

export function Sidebar() {
	const { changeScreen, screen } = useScreens()

	return (
		<div className="w-[25%] h-full flex flex-col justify-between items-center bg-zinc-100 py-8 dark:bg-zinc-800 dark:border-gray-400 shadow-sm duration-300 transition-all">
			<div className="flex flex-col gap-20">
				<p className="font-semibold text-xl text-black">
					Portal
					<span className="font-grotesk italic"> MegaBank</span>
				</p>
				<div className="flex flex-col gap-4"></div>
			</div>
			<div className="flex flex-col items-center w-full gap-4">
				<div
					onClick={() => changeScreen(Screens.HOME)}
					className={cn(
						"w-[80%] cursor-pointer group  h-11 rounded-md flex items-center px-4 gap-4 font-semibold",
						screen === Screens.HOME
							? "bg-blue-500 text-white"
							: "border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white"
					)}
				>
					<Money size={24} className="group-hover:scale-110" />
					<p>Sacar</p>
				</div>
				<div
					onClick={() => changeScreen(Screens.HISTORY)}
					className={cn(
						"w-[80%] cursor-pointer group  h-11 rounded-md flex items-center px-4 gap-4 font-semibold",
						screen === Screens.HISTORY
							? "bg-blue-500 text-white"
							: "border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white"
					)}
				>
					<Clock size={24} className="group-hover:scale-110" />
					<p>Histórico</p>
				</div>
			</div>
			<div></div>
		</div>
	)
}
