import Login from "../../components/user/Login";
import SignUp from "../../components/user/SignUp";

const CLIENT_ID = "209833dcd53c4ec390e7766380414431";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/home&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;
const LoginPage = () => {
  return (
    <div>
      <a href={AUTH_URL}>
        <Login />
      </a>
    </div>
  );
};

export default LoginPage;
