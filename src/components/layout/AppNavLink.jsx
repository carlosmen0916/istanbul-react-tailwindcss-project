import { useLinkClickHandler } from "react-router-dom";
import { Navbar } from "flowbite-react";
const AppNavLink = (props) => {
  const clickHandler = useLinkClickHandler(props.to);

  return (
    <span onClick={clickHandler} className="uppercase text-[#58595B]">
      <Navbar.Link href="/home">
        <p className="title">{props.text}</p>
      </Navbar.Link>
    </span>
  );
};
export default AppNavLink;
