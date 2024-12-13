import { useScreens } from "@/hooks/screens"
import { cn } from "@/lib/utils"
import { Screens, sidebarAtom } from "@/state/screens"
import { Clock, List, Money } from "@phosphor-icons/react"
import { useAtom } from "jotai"
import { ConfirmLogOff } from "./LogOff"

export function Sidebar() {
	const [isSidebarOpen, setIsSidebarOpen] = useAtom(sidebarAtom)
	const { logOut, changeScreen, screen } = useScreens()

	return (
		<div
			className={cn(
				"h-full flex-col flex justify-between items-center bg-zinc-100 py-8 dark:bg-zinc-800 dark:border-gray-400 shadow-sm duration-300 transition-all",
				isSidebarOpen ? "w-80 absolute sm:static" : "w-16 sm:flex hidden"
			)}
		>
			<div className="w-[80%]">
				<div
					className={cn(
						"flex items-center w-full ",
						isSidebarOpen ? "justify-between" : "justify-center"
					)}
				>
					{isSidebarOpen ? (
						<p className="font-semibold text-xl text-black">
							Portal
							<span className="font-grotesk italic"> MegaBank</span>
						</p>
					) : null}
					<List
						size={24}
						className="cursor-pointer"
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					/>
				</div>
			</div>

			<div className="flex flex-col items-center w-full gap-4">
				<div
					onClick={() => {
						changeScreen(Screens.HOME)
						setIsSidebarOpen(false)
					}}
					className={cn(
						"w-[80%] cursor-pointer group  h-11 rounded-md flex items-center px-4 gap-4 font-semibold",
						screen === Screens.HOME
							? "bg-blue-500 text-white"
							: "border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white"
					)}
				>
					<Money size={24} className="group-hover:scale-110" />
					{isSidebarOpen ? <p>Saldo</p> : null}
				</div>
				<div
					onClick={() => {
						changeScreen(Screens.HISTORY)
						setIsSidebarOpen(false)
					}}
					className={cn(
						"w-[80%] cursor-pointer group  h-11 rounded-md flex items-center px-4 gap-4 font-semibold",
						screen === Screens.HISTORY
							? "bg-blue-500 text-white"
							: "border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white"
					)}
				>
					<Clock size={24} className="group-hover:scale-110" />
					{isSidebarOpen ? <p>Histórico</p> : null}
				</div>
			</div>
			<ConfirmLogOff
				onClick={() => {
					setIsSidebarOpen(false)
					logOut()
				}}
				isSidebarOpen={isSidebarOpen}
			/>
		</div>
	)
}
