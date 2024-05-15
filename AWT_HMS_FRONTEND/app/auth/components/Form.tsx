"use client";
import React from "react";

const Form = ({ children }: any) => {
    return <form className="flex flex-col gap-3">{children}</form>;
};

export default Form;
