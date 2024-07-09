const pattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordPattern =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export function EmailValidator(email) {
  const lowerCaseEmail = email.toLowerCase();
  return pattern.test(lowerCaseEmail);
}

export function FullnameValidator(fullname) {
  if (fullname.length >= 2 && fullname.length < 20) {
    return false;
  } else {
    return true;
  }
}

export function PasswordValidator(passwoard) {
  return passwordPattern.test(passwoard);
}
