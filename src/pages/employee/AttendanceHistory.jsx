import React from 'react';

const AttendanceHistory = () => {
    const data = [
        { date: 'July 01, 2023', checkIn: '09:28 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', hours: '09:02 Hrs', status: 'On Time' },
        { date: 'July 02, 2023', checkIn: '09:20 AM', checkOut: '07:00 PM', breakTime: '00:20 Min', hours: '09:20 Hrs', status: 'On Time' },
        { date: 'July 03, 2023', checkIn: '09:25 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', hours: '09:05 Hrs', status: 'On Time' },
        { date: 'July 04, 2023', checkIn: '09:45 AM', checkOut: '07:00 PM', breakTime: '00:40 Min', hours: '08:35 Hrs', status: 'Late' },
        { date: 'July 05, 2023', checkIn: '10:00 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', hours: '08:30 Hrs', status: 'Late' },
        { date: 'July 06, 2023', checkIn: '09:28 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', hours: '09:02 Hrs', status: 'On Time' },
        { date: 'July 07, 2023', checkIn: '09:30 AM', checkOut: '07:00 PM', breakTime: '00:15 Min', hours: '09:15 Hrs', status: 'On Time' },
        { date: 'July 08, 2023', checkIn: '09:52 AM', checkOut: '07:00 PM', breakTime: '00:45 Min', hours: '08:23 Hrs', status: 'Late' },
        { date: 'July 09, 2023', checkIn: '09:10 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', hours: '09:02 Hrs', status: 'On Time' },
        { date: 'July 10, 2023', checkIn: '09:48 AM', checkOut: '07:00 PM', breakTime: '00:42 Min', hours: '08:30 Hrs', status: 'Late' },
    ];

    return (
        <div>
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="text-gray-400 border-b border-gray-100">
                        <th className="pb-4 font-normal">Date</th>
                        <th className="pb-4 font-normal">Check In</th>
                        <th className="pb-4 font-normal">Check Out</th>
                        <th className="pb-4 font-normal">Break</th>
                        <th className="pb-4 font-normal">Working Hours</th>
                        <th className="pb-4 font-normal">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx}>
                            <td className="py-4 text-gray-900">{row.date}</td>
                            <td className="py-4 text-gray-600">{row.checkIn}</td>
                            <td className="py-4 text-gray-600">{row.checkOut}</td>
                            <td className="py-4 text-gray-600">{row.breakTime}</td>
                            <td className="py-4 text-gray-600">{row.hours}</td>
                            <td className="py-4">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${row.status === 'On Time' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
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

export default AttendanceHistory;
