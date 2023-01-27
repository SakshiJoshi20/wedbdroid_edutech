import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav>
      <ul
        style={{
          width: "auto",
          height: "auto",
          display: "flex",
          flexDirection: "row",
          listStyleType: "none",
          gap: "3rem"
        }}
      >
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
