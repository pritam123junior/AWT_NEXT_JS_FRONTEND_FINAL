"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LoginChecker = () => {
    const route = useRouter();
    useEffect(() => {
        const access_token = localStorage.getItem("access_token");
        if (!access_token) {
            route.push("/auth/signIn");
        }
    }, []);
    return <></>;
};

export default LoginChecker;
