import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil.jsx";
import CompetenceTodo from "./components/Admin/DisplayTodo/Competence.jsx";
import CreateCompetence from "./components/Admin/CreateTodo/Competence.jsx";
import ExperienceTodo from "./components/Admin/DisplayTodo/Experience.jsx";
import CreateExperience from "./components/Admin/CreateTodo/Experience.jsx";
import FormationTodo from "./components/Admin/DisplayTodo/Formation.jsx";
import CreateFormation from "./components/Admin/CreateTodo/Formation.jsx";
import ProjetTodo from "./components/Admin/DisplayTodo/Projets.jsx";
import CreateProjet from "./components/Admin/CreateTodo/Projets.jsx";

import "./App.css";
function App() {
  return (
    <div className="todo-Container">
      <Routes>
        <Route exact path="/" element={<Acceuil />} />
        <Route path="/addCompetence" element={<CompetenceTodo />} />
        <Route path="/add-competence" element={<CreateCompetence />} />

        <Route path="/addExperience" element={<ExperienceTodo />} />
        <Route path="/add-experience" element={<CreateExperience />} />

        <Route path="/addFormation" element={<FormationTodo />} />
        <Route path="/add-formation" element={<CreateFormation />} />

        <Route path="/addProjet" element={<ProjetTodo />} />
        <Route path="/add-projet" element={<CreateProjet />} />
      </Routes>
    </div>
  );
}

export default App;
