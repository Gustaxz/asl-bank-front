import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useTransaction } from "@/hooks/transaction"
import { formatCurrency } from "@/utils/currency"
import { CircleNotch } from "@phosphor-icons/react"
import { useState } from "react"
import { Button } from "./ui/button"

interface IConfirmWithdrawProps {
	value: number
	onSave?: () => void
}

export function ConfirmWithdraw({ value, onSave }: IConfirmWithdrawProps) {
	const [modalOpen, setModalOpen] = useState(false)
	const { loading, handleTransaction } = useTransaction()

	return (
		<AlertDialog open={modalOpen}>
			<AlertDialogTrigger
				onClick={() => setModalOpen(true)}
				className="rounded-md h-14 w-[20%] min-w-64 bg-white border text-blue-500 border-blue-500 hover:bg-blue-600 hover:text-white text-lg"
			>
				Finalizar saque
			</AlertDialogTrigger>
			<AlertDialogContent className="flex flex-col gap-8">
				<AlertDialogHeader>
					<AlertDialogTitle className="text-xl">
						Deseja mesmo realizar o saque de {formatCurrency(value)}?
					</AlertDialogTitle>
					{/* <AlertDialogDescription>
						This action cannot be undone. This will permanently delete your account and
						remove your data from our servers.
					</AlertDialogDescription> */}
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel
						onClick={() => setModalOpen(false)}
						className="rounded-md h-10 bg-white border text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
					>
						Cancelar
					</AlertDialogCancel>
					<Button
						className="h-10 bg-blue-500 hover:bg-blue-600 text-white"
						onClick={async () => {
							const success = await handleTransaction(value)
							if (success && onSave) {
								setModalOpen(false)
								onSave()
							}
						}}
					>
						{loading ? <CircleNotch size={32} className="animate-spin" /> : "Confirmar"}
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
