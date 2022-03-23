import React, { useState } from "react";

const CreateTask = () => {
  const [txtName, setTxtName] = useState("");
  const [valuePriority, setTxtPriority] = useState("");

  const saveData = (event) => {
    let keys = Object.keys(localStorage);
    let newId = keys.length + 1;

    event.preventDefault();

    if (!txtName.trim()) {
      console.log("Está vacio nombre");
      return;
    }

    if (valuePriority === "") {
      alert("Seleccionar una prioridad");
      return;
    }

    console.log(`Los datos son ${txtName} ${valuePriority}`);

    localStorage.setItem(
      newId,
      JSON.stringify({
        id: newId,
        titulo: txtName,
        check: false,
        prioridad: parseInt(valuePriority),
      })
    );
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Crear tarea</h1>
        <hr />
      </div>

      <div className="container mt-5">
        <form className="row d-flex align-items-center" onSubmit={saveData}>
          <div className="col-md-5 mb-3">
            <div className="form-floating ">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Nombre"
                onChange={(e) => setTxtName(e.target.value)}
              />
              <label htmlFor="floatingInput">Nombre tarea</label>
            </div>
          </div>

          <div className="col-md-5 mb-3">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                onChange={(e) => setTxtPriority(e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Seleccione una opción
                </option>
                <option value="2">No importante</option>
                <option value="1">Importante</option>
                <option value="0">Urgente</option>
              </select>
              <label htmlFor="floatingSelect">Prioridad</label>
            </div>
          </div>

          <div className="col-md-2">
            <button className="btn btn-success btn-lg" type="submit">
              Agregar tarea
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
