import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

function MyNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'ContectUs', path: '/contact-us' },
        { name: 'AboutUs', path: '/about-us' },
    ];
    return (
        <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <Link to="/">
                <NavbarContent className="pr-3" justify="center" >
                    <NavbarBrand>
                        <img src="/profile.png" alt='logo' width={24} height={24} />
                        <p className="ml-2 font-bold text-inherit">Krunal Bhadesiya</p>
                    </NavbarBrand>
                </NavbarContent>
            </Link>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem >
                    <Link to="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link to="/projects">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/contact-us">
                        Contect Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/about-us">
                        About Us
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item) => (
                    <NavbarMenuItem key={item.name}>
                        <Link
                            className="w-full"
                            to={item.path}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
            {/* <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            to={"/" + item}
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu> */}
        </Navbar>
    )
}

export default MyNavbar