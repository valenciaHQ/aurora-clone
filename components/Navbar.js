import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import navbarData from "../utils/navbarData";
import { NavItem, NavSubitem } from "./Navitem";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toogleMenu = () => setMobileMenu(!mobileMenu)
    return (
        <nav className="sticky top-0 lg:z-999 lg:backdrop-blur-lg lg:bg-slate-900/30">
            <div className="flex h-16 items-center text-md font-normal justify-between px-6 lg:justify-around">
                <Image
                    src="/logo/mainLogo.svg"
                    height={50}
                    width={150}
                    alt="mainLogo"
                    priority
                />
                <button data-collapse-toggle="navbar-default" type="button" onClick={toogleMenu} class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div id="navbar-default" className={`${!mobileMenu && "hidden"} rounded-lg items-center backdrop-blur-lg bg-jade/30 w-11/12 absolute top-1/4 p-2 lg:static lg:bg-transparent lg:backdrop-blur-none lg:flex`}>
                    <div className="lg:hidden flex justify-end" onClick={() => setMobileMenu(false)}><MdClose /></div>
                    <NavItem menuLabel="About">
                        {navbarData.about.map(item => <NavSubitem Component={item.Component} submenuTitle={item.label} submenuSubtitle={item.sublabel} />)}
                    </NavItem>
                    <NavItem menuLabel="Ecosystem">
                        {navbarData.ecosystem.map(item => <NavSubitem Component={item.Component} submenuTitle={item.label} submenuSubtitle={item.sublabel} />)}
                    </NavItem>
                    <NavItem menuLabel="Community">
                        {navbarData.community.map(item => <NavSubitem Component={item.Component} submenuTitle={item.label} submenuSubtitle={item.sublabel} />)}
                    </NavItem>
                    <NavItem menuLabel="Developers">
                        {navbarData.developers.map(item => <NavSubitem Component={item.Component} submenuTitle={item.label} submenuSubtitle={item.sublabel} />)}
                    </NavItem>
                    <NavItem menuLabel="Support">
                        {navbarData.support.map(item => <NavSubitem Component={item.Component} submenuTitle={item.label} submenuSubtitle={item.sublabel} />)}
                    </NavItem>
                    <NavItem menuLabel="Blog" />
                    <button className="bg-white text-black lg:min-h-10 lg:mt-0 rounded-lg w-full lg:w-auto mt-8 lg:p-2 lg:ml-auto">
                        Get started
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default React.memo(Navbar);
