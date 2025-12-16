import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPasswordBlue = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/check-mail-status');
    };

    return (
        <div className="flex min-h-screen flex-col bg-white px-8 py-10 font-sans text-gray-900">
            <div className="mb-2">
                <button onClick={() => navigate(-1)} className="text-gray-900">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            <div className="mb-8 mt-4">
                <h1 className="mb-4 text-3xl font-bold text-gray-900">Forgot Password</h1>
                <p className="text-base text-gray-500">
                    Enter your email address to reset your password
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 space-y-6">
                <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="johndoe@gmail.com"
                        className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 focus:border-[#0057E7] focus:outline-none focus:ring-1 focus:ring-[#0057E7]"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-8 w-full rounded-lg bg-[#0057E7] py-3.5 text-base font-bold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ForgotPasswordBlue;
