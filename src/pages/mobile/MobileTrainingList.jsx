import React from 'react';
import { ArrowLeft, Clock, Bookmark, ArrowUpRight, Filter, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, progress, time, image, onClick }) => (
    <div className="relative mb-4 overflow-hidden rounded-2xl bg-gray-900 text-white shadow-lg">
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="relative p-4 h-64 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs">
                    Saved Module
                </div>
                <button className="bg-black/40 backdrop-blur-sm p-2 rounded-full">
                    <Bookmark size={16} />
                </button>
            </div>

            <div className="space-y-2">
                <h3 className="text-xl font-bold">{title}</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-200">
                        <span>{progress}% completed</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {time}</span>
                    </div>
                </div>

                <div className="flex justify-end mt-2">
                    <button
                        onClick={onClick}
                        className="flex items-center gap-1 rounded-full bg-[#bef264] px-4 py-2 text-xs font-bold text-black"
                    >
                        Resume <ArrowUpRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const MobileTrainingList = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0057E7] text-white font-sans">
            {/* Header */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <ArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} />
                        <span className="text-xl font-medium">Training 1</span>
                    </div>
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                        alt="Profile"
                        className="h-8 w-8 rounded-full border border-white"
                    />
                </div>

                {/* Filters */}
                <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-6">
                    <button className="flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm backdrop-blur-md">
                        <Filter size={14} /> Filter
                    </button>
                    <button className="flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm backdrop-blur-md">
                        <Clock size={14} /> Duration
                    </button>
                    <button className="flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm backdrop-blur-md">
                        <Users size={14} /> Saved
                    </button>
                    <button className="flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm backdrop-blur-md">
                        <Bookmark size={14} /> Bookmarked
                    </button>
                </div>

                {/* List */}
                <div className="space-y-4">
                    <CourseCard
                        title="Electrical Safety"
                        progress={50}
                        time="15 mins"
                        image="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        onClick={() => navigate('/mobile/ar-navigation')}
                    />
                    <CourseCard
                        title="Construction Overview"
                        progress={60}
                        time="32 mins"
                        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        onClick={() => { }}
                    />
                    <div className="relative mb-4 overflow-hidden rounded-2xl bg-gray-900 text-white shadow-lg h-32">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="absolute inset-0 h-full w-full object-cover opacity-60" />
                    </div>
                </div>
            </div>

            {/* Bottom Home Indicator */}
            <div className="fixed bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/20"></div>
        </div>
    );
};

export default MobileTrainingList;
