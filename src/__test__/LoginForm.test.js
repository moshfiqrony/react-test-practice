import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "../LoginForm";

test("LoginForm", () => {
  const container = document.createElement("div");
  const handleSubmit = jest.fn();
  ReactDOM.render(<LoginForm onSubmit={handleSubmit} />, container);

  const form = container.querySelector("form");
  const { username, password, submit } = form.elements;
  username.value = "moshfiqrony";
  password.value = "124";

  form.dispatchEvent(new window.Event("submit"));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value
  });
  expect(submit.type).toBe("submit");
});
