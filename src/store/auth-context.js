import React from "react";

const AuthContext = React.createContext({
  idLoggedIn: false,
  onLogout: () => {},
});

export default AuthContext;
