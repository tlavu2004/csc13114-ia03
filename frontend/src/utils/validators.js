export const isValidEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export const isStrongPassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,128}$/;
  return regex.test(password);
};

