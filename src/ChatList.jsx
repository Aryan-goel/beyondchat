import React from 'react';
import { Globe } from 'lucide-react';
import Sidebar from './SideBar';

const ChatList = () => {
    const chats = [
        { location: 'Kharar, IN', time: '4 days ago', browser: 'Chrome', os: 'Windows', device: 'Desktop' },
        { location: 'Sultanpur, IN', time: '6 days ago', browser: 'Chrome', os: 'Android', device: 'Mobile' },
        { location: 'hello', time: '6 days ago', browser: 'Chrome', os: 'Windows', device: 'Desktop' },
        { location: 'Delhi, IN', time: 'last week', browser: 'Chrome', os: 'Android', device: 'Mobile' },
        { location: 'Kaushal', time: 'last week', browser: 'Chrome', os: 'Windows', device: 'Desktop' },
        { location: 'hello', time: 'last week', browser: 'Chrome', os: 'Windows', device: 'Desktop' },
        { location: 'Lucknow, IN', time: 'last week', browser: 'Chrome', os: 'Windows', device: 'Desktop' },
        { location: 'Los Angeles, US', time: 'last week', browser: 'Chrome', os: 'Linux', device: 'Desktop' },
        { location: 'Adarsh Yadav', time: 'last week', browser: 'Chrome', os: 'Windows', device: 'Desktop' },
        { location: 'Siddhant Jain', time: '2 weeks ago', browser: 'Chrome', os: 'Linux', device: 'Desktop' },
    ];

    return (
        <>
            <Sidebar />
            <div className="bg-white p-4 rounded-md shadow-md w-full max-w-lg mx-auto">
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <div className="font-semibold text-blue-600 flex items-center">
                        <Globe className="mr-2" size={20} />
                        EXPLORE CHATS
                    </div>
                    <div className="text-gray-600">REMARKS</div>
                </div>
                <ul>
                    {chats.map((chat, index) => (
                        <li key={index} className="flex justify-between items-center py-2 border-b">
                            <div className="flex items-center">
                                <img
                                    src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${chat.location}`}
                                    alt={chat.location}
                                    className="w-8 h-8 mr-2"
                                />
                                <div className="text-sm">
                                    <div className="font-semibold">{chat.location}</div>
                                    <div className="text-gray-400 flex items-center text-xs">
                                        <span className="mr-1">{chat.browser}</span>
                                        <span className="mr-1">{chat.os}</span>
                                        <span>{chat.device}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-500 text-xs">{chat.time}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ChatList;
