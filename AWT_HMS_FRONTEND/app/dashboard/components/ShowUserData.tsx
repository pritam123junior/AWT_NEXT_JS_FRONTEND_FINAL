import React from "react";

const ShowUserData = ({ data }: { data: any }) => {
    if (!data || !data.name) return null;
    return (
        <div className="flex text-lg flex-col gap-2">
            <span>id: {data.ID}</span>
            <span>fullname: {data.fullName}</span>
            <span>qualification: {data.Qualification}</span>
            <span>salary: {data.salary }</span>
            <span>Email: {data.Email }</span>
            <span>PhoneNumber: {data.PhoneNumber }</span>
            <span>Schedule: {data.Schedule}</span>
           
        </div>
    );
};

export default ShowUserData;
