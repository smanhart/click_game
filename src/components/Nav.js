import React from "react";
import {Navbar, NavItem} from "react-materialize";

function Nav(props) {
return(
<Navbar brand='Memory Game' right fixed={props.fixed}>
<NavItem href='components.html'>Components</NavItem>
  <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
  <NavItem href='components.html'>Components</NavItem>
</Navbar>
    );
}

export default Nav;