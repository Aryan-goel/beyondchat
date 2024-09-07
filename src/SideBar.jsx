import React, { useState } from 'react';
import { Menu, ChevronLeft, LayoutDashboard, Briefcase, Users, Settings, Globe, Monitor } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Function to determine if the current path matches the link's path
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="p-4 space-y-4 relative">
                    {/* Close Arrow */}
                    <button onClick={toggleSidebar} className="absolute top-2 right-2">
                        <ChevronLeft className="text-gray-600" size={24} />
                    </button>

                    {/* Menu Items */}
                    <div className="space-y-2 mt-8">
                        <Link to="/explore" className={`flex items-center p-2 rounded-md ${isActive('/explore') ? 'text-blue-500 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}>
                            <Globe className="mr-2" size={18} />
                            Explore Chats
                        </Link>
                        <Link to="/org" className={`flex items-center p-2 rounded-md ${isActive('/org') ? 'text-blue-500 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}>
                            <LayoutDashboard className="mr-2" size={18} />
                            Switch Organization
                        </Link>
                        <Link to="/leads" className={`flex items-center p-2 rounded-md ${isActive('/leads') ? 'text-blue-500 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}>
                            <Briefcase className="mr-2" size={18} />
                            Business Leads
                        </Link>
                        <Link to="/" className={`flex items-center p-2 rounded-md ${isActive('/') ? 'text-blue-500 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}>
                            <Monitor className="mr-2" size={18} />
                            View Mind Map
                        </Link>
                        <Link to="/team" className={`flex items-center p-2 rounded-md ${isActive('/team') ? 'text-blue-500 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}>
                            <Users className="mr-2" size={18} />
                            Manage Team
                        </Link>
                        <a href="#" className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md">
                            <Settings className="mr-2" size={18} />
                            Configure Chatbot
                        </a>
                    </div>
                </div>
            </div>

            {/* Page Content */}
            <div className={`flex-1 flex flex-col overflow-hidden ${isSidebarOpen ? 'ml-64' : ''}`}>
                <header className="bg-white p-3 flex justify-between items-center border-b">
                    <Menu className="text-gray-600 cursor-pointer" size={20} onClick={toggleSidebar} />
                    <h1 className="text-lg font-semibold">Chatbot Mind Map</h1>
                    <div className="text-blue-500 text-xs">SELECT ORG ▼</div>
                </header>
            </div>
        </>
    );
};

export default Sidebar;
