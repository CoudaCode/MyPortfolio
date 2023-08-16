/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../../utils/env.js";
const Experience = () => {
  const [todoInfo, setTodoInfo] = useState({
    entreprise: "",
    poste: "",
    description: "",
    dateBegin: "",
    dateEnd: "",
  });
  const { entreprise, poste, description, dateBegin, dateEnd } = todoInfo;
  function handleChange(e) {
    setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${apiUrl}/api/experience`, todoInfo)
      .then((res) => {
        setTodoInfo({
          entreprise: "",
          poste: "",
          description: "",
          dateBegin: "",
          dateEnd: "",
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
  }

  return (
    <section className="container">
      <Link to="/addExperience">
        <button type="button" className="todo-btn todo-btn-back">
          🔙 back
        </button>
      </Link>

      <section className="todo-data">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <div className="form-group">
            <label
              className="form-label text-white fw-bold text-uppercase mt-2"
              htmlFor="entreprise"
            >
              Nom de L'entreprise
            </label>
            <input
              required
              className="form-control"
              type="text"
              name="entreprise"
              value={entreprise}
              placeholder="le nom du language"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="form-label text-white fw-bold text-uppercase mt-2"
              htmlFor="poste"
            >
              Poste Occupé
            </label>
            <input
              type="text"
              required
              className="form-control"
              name="poste"
              value={poste}
              placeholder="entrer le niveau Occupe"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="form-label text-white fw-bold text-uppercase mt-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              required
              type="text"
              className="form-control"
              name="description"
              value={description}
              placeholder="Expliquez un peu l'experience acquise"
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label
              className="form-label text-white fw-bold text-uppercase mt-2"
              htmlFor="dateBegin"
            >
              Date de Debut
            </label>
            <input
              required
              type="date"
              className="form-control"
              name="dateBegin"
              value={dateBegin}
              placeholder="Date de debut dans l'entreprise"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="form-label text-white fw-bold text-uppercase mt-2"
              htmlFor="dateEnd"
            >
              Date de Fin
            </label>
            <input
              required
              type="date"
              className="form-control"
              name="dateEnd"
              value={dateEnd}
              placeholder="date de fin dans l'entreprise"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="todo-btn">
            ➕ create Experience
          </button>
        </form>
      </section>
    </section>
  );
};

export default Experience;
