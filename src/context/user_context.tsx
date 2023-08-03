import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IUserState, ImyUser } from "../Enums & Interface/IUserState";

const UserContext = React.createContext({} as IUserState);
export const UserProvider = ({ children }: { children: JSX.Element }) => {
  //Auth Object
  const { loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState({} as ImyUser);

  useEffect(() => {
    setMyUser(user as ImyUser);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        loginWithRedirect,
        logout,
        myUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
