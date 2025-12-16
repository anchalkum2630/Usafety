import React from 'react';

const LeaveHistory = () => {
    const data = [
        { date: 'July 01, 2023', duration: 'July 05 - July 08', days: '3 Days', manager: 'Mark Willians', status: 'Pending' },
        { date: 'Apr 05, 2023', duration: 'Apr 06 - Apr 10', days: '4 Days', manager: 'Mark Willians', status: 'Approved' },
        { date: 'Mar 12, 2023', duration: 'Mar 14 - Mar 16', days: '2 Days', manager: 'Mark Willians', status: 'Approved' },
        { date: 'Feb 01, 2023', duration: 'Feb 02 - Feb 10', days: '8 Days', manager: 'Mark Willians', status: 'Approved' },
        { date: 'Jan 01, 2023', duration: 'Jan 16 - Jan 19', days: '3 Days', manager: 'Mark Willians', status: 'Reject' },
    ];

    return (
        <div>
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="text-gray-400 border-b border-gray-100">
                        <th className="pb-4 font-normal">Date</th>
                        <th className="pb-4 font-normal">Duration</th>
                        <th className="pb-4 font-normal">Days</th>
                        <th className="pb-4 font-normal">Reporting Manager</th>
                        <th className="pb-4 font-normal">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx}>
                            <td className="py-4 text-gray-900">{row.date}</td>
                            <td className="py-4 text-gray-600">{row.duration}</td>
                            <td className="py-4 text-gray-600">{row.days}</td>
                            <td className="py-4 text-gray-600">{row.manager}</td>
                            <td className="py-4">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${row.status === 'Approved' ? 'bg-green-50 text-green-600' :
                                        row.status === 'Reject' ? 'bg-red-50 text-red-500' :
                                            'bg-yellow-50 text-yellow-600'
                                    }`}>
                                    {row.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaveHistory;
