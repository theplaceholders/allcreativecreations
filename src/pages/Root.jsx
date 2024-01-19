import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

import "../styles/pages_styles/root.sass";

const Root = () => {

  var prevScrollpos = window.scrollY;
  window.onscroll = () => {
    var currentScrollPos = window.scrollY;
    if(prevScrollpos > currentScrollPos)
      document.getElementById("navbar").style.top = "0";
    else
      document.getElementById("navbar").style.top = "-100px";
    prevScrollpos = currentScrollPos;
  }
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
