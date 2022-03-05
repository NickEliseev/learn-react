import { chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Menu = chakra('ul')
const MenuItem = chakra('li', {
  baseStyle: {
    display: 'block',
    listStyle: 'none',
    marginX: '20px',
    lineHeight: '100px',
    fontSize: '14px',
    fontFamily: 'arial',
    padding: '0 20px'
  }
})

export const Header = () => {
  return (
    <nav onClick={() => console.log("her")}>
      <Menu display="flex" bg='#f1f1f1'>
        <Link to="/">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link to="/counter">
          <MenuItem>Counter</MenuItem>
        </Link>
        <Link to="/users">
          <MenuItem>Users</MenuItem>
        </Link>
        <Link to="/todo"> <MenuItem>To do</MenuItem></Link>
      </Menu>
    </nav>
  );
};
