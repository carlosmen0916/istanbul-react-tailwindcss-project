import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import "../../components/layout/headerBar.css";

const HeaderTitle = () => {
  return (
    // <Navbar id="header-bar-title">
    //   <Navbar.Brand href="">
    //     {/* <span className="self-center whitespace-nowrap text-5xl font-semibold dark:text-black h-60">
    //         ISTANBUL
    //       </span> */}
    //   </Navbar.Brand>
    //   <div className="flex md:order-2">
    //     <Dropdown arrowIcon={false} inline={true}>
    //       <Dropdown.Header>
    //         <span className="block text-sm">Bonnie Green</span>
    //         <span className="block truncate text-sm font-medium">
    //           name@flowbite.com
    //         </span>
    //       </Dropdown.Header>
    //       <Dropdown.Item>CONTACT</Dropdown.Item>
    //       <Dropdown.Item>REQUEST A QUOTE</Dropdown.Item>
    //       <Dropdown.Item>SERVICES</Dropdown.Item>
    //       <Dropdown.Divider />
    //       <Dropdown.Item>Sign out</Dropdown.Item>
    //     </Dropdown>
    //     <Navbar.Toggle />
    //   </div>
    //   <Navbar.Collapse className="header-bar-title">
    //     <Navbar.Link href="/navbars" className="text-black">
    //       <p className="text-lg text-black">CONTACT</p>
    //     </Navbar.Link>
    //     <Navbar.Link href="/navbars">
    //       <p className="text-lg text-white">REQUEST A QUOTE</p>
    //     </Navbar.Link>
    //     <Navbar.Link href="/navbars">
    //       <p className="text-lg text-black">SERVICES</p>
    //     </Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>
    <div className="h-[10vh] bg-[#5dbe79] flex items-center font-bold text-white justify-end">
      <h3 className="px-3">CONTACT</h3>
      <h3 className="px-3">REQUEST A QUOTE</h3>
      <h3 className="px-3">SEVICES</h3>
      <div className="relative mr-[18px]">
        <input
          type="search"
          className="inputIcon rounded-3xl mr-10 bg-[#5dbe79]"
          style={{
            border: "1px solid white",
          }}
        />
        <FaSearch className="absolute -translate-y-1/2 top-1/2 left-[75%] right-1" />
      </div>
    </div>
  );
};

export default HeaderTitle;
