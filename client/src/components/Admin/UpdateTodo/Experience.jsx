/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../../utils/env.js";
function Experience({ _id, closeHandler, updateHandler }) {
  const [todoInfo, setTodoInfo] = useState({
    entreprise: "",
    poste: "",
    description: "",
    dateBegin: "",
    dateEnd: "",
  });
  const { entreprise, poste, description, dateBegin, dateEnd } = todoInfo;
  const handleChange = (e) => {
    setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    axios
      .put(`${apiUrl}/api/experience/${_id}`, todoInfo)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        setTodoInfo({
          entreprise: "",
          poste: "",
          description: "",
          dateBegin: "",
          dateEnd: "",
        });
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
          htmlFor="entreprise"
        >
          Nom de l'entreprise
        </label>
        <input
          required
          className="form-control"
          type="text"
          name="entreprise"
          value={entreprise}
          placeholder="Le nom de l'entreprise"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label
          className="form-label text-white fw-bold text-uppercase mt-2"
          htmlFor="poste"
        >
          Poste
        </label>
        <input
          required
          className="form-control"
          type="text"
          name="poste"
          value={poste}
          placeholder="Le poste que vous avez occupé"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label
          className="form-label text-white fw-bold text-uppercase mt-2"
          htmlFor="description"
        >
          description
        </label>
        <input
          required
          className="form-control"
          type="text"
          name="description"
          value={description}
          placeholder="Decrivez..................."
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          className="form-label text-white fw-bold text-uppercase mt-2"
          htmlFor="dateBegin"
        >
          Date de debut
        </label>
        <input
          required
          type="date"
          className="form-control"
          name="dateBegin"
          value={dateBegin}
          placeholder="La date de debut dans cette entreprise"
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          className="form-label text-white fw-bold text-uppercase mt-2"
          htmlFor="dateEnd"
        >
          Date de fin
        </label>
        <input
          type="date"
          required
          className="form-control"
          name="dateEnd"
          value={dateEnd}
          placeholder="La date de fin dans cette entreprise"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="todo-btn">
        ➕ Add
      </button>
    </form>
  );
}
export default Experience;
