import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

import "./root.sass";

const Root = () => {
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet context={{}} />
      </main>
      <footer></footer>
    </>
  );
};

export default Root;
