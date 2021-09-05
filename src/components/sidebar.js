import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useState } from "react";
import { FaFacebook } from "@react-icons/all-files/fa/FaFaceBook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { IconContext } from "@react-icons/all-files/lib";

// style
const Container = styled.div`
  /* position: fixed; */
  /* right: 0px; */
  /* height: 100vh; */
  /* padding: 48px 64px 42px 0px; */

  button {
    /* margin-left: auto; */
  }
`;

const MenuIcon = styled.button`
  position: fixed;
  top: 48px;
  right: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 48px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 28px;
    height: 3px;
    background: white;
    transform-origin: 30px;
    position: relative;

    :first-child {
      transform: ${({ sidebar }) => (sidebar ? "rotate(-45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ sidebar }) => (sidebar ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ sidebar }) => (sidebar ? "rotate(45deg)" : "rotate(0)")};
    }
  }
`;

const SidebarLinks = styled.nav`
  position: fixed;
  text-align: right;
  background: #00babc80;
  top: 0rem;
  height: 100vh;
  padding: 120px 48px 0px 0px;
  transition: transform 300ms;
  transform: ${({ sidebar }) =>
    sidebar ? "translateX(0)" : "translateX(100%)"};
  ul {
    list-style: none;
    margin-top: 0;
  }
  li {
    padding: 16px 0px;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    transition: color 100ms;

    :hover {
      color: black;
    }
  }
`;

const Socials = styled.div`
  a {
    margin-left: 8px;
  }
`;

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
  const [sidebar, showSidebar] = useState(false);
  return (
    <IconContext.Provider value={{ color: "fff", size: "32px" }}>
      <Container>
        <MenuIcon sidebar={sidebar} onClick={() => showSidebar(!sidebar)}>
          <div />
          <div />
          <div />
        </MenuIcon>
        <SidebarLinks sidebar={sidebar}>
          <ul>
            {links.map((page, i) => (
              <li key={i}>
                <Link to={page.link}>&lt;/{page.title}&gt;</Link>
              </li>
            ))}
          </ul>
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
        </SidebarLinks>
      </Container>
    </IconContext.Provider>
  );
};

export default Sidebar;
