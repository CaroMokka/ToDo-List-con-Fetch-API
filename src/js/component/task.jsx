import React, { useState } from "react";
import PropTypes from "prop-types";

const Task = ({ task, id, deleteTask }) => {
	/* const [modeEdit, setModeEdit] = useState(false);
	const [editText, setEditText] = useState("");

	const edit = () => {
		setModeEdit(true);
	};

	const handleEdit = event => {
		setEditText(event.target.value);
	};

	const submitEdit = event => {
		event.preventDefault();
		props.edit(props.id, editText);
		setEditText("");
		setModeEdit(false);
	}; */
	//AQUI ES UNA FUNCION QUE RECIBE COMO PROPS LA FUNCION DECLARADA POR EL PADRE PARA ELIMINAR LA TAREA POR ID
	/* const disappearsTask = () => {
		props.deleteTask(props.id);
	}; */

	return (
		<div className=" d-flex justify-content-center">
			<div className="task d-flex flex-nowrap">
				<span className="taskName">{task.label}</span>
				{/* <span className="pen" onClick={edit}>
						<i className="fas fa-pen"></i>
					</span> */}
				<span className="trash" onClick={() => deleteTask(id)}>
					<i className="fas fa-trash-alt"></i>
				</span>
			</div>

			{/* <form className="formEdit" onSubmit={submitEdit}>
				<input
					className="inputDown"
					value={editText}
					onChange={handleEdit}
				/>
				<span className="btn-return" onClick={submitEdit}>
					<i className="fas fa-undo-alt"></i>
				</span>
			</form> */}
		</div>
	);
};

Task.propTypes = {
	task: PropTypes.string,
	deleteTask: PropTypes.string,
	id: PropTypes.string
	/* edit: PropTypes.string */
};

export default Task;
