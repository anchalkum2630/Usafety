import React, { useState } from 'react';
import { User, Calendar, FileText, Clipboard, Edit, Mail, Phone } from 'lucide-react';

// Sub-components for content
import ProfileInfo from './employee/ProfileTabs';
import AttendanceHistory from './employee/AttendanceHistory';
import ProjectHistory from './employee/ProjectHistory';
import LeaveHistory from './employee/LeaveHistory';

const EmployeeProfile = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'profile': return <ProfileInfo />;
            case 'attendance': return <AttendanceHistory />;
            case 'projects': return <ProjectHistory />;
            case 'leave': return <LeaveHistory />;
            default: return <ProfileInfo />;
        }
    };

    return (
        <div className="font-sans text-gray-900">
            {/* Header */}
            <div className="mb-8 rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                            alt="Profile"
                            className="h-20 w-20 rounded-xl object-cover"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Brooklyn Simmons</h1>
                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                    <Clipboard size={16} />
                                    Project Manager
                                </span>
                                <span className="flex items-center gap-1">
                                    <Mail size={16} />
                                    brooklyn.s@example.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 rounded-lg bg-[#6C5DD3] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-purple-700">
                        <Edit size={16} />
                        Edit Profile
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                {/* Local Sidebar */}
                <div className="lg:col-span-1">
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                        <div className="p-4 space-y-2">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'profile'
                                    ? 'bg-[#6C5DD3] text-white'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <User size={20} />
                                Profile
                            </button>
                            <button
                                onClick={() => setActiveTab('attendance')}
                                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'attendance'
                                    ? 'bg-[#6C5DD3] text-white'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <Calendar size={20} />
                                Attendance
                            </button>
                            <button
                                onClick={() => setActiveTab('projects')}
                                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'projects'
                                    ? 'bg-[#6C5DD3] text-white'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <FileText size={20} />
                                Projects
                            </button>
                            <button
                                onClick={() => setActiveTab('leave')}
                                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'leave'
                                    ? 'bg-[#6C5DD3] text-white'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <Clipboard size={20} />
                                Leave
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3">
                    <div className="rounded-xl border border-gray-200 bg-white p-6">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeProfile;
