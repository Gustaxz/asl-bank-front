import { Money } from "@phosphor-icons/react"

export function Sidebar() {
	return (
		<div className="w-[25%] h-full flex flex-col justify-between items-center bg-zinc-100 py-8 dark:bg-zinc-800 dark:border-gray-400 shadow-sm duration-300 transition-all">
			<div className="flex flex-col gap-20">
				<p className="font-semibold text-xl text-black">
					Portal
					<span className="font-grotesk italic"> MegaBank</span>
				</p>
				<div className="flex flex-col gap-4"></div>
			</div>
			<div className="w-[80%] cursor-pointer group hover:bg-blue-400 h-11 rounded-md bg-blue-500 text-white flex items-center px-4 gap-4 font-semibold">
				<Money size={24} className="group-hover:scale-110" />
				<p>Sacar</p>
			</div>
			<div></div>
		</div>
	)
}
