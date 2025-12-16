import React from 'react';

const ProfessionalInformation = ({ onNext }) => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Employee ID</label>
                    <input type="text" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="Employee ID" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">User Name</label>
                    <input type="text" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="User Name" />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Select Employee Type</label>
                    <select className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none">
                        <option>Select Employee Type</option>
                        <option>Office</option>
                        <option>Remote</option>
                    </select>
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="Email Address" />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Select Department</label>
                    <select className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none">
                        <option>Select Department</option>
                        <option>Design</option>
                        <option>Development</option>
                        <option>Sales</option>
                    </select>
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Enter Designation</label>
                    <input type="text" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="Enter Designation" />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Select Working Days</label>
                    <select className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none">
                        <option>Select Working Days</option>
                        <option>5 Days</option>
                        <option>6 Days</option>
                    </select>
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Select Joining Date</label>
                    <input type="date" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" />
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Select Office Location</label>
                    <select className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none">
                        <option>Select Office Location</option>
                    </select>
                </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
                <button className="rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Cancel
                </button>
                <button
                    onClick={onNext}
                    className="rounded-lg bg-[#6C5DD3] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-purple-700"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProfessionalInformation;
