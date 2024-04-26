import { useState } from "react";
import "./App.css";
import ShowUser from "./components/ShowUser";
import { UserProvider } from "./components/CurrentUserContext";

function App() {
  return (
    <>
      <h2>Current user:</h2>
      <UserProvider>
        <ShowUser></ShowUser>
      </UserProvider>
    </>
  );
}

export default App;
