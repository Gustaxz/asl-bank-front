import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { formatCurrency, handleCurrency } from "@/utils/currency"
import { useState } from "react"

export function Withdraw() {
	const [price, setPrice] = useState(0)

	return (
		<div className="flex flex-col gap-16 py-8 w-full">
			<p className="text-2xl font-semibold">Área de saques</p>
			<div className="flex flex-col gap-4">
				<Label htmlFor="price" className="text-base">
					Deseja sacar quanto?
				</Label>
				<div className="flex gap-8 items-center">
					<Input
						value={formatCurrency(price)}
						onChange={(e) => {
							const currency = handleCurrency(e.target.value)
							setPrice(Number(currency))
						}}
						id="price"
						className="py-4 h-14  bg-gray-50 outline-none w-[30%] min-w-40 text-xl md:text-xl border-t-0 border-r-0 rounded-none border-l-0 border-b-2 border-b-blue-500"
						placeholder="R$ 0.00"
					/>
					<Button className="h-14 w-[20%] min-w-40 bg-blue-500 hover:bg-blue-600 text-white text-lg">
						Sacar
					</Button>
				</div>
			</div>
		</div>
	)
}
