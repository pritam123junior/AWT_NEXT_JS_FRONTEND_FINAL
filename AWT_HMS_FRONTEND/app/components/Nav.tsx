import Link from "next/link";
import React from "react";

const Nav = () => {
    return (
        <div className="flex gap-4 ">
            <Link href="/">Home </Link>
            <Link href="/Admin/Home">Dashboard </Link>
            <Link href="/auth/signIn">Sign In </Link>
            <Link href="/auth/signUp">Sign up </Link>
            
            <Link href="/ContactUS" ></Link>
        </div>
    );
};

export default Nav;
