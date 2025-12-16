import React from 'react';
import { Bolt, Layout, Music, ShoppingBag, ArrowUpRight } from 'lucide-react';

const TrainingCard = ({ title, progress, color, icon: Icon, iconBg }) => (
    <div className={`relative mb-4 overflow-hidden rounded-3xl p-6 ${color}`}>
        <div className="flex items-start justify-between">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBg}`}>
                <Icon size={24} className="text-white" />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-gray-800">
                View all training modules <ArrowUpRight size={16} />
            </div>
        </div>

        <div className="mt-8 flex items-end justify-between">
            <h3 className="text-2xl font-medium text-black">{title}</h3>
            <span className="text-xl font-medium text-black">Completed {progress}%</span>
        </div>
    </div>
);

const TrainingModules = () => {
    return (
        <div className="min-h-screen bg-[#0057E7] px-6 py-8 font-sans">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1e293b]">
                    <div className="grid grid-cols-2 gap-1 p-2">
                        <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                        <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                        <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                        <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                    </div>
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Simon" alt="Profile" />
                </div>
            </div>

            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Welcome simon</h1>
                <p className="text-lg text-white/90">Here is your training modules</p>
            </div>

            <div className="space-y-4 pb-8">
                <TrainingCard
                    title="Training 1"
                    progress={10}
                    color="bg-[#2dd4bf]"
                    icon={Bolt}
                    iconBg="bg-teal-600/30"
                />
                <TrainingCard
                    title="Training 2"
                    progress={20}
                    color="bg-[#f9a8d4]"
                    icon={Layout}
                    iconBg="bg-pink-600/30"
                />
                <TrainingCard
                    title="Training 3"
                    progress={25}
                    color="bg-[#818cf8]"
                    icon={Music}
                    iconBg="bg-indigo-900/30"
                />
                <TrainingCard
                    title="Training 4"
                    progress={30}
                    color="bg-[#bef264]"
                    icon={ShoppingBag}
                    iconBg="bg-lime-600/30"
                />
            </div>
        </div>
    );
};

export default TrainingModules;
