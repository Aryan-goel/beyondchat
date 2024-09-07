import React from "react";
import { Trash2 } from "lucide-react";
import Sidebar from "./SideBar";

const members = [
    {
        name: "Shone Jogi",
        email: "shonejogi2000@gmail.com",
        roles: ["Admin"],
        avatarColor: "bg-blue-200",
    },
    {
        name: "Sai",
        email: "saiprasadpujari.stud@vivacollege.org",
        roles: ["Admin"],
        avatarColor: "bg-pink-200",
    },
    {
        name: "Siddhant Jain",
        email: "siddhantjain209@gmail.com",
        roles: ["Admin"],
        avatarColor: "bg-yellow-200",
    },
    {
        name: "Kartiki Tewari",
        email: "kartiki45tewari@gmail.com",
        roles: ["Admin"],
        avatarColor: "bg-green-200",
    },
    {
        name: "Kaushal",
        email: "kaushalnbt@gmail.com",
        roles: ["Admin", "Editor", "Sales"],
        avatarColor: "bg-red-200",
    },
    {
        name: "Adarsh Yadav",
        email: "itsadarsh33@gmail.com",
        roles: ["Admin"],
        avatarColor: "bg-purple-200",
    },
];

const TeamManagement = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 max-w-lg mx-auto bg-gray-50 min-h-screen">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-bold">Manage your Team</h1>
                    
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded mb-3 font-medium">
                    ADD NEW MEMBER
                </button>

                <div className="space-y-4">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-white p-3 rounded-lg shadow-md"
                        >
                            <div className="flex items-center space-x-3">
                                <div
                                    className={`${member.avatarColor} rounded-full w-12 h-12 flex items-center justify-center`}
                                >
                                    <span className="text-lg font-semibold">
                                        {member.name[0].toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-medium text-sm">{member.name}</p>
                                    <p className="text-xs text-gray-500">{member.email}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="flex items-center space-x-2">
                                    {member.roles.map((role, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full"
                                        >
                                            {role}
                                        </span>
                                    ))}
                                </div>
                                <button className="mt-2 text-red-500">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TeamManagement;
