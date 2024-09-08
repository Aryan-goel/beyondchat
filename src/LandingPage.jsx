import React, { useState } from 'react';
import { Menu, Clock, Monitor, ChevronLeft, LayoutDashboard, Briefcase, Users, Settings, Globe, Edit3, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Sidebar from './SideBar';

const LandingPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [newCard, setNewCard] = useState({ title: '', description: '', link: '', type: '' });
    const [editingCardIndex, setEditingCardIndex] = useState(null);
    const [buttonText, setButtonText] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [resultsCount, setResultsCount] = useState(3);
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
            const updatedCards = cards.map((card, index) =>
                index === editingCardIndex ? { ...newCard, type: buttonText } : card
            );
            setCards(updatedCards);
            setEditingCardIndex(null);
        } else {
            setCards([...cards, { ...newCard, type: buttonText }]);
        }
        setNewCard({ title: '', description: '', link: '', type: '' });
        setButtonText('');
        toggleModal();
    };

    // Handle card deletion
    const handleDeleteCard = (index) => {
        setCards(cards.filter((_, cardIndex) => cardIndex !== index));
    };

    // Handle editing card
    const handleEditCard = (index) => {
        setEditingCardIndex(index);
        setNewCard(cards[index]);
        setButtonText(cards[index].type);
        toggleModal();
    };

    return (
        <>
            <Sidebar />
            <div className="flex flex-col h-screen bg-gray-100 text-sm overflow-hidden">
                <div className={`flex flex-col overflow-hidden `}>
                    <main className="flex flex-col overflow-hidden p-3">
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
                        <div className="flex mb-3">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full border rounded-md p-2 text-black mr-2"
                            />
                            <select
                                value={resultsCount}
                                onChange={(e) => setResultsCount(e.target.value)}
                                className="w-20 border rounded-md p-2 text-black"
                            >
                                <option value={3}>3</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                            </select>
                        </div>
                        <button
                            className="bg-blue-500 text-white  py-2 rounded-md"
                            onClick={() => { }}
                        >
                            Search
                        </button>
                    </main>
                </div>
                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h2 className="text-lg font-semibold mb-4">{editingCardIndex !== null ? 'Edit Data' : 'Add Data'}</h2>
                            <div className="flex space-x-2 mb-4">
                                <button className={`px-3 py-1 rounded-md ${buttonText === "Text" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`} onClick={() => setButtonText("Text")}>Text</button>
                                <button className={`px-3 py-1 rounded-md ${buttonText === "PDF" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`} onClick={() => setButtonText("PDF")}>PDF</button>
                                <button className={`px-3 py-1 rounded-md ${buttonText === "EPUB" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`} onClick={() => setButtonText("EPUB")}>EPUB</button>
                                <button className={`px-3 py-1 rounded-md ${buttonText === "Link" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`} onClick={() => setButtonText("Link")}>Link</button>
                                <button className={`px-3 py-1 rounded-md ${buttonText === "CSV" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`} onClick={() => setButtonText("CSV")}>CSV</button>
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
                            <p className="text-xs text-gray mb-2 text-black">{card.description}</p>
                            <div className="text-xs text-white mb-2 text-black  bg-gray-600 w-10 px-2 py-1.5 rounded-lg ">{card.type}</div>
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
            </div>
        </>
    );
};

export default LandingPage;
