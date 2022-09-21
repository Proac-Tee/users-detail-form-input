import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import classes from "./NewUserForm.module.css";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

// Component to fetch the user data
const NewUserForm = (props) => {
  const nameInputRef = useRef("");
  const ageInputRef = useRef("");

  //  Error modal state handing
  const [error, setError] = useState("");

  const formHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a Valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a Valid age (> 0)",
      });
      return;
    }

    // uplifted values gotten via props
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // function to close the modal
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={nameInputRef} />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInputRef} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default NewUserForm;
