import React, { useState } from 'react';
import { Search, Filter, Plus, Eye, Edit2, Trash2, ChevronLeft, ChevronRight, X, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllEmployees = () => {
    const navigate = useNavigate();
    const [showFilter, setShowFilter] = useState(false);

    // Mock Data
    const employees = [
        { id: '345321231', name: 'Darlene Robertson', role: 'UI/UX Designer', dept: 'Design', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=1' },
        { id: '987890345', name: 'Floyd Miles', role: 'PHP Developer', dept: 'Development', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=2' },
        { id: '453367122', name: 'Cody Fisher', role: 'Sales Manager', dept: 'Sales', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=3' },
        { id: '345321231', name: 'Dianne Russell', role: 'BDM', dept: 'Sales', type: 'Remote', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=4' },
        { id: '453677881', name: 'Savannah Nguyen', role: 'Design Lead', dept: 'Design', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=5' },
        { id: '009918765', name: 'Jacob Jones', role: 'Python Developer', dept: 'Development', type: 'Remote', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=6' },
        { id: '238870122', name: 'Marvin McKinney', role: 'Sr. UI Developer', dept: 'Development', type: 'Remote', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=7' },
        { id: '124335111', name: 'Brooklyn Simmons', role: 'Project Manager', dept: 'PM', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=8' },
        { id: '435540099', name: 'Kristin Watson', role: 'HR Executive', dept: 'HR', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=9' },
        { id: '009812890', name: 'Kathryn Murphy', role: 'React JS Developer', dept: 'Development', type: 'Office', status: 'Permanent', img: 'https://i.pravatar.cc/150?u=10' },
    ];

    return (
        <div className="p-6 font-sans text-gray-900">
            {/* Header */}
            <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div className="relative w-full md:w-96">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="block w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                </div>
                <div className="flex w-full gap-3 md:w-auto">
                    <button
                        onClick={() => navigate('/add-employee')}
                        className="flex items-center justify-center rounded-lg bg-[#6C5DD3] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-purple-700"
                    >
                        <Plus size={18} className="mr-2" />
                        Add New Employee
                    </button>
                    <button
                        onClick={() => setShowFilter(true)}
                        className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        <Filter size={18} className="mr-2" />
                        Filter
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-gray-500">
                    <thead className="bg-[#FAFAFB] text-xs font-medium uppercase text-gray-500">
                        <tr>
                            <th className="px-6 py-4">Employee Name</th>
                            <th className="px-6 py-4">Employee ID</th>
                            <th className="px-6 py-4">Department</th>
                            <th className="px-6 py-4">Designation</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {employees.map((emp) => (
                            <tr key={emp.id} className="hover:bg-gray-50">
                                <td className="flex items-center gap-3 px-6 py-4 whitespace-nowrap text-gray-900">
                                    <img className="h-8 w-8 rounded-full object-cover" src={emp.img} alt="" />
                                    <span className="font-medium">{emp.name}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{emp.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{emp.dept}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{emp.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-[#6C5DD3]">{emp.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex items-center rounded-md bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20">
                                        {emp.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex gap-2 text-gray-400">
                                        <button
                                            onClick={() => navigate(`/dashboard/employee/${emp.id}`)}
                                            className="hover:text-[#6C5DD3]"
                                        >
                                            <Eye size={18} />
                                        </button>
                                        <button className="hover:text-[#6C5DD3]"><Edit2 size={18} /></button>
                                        <button className="hover:text-red-500"><Trash2 size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex items-center justify-between border-t border-gray-200 px-6 py-3">
                    <div className="text-sm text-gray-500">Showing 10</div>
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

            {/* Filter Modal */}
            {showFilter && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900">Filter</h3>
                            <button onClick={() => setShowFilter(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="mb-4 relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                <Search size={16} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search Employee"
                                className="block w-full rounded-lg border border-gray-200 py-2 pl-9 pr-4 text-sm focus:border-purple-500 focus:outline-none"
                            />
                        </div>


                        <div className="mb-4">
                            <h4 className="mb-2 text-sm font-semibold text-gray-900">Department</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {['Design', 'HR', 'Sales', 'Business Analyst', 'Project Manager', 'Management', 'Python', 'React JS', 'Account', 'Node JS'].map((dept) => (
                                    <label key={dept} className="flex items-center gap-2 text-sm text-gray-600">
                                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#6C5DD3] focus:ring-[#6C5DD3]" />
                                        {dept}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h4 className="mb-2 text-sm font-semibold text-gray-900">Select Type</h4>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 text-sm text-gray-600">
                                    <input type="radio" name="type" className="h-4 w-4 border-gray-300 text-[#6C5DD3] focus:ring-[#6C5DD3]" />
                                    Office
                                </label>
                                <label className="flex items-center gap-2 text-sm text-gray-600">
                                    <input type="radio" name="type" className="h-4 w-4 border-gray-300 text-[#6C5DD3] focus:ring-[#6C5DD3]" />
                                    Work from Home
                                </label>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowFilter(false)}
                                className="flex-1 rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                className="flex-1 rounded-lg bg-[#6C5DD3] py-2.5 text-sm font-medium text-white shadow-sm hover:bg-purple-700"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllEmployees;
