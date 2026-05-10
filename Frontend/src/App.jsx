import React from "react";
import FaceExpression from "./features/expression/components/FaceExpression";
import { RouterProvider } from "react-router";
import { router } from "./app.routes";
import { AuthProvider } from "./features/authentication/auth.context/auth.context";

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
};

export default App;
