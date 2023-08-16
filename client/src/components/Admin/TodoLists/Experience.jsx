/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const Experience = ({ todoInfos, editHandler, deleteHandler }) => {
  const { _id, entreprise, poste, description, dateBegin, dateEnd } = todoInfos;
  const date_debut = new Date(dateBegin).getFullYear()
  const date_fin = new Date(dateEnd).getFullYear()
  return (
    <li key={_id}>
      <div className="title-description">
        <h1>{entreprise}</h1>
        <h2>{poste}</h2>
        <h2>{description}</h2>
        <p>{date_debut}</p>
        <p>{date_fin}</p>
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

export default Experience;
