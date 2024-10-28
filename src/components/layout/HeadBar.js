import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { useLinkClickHandler } from "react-router-dom";
import AppNavLink from "./AppNavLink";
import "./headerBar.css";

const HeadBar = () => {
  const clickHandler = useLinkClickHandler("/products");
  return (
    <Navbar id="headerBar">
      <Navbar.Brand href="">
        <img src="/img/logo-main.svg" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown arrowIcon={false} inline={true}>
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>HOME</Dropdown.Item>
          <Dropdown.Item>PRODUCTS</Dropdown.Item>
          <Dropdown.Item>SERVICES</Dropdown.Item>
          <Dropdown.Item>ABOUT</Dropdown.Item>
          <Dropdown.Item>MEDIA</Dropdown.Item>
          <Dropdown.Item>CONTACT</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="my-text-center">
        {/* <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link> */}
        <AppNavLink to="/home" text="Home" />
        <AppNavLink to="/products" text="Products" />
        <AppNavLink to="/services" text="Services" />
        <AppNavLink to="/about" text="About" />
        <AppNavLink to="/media" text="Media" />
        <AppNavLink to="/career" text="Career" />
        <AppNavLink to="/contact" text="Contact" />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeadBar;
