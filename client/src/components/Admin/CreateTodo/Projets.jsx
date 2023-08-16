/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../../utils/env.js";
const Projet = () => {
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
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("categorie", categorie);
    formData.append("description", description);
    formData.append("liens", liens);
    formData.append("technologie", technologie);
    formData.append("image", image); // image est de type File

    axios
      .post(`${apiUrl}/api/Projet`, formData)
      .then((res) => {
        setTodoInfo({
          title: "",
          categorie: "",
          description: "",
          liens: "",
          technologie: "",
          image: "",
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
      <Link to="/addProjet">
        <button type="button" className="todo-btn todo-btn-back">
          🔙 back
        </button>
      </Link>

      <section className="todo-data">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
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
              Technologie Utilisé
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
            ➕ create Projet
          </button>
        </form>
      </section>
    </section>
  );
};

export default Projet;
