import React from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen flex-col items-center justify-between bg-white px-6 py-12 font-sans">
            <div className="w-full">
                <div className="flex justify-between items-center mb-10">
                    <span className="text-sm font-bold text-black">9:41 AM</span>
                    <div className="flex gap-1">
                        <div className="h-3 w-3 bg-black rounded-full"></div>
                        <div className="h-3 w-3 bg-black rounded-full"></div>
                        <div className="h-3 w-4 bg-black rounded-md"></div>
                    </div>
                </div>

                <div className="mt-8">
                    <h1 className="text-3xl font-bold text-[#0057E7] leading-tight">
                        A Virtual reality <br />
                        training platform
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">For construction workers</p>
                </div>
            </div>

            {/* Illustration Placeholder */}
            <div className="relative flex-1 w-full flex items-center justify-center my-8">
                <div className="h-64 w-64 rounded-full bg-[#0057E7] flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for the rocket illustration */}
                    <img
                        src="https://img.freepik.com/free-vector/business-leader-consulting-analyst_74855-6447.jpg?w=740&t=st=1690000000~exp=1690000600~hmac=xyz"
                        alt="Illustration"
                        className="object-cover w-full h-full opacity-80 mix-blend-overlay"
                    />
                </div>
            </div>

            <div className="w-full space-y-8">
                <button
                    onClick={() => navigate('/mobile/training-list')}
                    className="w-full rounded-full border border-[#0057E7] py-4 text-center text-sm font-bold text-[#0057E7] hover:bg-blue-50"
                >
                    Next
                </button>

                <div className="flex justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    <div className="h-2 w-2 rounded-full bg-[#0057E7]"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                </div>

                {/* Swipe Indicator */}
                <div className="mx-auto h-1 w-32 rounded-full bg-black"></div>
            </div>
        </div>
    );
};

export default Onboarding;
