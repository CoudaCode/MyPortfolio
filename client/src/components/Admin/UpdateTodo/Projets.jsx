/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../../utils/env.js";
function Projet({ _id, closeHandler, updateHandler }) {
  const [todoInfo, setTodoInfo] = useState({
    title: "",
    categorie: "",
    description: "",
    liens: "",
    technologie: "",
    image: "",
  });
  const { title, categorie, description, liens, technologie, image } = todoInfo;
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setTodoInfo((data) => ({ ...data, image: e.target.files[0] }));
    } else {
      setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
    }
  };

  const submitHanlder = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("categorie", categorie);
    formData.append("description", description);
    formData.append("liens", liens);
    formData.append("technologie", technologie);
    formData.append("image", image); // image est de type File
    console.log("formData", formData);
    axios
      .put(`${apiUrl}/api/projet/${_id}`, formData)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        setTodoInfo({
          title: "",
          categorie: "",
          description: "",
          liens: "",
          technologie: "",
          image: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form
      className="form-container"
      noValidate
      onSubmit={(e) => {
        submitHanlder(e);
        updateHandler();
        closeHandler();
      }}
    >
      <div className="form-group">
        <label
          className="form-label text-white fw-bold text-uppercase mt-2"
          htmlFor="title"
        >
          Titre du Projet
        </label>
        <input
          required
          className="form-control"
          type="text"
          name="title"
          value={title}
          placeholder="Intitule du projet"
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          className="form-label text-white fw-bold text-uppercase mt-2"
          htmlFor="categorie"
        >
          la categorie du projet
        </label>
        <input
          type="text"
          required
          className="form-control"
          name="categorie"
          value={categorie}
          placeholder="La categorie du projet"
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
          placeholder="Expliquez un peu la Projet"
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label
          className="form-label text-white fw-bold text-uppercase mt-2"
          htmlFor="liens"
        >
          Liens du Projet
        </label>
        <input
          required
          type="url"
          className="form-control"
          name="liens"
          value={liens}
          placeholder="url du Projet"
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          className="form-label text-white fw-bold text-uppercase mt-2"
          htmlFor="technologie"
        >
          Technologie Utilisé (Si y'en a plusieurs séparez les par des points
          virgules)
        </label>
        <input
          required
          type="text"
          className="form-control"
          name="technologie"
          value={technologie}
          placeholder="les techonologies utilisées pour réaliser le projet "
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          className="form-label text-white fw-bold text-uppercase mt-2"
          htmlFor="image"
        >
          Votre image
        </label>
        <input
          required
          type="file"
          className="form-control"
          name="image"
          placeholder="Une capture du projet"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="todo-btn">
        ➕ Add
      </button>
    </form>
  );
}
export default Projet;
