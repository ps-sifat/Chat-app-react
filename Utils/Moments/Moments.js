import moment from "moment";

export const GetTimeNow = () => {
  return moment().format("MMM Do YY h:mm:ss a");
};
