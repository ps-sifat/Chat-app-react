import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Bounce } from "react-toastify";
import { LuGoal } from "react-icons/lu";
import {
  EmailValidator,
  FullnameValidator,
  PasswordValidator,
} from "../../../Utils/Validation.js";

const RegistationLeft = () => {
  const auth = getAuth();
  const [email, setemail] = useState("");
  const [fullName, setfullName] = useState("");
  const [password, setpassword] = useState("");
  const [eyeOpen, seteyeOpen] = useState("false");

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
      createUserWithEmailAndPassword(auth, email, password).then((userinfo) => {
        toast(`${fullName} Registatin Done`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
    }
  };

  return (
    <>
      <div className="h-screen w-[60%] ">
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
                      onClick={handelPassword}
                      id="Password"
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
                  Sign up
                </a>
              </div>
              <div className="text-center">
                <p className="font-sans text-sm">
                  Already have an account ?
                  <span className="text-[#EA6C00] font-semibold cursor-pointer">
                    {" "}
                    Sign In
                  </span>
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
