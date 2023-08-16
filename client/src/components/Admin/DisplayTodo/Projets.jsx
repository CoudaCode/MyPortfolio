import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateProjet from "../UpdateTodo/Projets.jsx";
import ProjetLists from "../TodoLists/Projets.jsx";
import { apiUrl } from "../../../utils/env.js";
export function Projet() {
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [infoTodo, setInfoTodo] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(
    function () {
      axios
        .get(`${apiUrl}/api/projet`)
        .then((res) => {
          setInfoTodo(res.data.message);
          console.log(res.data.message);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [update]
  );

  const editHandler = (e) => {
    setId(e.target.name);
    setModal(true);
  };

  const updateHandler = () => {
    setUpdate(!update);
  };

  const deleteHandler = (e) => {
    axios.delete(`${apiUrl}/api/projet/${e.target.name}`);

    setInfoTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  };

  const closeHandler = () => {
    setId("");
    setModal(false);
  };

  return (
    <section className="container">
      <Link to="/add-Projet" className="button-new">
        <button className="todo-btn">➕ Ajouter Une Projet</button>
      </Link>
      <Link to="/">
        <button type="button" className="todo-btn todo-btn-back">
          🔙 Revenir en arriere
        </button>
      </Link>
      <section className="todo-data">
        <h1></h1>
        <ul className="todo-list-block">
          {infoTodo?.map((todoInfo, index) => (
            <ProjetLists
              key={index}
              todoInfos={todoInfo}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      </section>
      {modal ? (
        <section className="update-container">
          <div className="update-todo-data">
            <p onClick={closeHandler} className="close">
              &times;
            </p>
            <UpdateProjet
              _id={id}
              closeHandler={closeHandler}
              updateHandler={updateHandler}
            />
          </div>
        </section>
      ) : (
        ""
      )}
    </section>
  );
}

export default Projet;
