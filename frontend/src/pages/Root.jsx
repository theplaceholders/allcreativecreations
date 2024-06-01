import { Outlet } from "react-router-dom";
import { FootNav, NavBar } from "../components";

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
      <footer>
        {/* <FootNav /> */}
      </footer>
    </>
  );
};

export default Root;
