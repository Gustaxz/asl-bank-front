import { ConfirmWithdraw } from "@/components/ConfirmWithdraw"
import { MoneyOption } from "@/components/MoneyOption"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"
import { calculateMoney } from "@/utils/calculate-money"
import { formatCurrency, handleCurrency } from "@/utils/currency"
import { useState } from "react"
import { toast } from "react-toastify"

export function Withdraw() {
	const [moneyOptions, setMoneyOptions] = useState<Map<number, number>[]>([])
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
					<Button
						className="h-14 w-[20%] min-w-40 bg-blue-500 hover:bg-blue-500 text-white text-lg"
						onClick={() => {
							if (price === 0) {
								toast.error("Digite um valor válido")
								return setMoneyOptions([])
							}
							const value = calculateMoney(price)
							console.log("the value is", value)
							setMoneyOptions(value)
						}}
					>
						Sacar
					</Button>
				</div>
			</div>
			<RadioGroup name="money-options" className="flex flex-col gap-4 pr-8">
				{moneyOptions.map((option, idx) => (
					<MoneyOption key={idx} items={option} idx={idx} />
				))}
			</RadioGroup>
			{moneyOptions.length > 0 && (
				<ConfirmWithdraw
					value={price}
					onSave={() => {
						setPrice(0)
						setMoneyOptions([])
					}}
				/>
			)}
		</div>
	)
}
