import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

function MyNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState('Home');
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'ContactUs', path: '/contact-us' },
        { name: 'AboutUs', path: '/about-us' },
    ];

    const handleItemClick = (name:any) => {
        setSelectedItem(name);
        setIsMenuOpen(false); // Close menu on mobile view
    };

    return (
        <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <Link to="/" onClick={() => setSelectedItem('')}>
                <NavbarContent className="pr-3" justify="center" >
                    <NavbarBrand>
                        <img src="/profile.png" alt='logo' width={24} height={24} />
                        <p className="ml-2 font-bold text-inherit">Krunal Bhadesiya</p>
                    </NavbarBrand>
                </NavbarContent>
            </Link>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.name}>
                        <Link
                            to={item.path}
                            className={selectedItem === item.name ? 'text-blue-500' : ''}
                            onClick={() => handleItemClick(item.name)}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item) => (
                    <NavbarMenuItem key={item.name}>
                        <Link
                            to={item.path}
                            className={selectedItem === item.name ? 'text-blue-500' : ''}
                            onClick={() => handleItemClick(item.name)}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default MyNavbar;
