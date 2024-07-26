const encode = (email) => {
  let encodedEmail = btoa(email);
  return encodedEmail;
};

export default encode;
