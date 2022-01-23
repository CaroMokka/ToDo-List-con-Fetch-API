import React, { useEffect, useState } from "react";
import ToDoList from "./to-do-list.jsx";
import Task from "./task.jsx";

const AppToDoList = () => {
	const [taskList, setTaskList] = useState([]);

	//MIS FUNCIONES PARA LAS TAREAS

	//Funcion que crear tarea
	const taskNew = data => {
		setTaskList([data, ...taskList]);
	};
	//Funcion que elimina tarea
	const deleteTask = id => {
		//VARIABLE
		const filterlist = taskList.filter((e, key) => key !== id);
		setTaskList(filterlist);
		console.log(id);
	};
	//Funcion que actualiza tarea
	/* const upgradeTask = (id, task) => {
		//VARIABLE
		const upgradeList = taskList.map((e, key) => {
			if (key === id) {
				e = task;
			}
			return e;
		});

		setTaskList(upgradeList);
	}; */
	// getTareas me trae las tareas de mi api fake -----> GET
	const getTareas = async () => {
		const res = await fetch(
			`https://assets.breatheco.de/apis/fake/todos/user/carolaaraya`
		);
		const data = await res.json();
		console.log(data);
		setTaskList(data);
	};

	useEffect(() => {
		getTareas();
	}, []);
	//fetch PUT aqui va -----> PUT
	const setTareas = async () => {
		const res = await fetch(
			`https://assets.breatheco.de/apis/fake/todos/user/carolaaraya`,
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(taskList)
			}
		);
		const data = await res.json();
		console.log(data);
	};
	//FETCH METHOD POST, PAEA AGREGAR UN USER NUEVO
	const addUser = async () => {};

	return (
		<div className="app">
			<ToDoList taskNew={taskNew} setTareas={setTareas} />
			<div>
				{/*AQUI MAPEO EL ARRAY QUE ESTA ARRIBA DECLARADO, EN LA VARIABLE DE ESTADO , Y QUE ME PINTA LAS TAREAS*/}
				{taskList.map((task, key) => {
					if (task.done == false) {
						return (
							<Task
								key={key}
								task={task}
								deleteTask={deleteTask}
								id={key}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

export default AppToDoList;
