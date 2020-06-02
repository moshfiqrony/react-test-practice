import React from "react";

export default function MyItems({ children }) {
  return children ? children : "Empty State";
}
