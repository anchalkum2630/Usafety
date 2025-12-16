import React from 'react';
import { Search, Plus, Filter, Eye, Edit2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const DepartmentDetails = () => {
    // Mock Data mimicking the image content
    const employees = [
        { id: '345321231', name: 'Darlene Robertson', role: 'Lead UI/UX Designer', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=40' },
        { id: '987890345', name: 'Floyd Miles', role: 'Lead UI/UX Designer', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=41' },
        { id: '453367122', name: 'Cody Fisher', role: 'Sr. UI/UX Designer', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=42' },
        { id: '345321231', name: 'Dianne Russell', role: 'Sr. UI/UX Designer', type: 'Remote', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=43' },
        { id: '453677881', name: 'Savannah Nguyen', role: 'Sr. UI/UX Designer', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=44' },
        { id: '009918765', name: 'Jacob Jones', role: 'UX Designer', type: 'Remote', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=45' },
        { id: '238870122', name: 'Marvin McKinney', role: 'UX Designer', type: 'Remote', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=46' },
        { id: '124335111', name: 'Brooklyn Simmons', role: 'UI/UX Designer', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=47' },
        { id: '435540099', name: 'Kristin Watson', role: 'UI/UX Designer', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=48' },
        { id: '009812890', name: 'Kathryn Murphy', role: 'UI/UX Designer', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=49' },
        { id: '671190345', name: 'Arlene McCoy', role: 'UI/UX Designer', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=50' },
        { id: '091233412', name: 'Devon Lane', role: 'UI/UX Designer', type: 'Remote', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=51' },
    ];

    return (
        <div className="font-sans text-gray-900">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Design Department</h2>
                    <p className="text-sm text-gray-500">All Departments &gt; Design Department</p>
                </div>
            </div>

            <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div className="relative w-full md:w-96">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="block w-full rounded-lg border border-gray-100 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-purple-500 focus:outline-none"
                    />
                </div>
                <div className="flex w-full gap-3 md:w-auto">
                    <button className="flex items-center justify-center rounded-lg bg-[#6C5DD3] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-purple-700">
                        <Plus size={18} className="mr-2" />
                        Add New Employee
                    </button>
                    <button className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <Filter size={18} className="mr-2" />
                        Filter
                    </button>
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-gray-500">
                    <thead className="bg-[#FAFAFB] text-xs font-medium uppercase text-gray-500">
                        <tr>
                            <th className="px-6 py-4">Employee ID</th>
                            <th className="px-6 py-4">Employee Name</th>
                            <th className="px-6 py-4">Designation</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {employees.map((emp) => (
                            <tr key={emp.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">{emp.id}</td>
                                <td className="flex items-center gap-3 px-6 py-4 whitespace-nowrap text-gray-900">
                                    <img className="h-8 w-8 rounded-full object-cover" src={emp.img} alt="" />
                                    <span className="font-medium">{emp.name}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{emp.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-[#6C5DD3]">{emp.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex items-center rounded-md bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20">
                                        {emp.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex gap-2 text-gray-400">
                                        <button className="hover:text-[#6C5DD3]"><Eye size={18} /></button>
                                        <button className="hover:text-[#6C5DD3]"><Edit2 size={18} /></button>
                                        <button className="hover:text-red-500"><Trash2 size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex items-center justify-between border-t border-gray-200 px-6 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Showing</span>
                        <select className="rounded border-gray-300 py-1 text-xs">
                            <option>10</option>
                            <option>20</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Showing 1 to 10 out of 60 records</span>
                        <div className="flex items-center gap-1">
                            <button className="p-1 hover:text-gray-700"><ChevronLeft size={16} /></button>
                            <button className="rounded bg-[#6C5DD3] px-2 py-0.5 text-white">1</button>
                            <button className="px-2 py-0.5 hover:text-gray-900">2</button>
                            <button className="px-2 py-0.5 hover:text-gray-900">3</button>
                            <button className="px-2 py-0.5 hover:text-gray-900">4</button>
                            <button className="p-1 hover:text-gray-700"><ChevronRight size={16} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentDetails;
