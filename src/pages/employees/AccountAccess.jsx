import React from 'react';

const AccountAccess = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Enter Email Address</label>
                    <input type="email" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="Enter Email Address" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Enter phone number</label>
                    <input type="text" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="Enter phone number" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Skype ID</label>
                    <input type="text" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="Skype ID" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Slack ID</label>
                    <input type="text" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="Slack ID" />
                </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
                <button className="rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Cancel
                </button>
                <button
                    className="rounded-lg bg-[#6C5DD3] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-purple-700"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default AccountAccess;
