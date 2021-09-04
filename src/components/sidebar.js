import * as React from "react";
import { Link } from "gatsby";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
// import * as AiIcons from "react-icons/ai";
// import { IconContext } from "react-icons";

//style
const container = {
  position: "fixed",
  right: "0px",
  textAlign: "right",
  background: "#00BABC",
  height: "100%",
};
// data
const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Curriculum",
    link: "/curriculum",
  },
];

const Sidebar = () => {
  return (
    <div style={container}>
      <Link to="#">
        <FaBars />
      </Link>
      <nav>
        {links.map((page, i) => (
          <p key={i}>
            <Link to={page.link}>
              <span>{page.title}</span>
            </Link>
          </p>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
