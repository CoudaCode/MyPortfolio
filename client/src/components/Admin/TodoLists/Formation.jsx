/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const Formation = ({ todoInfos, editHandler, deleteHandler }) => {
    const { _id, intitule, etablissement , description, dateBegin, dateEnd, certificat, diplome } = todoInfos;
    const date_debut = new Date(dateBegin).getFullYear()
    const date_fin = new Date(dateEnd).getFullYear()
    return (
      <li key={_id}>
        <div className="title-description">
          <h1>{intitule}</h1>
          <h2>{etablissement}</h2>
          <p>{description}</p>
          <h2>{date_debut}</h2>
          <h2>{date_fin}</h2>
          <h2>{certificat}</h2>
          <h2>{diplome}</h2>
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
  
  export default Formation;
  