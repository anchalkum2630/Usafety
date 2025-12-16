import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    UserPlus,
    Filter,
    Settings,
    LogOut,
    Bell,
    Search,
    ChevronDown
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, to }) => (
    <NavLink
        to={to}
        end={to === '/dashboard'}
        className={({ isActive }) => `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'bg-[#6C5DD3] text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
            }`}
    >
        <Icon size={20} />
        <span>{label}</span>
    </NavLink>
);

const DashboardLayout = () => {
    return (
        <div className="flex h-screen bg-[#FAFAFA]">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white px-4 py-6">
                <div className="mb-8 flex items-center gap-3 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6C5DD3] text-white">
                        <span className="text-xl font-bold">U</span>
                    </div>
                    <span className="text-lg font-bold text-gray-800">Safetycraft</span>
                </div>

                <nav className="space-y-1">
                    <SidebarItem icon={LayoutDashboard} label="Dashboard" to="/dashboard" />
                    <SidebarItem icon={Users} label="All Employee" to="/dashboard/all-employees" />
                    <SidebarItem icon={Users} label="All Departments" to="/dashboard/all-departments" />
                    <SidebarItem icon={UserPlus} label="Add New Employee" to="/add-employee" />
                    <SidebarItem icon={Filter} label="Filter" to="#" />
                    {/* Add more sidebar items inferred from design */}
                    <div className="my-4 h-px bg-gray-200"></div>
                    <SidebarItem icon={Settings} label="Settings" to="#" />
                    <SidebarItem icon={LogOut} label="Logout" to="/login" />
                </nav>
            </aside>

            {/* Main Content */}
            <div className="ml-64 flex w-full flex-col">
                {/* Top Header */}
                <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-8">
                    <div className="flex flex-1 items-center gap-4">
                        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
                        <div className="relative ml-8 w-96">
                            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="w-full rounded-lg bg-gray-50 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]/20"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-gray-500 hover:text-gray-700">
                            <Bell size={20} />
                            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200">
                                {/* User Avatar Placeholder */}
                                <img
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                    alt="User"
                                    className="h-full w-full rounded-full"
                                />
                            </div>
                            <div className="hidden md:block">
                                <p className="text-sm font-medium text-gray-700">Robert Allen</p>
                                <p className="text-xs text-gray-500">Admin</p>
                            </div>
                            <ChevronDown size={16} className="text-gray-400" />
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
