import React, { useState } from "react";
import TaskColumn from "./TaskColumn";
import { Link } from "react-router-dom";

const Task = () => {
  /* Función para obtener datos de local storage */
  const allStorage = () => {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    return values;
  };
  /* Termino de obtención local storage en resultComp 
  --------------------------------------------------*/

  const [taskList, setTaskList] = useState(allStorage());

  /* Esta es la función que debería recargar los componentes */
  const statusUpdate = (id) => {
    let taskFilter = taskList.filter((item) => item.id == id);
    localStorage.setItem(
      id,
      JSON.stringify({
        id: id,
        titulo: taskFilter[0].titulo,
        check: !taskFilter[0].check,
        prioridad: taskFilter[0].prioridad,
      })
    );

    setTaskList(allStorage());
  };

  return (
    <div>
      <div className="d-flex justify-content-end mt-5 me-5">
        <Link to="/create-task">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Agregar tarea
          </button>
        </Link>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-around">
          <div className="col-md-6 mt-5">
            <TaskColumn
              key="0"
              type="pendientes"
              taskList={taskList}
              handleCheck={statusUpdate}
            />
          </div>
          <div className="col-md-6 mt-5">
            <TaskColumn
              key="1"
              type="completadas"
              taskList={taskList}
              handleCheck={statusUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
