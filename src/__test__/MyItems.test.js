import React, { createElement } from "react";
import ReactDOM from "react-dom";
import MyItems from "../MyItems";

test("Empty List Test", () => {
  const container = document.createElement("div");
  ReactDOM.render(<MyItems>hi</MyItems>, container);
  expect(container.textContent).toMatch("hi");
});

test("List Test", () => {
  const container = document.createElement("div");
  ReactDOM.render(<MyItems />, container);
  expect(container.textContent).toMatch("Empty State");
});
