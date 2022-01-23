import React, { useState } from "react";
import PropTypes from "prop-types";

const ToDoList = ({ taskNew, setTareas }) => {
	//ESTAS SON LAS VARIABLES DE ESTADO DE MI FORMULARIO
	const [inputText, setInputText] = useState({ label: "", done: false });
	const [validation, setValidation] = useState(true);
	// MANEJADORES DE MI FFORMULARIO QUE RECIBE EN SU INPUT LA TAREA
	const handleForm = event => {
		//aqui captura los datos de mi formulario
		setInputText({ label: event.target.value, done: false });
		//aqui me muestra por consola que estoy capturando los valores
		console.log(inputText);
	};
	const submit = event => {
		event.preventDefault();
		//console.log(inputText);
		//validacion de input no vacio y que se agregue tarea ingreasada en el input
		if (inputText.label.trim() !== "") {
			taskNew(inputText);
			setInputText({ label: "", done: false });
			setValidation(true);
		} else {
			setValidation(false);
		}
	};

	//fetch para traer tareas

	//ESTO SON LOS PROPS
	ToDoList.propTypes = {
		taskNew: PropTypes.string,
		setTareas: PropTypes.string
	};

	setTareas();

	return (
		<div className="text-center mt-5">
			<h1 className="title">To-Do List</h1>
			<form
				className="form d-flex justify-content-center"
				onSubmit={submit}>
				<input
					className="inputUp"
					placeholder="What will you do today?"
					value={inputText.label}
					onChange={handleForm}
					name="label"
				/>
			</form>

			{!validation && (
				<div className="alert alert-dark" role="alert">
					Write something... Please.
				</div>
			)}
		</div>
	);
};

export default ToDoList;
