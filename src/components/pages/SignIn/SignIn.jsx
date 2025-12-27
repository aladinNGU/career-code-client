import Lottie from "lottie-react";
import React, { use } from "react";
import signInLottie from "../../../assets/lotties/signInLottie.json";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import SocialLogin from "../../Shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";

const SignIn = () => {
  const { logInUser } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  console.log("location in sign in page", location);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // create user
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
        form.reset();
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left ml-10">
          <Lottie
            style={{ width: "250px" }}
            animationData={signInLottie}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center">Signin Now</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">Sign In</button>
              </fieldset>
            </form>
            <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
