import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit } = useForm();

  // console.log(register("name"));

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          type="number"
          id="age"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
