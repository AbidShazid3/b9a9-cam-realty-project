import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch(error => {
                console.log(error.message);
            })
    }

    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-semibold' : ''}>Home</NavLink>
        <NavLink to="/updateprofile" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-semibold' : ''}>Update Profile</NavLink>
        <NavLink to="/userprofile" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-semibold' : ''}>Profile</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-semibold' : ''}>Contact Us</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-semibold' : ''}>About</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-2xl">Cam Realty</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 lg:gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <img src="" alt="" /> */}
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn btn-accent text-lg">Sign Out</button> :
                            <Link to="/login" className="btn btn-accent text-lg">Log In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;