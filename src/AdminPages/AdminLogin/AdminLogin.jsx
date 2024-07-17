import { useContext, useEffect } from "react";
import nayanImage from "../../assets/homeImage/sarkar_nayan_home.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const {
    baseUrl,
    successfullToast,
    handleLogIn,
    localstorageDep,
    setLocalStorageDep,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginGoogle = () => {
    handleLogIn()
      .then((result) => {
        const loggedUser = result.user;
        localStorage.setItem("email", loggedUser?.email);
        setLocalStorageDep(!localstorageDep);

        // console.log(loggedUser);
        //post data in database
        const savedUser = {
          name: loggedUser?.displayName,
          photo: loggedUser?.photoURL,
          email: loggedUser?.email,
          phone: loggedUser?.phoneNumber,
          role: "",
        };

        fetch(`${baseUrl}/user`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            successfullToast("Login Successfully");
            navigate("/dashboard");
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="h-[100vh] flex">
      <div className=" w-[60%]">
        <img
          src={nayanImage}
          alt=""
          className="h-[100vh] w-full  object-cover"
        />
      </div>
      <div className="w-[40%] flex items-center justify-center">
        <button
          className="btn bg-yellow-500 text-white"
          onClick={handleLoginGoogle}
        >
          <GoogleIcon className="" /> Google Login
        </button>

        {/* <Link to={"/dashboard"}>
          {" "}
          <button className="btn btn-primary">Go Dashboard</button>{" "}
        </Link> */}
      </div>
    </div>
  );
};

export default AdminLogin;
