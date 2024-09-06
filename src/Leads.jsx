import React from 'react';
import { Mail, MessageCircle, Phone, FileText, Activity } from 'lucide-react';
import Sidebar from './SideBar';

const LeadCard = ({ name, location, date }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold text-black">{name}</h2>
                    <p className="text-gray-500 text-sm">{location}</p>
                </div>
                <div className="text-gray-400 text-sm">{date}</div>
            </div>
            <div className="mt-2 flex justify-around text-blue-600">
                <Mail className="w-6 h-6" />
                <MessageCircle className="w-6 h-6 text-green-500" />
                <Phone className="w-6 h-6" />
                <FileText className="w-6 h-6" />
                <Activity className="w-6 h-6" />
            </div>
        </div>
    );
};

const LeadsList = () => {
    const leads = [
        { name: 'hello', location: 'Lucknow, India', date: '8/30/24' },
        { name: 'hello', location: 'Lucknow, India', date: '8/23/24' },
        { name: 'hello', location: 'Lucknow, India', date: '8/24/24' },
        { name: 'Adarsh Yadav', location: 'Lucknow, India', date: '8/19/24' },
        { name: 'Adarsh Yadav', location: 'Lucknow, India', date: '8/20/24' },
        { name: 'Adarsh Yadav', location: 'Lucknow, India', date: '8/28/24' },
    ];

    return (
        <>
        <Sidebar/>
        <div className="bg-gray-100 p-4 min-h-screen">
            <h1 className="text-xl font-bold mb-4 text-black">Leads for you</h1>
            {leads.map((lead, index) => (
                <LeadCard key={index} name={lead.name} location={lead.location} date={lead.date} />
            ))}
        </div>
        </>
    );
};

export default LeadsList;
