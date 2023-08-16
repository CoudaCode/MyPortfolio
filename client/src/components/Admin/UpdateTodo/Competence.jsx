/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../../utils/env.js";
function Competence({ _id, closeHandler, updateHandler }) {
  const [todoInfo, setTodoInfo] = useState({
    nom: "",
    niveau: "",
    percent: "",
  });
  const { nom, niveau, percent } = todoInfo;
  const handleChange = (e) => {
    setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    axios
      .put(`${apiUrl}/api/competence/${_id}`, todoInfo)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        setTodoInfo({ nom: "", niveau: "", percent: "" });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        submitHanlder(e);
        updateHandler();
        closeHandler();
      }}
    >
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
          Niveau d'apprentissage
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
        ➕ Add
      </button>
    </form>
  );
}
export default Competence;
