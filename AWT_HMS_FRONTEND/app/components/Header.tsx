import React from "react";

import LogoutButton from "./LogoutButton";
import Nav from "./Nav";

const Header = () => {
    return (
        <div className="h-10 px-10 py-10 w-full flex justify-between items-center bg-blue-300 ">
            <Nav />
            <LogoutButton />
        </div>
    );
};

export default Header;
