import React from "react";

const decode = (encodedEmail) => {
  let decodedEmail = atob(encodedEmail);
  return decodedEmail;
};

export default decode;
