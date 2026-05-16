import React from "react";
import { RouterProvider } from "react-router";

import { router } from "./app.routes";

import { AuthProvider } from "./features/authentication/auth.context/auth.context";

import { SongContextProvider } from "./features/home/song.context";

const App = () => {
  return (
    <AuthProvider>
      <SongContextProvider>
        <div className="app">
          <RouterProvider router={router} />
        </div>
      </SongContextProvider>
    </AuthProvider>
  );
};

export default App;