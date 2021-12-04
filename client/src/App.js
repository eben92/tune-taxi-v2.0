import "./App.css";
import HomePage from "./views/home/homePage";
import LoginPage from "./views/home/loginPage";

// getting code from the uri tab
// the code will help redirect the user to the homepage after logging in
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div>
      {/* search */}
      {/* homePage */}

      {/* if theres a code in the uri, show the homepage else show login page */}
      {code ? <HomePage code={code} /> : <LoginPage />}
      {/* chat */}
      {/* profile */}
    </div>
  );
}

export default App;
