import { DEPLOY_URL } from "@/constants/ulrs"
import { cn } from "@/lib/utils"

interface IMoneyIconProps {
	value: number
}

const moneyColors = [
	"bg-[#addbce]",
	"bg-[#e7ebf4]",
	"bg-[#c7afbc]",
	"bg-[#d4abb3]",
	"bg-[#d3c56d]",
	"bg-[#e0b58b]",
	"bg-[#bfe6e1]",
	"bg-[#928388]",
]

export function MoneyIcon({ value }: IMoneyIconProps) {
	function colorByValue() {
		switch (value) {
			case 200:
				return moneyColors[7]
			case 100:
				return moneyColors[6]
			case 50:
				return moneyColors[5]
			case 20:
				return moneyColors[4]
			case 10:
				return moneyColors[3]
			case 5:
				return moneyColors[2]
			case 2:
				return moneyColors[1]
			case 1:
				return moneyColors[0]
		}
	}

	return (
		<div
			className={cn(
				"relative w-14 h-10 px-[0.2rem] flex items-center justify-center rounded-sm",
				colorByValue()
			)}
		>
			<p className="absolute mt-[0.15rem] text-white font-bold">{value}</p>
			<img src={`${DEPLOY_URL}/money.svg`} className="object-cover w-full h-full"></img>
		</div>
	)
}
