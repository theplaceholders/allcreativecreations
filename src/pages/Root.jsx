import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

const Root = () => {
  return (
    <>
        <header>
          <NavBar />
        </header>
        <main>
            <Outlet context={{}}/>
        </main>
        <footer>

        </footer>
    </>
  );
}

export default Root;