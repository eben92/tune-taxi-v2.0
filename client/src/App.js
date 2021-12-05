import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./views/home/homePage";
import LoginPage from "./views/home/loginPage";
import Search from "./routes/search/Search";
import Convo from "./routes/chat/Convo";

// getting code from the uri tab
// the code will help redirect the user to the homepage after logging in
const code = new URLSearchParams(window.location.search).get("code");
console.log(code);
function App() {
  return (
    // (
    // <div>
    //   {/* search */}
    //   {/* homePage */}

    //   {/* if theres a code in the uri, show the homepage else show login page */}
    //   {code ? <HomePage code={code} /> : <LoginPage />}
    //   {/* chat */}
    //   {/* profile */}
    // </div>

    <BrowserRouter>
      {/* if theres a code in the uri, show the homepage else show login page */}
      {code ? <HomePage code={code} /> : <LoginPage />}
      <Routes>
        {/* {code ? (
          <Route path={`/?code=${code}`} element={<HomePage code={code} />} />
        ) : (
          <Route path='/' exact={true} element={<LoginPage />} />
        )} */}

        {/* search */}
        {code ? <Route path={`/search`} exact element={<Search />} /> : ""}
        <Route path='/convo' element={<Convo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
