import { HistoryCard } from "@/components/HistoryCard"
import { useHistory } from "@/hooks/history"
import { useEffect, useState } from "react"

export function History() {
	const { getHistoryByUser, loading } = useHistory()
	const [history, setHistory] = useState([])

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
		<div className="flex flex-col gap-16 py-8 w-full overflow-y-scroll max-w-4xl">
			<p className="text-2xl font-semibold">Histórico de Transações</p>
			<div className="flex flex-col w-full gap-4">
				{loading ? (
					<p>Carregando...</p>
				) : history.length > 0 ? (
					history.map((item, index) => (
						<HistoryCard key={index} amount={item.amount} date={item.createdAt} />
					))
				) : (
					<p>Nenhuma transação encontrada</p>
				)}
			</div>
		</div>
	)
}
