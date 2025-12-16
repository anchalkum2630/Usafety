import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountVerified = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen flex-col items-center bg-white px-6 py-12 text-center font-sans">
            <div className="w-full text-left">
                <button onClick={() => navigate(-1)} className="text-gray-900">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="mt-4 text-2xl font-bold text-gray-900">Account verified</h1>
            </div>


            <div className="mt-auto mb-auto flex flex-col items-center justify-center">
                {/* Logo Placeholder */}
                <div className="mb-12 flex items-center justify-center">
                    <div className="text-5xl font-bold text-[#0057E7]">
                        U Safety<span className="text-xl align-top text-[#0057E7]">+</span>
                    </div>
                </div>

                <h2 className="text-lg font-medium text-gray-500">
                    Your account has been verified!<br />
                    Welcome to U Safety!
                </h2>
            </div>

            <div className="mt-auto w-full">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="w-full rounded-lg bg-[#0057E7] py-3.5 text-base font-bold text-white shadow-sm hover:bg-blue-700"
                >
                    Home
                </button>
            </div>
        </div>
    );
};

export default AccountVerified;
