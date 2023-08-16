import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../../utils/env.js";

const Competence = () => {
  const Navigate = useNavigate();
  const [todoInfo, setTodoInfo] = useState({
    nom: "",
    niveau: "",
    percent: "",
  });
  const { nom, niveau, percent } = todoInfo;
  function handleChange(e) {
    setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${apiUrl}/api/competence`, todoInfo)
      .then((res) => {
        setTodoInfo({ nom: "", niveau: "", percent: "" });
        if (res.data.message === "succes") {
          Navigate("/addCompetence");
        }
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
  }
  return (
    <section className="container">
      <Link to="/addCompetence">
        <button type="button" className="todo-btn todo-btn-back">
          🔙 Retour
        </button>
      </Link>

      <section className="todo-data">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <div className="form-group">
            <label
              className="form-label text-white fw-bold text-uppercase mt-2"
              htmlFor="nom"
            >
              Nom du Language
            </label>
            <input
              required
              className="form-control"
              type="text"
              name="nom"
              value={nom}
              placeholder="le nom du language"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="form-label text-white fw-bold text-uppercase mt-2"
              htmlFor="description"
            >
              Niveau
            </label>
            <input
              type="text"
              required
              className="form-control"
              name="niveau"
              value={niveau}
              placeholder="entrer le niveau Occupe"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="form-label text-white fw-bold text-uppercase mt-2"
              htmlFor="percent"
            >
              Pourcentage
            </label>
            <input
              required
              type="number"
              className="form-control"
              name="percent"
              value={percent}
              placeholder="Decrivez un peu "
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="todo-btn">
            ➕ Créer une Competence
          </button>
        </form>
      </section>
    </section>
  );
};

export default Competence;
