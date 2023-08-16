import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateFormation from "../UpdateTodo/Formation.jsx";
import FormationLists from "../TodoLists/Formation.jsx";
import { apiUrl } from "../../../utils/env.js";
export function Formation() {
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [infoTodo, setInfoTodo] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(
    function () {
      axios
        .get(`${apiUrl}/api/formation`)
        .then((res) => {
          setInfoTodo(res.data.message);
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
    axios.delete(`${apiUrl}/api/Formation/${e.target.name}`);

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
      <Link to="/add-Formation" className="button-new">
        <button className="todo-btn">➕ Ajouter Une Formation</button>
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
            <FormationLists
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

            <UpdateFormation
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

export default Formation;
