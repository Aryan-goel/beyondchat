import React, { useState } from 'react';
import { Menu, Search, Clock, Monitor, ChevronLeft } from 'lucide-react';

const LandingPage = () => {
    const [searchResults, setSearchResults] = useState(3);
    const [isSidebarOpen, setSidebarOpen] = useState(false); // State for sidebar

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen); // Toggle sidebar open/close
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 text-sm overflow-hidden">
            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="p-4 space-y-4 relative">
                    {/* Close Arrow */}
                    <button onClick={toggleSidebar} className="absolute top-2 right-2">
                        <ChevronLeft className="text-gray-600" size={24} />
                    </button>

                    <div className="space-y-2 mt-8"> {/* Move down to make space for arrow */}
                        <a href="#" className="block text-gray-700">Explore Chats</a>
                        <a href="#" className="block text-gray-700">Switch Organization</a>
                        <a href="#" className="block text-gray-700">Business Leads</a>
                        <a href="#" className="block text-blue-500">View Mind Map</a>
                        <a href="#" className="block text-gray-700">Manage Team</a>
                        <a href="#" className="block text-gray-700">Configure Chatbot</a>
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

                <main className="flex-1 flex flex-col overflow-hidden p-3">
                    <div className="flex-none space-y-2 mb-3">
                        <button className="w-full bg-blue-500 text-white px-3 py-2 rounded-md text-sm">
                            + ADD DATA
                        </button>
                        <button className="w-full bg-pink-500 text-white px-3 py-2 rounded-md text-sm flex items-center justify-center">
                            <Clock className="mr-2" size={16} />
                            DATA TRAINING STATUS
                        </button>
                        <button className="w-full bg-white border border-pink-500 text-pink-500 px-3 py-2 rounded-md text-sm flex items-center justify-center">
                            <Monitor className="mr-2" size={16} />
                            GROUND TRUTHS
                        </button>
                    </div>

                    <div className="flex-none bg-white rounded-md p-3 mb-3">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full border rounded-md p-2 mb-2 text-sm bg-white"
                        />
                        <div className="flex items-center">
                            <span className="mr-2 text-xs">Results</span>
                            <select
                                value={searchResults}
                                onChange={(e) => setSearchResults(Number(e.target.value))}
                                className="border bg-white rounded-md p-1 mr-2 text-xs text-black"
                            >
                                {[...Array(9)].map((_, index) => (
                                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                                ))}
                            </select>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs">
                                SEARCH
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {[
                            "Do you work on WhatsApp? Yes, we do offer our services on WhatsApp!",
                            "I want to test your chatbot. That's great to hear! You can continue chatting with me to test.",
                            "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will.",
                            "What is the cost of IVF? I can't provide specific information on IVF costs, but I can tell you."
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-md p-3 mb-3">
                                <p className="mb-2 text-sm">{item}</p>
                                <div className="text-xs text-gray-500 mb-2">TEXT</div>
                                <div className="flex justify-between items-center text-xs">
                                    <a href="#" className="text-gray-600 underline">View Source</a>
                                    <div className="text-gray-400">
                                        {1722643200 - index * 11059200} days ago
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LandingPage;
