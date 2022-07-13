import React, { useEffect } from "react";
import { auth, provider } from "../firebae-conf";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
  const navigate = useNavigate();
  function signInWithGoogle() {
    signInWithPopup(auth, provider).then((res) => {
      console.log(res);
      props.setIsAuth(true);
      localStorage.setItem("isAuth", true);
    });
  }

  function signOutWithGoogle() {
    signOut(auth).then((res) => {
      console.log("signed out");
      localStorage.clear();
      props.setIsAuth(false);
      navigate("/home");
    });
  }

  return (
    <div className="h-full min-h-screen bg-light-yellow flex flex-col items-center">
      <div className="m-20">
        {console.log(props.isAuth)}
        {localStorage.getItem("isAuth") ? (
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => {
              signOutWithGoogle();
            }}
          >
            Sign Out
          </button>
        ) : (
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Welcome James!
          </button>
        )}
      </div>
    </div>
  );
}
