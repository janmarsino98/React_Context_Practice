import React, { useContext } from "react";
import { UserContext } from "./CurrentUserContext";

const ShowUser = () => {
  // Destructure the user context

  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <div>
      <div>
        {" "}
        The current user is {currentUser.name} and he is from{" "}
        <strong>{currentUser.country}</strong>
      </div>
      <button
        onClick={() =>
          setCurrentUser({ ...currentUser, name: "Second", country: "Andorra" })
        }
      >
        Modify user
      </button>
    </div>
  );
};

export default ShowUser;
