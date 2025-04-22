import { useState, useEffect } from "react"
// nombrado y default
import "../../styles/home.css"

const Home = () => {


	// creamos un estado del componente
	const [counter, setCounter] = useState(0) // devuelve estado actual y funcion para modificar el estado actual
	const [myAlert, setMyAlert] = useState(false)


	function increment() {
		if (counter < 10) {
			setCounter(counter + 1)
		}

	}

	const decrement = () => {
		if (counter > -10) {
			setCounter(counter - 1)
		}
	}


	// recibe dos parametros, un arrow function y una lista de depandencias
	useEffect(() => {
		console.log(`El counter cambio a ${counter}`)

		if (counter % 3 == 0) {
			setMyAlert(true)
		} else {
			setMyAlert(false)
		}

	}, [counter])


	useEffect(() => {
		setTimeout(() => {
			console.log("trae info de la api")
		}, 2000)
	}, [])

	return (
		<div className={`container mt-5`}>
			<div className="row">
				<div className="col-12 d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-outline-success"
						onClick={increment}
					>Incrementar</button>

					<h1
						className={`mx-3 ${counter % 2 == 0 ? "text-danger" : "text-success"}`}>
						{counter}
					</h1>

					<button
						type="button"
						className="btn btn-outline-danger"
						onClick={decrement}
					>Decrementer</button>
				</div>
				{
					myAlert ?
						<div className="alert alert-danger mt-5">
							<p>Soy una alerta</p>
						</div> : null
				}

			</div>
		</div>
	)
}

export default Home;