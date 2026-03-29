import react from "react";

const TraininGymView = ({ 
    inputValue, 
    setInputValue, 
    onKeyDown, 
    training, 
    onDelete, 
    onClearAll
}) => {

	return (
		<div className="container-style">
<h1>Lista de entrenamiento</h1>
<h2>¿Qué vas a entrenar hoy?</h2>	

<input onChange={(e) => setInputValue (e.target.value)}
value={inputValue}
onKeyDown={onKeyDown}
className="input-style"
type="text"
placeholder="Introduce lo que vas a entrenar hoy" />

{training.length === 0 ? (
                <p className="empty-state">No hay tareas, añadir tareas</p>
            ) : (
                <ul>
                    {training.map((item) => (
                        <li key={item.id} className="task-item">
                            {item.label}
                            <i
                                className="fa-solid fa-x delete-icon"
                                onClick={() => onDelete(item.id)} 
                            ></i>
                        </li>
                    ))}
                </ul>
            )}

            <div className="footer-status">
                <button onClick={onClearAll} className="clear-btn">
                    Limpiar todo
                </button>
            </div>
        </div>
    );
};

    export default TraininGymView;