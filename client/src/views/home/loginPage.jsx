import Login from "../../components/user/Login";
import SignUp from "../../components/user/SignUp";

const LoginPage = () => {
  return (
    <div>
      {"lol" ? <SignUp /> : <Login />}
      {/* <Login /> */}
    </div>
  );
};

export default LoginPage;
