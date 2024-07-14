import { useContext } from "react";
import nayanImage from "../../assets/homeImage/sarkar_nayan_home.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import GoogleIcon from "@mui/icons-material/Google";

const AdminLogin = () => {
  const { handleLogIn } = useContext(AuthContext);

  const handleLoginGoogle = () => {
    handleLogIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
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
      </div>
    </div>
  );
};

export default AdminLogin;
