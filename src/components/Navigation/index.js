import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import logo from "../../logo.png"
import "./style.css"
import Button from 'reactstrap/lib/Button';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand className="navigation-brand" href="/"><img src={logo} className="brand-img" height={32}></img><span className="brand-name">Saarthak Samwad</span></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <NavLink className="navigation-link">Blog</NavLink>
                    <NavLink className="">Contact</NavLink>
                    <NavLink><Button className="nav-button">JOIN CLASSES</Button></NavLink>

                </Collapse>
            </Navbar>
        </div >
    );
}

export default Navigation;
