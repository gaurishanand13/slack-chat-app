import React, { Component } from "react";
import { signInWithGoogle, signOut } from "../firebase";

class SignIn extends Component {
  render() {
    return (
      <div className="sign-in-form text-center">
        <h3 className="mb-3">Sign In / Sign Up</h3>
        <button
          className="btn btn-light"
          type="button"
          onClick={signInWithGoogle}
        >
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
            className="img-fluid"
            alt="Responsive image"
          />
          Sign in with Google
        </button>
        <div className="mt-2 mb-2">OR</div>
        <button
          className="btn btn-light"
          type="button"
          onClick={signInWithGoogle}
        >
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
            className="img-fluid"
            alt="Responsive image"
          />
          Sign up with Google
        </button>

        <br></br>
        <button onClick={signOut}>Logout</button>
      </div>
    );
  }
}

export default SignIn;
