import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Auth } from "./Auth"

function App() {
	return (
		<div>
			<Auth />
			<ToastContainer />
		</div>
	)
}

export default App
