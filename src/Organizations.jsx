import React from 'react';
import { Menu, PlusCircle } from 'lucide-react';
import Sidebar from './SideBar';

const SwitchOrganization = () => {
    return (
        <>
            <Sidebar />
            <div className="min-h-screen bg-white p-4 flex flex-col items-center justify-start">


                <div className="mt-6 w-full text-center">
                    <h2 className="text-lg font-semibold text-gray-900">Which organization do you want to manage?</h2>
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder=""
                            className="w-full border border-gray-300 rounded-md py-2 px-4"
                        />
                    </div>
                    <div className="mt-4">
                        <button className="bg-pink-500 text-white rounded-md py-2 px-4 flex items-center justify-center">
                            <PlusCircle size={20} className="mr-2" />
                            ADD NEW ORG
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SwitchOrganization;
