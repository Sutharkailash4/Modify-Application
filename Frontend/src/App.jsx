import React from "react";
import FaceExpression from "./features/expression/components/FaceExpression";
import { RouterProvider } from "react-router";
import { router } from "./app.routes";

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
