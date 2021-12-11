import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./views/home/homePage";
import LoginPage from "./views/home/loginPage";
import Search from "./routes/search/Search";
import Convo from "./routes/chat/Convo";
import NavIcons from "./components/icons/navIcons";

// getting code from the uri tab
// the code will help redirect the user to the homepage after logging in
const code = new URLSearchParams(window.location.search).get("code");
// console.log(code);
function App() {
  return (
    <BrowserRouter>
      {/* if theres a code in the uri, show the homepage else show login page */}
      {code ? <NavIcons code={code} /> : ""}

      {/* search */}
      <Routes>
        {code ? (
          <>
            <Route
              path={`/home`}
              exact={true}
              element={<HomePage code={code} />}
            />

            {/* <Route path={`/search`} exact={true} element={<Search />} /> */}

            <Route path='/convo' exact={true} element={<Convo />} />
          </>
        ) : (
          <Route path='/' exact={true} element={<LoginPage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
