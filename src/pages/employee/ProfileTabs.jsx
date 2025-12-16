import React, { useState } from 'react';
import { User, Briefcase, FileText, Lock } from 'lucide-react';

const ProfileTabs = () => {
    const [subTab, setSubTab] = useState('personal');

    return (
        <div>
            {/* Horizontal Tabs for Profile Info */}
            <div className="mb-6 flex flex-wrap gap-6 border-b border-gray-200">
                <button
                    onClick={() => setSubTab('personal')}
                    className={`flex items-center gap-2 pb-3 text-sm font-medium border-b-2 transition-colors ${subTab === 'personal'
                            ? 'border-[#6C5DD3] text-[#6C5DD3]'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <User size={18} />
                    Personal Information
                </button>
                <button
                    onClick={() => setSubTab('professional')}
                    className={`flex items-center gap-2 pb-3 text-sm font-medium border-b-2 transition-colors ${subTab === 'professional'
                            ? 'border-[#6C5DD3] text-[#6C5DD3]'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <Briefcase size={18} />
                    Professional Information
                </button>
                <button
                    onClick={() => setSubTab('documents')}
                    className={`flex items-center gap-2 pb-3 text-sm font-medium border-b-2 transition-colors ${subTab === 'documents'
                            ? 'border-[#6C5DD3] text-[#6C5DD3]'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <FileText size={18} />
                    Documents
                </button>
                <button
                    onClick={() => setSubTab('access')}
                    className={`flex items-center gap-2 pb-3 text-sm font-medium border-b-2 transition-colors ${subTab === 'access'
                            ? 'border-[#6C5DD3] text-[#6C5DD3]'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <Lock size={18} />
                    Account Access
                </button>
            </div>

            {/* Content Display (Read Only View) */}
            {subTab === 'personal' && (
                <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                    <div>
                        <label className="text-xs text-gray-400">First Name</label>
                        <p className="text-sm font-medium text-gray-900">Brooklyn</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Last Name</label>
                        <p className="text-sm font-medium text-gray-900">Simmons</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Mobile Number</label>
                        <p className="text-sm font-medium text-gray-900">(702) 555-0122</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Email Address</label>
                        <p className="text-sm font-medium text-gray-900">brooklyn.s@example.com</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Date of Birth</label>
                        <p className="text-sm font-medium text-gray-900">July 14, 1995</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Marital Status</label>
                        <p className="text-sm font-medium text-gray-900">Married</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Gender</label>
                        <p className="text-sm font-medium text-gray-900">Female</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Nationality</label>
                        <p className="text-sm font-medium text-gray-900">America</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Address</label>
                        <p className="text-sm font-medium text-gray-900">2464 Royal Ln. Mesa, New Jersey</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">City</label>
                        <p className="text-sm font-medium text-gray-900">California</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">State</label>
                        <p className="text-sm font-medium text-gray-900">United State</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Zip Code</label>
                        <p className="text-sm font-medium text-gray-900">35624</p>
                    </div>
                </div>
            )}

            {subTab === 'professional' && (
                <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                    <div>
                        <label className="text-xs text-gray-400">Employee ID</label>
                        <p className="text-sm font-medium text-gray-900">879912390</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">User Name</label>
                        <p className="text-sm font-medium text-gray-900">brooklyn_simmons</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Employee Type</label>
                        <p className="text-sm font-medium text-gray-900">Office</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Email Address</label>
                        <p className="text-sm font-medium text-gray-900">brooklyn.s@example.com</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Department</label>
                        <p className="text-sm font-medium text-gray-900">Project Manager</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Designation</label>
                        <p className="text-sm font-medium text-gray-900">Project Manager</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Working Days</label>
                        <p className="text-sm font-medium text-gray-900">5 Days</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Joining Date</label>
                        <p className="text-sm font-medium text-gray-900">July 10, 2022</p>
                    </div>
                    <div className="md:col-span-2">
                        <label className="text-xs text-gray-400">Office Location</label>
                        <p className="text-sm font-medium text-gray-900">2464 Royal Ln. Mesa, New Jersey</p>
                    </div>
                </div>
            )}

            {subTab === 'documents' && (
                <div className="space-y-4">
                    {[
                        { name: 'Appointment Letter.pdf', size: '200 KB' },
                        { name: 'Salary Slip_June.pdf', size: '150 KB' },
                        { name: 'Salary Slip_May.pdf', size: '150 KB' },
                        { name: 'Salary Slip_April.pdf', size: '150 KB' },
                        { name: 'Reliving Letter.pdf', size: '120 KB' },
                        { name: 'Experience Letter.pdf', size: '180 KB' }
                    ].map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-gray-100 p-4 hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                                <FileText className="text-gray-400" size={24} />
                                <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                            </div>
                            <div className="flex gap-4 text-gray-400">
                                <button className="hover:text-[#6C5DD3]"><span className="sr-only">View</span>👁️</button>
                                <button className="hover:text-[#6C5DD3]"><span className="sr-only">Download</span>⬇️</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {subTab === 'access' && (
                <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                    <div>
                        <label className="text-xs text-gray-400">Email Address</label>
                        <p className="text-sm font-medium text-gray-900">brooklyn.s@example.com</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Slack ID</label>
                        <p className="text-sm font-medium text-gray-900">brooklyn_simmons</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Skype ID</label>
                        <p className="text-sm font-medium text-gray-900">brooklyn_simmons</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-400">Github ID</label>
                        <p className="text-sm font-medium text-gray-900">brooklyn_simmons</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileTabs;
