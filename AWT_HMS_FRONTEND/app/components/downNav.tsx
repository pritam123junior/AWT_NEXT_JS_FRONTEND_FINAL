import Link from "next/link";
import React from "react";

const DownNavBar = () => {
    return (
        <div className="flex gap-4 ">
        
            <Link href="/Contact" >Contact Us</Link>
            
            <Link href="/About">About</Link>
            <Link href="/FAQ">FAQ</Link>
            
        </div>
    );
};

export default DownNavBar;
