import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const ForgotPassword = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        navigate('/otp');
    };

    return (
        <div className="flex min-h-screen w-full bg-[#FAFAFA]">
            {/* Left Side - Placeholder for Image/Design */}
            <div className="hidden w-1/2 items-center justify-center bg-[#F3F4F6] lg:flex">
                <div className="h-4/5 w-4/5 rounded-3xl bg-[#E5E7EB] shadow-inner"></div>
            </div>

            {/* Right Side - Form */}
            <div className="flex w-full flex-col justify-center px-8 lg:w-1/2 lg:px-24">
                <div className="mb-8">
                    <Link to="/login" className="mb-4 flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
                        <ChevronLeft size={16} className="mr-1" />
                        Back to Login
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">Forgot Password 🔒</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Enter your email address and we'll send you an OTP to reset your password.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="robertallen@example.com"
                            required
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-lg bg-[#6C5DD3] px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Send OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
