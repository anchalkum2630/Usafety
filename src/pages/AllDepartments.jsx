import React from 'react';
import { Search, Bell, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DepartmentCard = ({ name, membersCount, members, onNavigate }) => (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
            <div>
                <h3 className="text-lg font-bold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500">{membersCount} Members</p>
            </div>
            <button
                onClick={onNavigate}
                className="text-sm font-medium text-[#6C5DD3] hover:text-purple-700"
            >
                View All
            </button>
        </div>
        <div className="space-y-4">
            {members.map((member, idx) => (
                <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src={member.img}
                            alt={member.name}
                            className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-sm font-bold text-gray-900">{member.name}</p>
                            <p className="text-xs text-gray-400">{member.role}</p>
                        </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-300" />
                </div>
            ))}
        </div>
    </div>
);

const AllDepartments = () => {
    const navigate = useNavigate();

    const departments = [
        {
            name: 'Design Department',
            membersCount: 20,
            members: [
                { name: 'Dianne Russell', role: 'Lead UI/UX Designer', img: 'https://i.pravatar.cc/150?u=12' },
                { name: 'Arlene McCoy', role: 'Sr. UI/UX Designer', img: 'https://i.pravatar.cc/150?u=13' },
                { name: 'Cody Fisher', role: 'Sr. UI/UX Designer', img: 'https://i.pravatar.cc/150?u=14' },
                { name: 'Theresa Webb', role: 'UI/UX Designer', img: 'https://i.pravatar.cc/150?u=15' },
                { name: 'Ronald Richards', role: 'UI/UX Designer', img: 'https://i.pravatar.cc/150?u=16' },
            ]
        },
        {
            name: 'Sales Department',
            membersCount: 14,
            members: [
                { name: 'Darrell Steward', role: 'Sr. Sales Manager', img: 'https://i.pravatar.cc/150?u=17' },
                { name: 'Kristin Watson', role: 'Sr. Sales Manager', img: 'https://i.pravatar.cc/150?u=18' },
                { name: 'Courtney Henry', role: 'BDM', img: 'https://i.pravatar.cc/150?u=19' },
                { name: 'Kathryn Murphy', role: 'BDE', img: 'https://i.pravatar.cc/150?u=20' },
                { name: 'Albert Flores', role: 'Sales', img: 'https://i.pravatar.cc/150?u=21' },
            ]
        },
        {
            name: 'Project Manager Department',
            membersCount: 18,
            members: [
                { name: 'Leslie Alexander', role: 'Sr. Project Manager', img: 'https://i.pravatar.cc/150?u=22' },
                { name: 'Ronald Richards', role: 'Sr. Project Manager', img: 'https://i.pravatar.cc/150?u=23' },
                { name: 'Savannah Nguyen', role: 'Project Manager', img: 'https://i.pravatar.cc/150?u=24' },
                { name: 'Eleanor Pena', role: 'Project Manager', img: 'https://i.pravatar.cc/150?u=25' },
                { name: 'Esther Howard', role: 'Project Manager', img: 'https://i.pravatar.cc/150?u=26' },
            ]
        },
        {
            name: 'Marketing Department',
            membersCount: 10,
            members: [
                { name: 'Wade Warren', role: 'Sr. Marketing Manager', img: 'https://i.pravatar.cc/150?u=30' },
                { name: 'Brooklyn Simmons', role: 'Sr. Marketing Manager', img: 'https://i.pravatar.cc/150?u=31' },
                { name: 'Kristin Watson', role: 'Marketing Coordinator', img: 'https://i.pravatar.cc/150?u=32' },
                { name: 'Jacob Jones', role: 'Marketing Coordinator', img: 'https://i.pravatar.cc/150?u=33' },
                { name: 'Cody Fisher', role: 'Marketing', img: 'https://i.pravatar.cc/150?u=34' },
            ]
        }
    ];

    return (
        <div className="font-sans text-gray-900">
            {/* Header */}
            <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">All Departments</h2>
                    <p className="text-sm text-gray-500">All Departments Information</p>
                </div>
                {/* Search Bar matching design */}
                <div className="relative w-full md:w-96">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="block w-full rounded-lg border border-gray-100 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                </div>
            </div>

            <div className="mb-8">
                <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="block w-full rounded-xl border border-gray-100 bg-white py-4 pl-12 pr-4 text-sm shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {departments.map((dept, idx) => (
                    <DepartmentCard
                        key={idx}
                        {...dept}
                        onNavigate={() => navigate('/dashboard/department-details')}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllDepartments;
