import React, {useState, useEffect } from "react";
import TraininGymView from "./TraininGymView";

//create your first component
const TraininGym = () => {

	const [inputValue, setInputValue] = useState("");
	const [training, setTraining] = useState([]);

	const apiUrl = "https://playground.4geeks.com/todo";
	const userName = "aforbidussi";

	const loadTraining = async () => {
		try {
			const response = await fetch(`${apiUrl}/users/${userName}`);
			if (response.status === 404) {
				await fetch(`${apiUrl}/users/${userName}`, { method: "POST" });
				setTraining([]);
			} else {
				const data = await response.json();
				setTraining(data.todos);
			}
		} catch (error) {
			console.error("Error cargando las tareas:", error);
		}
	};

	useEffect(() => {
		loadTraining();
	}, []);

	const handleKeyDown = async (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			const newTraining = { label: inputValue.trim(), is_done: false };
			try {
				const response = await fetch(`${apiUrl}/todos/${userName}`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newTraining)
				});
				if (response.ok) {
					setInputValue("")
					loadTraining();
				}
			} catch (error) {
				console.error("error agregando los ejercicios:", error);
			}
		}
	};

	const handleDelete = async (taskId) => {
		try {
			const response = await fetch(`${apiUrl}/todos/${taskId}`, { method: "DELETE" });
			if (response.ok) {
				loadTraining();
			}
		} catch (error) {
			console.error("Error eliminando la tarea:", error);
		}
	};

	const handleClearAll = async () => {
		try {
			const response = await fetch(`${apiUrl}/users/${userName}`, { method: "DELETE" });
			if (response.ok) {
				await loadTraining();
			}
		} catch (error) {
			console.error("error limpiando las tareas:", error);
		}
	};

	return (
		<TraininGymView
			inputValue={inputValue}
			setInputValue={setInputValue}
			onKeyDown={handleKeyDown}
			training={training}
			onDelete={handleDelete}
			onClearAll={handleClearAll}
		/>
	);

};

export default TraininGym;