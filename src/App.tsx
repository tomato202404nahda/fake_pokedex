import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

//pages
import { Main } from "./pages/main/main";
import SignIn from "./pages/signin/signin";
import { Temp } from "./pages/temp/temp";

//components
import Header from "./components/header/Header";
import Details from "./pages/details/Details";
import PokemonRegistry from "./pages/pokemon-registry/pokemon-registry";

function App() {
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
    {
      path: "/temp",
      element: <Temp />,
    },
  ]);
  return (
    <>
      <Header />
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
