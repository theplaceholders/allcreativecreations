import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
        <header>

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