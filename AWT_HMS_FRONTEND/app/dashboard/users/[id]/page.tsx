import { useRouter } from "next/navigation";
import React from "react";

const Page = ({ params }: any) => {
    const id = params.id;
    return (
        <div className="h-full justify-center items-center flex ">
            Page {id}
        </div>
    );
};

export default Page;
