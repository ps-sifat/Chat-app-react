import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import {
  EmailValidator,
  PasswordValidator,
} from "../../../Utils/Validation.js";
import { sucessTost, errorTost, infoTost } from "../../../Utils/Toast.js";

// import { useToast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginLeft = () => {
  const auth = getAuth();
  const [loading, setLoading] = useState(false);
  const [eyeOpen, seteyeOpen] = useState(true);
  // login information >>> state
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
  });

  // all error >>>> state
  const [loginerror, setloginerror] = useState({
    emailError: " ",
    passwordError: " ",
  });

  const handelLoginInput = (e) => {
    setloginInfo({
      ...loginInfo,
      [e.target.id]: e.target.value,
    });
  };

  const handelSignIn = () => {
    const { email, password } = loginInfo;
    if (!email || !EmailValidator(email)) {
      setloginerror({
        ...loginerror,
        emailError: "Wrong email",
      });
    } else if (!password) {
      setloginerror({
        ...loginerror,
        emailError: " ",
        passwordError: "wrong Password",
      });
    } else {
      setLoading(true);
      setloginerror({
        ...loginerror,
        emailError: " ",
        passwordError: " ",
      });
      signInWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          sucessTost(`Login Sucessfull`);
        })
        .catch((err) => {
          errorTost(`${err.code}`);
        });
    }
  };

  /*
   * todo: handelEmail function impliment
   * @param ({event})
   */

  // passwoard seen
  const handelEye = () => {
    seteyeOpen(!eyeOpen);
  };

  return (
    <>
      <div className="h-screen ml-44 w-[40%] ">
        <div className="flex justify-center items-center h-full flex-col ">
          <div className="flex justify-start flex-col">
            {/* title */}
            <div>
              <h1 className="text-[34px] font-custom_nunito font-bold text-auth_primary_Color">
                Login to your account!
              </h1>
            </div>
            <div className="mt-7">
              <button className="px-7 py-6 flex items-center gap-x-2 font-custom_nunito font-semibold text-sm text-[#03014C] border-2 border-[rgba(3,1,76,0.2)] rounded-lg">
                <span className="text-xl">
                  <FcGoogle />
                </span>
                Login with Google
              </button>
            </div>
            {/* title */}

            {/* input field  */}
            <div className="mt-10 gap-y-9 flex flex-col max-w-[368px]">
              <div>
                <fieldset className="border-2 px-9  w-full rounded-lg">
                  <legend className="px-4">
                    Email Address <span className="text-red-600">*</span>
                  </legend>
                  <input
                    className="py-6 px-5 font-custom_nunito text-lg font-semibold "
                    type="text"
                    name="email"
                    id="email"
                    value={loginInfo.email}
                    onChange={handelLoginInput}
                    placeholder="@gmail.com"
                  />
                </fieldset>
                <span className="text-red-500 font-normal font-custom_nunito">
                  {loginerror.emailError}
                </span>
              </div>

              <div>
                <fieldset className="border-2 px-9  w-full rounded-lg">
                  <legend className="px-4 ">
                    Password <span className="text-red-600">*</span>
                  </legend>
                  <div className="flex items-center justify-between">
                    <input
                      className="py-6 px-5  font-custom_nunito text-lg font-semibold "
                      name="password"
                      type={eyeOpen ? "password" : "text"}
                      value={loginInfo.password}
                      onChange={handelLoginInput}
                      id="password"
                      placeholder=". . . . . ."
                    />
                    <span
                      className="cursor-pointer text-auth_primary_Color"
                      onClick={handelEye}
                    >
                      {eyeOpen ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </fieldset>
                <span className="text-red-500 font-normal font-custom_nunito">
                  {loginerror.passwordError}
                </span>
              </div>

              <div className="mt-4">
                <a
                  onClick={handelSignIn}
                  className=" py-5 w-full rounded-lg text-white font-custom_nunito text-lg font-semibold text-center bg-primery_Blue"
                  href="#"
                >
                  Login to Continue
                  {loading ? (
                    <BeatLoader
                      // color={color}
                      loading={loading}
                      // cssOverride={override}
                      size={20}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : (
                    "Sign up"
                  )}
                </a>
              </div>
              <div className="text-center">
                <p className="font-sans text-sm">
                  Don’t have an account ?
                  <Link to={"/Registration"}>
                    <span className="text-[#EA6C00] font-semibold cursor-pointer">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            {/* input field  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLeft;
