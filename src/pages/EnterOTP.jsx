import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const EnterOTP = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

    const handleChange = (index, value) => {
        // Only allow numbers
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 4) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate verification
        navigate('/dashboard');
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
                    <Link to="/forgot-password" className="mb-4 flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
                        <ChevronLeft size={16} className="mr-1" />
                        Back
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">Enter OTP 🔐</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        We've sent a 5-digit code to your email. Please enter it below.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex justify-between gap-4">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={inputRefs[index]}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="block h-14 w-14 text-center text-2xl font-bold rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            />
                        ))}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Didn't receive code?</span>
                        <button type="button" className="font-medium text-purple-600 hover:text-purple-500">
                            Resend OTP
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-lg bg-[#6C5DD3] px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Verify & Proceed
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnterOTP;
