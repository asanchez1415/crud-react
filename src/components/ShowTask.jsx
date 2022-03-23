import React from "react";

const ShowTask = ({
  key,
  id,
  funcHandleCheck,
  titulo,
  prioridad,
  colorPrioridad,
  typeCheck,
}) => {
  return (
    <div className="bd-highlight d-flex justify-content-left align-items-center p-3 mb-2">
      {/* Este es el botón a realizar la acción */}
      <button
        className="btn"
        /* key={task.id} */
        onClick={() => funcHandleCheck(id)}
      >
        <i className={typeCheck}></i>
      </button>
      <div className="ms-3">
        <p className="mb-1 text-start">{titulo}</p>
        <span className={`badge ${colorPrioridad} float-start`}>
          {prioridad}
        </span>
      </div>
    </div>
  );
};

export default ShowTask;
