/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const Formation = ({ todoInfos, editHandler, deleteHandler }) => {
    const { _id, title, liens , description, categorie, technologie, image} = todoInfos;
    return (
      <li key={_id}>
        <div className="title-description">
          <h1>{title}</h1>
          <a href={liens}>{liens}</a>
          <p>{description}</p>
          <h2>{categorie}</h2>
          <h2>{technologie}</h2>
          <img src={image} width="30%" height="30%" className="rounded"/>
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
  