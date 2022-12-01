import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = ({setOpenModal, openModal}) => {

  const onClickButton = () => {
    // setOpenModal(!openModal);
    setOpenModal(prevState => !prevState);
  }

  return (
  <button 
    className={`CreateTodoButton ${openModal ? "CreateTodoButton-close" : ""}`}
    onClick={onClickButton}>
      +
      </button>
  )
};

export { CreateTodoButton };
