import React, { useState } from 'react';
import { User, Briefcase, FileText, Lock } from 'lucide-react';

// Tabs
import PersonalInformation from './employees/PersonalInformation';
import ProfessionalInformation from './employees/ProfessionalInformation';
import Documents from './employees/Documents';
import AccountAccess from './employees/AccountAccess';

const AddEmployee = () => {
    const [activeTab, setActiveTab] = useState('personal');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'personal':
                return <PersonalInformation onNext={() => setActiveTab('professional')} />;
            case 'professional':
                return <ProfessionalInformation onNext={() => setActiveTab('documents')} />;
            case 'documents':
                return <Documents onNext={() => setActiveTab('access')} />;
            case 'access':
                return <AccountAccess />;
            default:
                return <PersonalInformation />;
        }
    };

    return (
        <div className="p-6 font-sans text-gray-900">
            <h1 className="mb-6 text-xl font-bold text-gray-900">Add New Employee</h1>

            {/* Tab Navigation */}
            <div className="mb-6 flex gap-8 border-b border-gray-200">
                <button
                    onClick={() => setActiveTab('personal')}
                    className={`flex items-center gap-2 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'personal'
                            ? 'border-[#6C5DD3] text-[#6C5DD3]'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <User size={18} />
                    Personal Information
                </button>
                <button
                    onClick={() => setActiveTab('professional')}
                    className={`flex items-center gap-2 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'professional'
                            ? 'border-[#6C5DD3] text-[#6C5DD3]'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <Briefcase size={18} />
                    Professional Information
                </button>
                <button
                    onClick={() => setActiveTab('documents')}
                    className={`flex items-center gap-2 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'documents'
                            ? 'border-[#6C5DD3] text-[#6C5DD3]'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <FileText size={18} />
                    Documents
                </button>
                <button
                    onClick={() => setActiveTab('access')}
                    className={`flex items-center gap-2 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'access'
                            ? 'border-[#6C5DD3] text-[#6C5DD3]'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <Lock size={18} />
                    Account Access
                </button>
            </div>

            {/* Tab Content */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default AddEmployee;
