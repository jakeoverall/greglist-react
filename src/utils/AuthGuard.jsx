import React, { useEffect, useState } from "react";
import { audience, clientId, domain } from "../env.js";
import { AuthService } from "../services/AuthService.js";
import { RouterError } from "./Errors.js";

const AuthGuard = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    if (!domain || !audience || !clientId) {
      throw new RouterError('[INVALID AUTH SETTINGS]', 'Please update auth keys in env.js', 400)
    }
    const userToken = localStorage.getItem('user-token');
    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false);
      return AuthService.loginWithRedirect({
        appState: {
          targetUrl: location.hash
        }
      })
    }
    setIsLoggedIn(true);
  }
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return (
    <React.Fragment>
      {
        // eslint-disable-next-line react/prop-types
        isLoggedIn ? props.children : (<div>Please Login 😋!!!!</div>)
      }
    </React.Fragment>
  );
}
export default AuthGuard;