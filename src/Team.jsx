import React from "react";
import { Trash2 } from "lucide-react";

const members = [
    {
        name: "Shone Jogi",
        email: "shonejogi2000@gmail.com",
        roles: ["Admin"],
    },
    {
        name: "Sai",
        email: "saiprasadpujari.stud@vivacollege.org",
        roles: ["Admin"],
    },
    {
        name: "Siddhant Jain",
        email: "siddhantjain209@gmail.com",
        roles: ["Admin"],
    },
    {
        name: "Kartiki Tewari",
        email: "kartiki45tewari@gmail.com",
        roles: ["Admin"],
    },
    {
        name: "Kaushal",
        email: "kaushalnbt@gmail.com",
        roles: ["Admin", "Editor", "Sales"],
    },
    {
        name: "Adarsh Yadav",
        email: "itsadarsh33@gmail.com",
        roles: ["Admin"],
    },
];

const TeamManagement = () => {
    return (
        <div className="p-4 max-w-md mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold">Manage your Team</h1>
                <select className="bg-gray-100 text-sm p-1 rounded">
                    <option value="org1">SELECT ORG</option>
                    {/* Add more options as needed */}
                </select>
            </div>

            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
                ADD NEW MEMBER
            </button>

            <div className="mt-4">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-white p-3 rounded shadow mb-2"
                    >
                        <div className="flex items-center">
                            <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
                                {/* Avatar Icon - You can use a real avatar image here */}
                                <span className="text-xl">{member.name[0]}</span>
                            </div>
                            <div className="ml-3">
                                <p className="font-bold">{member.name}</p>
                                <p className="text-sm text-gray-500">{member.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            {member.roles.map((role, idx) => (
                                <span
                                    key={idx}
                                    className="bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded-full"
                                >
                                    {role}
                                </span>
                            ))}
                            <button className="text-red-500">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamManagement;
