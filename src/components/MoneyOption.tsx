import { MoneyIcon } from "./MoneyIcon"
import { Label } from "./ui/label"
import { RadioGroupItem } from "./ui/radio-group"

interface IMoneyOptionProps {
	items: Map<number, number>
	idx: number
}

export function MoneyOption({ items, idx }: IMoneyOptionProps) {
	const renderItems = Array.from(items).filter(([, value]) => value > 0)

	return (
		renderItems.length > 0 && (
			<div className="rounded-md h-32 border flex items-center border-slate-400 px-4">
				<RadioGroupItem
					id={`money-option-${idx}`}
					value={String(idx)}
					className="border-[#bdbaba] border-2 bg-white data-[state=checked]:text-blue-500 data-[state=checked]:border-blue-500 data-[state=checked]:border-2 h-5 w-5 hover:bg-blue-500 hover:bg-opacity-35 hover:border-blue-500"
				/>
				<Label
					htmlFor={`money-option-${idx}`}
					className="grid grid-cols-3 gap-4 w-full px-8 cursor-pointer"
				>
					{renderItems.map(([key, value]) => (
						<div key={key} className="flex items-center justify-center gap-2">
							<p className="text-sm font-semibold">x{value}</p>
							<MoneyIcon value={key} />
						</div>
					))}
				</Label>
			</div>
		)
	)
}
