/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../../utils/env.js";

const Formation = () => {
  const [todoInfo, setTodoInfo] = useState({
    intitule: "",
    etablissement: "",
    description: "",
    dateBegin: "",
    dateEnd: "",
    certificat: "",
    diplome: "",
  });
  const {
    intitule,
    etablissement,
    description,
    dateBegin,
    dateEnd,
    certificat,
    diplome,
  } = todoInfo;
  function handleChange(e) {
    setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${apiUrl}/api/formation`, todoInfo)
      .then((res) => {
        setTodoInfo({
          intitule: "",
          etablissement: "",
          description: "",
          dateBegin: "",
          dateEnd: "",
          certificat: "",
          diplome: "",
        });
        console.log(res.data.formation);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
  }

  return (
    <section className="container">
      <Link to="/addFormation">
        <button type="button" className="todo-btn todo-btn-back">
          🔙 back
        </button>
      </Link>

      <section className="todo-data">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <div className="form-group">
            <label
              className="form-label text-white fw-bold text-uppercase mt-2"
              htmlFor="intitule"
            >
              Nom de la formation
            </label>
            <input
              required
              className="form-control"
              type="text"
              name="intitule"
              value={intitule}
              placeholder="entrez le nom de la formatio"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="form-label text-white fw-bold text-uppercase mt-2"
              htmlFor="etablissement"
            >
              Le nom de votre etablissement
            </label>
            <input
              type="text"
              required
              className="form-control"
              name="etablissement"
              value={etablissement}
              placeholder="L'etablissement frequenté"
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
              placeholder="Expliquez un peu la Formation acquise"
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
              placeholder="Date de debut de la formation"
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
              placeholder="date de fin de la formation"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="form-label text-white fw-bold text-uppercase mt-2"
              htmlFor="certificat"
            >
              Votre certificat
            </label>
            <input
              required
              type="text"
              className="form-control"
              name="certificat"
              value={certificat}
              placeholder="Certifié en ..........."
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="form-label text-white fw-bold text-uppercase mt-2"
              htmlFor="diplome"
            >
              Votre Diplomé
            </label>
            <input
              required
              type="text"
              className="form-control"
              name="diplome"
              value={diplome}
              placeholder="Le nom de votre diplome"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="todo-btn">
            ➕ create Formation
          </button>
        </form>
      </section>
    </section>
  );
};

export default Formation;
