import React from 'react';
import { X, Compass, ChevronUp, CornerUpLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ARNavigation = () => {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gray-900 text-white font-sans">
            {/* Background Camera Mockup */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="AR View"
                    className="h-full w-full object-cover"
                />
                {/* Dark overlay gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
            </div>

            {/* Top UI */}
            <div className="relative z-10 p-6 pt-12 flex items-center justify-between">
                <div className="rounded-xl bg-black/40 backdrop-blur-md px-4 py-2 text-sm font-medium">
                    Electrical Safety
                </div>
                <div className="flex gap-2">
                    <button className="rounded-lg bg-black/40 backdrop-blur-md p-2">
                        <Compass size={20} />
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="rounded-lg bg-black/40 backdrop-blur-md p-2"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* AR Overlay Elements - Directional Arrows */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center gap-1 opacity-80" style={{ transform: 'translateY(100px)' }}>
                    {/* Stacked arrows effect */}
                    <ChevronUp size={40} className="text-[#bef264]" strokeWidth={3} />
                    <ChevronUp size={40} className="text-[#bef264]/60 -mt-6" strokeWidth={3} />
                    <ChevronUp size={40} className="text-[#bef264]/30 -mt-6" strokeWidth={3} />
                </div>

                {/* Green Path Overlay Trapazoid */}
                <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-40 h-64 bg-gradient-to-t from-[#bef264]/80 to-transparent"
                    style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}>
                </div>
            </div>


            {/* Bottom Card */}
            <div className="absolute bottom-8 left-6 right-6 z-10">
                <div className="rounded-2xl bg-black/80 backdrop-blur-md p-4">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#bef264] text-black">
                            <CornerUpLeft size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Round the Wire</h3>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <span>1.3km away</span>
                                <span className="h-3 w-px bg-gray-600"></span>
                                <span>15 mins</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ARNavigation;
