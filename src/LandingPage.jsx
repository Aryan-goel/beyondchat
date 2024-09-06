import React, { useState } from 'react';
import { Menu, Clock, Monitor, ChevronLeft, LayoutDashboard, Briefcase, Users, Settings, Globe, Edit3, Trash2 } from 'lucide-react';

const LandingPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // State for sidebar
    const [isModalOpen, setModalOpen] = useState(false); // State for modal
    const [cards, setCards] = useState([]); // State to store cards data
    const [newCard, setNewCard] = useState({ title: '', description: '', link: '' }); // State for new card inputs
    const [editingCardIndex, setEditingCardIndex] = useState(null); // State to track if editing

    // Toggle sidebar open/close
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Toggle modal open/close
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    // Handle change for modal inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCard((prevCard) => ({ ...prevCard, [name]: value }));
    };

    // Handle saving or editing card
    const handleSaveCard = () => {
        if (editingCardIndex !== null) {
            // Update existing card
            const updatedCards = cards.map((card, index) =>
                index === editingCardIndex ? newCard : card
            );
            setCards(updatedCards);
            setEditingCardIndex(null); // Reset editing index
        } else {
            // Add new card
            setCards([...cards, newCard]);
        }
        // Reset the modal inputs
        setNewCard({ title: '', description: '', link: '' });
        // Close the modal
        toggleModal();
    };

    // Handle card deletion
    const handleDeleteCard = (index) => {
        setCards(cards.filter((_, cardIndex) => cardIndex !== index));
    };

    // Handle editing card
    const handleEditCard = (index) => {
        setEditingCardIndex(index);
        setNewCard(cards[index]); // Pre-fill modal with card data
        toggleModal();
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

                    {/* Menu Items */}
                    <div className="space-y-2 mt-8">
                        <a href="#" className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md">
                            <Globe className="mr-2" size={18} />
                            Explore Chats
                        </a>
                        <a href="#" className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md">
                            <LayoutDashboard className="mr-2" size={18} />
                            Switch Organization
                        </a>
                        <a href="#" className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md">
                            <Briefcase className="mr-2" size={18} />
                            Business Leads
                        </a>
                        <a href="#" className="flex items-center text-blue-500 hover:bg-blue-50 p-2 rounded-md">
                            <Monitor className="mr-2" size={18} />
                            View Mind Map
                        </a>
                        <a href="#" className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md">
                            <Users className="mr-2" size={18} />
                            Manage Team
                        </a>
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

                <main className="flex-1 flex flex-col overflow-hidden p-3">
                    <div className="flex-none space-y-2 mb-3">
                        <button className="w-full bg-blue-500 text-white px-3 py-2 rounded-md text-sm" onClick={() => { setEditingCardIndex(null); toggleModal(); }}>
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

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                                <h2 className="text-lg font-semibold mb-4">{editingCardIndex !== null ? 'Edit Data' : 'Add Data'}</h2>
                                <div className="flex space-x-2 mb-4">
                                    <button className="px-3 py-1 bg-blue-500 text-white rounded-md">Text</button>
                                    <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md">PDF</button>
                                    <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md">EPUB</button>
                                    <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md">Link</button>
                                    <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md">CSV</button>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    name="title"
                                    value={newCard.title}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md p-2 mb-2 text-black"
                                />
                                <textarea
                                    placeholder="Description"
                                    name="description"
                                    value={newCard.description}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md p-2 mb-2 text-black"
                                    rows={3}
                                />
                                <input
                                    type="text"
                                    placeholder="Read More/Source Link"
                                    name="link"
                                    value={newCard.link}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md p-2 mb-2 text-black"
                                />
                                <div className="flex justify-end space-x-2">
                                    <button
                                        className="px-4 py-2 bg-gray-200 rounded-md"
                                        onClick={toggleModal}
                                    >
                                        Cancel
                                    </button>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleSaveCard}>
                                        {editingCardIndex !== null ? 'Update' : 'Save'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex-1 overflow-y-auto">
                        {cards.map((card, index) => (
                            <div key={index} className="bg-white rounded-md p-3 mb-3 relative">
                                <p className="mb-2 text-sm font-semibold text-black">{card.title}</p>
                                <div className="text-xs text-gray-500 mb-2 text-black">{card.description}</div>
                                <div className="flex justify-between items-center text-xs">
                                    <a href={card.link} className="text-gray-600 underline">View Source</a>
                                </div>
                                <div className="absolute bottom-2 right-2 space-x-2">
                                    <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEditCard(index)}>
                                        <Edit3 size={26} />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteCard(index)}>
                                        <Trash2 size={26} />
                                    </button>
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
