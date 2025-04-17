import React, { useState, useEffect } from "react";
import { SecondsCounter } from "./SecondsCounter";


const names = ["Juan", "Pedro", "Judas", "Deimian"]

//create your first component
const Home = () => {

	// Así declaramos un estado en react
	// const [el estado actual, funcion para modificar el estado] = useState(tipo dato)
	const [counter, setCounter] = useState(0) // va cualquier tipo de datos
	const [nombre, setNombre] = useState("Name")
	const [character, setCharacter] = useState([])


	const increment = () => {
		console.log(counter)
		setCounter(counter + 1)
	}

	function changeName() {
		let randomName = Math.floor(Math.random() * names.length)
		setNombre(names[randomName])
	}

	const getCharacters = () => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((data) => setCharacter(data.results))
	}


	// Efectos secondario
	useEffect(() => {
		// haga una consulta a la api --> información api
		console.log("HOla desde el effecto")
	}, [nombre])

	useEffect(() => {
		getCharacters() // llamado a la api traje los nomnres de rick and morty
	}, [])



	return (
		<div className="container">
			<div className="row">
				<div className="col-12 border border-danger my-5">
					<SecondsCounter />
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div>
						<h1>Counter</h1>
						<h2>{counter}</h2>
						<button
							className="btn btn-secondary"
							onClick={increment}
						>Sumar</button>
					</div>
					<h3>Hola ¿qué tal {nombre}?</h3>
					<button
						className="btn btn-success"
						onClick={changeName}
					>Cambiar nombre</button>
				</div>

				{
					character.map((item) => {
						return (
							<p key={item.id}>Hola ¿qué tal {item.name}?</p>
						)
					})
				}
			</div>
		</div>
	);
};

export default Home;