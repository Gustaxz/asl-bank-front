import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { SignOut } from "@phosphor-icons/react"
import { useState } from "react"
import { Button } from "./ui/button"

interface IConfirmLogOffProps {
	onClick?: () => void
	isSidebarOpen?: boolean
}

export function ConfirmLogOff({ onClick, isSidebarOpen }: IConfirmLogOffProps) {
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<AlertDialog open={modalOpen}>
			<AlertDialogTrigger
				onClick={() => setModalOpen(true)}
				className="w-[80%] group cursor-pointer group  h-11 rounded-md flex items-center px-4 gap-4 font-semibold bg-red-500 text-white hover:bg-red-600"
			>
				<SignOut size={24} className="group-hover:scale-110" />
				{isSidebarOpen ? <p>Sair</p> : null}
			</AlertDialogTrigger>
			<AlertDialogContent className="flex flex-col gap-8">
				<AlertDialogHeader>
					<AlertDialogTitle className="text-xl">Deseja mesmo sair?</AlertDialogTitle>
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
						onClick={() => {
							setModalOpen(false)
							onClick?.()
						}}
					>
						Sair
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
