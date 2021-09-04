import * as React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaFacebook } from "@react-icons/all-files/fa/FaFaceBook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { IconContext } from "@react-icons/all-files/lib";
// import * as AiIcons from "react-icons/ai";

//style
const container = {
  position: "fixed",
  right: "0px",
  background: "#00BABC",
  height: "100%",
  padding: "48px 64px 42px 0px",
  textAlign: "right",
};

const navLinkItem = {
  margin: "32px 0px",
};

const navLinkText = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "24px",
  fontWeight: "600",

  //   &:hover {
  // 	  color: "pink",
  //   }
};

const icon = {
  marginLeft: "8px",
};

// const sidebarMenuActive = {
//   marginLeft: "20px",
// };

// const sidebarMenu = {
//   marginLeft: "40px",
// };

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
  {
    title: "How to Apply",
    link: "/",
  },
  {
    title: "Is this for you?",
    link: "/",
  },
  {
    title: "Community",
    link: "/",
  },
  {
    title: "F.A.Q",
    link: "/",
  },
  {
    title: "For Investors",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
  {
    title: "Apply Now",
    link: "/",
  },
];

const Sidebar = () => {
  //   const [sidebar, setSidebar] = useState(false);
  //   const showSidebar = () => setSidebar(!sidebar);
  return (
    <IconContext.Provider value={{ color: "fff", size: "32px" }}>
      <div style={container}>
        <Link to="#">
          {/* <FaBars onClick={showSidebar} /> */}
          <FaBars />
        </Link>
        {/* <nav style={sidebar ? "sidebarMenuActive" : "sidebarMenu"}> */}
        <nav>
          <ul style={{ listStyle: "none" }}>
            {links.map((page, i) => (
              <li key={i} style={navLinkItem}>
                <Link to={page.link} style={navLinkText}>
                  &lt;/{page.title}&gt;
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Link to="#" style={icon}>
            <FaFacebook />
          </Link>
          <Link to="#" style={icon}>
            <FaInstagram />
          </Link>
          <Link to="#" style={icon}>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Sidebar;
