import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className="flex min-h-screen w-full bg-[#FAFAFA]">
            {/* Left Side - Placeholder for Image/Design */}
            <div className="hidden w-1/2 items-center justify-center bg-[#F3F4F6] lg:flex">
                <div className="h-4/5 w-4/5 rounded-3xl bg-[#E5E7EB] shadow-inner"></div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex w-full flex-col justify-center px-8 lg:w-1/2 lg:px-24">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Welcome 👋</h1>
                    <p className="mt-2 text-sm text-gray-500">Please login here</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="robertallen@example.com"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative mt-1">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="•••••••••••••••••"
                                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                Remember Me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-lg bg-[#6C5DD3] px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
