import React, { useState } from 'react';
import { X, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VerifyPhone = () => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('(+1) - 2432352232');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending OTP
        navigate('/otp'); // Reusing existing OTP page for flow, though functionality might differ in real app
    };

    return (
        <div className="flex min-h-screen flex-col bg-white px-6 py-6 font-sans">
            {/* Header */}
            <div className="mb-8 flex items-center">
                <button onClick={() => navigate(-1)} className="p-1 text-gray-900">
                    <X size={24} />
                </button>
            </div>

            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Enter Mobile Number</h1>
                {/* Or "Verify your phone number" depending on the exact screen state desired, Image 2 title is "Enter Mobile Number" */}
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="mb-6">
                    <label htmlFor="phone" className="mb-2 block text-xs font-medium text-gray-500">
                        Phone Number
                    </label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <Smartphone size={20} />
                        </div>
                        <input
                            type="tel"
                            id="phone"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-gray-900 focus:border-[#0057E7] focus:outline-none focus:ring-1 focus:ring-[#0057E7]"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full rounded-lg bg-[#0057E7] px-4 py-3.5 text-base font-bold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Send OTP
                </button>
            </form>
        </div>
    );
};

export default VerifyPhone;
