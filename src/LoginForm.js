import React, { Fragment } from "react";

export default function LoginForm(props) {
  const onSubmit = e => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    if (password.value.trim().length < 4) {
      new Error("Invalid Pass");
    }

    props.onSubmit({ username: username.value, password: password.value });
  };

  return (
    <Fragment>
      <div>
        <form onSubmit={e => onSubmit(e)}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <input type="submit" name="submit" />
        </form>
      </div>
    </Fragment>
  );
}
