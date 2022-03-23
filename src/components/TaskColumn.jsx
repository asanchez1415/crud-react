import React, { useState, useEffect } from "react";
import ShowTask from "./ShowTask";

const TaskColumn = ({ key, type, taskList, handleCheck }) => {
  const tasks = taskList.map((task) => {
    if (task.prioridad == 0) {
      var datosPrioridad = ["Urgente", "bg-danger"];
    } else if (task.prioridad == 1) {
      var datosPrioridad = ["Importante", "bg-warning text-dark"];
    } else if (task.prioridad == 2) {
      var datosPrioridad = ["No Importante", "bg-primary"];
    } else {
      var datosPrioridad = ["Sin prioridad", "bg-dark"];
    }

    if (task.check === true && type === "completadas") {
      return (
        <ShowTask
          //key={task.id}
          id={task.id}
          funcHandleCheck={handleCheck}
          titulo={task.titulo}
          prioridad={datosPrioridad[0]}
          colorPrioridad={datosPrioridad[1]}
          typeCheck="bi bi-check-circle-fill h3 mb-0 text-success"
        />
      );
    } else if (task.check === false && type === "pendientes") {
      return (
        <ShowTask
          //key={task.id}
          id={task.id}
          funcHandleCheck={handleCheck}
          titulo={task.titulo}
          prioridad={datosPrioridad[0]}
          colorPrioridad={datosPrioridad[1]}
          typeCheck="bi bi-check-circle h3 mb-0"
        />
      );
    }
  });

  return (
    <div>
      <h2 className="mb-3">Tareas {type}</h2>
      {tasks}
    </div>
  );
};

export default TaskColumn;
