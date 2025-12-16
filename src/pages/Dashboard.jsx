import React from 'react';
import { Users, FileText, Calendar, Briefcase, ChevronDown, MoreVertical, Calendar as CalendarIcon } from 'lucide-react';

const StatCard = ({ label, value, icon: Icon, color, trend, trendLabel, updateDate }) => (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
        <div className="flex items-start justify-between">
            <div className={`rounded-full p-3 ${color} bg-opacity-10`}>
                <Icon size={24} className={color.replace('bg-', 'text-')} />
            </div>
            {trend && (
                <span className={`flex items-center text-xs font-bold ${trend > 0 ? 'text-green-500 bg-green-50' : 'text-red-500 bg-red-50'} px-2 py-1 rounded`}>
                    {trend > 0 ? '▲' : '▼'} {Math.abs(trend)}%
                </span>
            )}
        </div>
        <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            <p className="text-sm font-medium text-gray-500">{label}</p>
        </div>
        <div className="mt-4 border-t border-gray-100 pt-3">
            <p className="text-xs text-gray-400">Update: {updateDate}</p>
        </div>
    </div>
);

const AttendanceChart = () => {
    const data = [
        { day: 'Mon', value: 60, color: 'bg-[#6C5DD3]' },
        { day: 'Tue', value: 75, color: 'bg-[#6C5DD3]' },
        { day: 'Wed', value: 50, color: 'bg-[#6C5DD3]' },
        { day: 'Thu', value: 65, color: 'bg-[#6C5DD3]' },
        { day: 'Fri', value: 80, color: 'bg-[#6C5DD3]' },
        { day: 'Sat', value: 45, color: 'bg-[#6C5DD3]' },
        { day: 'Sun', value: 55, color: 'bg-[#6C5DD3]' },
    ];

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 h-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900">Attendance Overview</h3>
                <button className="flex items-center text-xs font-medium text-gray-500 border border-gray-200 rounded px-2 py-1">
                    Today <ChevronDown size={14} className="ml-1" />
                </button>
            </div>

            <div className="flex h-64 items-end justify-between gap-2">
                <div className="flex flex-col justify-between h-full text-xs text-gray-400 pb-8">
                    <span>100%</span>
                    <span>80%</span>
                    <span>60%</span>
                    <span>40%</span>
                    <span>20%</span>
                    <span>0</span>
                </div>
                {data.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                        {/* Bar mockup - split into upper and lower segments to mimic design if needed, here just simple bars */}
                        <div className="w-2 rounded-full bg-gray-100 h-full relative overflow-hidden">
                            <div
                                style={{ height: `${item.value}%` }}
                                className={`absolute bottom-0 w-full rounded-full ${item.color}`}
                            ></div>
                        </div>
                        <span className="text-xs text-gray-400">{item.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ScheduleItem = ({ time, role, title, color }) => (
    <div className="flex gap-4 mb-6 relative">
        <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-gray-900 w-10">{time}</span>
            <div className="h-full w-px bg-gray-200 mt-2 absolute left-5 top-6 -z-10"></div>
        </div>
        <div className={`flex-1 pl-4 border-l-4 ${color}`}>
            <p className="text-xs text-gray-500">{role}</p>
            <h4 className="text-sm font-bold text-gray-900">{title}</h4>
        </div>
    </div>
);

const MySchedule = () => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900">My Schedule</h3>
                <div className="rounded-lg bg-purple-50 p-2 text-[#6C5DD3]">
                    <CalendarIcon size={18} />
                </div>
            </div>

            <div className="flex items-center justify-between mb-6">
                <button className="p-1 rounded bg-[#6C5DD3] text-white">
                    <ChevronDown size={16} className="rotate-90" />
                </button>
                <span className="text-sm font-bold text-gray-900">July, 2023</span>
                <button className="p-1 rounded bg-[#6C5DD3] text-white">
                    <ChevronDown size={16} className="-rotate-90" />
                </button>
            </div>
            {/* Calendar Grid Mockup - Simplified */}
            <div className="grid grid-cols-7 text-center text-xs mb-6">
                <span className="text-gray-400 mb-2">Su</span>
                <span className="text-gray-400 mb-2">Mo</span>
                <span className="text-gray-400 mb-2">Tu</span>
                <span className="text-gray-400 mb-2">We</span>
                <span className="text-gray-400 mb-2">Th</span>
                <span className="text-gray-400 mb-2">Fr</span>
                <span className="text-gray-400 mb-2">Sa</span>

                <span className="py-2"></span><span className="py-2"></span><span className="py-2"></span><span className="py-2">1</span><span className="py-2">2</span>
                <span className="py-2">3</span><span className="py-2">4</span><span className="py-2">5</span><span className="py-2 bg-[#6C5DD3] text-white rounded-full">6</span><span className="py-2 bg-purple-100 rounded-full text-[#6C5DD3]">7</span><span className="py-2 bg-[#6C5DD3] text-white rounded-full">8</span><span className="py-2">9</span>
            </div>


            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500">Wednesday, 06 July 2023</span>
                <MoreVertical size={16} className="text-gray-400" />
            </div>

            <div>
                <ScheduleItem time="09:30" role="UI/UX Designer" title="Practical Task Review" color="border-purple-500" />
                <ScheduleItem time="12:00" role="Magento Developer" title="Resume Review" color="border-orange-400" />
                <ScheduleItem time="01:30" role="Sales Manager" title="Final HR Round" color="border-blue-500" />
            </div>
        </div>
    );
};


const AttendanceTable = () => {
    const employees = [
        { name: 'Leasie Watson', role: 'Team Lead - Design', type: 'Office', time: '09:27 AM', status: 'On Time', img: 'https://i.pravatar.cc/150?u=20' },
        { name: 'Darlene Robertson', role: 'Web Designer', type: 'Office', time: '10:15 AM', status: 'Late', img: 'https://i.pravatar.cc/150?u=21' },
        { name: 'Jacob Jones', role: 'Medical Assistant', type: 'Remote', time: '10:24 AM', status: 'Late', img: 'https://i.pravatar.cc/150?u=22' },
        { name: 'Kathryn Murphy', role: 'Marketing Coordinator', type: 'Office', time: '09:10 AM', status: 'On Time', img: 'https://i.pravatar.cc/150?u=23' },
    ];

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900">Attendance Overview</h3>
                <button className="text-xs font-medium text-gray-500 border border-gray-200 rounded px-3 py-1 hover:bg-gray-50">View All</button>
            </div>

            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="text-gray-400 border-b border-gray-50">
                        <th className="pb-3 font-normal">Employee Name</th>
                        <th className="pb-3 font-normal">Designation</th>
                        <th className="pb-3 font-normal">Type</th>
                        <th className="pb-3 font-normal">Check In Time</th>
                        <th className="pb-3 font-normal">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {employees.map((emp, idx) => (
                        <tr key={idx}>
                            <td className="py-4 flex items-center gap-3">
                                <img src={emp.img} alt="" className="w-8 h-8 rounded-full" />
                                <span className="font-medium text-gray-900">{emp.name}</span>
                            </td>
                            <td className="py-4 text-gray-600">{emp.role}</td>
                            <td className="py-4 text-gray-600">{emp.type}</td>
                            <td className="py-4 text-gray-600">{emp.time}</td>
                            <td className="py-4">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${emp.status === 'On Time' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
                                    {emp.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const Dashboard = () => {
    return (
        <div className="space-y-6 font-sans">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Hello Robert 👋</h1>
                    <p className="text-sm text-gray-500">Good Morning</p>
                </div>
                <div className="flex items-center gap-2">
                    {/* Any top-right actions */}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard label="Total Employee" value="560" icon={Users} color="text-[#6C5DD3]" trend={12} updateDate="July 16, 2023" />
                <StatCard label="Total E-learning Module" value="1050" icon={Briefcase} color="text-orange-400" trend={5} updateDate="July 14, 2023" />
                <StatCard label="Today Attendance" value="470" icon={Calendar} color="text-red-400" trend={-8} updateDate="July 14, 2023" />
                <StatCard label="Total Projects" value="250" icon={FileText} color="text-green-400" trend={12} updateDate="July 10, 2023" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <AttendanceChart />
                </div>
                <div>
                    <MySchedule />
                </div>
            </div>

            <AttendanceTable />
        </div>
    );
};

export default Dashboard;
