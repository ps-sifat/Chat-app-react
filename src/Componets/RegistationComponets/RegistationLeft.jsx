import React from "react";

const RegistationLeft = () => {
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
              <fieldset className="border-2 px-9  w-full rounded-lg">
                <legend className="px-4">
                  Email Address <span className="text-red-600">*</span>
                </legend>
                <input
                  className="py-6 px-5 placeholder:text-auth_primary_Color font-custom_nunito text-lg font-semibold "
                  type="text"
                  name="email"
                  id="email"
                  placeholder="@gmail.com"
                />
              </fieldset>

              <fieldset className="border-2 px-9  w-full rounded-lg">
                <legend className="px-4">
                  Full Name <span className="text-red-600">*</span>
                </legend>
                <input
                  className="py-6 px-5 placeholder:text-auth_primary_Color font-custom_nunito text-lg font-semibold "
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ladushing GTG"
                />
              </fieldset>

              <fieldset className="border-2 px-9  w-full rounded-lg">
                <legend className="px-4 ">
                  Password <span className="text-red-600">*</span>
                </legend>
                <input
                  className="py-6 px-5 placeholder:text-auth_primary_Color font-custom_nunito text-lg font-semibold "
                  type="text"
                  name="password"
                  id="Password"
                  placeholder=". . . . . ."
                />
              </fieldset>

              <div className="mt-4">
                <a
                  className=" py-5 w-full rounded-full text-white font-custom_nunito text-lg font-semibold text-center bg-primery_Blue"
                  href="#"
                >
                  Sign up
                </a>
              </div>
              <div className="text-center">
                <p className="font-sans text-sm">
                  Already have an account ?
                  <span className="text-[#EA6C00] font-semibold"> Sign In</span>
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
