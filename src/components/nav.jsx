import { Link, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

const Nav = () => {
    const isAuthenticated = localStorage.getItem("usersignup");

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/register");
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar fluid rounded>
                <NavbarBrand>
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </NavbarBrand>
                <NavbarToggle />

                <NavbarCollapse>
                    {
                        isAuthenticated ? <>
                            <NavbarLink as={Link} to="/">Products</NavbarLink>
                            <NavbarLink as={Link} to="/addproduct">Add Product</NavbarLink>
                            <NavbarLink as={Link} onClick={logout} to="/register">Logout ({JSON.parse(isAuthenticated).name})</NavbarLink>
                        </> :
                         <>
                            <NavbarLink as={Link} to="/register">Signup</NavbarLink>
                            <NavbarLink as={Link} to="/login">Login</NavbarLink>
                        </>
                    }
                </NavbarCollapse>
            </Navbar>

        </div>
    )
}

export default Nav