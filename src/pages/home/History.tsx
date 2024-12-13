import { HistoryCard } from "@/components/HistoryCard"
import { useHistory } from "@/hooks/history"
import { useEffect, useState } from "react"

export function History() {
	const { getHistoryByUser, loading } = useHistory()
	const [history, setHistory] = useState<{ amount: number; createdAt: string }[]>([])

	useEffect(() => {
		getHistoryByUser().then((data) => {
			console.log({
				data,
			})
			if (data) {
				setHistory(data)
			}
		})
	}, [])

	return (
		<div className="w-full flex flex-col gap-16 py-8">
			<div className="w-full max-w-4xl mx-auto">
				<p className="text-2xl font-semibold">Histórico de Transações</p>
			</div>
			<div className="w-full flex justify-center overflow-y-auto h-[70vh] sm:h-[80vh]">
				<div className="flex flex-col gap-16 py-8 w-full max-w-4xl">
					<div className="flex flex-col w-full gap-4">
						{loading ? (
							<p className="text-gray-400">Carregando...</p>
						) : history.length > 0 ? (
							history.map((item, index) => (
								<HistoryCard
									key={index}
									amount={item.amount}
									date={item.createdAt}
								/>
							))
						) : (
							<p>Nenhuma transação encontrada</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
