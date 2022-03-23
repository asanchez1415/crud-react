import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Link } from "react-router-dom";

/* Components */
import CreateTask from "./components/CreateTask";
import Task from "./components/Task";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="create-task" element={<CreateT />} />
      </Routes>
    </div>
  );
}

function Main() {
  return (
    <>
      <Task />
    </>
  );
}

function CreateT() {
  return (
    <>
      <CreateTask />
      <Link to="/">
        <button type="button" className="btn btn-outline-primary mt-5">
          Volver
        </button>
      </Link>
    </>
  );
}
