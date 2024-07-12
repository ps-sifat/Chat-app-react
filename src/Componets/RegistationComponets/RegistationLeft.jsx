import React, { useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sucessTost, errorTost, infoTost } from "../../../Utils/Toast.js";
import { Navigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  // onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import BeatLoader from "react-spinners/BeatLoader.js";
import {
  EmailValidator,
  FullnameValidator,
  PasswordValidator,
} from "../../../Utils/Validation.js";
import { GetTimeNow } from "../../../Utils/Moments/Moments.js";
import { getDatabase, ref, set, push } from "firebase/database";
const RegistationLeft = () => {
  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setemail] = useState("");
  const [fullName, setfullName] = useState("");
  const [password, setpassword] = useState("");
  const [eyeOpen, seteyeOpen] = useState(true);

  // for error
  const [erroemail, seterroemail] = useState("");
  const [errofullName, seterrofullName] = useState("");
  const [erropassword, seterropassword] = useState("");
  /*
   * todo: handelEmail function impliment
   * @param ({event})
   */

  const handelEmail = (event) => {
    setemail(event.target.value);
  };

  /*
  todo: handelfullName function impliment
  @param ({event})
  */
  const handelfullName = (event) => {
    setfullName(event.target.value);
  };

  /*
  todo: handelPassword function impliment
  @param ({event})
  */
  const handelPassword = (event) => {
    setpassword(event.target.value);
  };

  // passwoard seen
  const handelEye = () => {
    seteyeOpen(!eyeOpen);
  };

  /*
  todo: handelSubmit function impliment
  @param ({event})
  */
  const handelSubmit = () => {
    if (!email || !EmailValidator(email)) {
      seterroemail("Email missing Or Worng email accound");
    } else if (!fullName || FullnameValidator(fullName)) {
      seterroemail();
      seterrofullName("Name missing or Character in 20 word");
    } else if (!password || PasswordValidator(password)) {
      seterrofullName("");
      seterropassword("Input Passwoard or password minimum 10 Character");
    } else {
      seterropassword("");
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          sucessTost(`${fullName} Registatin Done`);
        })
        .then(() => {
          sendEmailVerification(auth.currentUser).then(() => {
            infoTost(`${fullName} Please check your email`);
          });
        })
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: fullName,
          });
        })
        .then(() => {
          const usesRef = ref(db, "users/");
          set(push(usesRef), {
            uid: auth.currentUser.uid,
            userName: fullName,
            userEmail: auth.currentUser.email,
            createdAt: GetTimeNow(),
          });
        })
        .then(() => {
          navigate("/Login");
        })
        .catch((err) => {
          let ourErro = err.message.split("/")[1];
          errorTost(ourErro.slice(0, ourErro.length - 2));
        })
        .finally(() => {
          setemail("");
          setfullName("");
          setpassword("");
          setLoading("");
          seterroemail("");
          seterrofullName("");
          seterropassword("");
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="h-screen ml-44 w-[40%] ">
        <div className="flex justify-center items-center h-full flex-col ">
          <div className="flex justify-start flex-col">
            {/* title */}
            <div>
              <h1 className="text-[34px] font-custom_nunito font-bold text-auth_primary_Color">
                Get started with easily register
              </h1>
              <p className="mt-[13px] text-xl text-auth_secondary_Color font-normal font-custom_nunito ">
                Free register and you can enjoy it
              </p>
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
                    value={email}
                    onChange={handelEmail}
                    placeholder="@gmail.com"
                  />
                </fieldset>
                <span className="text-red-500 font-normal font-custom_nunito">
                  {erroemail && erroemail}
                </span>
              </div>

              <div>
                <fieldset className="border-2 px-9  w-full rounded-lg">
                  <legend className="px-4">
                    Full Name <span className="text-red-600">*</span>
                  </legend>
                  <input
                    className="py-6 px-5 font-custom_nunito text-lg font-semibold "
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={fullName}
                    onChange={handelfullName}
                    placeholder="Ladushing GTG"
                  />
                </fieldset>
                <span className="text-red-500 font-normal font-custom_nunito">
                  {errofullName && errofullName}
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
                      value={password}
                      onChange={handelPassword}
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
                  {erropassword && erropassword}
                </span>
              </div>

              <div className="mt-4">
                <a
                  onClick={handelSubmit}
                  className=" py-5 w-full rounded-full text-white font-custom_nunito text-lg font-semibold text-center bg-primery_Blue"
                  href="#"
                >
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
                  Already have an account ?
                  <Link to={"/login"}>
                    <span className="text-[#EA6C00] font-semibold cursor-pointer">
                      Sign In
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

export default RegistationLeft;
