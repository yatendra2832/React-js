import React, { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      // console.log(nameRef.current.value);
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      // console.log(ageRef.current.value);
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person)
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} type="number" id="age" className="form-control" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
// In React.js, useRef is a Hook that provides a way to access and interact with the DOM (Document Object Model) directly. It is particularly useful when you need to reference a DOM element or keep a mutable object persisting across renders without causing the component to re-render.

export default Form;
