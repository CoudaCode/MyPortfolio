/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const Competence = ({ todoInfos, editHandler, deleteHandler }) => {
  const { _id, nom,niveau, percent } = todoInfos;

  return (
    <li key={_id}>
      <div className="title-description">
        <h1>{nom}</h1>
        <h2>{niveau}</h2>
        <h2>{percent}%</h2>
      </div>
      <h1></h1>
      <div className="todo-btn-container">
        <button className="todo-btn" name={_id} onClick={editHandler}>
          🖊️
        </button>
        <button className="todo-btn" name={_id} onClick={deleteHandler}>
          🗑️
        </button>
      </div>
    </li>
  );
};

export default Competence;
