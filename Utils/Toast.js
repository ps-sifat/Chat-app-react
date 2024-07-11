import { toast, Bounce } from "react-toastify";

/**
 *to do: function impliment
 * @param {*} msg
 * @param {*} position
 * @param {*} delay
 */

export const sucessTost = (
  msg = "sucess Message",
  position = "top-center",
  delay = 4000
) => {
  toast.success(msg, {
    position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

/**
 *to do: function impliment
 * @param {*} msg
 * @param {*} position
 * @param {*} delay
 */

export const errorTost = (
  msg = "Error Message",
  position = "top-center",
  delay = 4000,
  theme = "colored"
) => {
  toast.error(msg, {
    position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme,
    transition: Bounce,
  });
};
/**
 *to do: function impliment
 * @param {*} msg
 * @param {*} position
 * @param {*} delay
 */

export const infoTost = (
  msg = "Error Message",
  position = "top-right",
  delay = 4000
) => {
  toast(msg, {
    position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
