import { cn } from "@/lib/utils"
import { Eye, EyeSlash } from "@phosphor-icons/react"
import { ComponentProps, useState } from "react"
import { Input } from "./ui/input"

type InputProps = ComponentProps<"input">

export function InputPassword(props: InputProps) {
	const [hidePassword, setHidePassword] = useState(true)

	return (
		<div className="flex items-center relative w-full">
			<Input
				{...props}
				className={cn(props.className, "pr-14")}
				type={hidePassword ? "password" : "text"}
			/>
			{hidePassword ? (
				<EyeSlash
					size={24}
					className="absolute right-4 text-gray-400 cursor-pointer"
					onClick={() => setHidePassword(false)}
				/>
			) : (
				<Eye
					size={24}
					className="absolute right-4 text-gray-400 cursor-pointer"
					onClick={() => setHidePassword(true)}
				/>
			)}
		</div>
	)
}
