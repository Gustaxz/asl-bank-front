import { formatCurrency } from "@/utils/currency"
import { formatDate } from "@/utils/format-date"
import { ArrowDown, Calendar } from "@phosphor-icons/react"

interface IHistoryCardProps {
	amount: number
	date: string
}

export function HistoryCard({ amount, date }: IHistoryCardProps) {
	console.log({ date })
	return (
		<div className="rounded-md h-32 border flex items-center justify-between border-slate-400 px-4">
			<div className="flex items-center gap-8">
				<div className="rounded-full flex items-center justify-center p-2 bg-red-200">
					<ArrowDown size={24} className="text-red-600" />
				</div>
				<div className="flex flex-col gap-1">
					<p className="text-lg">Saque realizado</p>
					<p className="text-xl text-red-600">{formatCurrency(amount)}</p>
				</div>
			</div>
			<div className="bg-gray-200 rounded-md p-2 gap-2 flex items-center">
				<Calendar size={20} className="text-gray-500" />
				<p className="text-gray-700 text-sm">{formatDate(date)}</p>
			</div>
		</div>
	)
}
