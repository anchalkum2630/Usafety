import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Delete } from 'lucide-react';

const VerifyOTP = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['0', '0', '0', '0']);

    const handleVerify = () => {
        navigate('/account-verified');
    };

    return (
        <div className="flex h-screen flex-col bg-white font-sans text-gray-900">
            {/* Header */}
            <div className="p-6 pt-12">
                <button onClick={() => navigate(-1)} className="mb-6 block text-gray-900">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="mb-10 text-2xl font-bold">Verify OTP</h1>

                {/* OTP Display */}
                <div className="mb-6 flex justify-between gap-4">
                    {otp.map((digit, idx) => (
                        <div key={idx} className="flex h-14 w-14 items-center justify-center rounded-lg border border-gray-300 text-xl font-medium text-gray-800">
                            {digit}
                        </div>
                    ))}
                </div>

                <div className="mb-8 text-sm text-gray-500">
                    Didn't Receive the Code? <button className="font-semibold text-gray-900 hover:underline">Resend</button>
                </div>

                <button
                    onClick={handleVerify}
                    className="w-full rounded-lg bg-[#0052CC] py-3.5 text-center font-bold text-white shadow-sm hover:bg-blue-700 active:bg-blue-800"
                >
                    Verify OTP
                </button>
            </div>


            {/* Keypad */}
            <div className="mt-auto bg-gray-200 p-2 pb-8">
                <div className="mx-auto grid max-w-sm grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <button key={num} className="rounded-lg bg-white py-3 text-2xl font-normal text-gray-900 shadow-sm focus:bg-gray-100">
                            {num}
                            <div className="text-[10px] tracking-widest text-gray-500 uppercase">
                                {num === 2 ? 'ABC' : num === 3 ? 'DEF' : num === 4 ? 'GHI' : num === 5 ? 'JKL' : num === 6 ? 'MNO' : num === 7 ? 'PQRS' : num === 8 ? 'TUV' : num === 9 ? 'WXYZ' : ''}
                            </div>
                        </button>
                    ))}
                    <div className="col-span-1"></div> {/* Empty space */}
                    <button className="rounded-lg bg-white py-3 text-2xl font-normal text-gray-900 shadow-sm focus:bg-gray-100">
                        0
                    </button>
                    <button className="flex items-center justify-center rounded-lg  py-3 text-gray-900 ">
                        {/* Backspace Icon */}
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                            <line x1="18" y1="9" x2="12" y2="15"></line>
                            <line x1="12" y1="9" x2="18" y2="15"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerifyOTP;
