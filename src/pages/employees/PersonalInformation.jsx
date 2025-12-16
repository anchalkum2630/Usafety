import React from 'react';
import { Camera } from 'lucide-react';

const PersonalInformation = ({ onNext }) => {
    return (
        <div>
            {/* Profile Image Placeholders */}
            <div className="mb-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gray-50 border border-dashed border-gray-300">
                    <Camera className="text-gray-400" />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="First Name" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="Last Name" />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Mobile Number</label>
                    <input type="text" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="Mobile Number" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="Email Address" />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input type="date" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Marital Status</label>
                    <select className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none">
                        <option>Select Status</option>
                        <option>Single</option>
                        <option>Married</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Gender</label>
                    <select className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none">
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Nationality</label>
                    <select className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none">
                        <option>Select Nationality</option>
                        <option>America</option>
                        <option>India</option>
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Address</label>
                    <input type="text" className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none" placeholder="Address" />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">City</label>
                    <select className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none">
                        <option>Select City</option>
                    </select>
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">State</label>
                    <select className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none">
                        <option>Select State</option>
                    </select>
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">ZIP Code</label>
                    <select className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none">
                        <option>Select ZIP Code</option>
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

export default PersonalInformation;
