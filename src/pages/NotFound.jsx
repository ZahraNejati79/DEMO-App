import React from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <>
      <p> ! صفحه ای که دنبال آن بودید یافت نشد </p>
      <Link to="/"> go to Home page</Link>
      <br />
    </>
  );
};

export default NotFound;
