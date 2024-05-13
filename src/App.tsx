import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

//pages
import { Main } from "./pages/main/main";
import SignIn from "./pages/signin/signin";
// import Temp from "./pages/temp/temp";

//components
import Header from "./components/header/Header";
import Details from "./pages/details/Details";
import PokemonRegistry from "./pages/pokemon-registry/pokemon-registry";
import { createContext, useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export const DarkModeContext = createContext({});

function App() {
  const [darkMode, setDarkMode] = useState<boolean>();

  useEffect(() => {
    const a = localStorage.getItem("dark") === "true";

    if (a) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  const router = createBrowserRouter([
    {
      path: "/main",
      element: <Main />,
    },
    {
      path: "/",
      element: <Navigate to="/main" />,
    },
    {
      path: "/details",
      element: <Details />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/list",
      element: <PokemonRegistry />,
    },
    // {
    //   path: "/temp",
    //   element: <Temp />,
    // },
  ]);
  function darkModeHandler(): void {
    setDarkMode(!darkMode);
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }

  return (
    <>
      <Header>
        <button onClick={() => darkModeHandler()}>
          {
            darkMode && <IoSunny /> // render sunny when dark is true
          }
          {
            !darkMode && <IoMoon /> // render moon when dark is false
          }
        </button>
      </Header>
      <RouterProvider router={router} />
    </>

    /* (
    <>
      <Router location={""} navigator={undefined}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to={"/main"} replace />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  ) */
  );
}

export default App;
