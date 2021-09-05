import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useState } from "react";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaFacebook } from "@react-icons/all-files/fa/FaFaceBook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { IconContext } from "@react-icons/all-files/lib";
// import * as AiIcons from "react-icons/ai";

// style
const Container = styled.div`
  position: fixed;
  right: 0px;
  background: #00babc;
  height: 100vh;
  padding: 48px 64px 42px 0px;
  text-align: right;
`;

const SidebarLinks = styled.nav`
  ul {
    list-style: none;
  }
  li {
    margin: 32px 0px;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    transition: color 100ms;

    :hover {
      color: pink;
    }
  }
`;

const Socials = styled.div`
  a {
    margin-left: 8px;
  }
`;

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
      <Container>
        <Link to="#">
          {/* <FaBars onClick={showSidebar} /> */}
          <FaBars />
        </Link>
        {/* <nav style={sidebar ? "sidebarMenuActive" : "sidebarMenu"}> */}
        <SidebarLinks>
          <ul>
            {links.map((page, i) => (
              <li key={i}>
                <Link to={page.link}>&lt;/{page.title}&gt;</Link>
              </li>
            ))}
          </ul>
        </SidebarLinks>
        <Socials>
          <Link to="#">
            <FaFacebook />
          </Link>
          <Link to="#">
            <FaInstagram />
          </Link>
          <Link to="#">
            <FaTwitter />
          </Link>
        </Socials>
      </Container>
    </IconContext.Provider>
  );
};

export default Sidebar;
