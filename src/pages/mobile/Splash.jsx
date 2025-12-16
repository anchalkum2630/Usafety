import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/mobile/onboarding');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex h-screen items-center justify-center bg-white font-sans">
            <div className="flex items-center gap-2">
                <span className="text-4xl font-medium text-[#0057E7]">U Safety</span>
                <div className="flex flex-col items-start bg-[#0057E7] px-1 text-xs text-white">
                    <span>Craft</span>
                </div>
            </div>
        </div>
    );
};

export default Splash;
