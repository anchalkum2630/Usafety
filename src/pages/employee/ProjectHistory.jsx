import React from 'react';

const ProjectHistory = () => {
    const projects = [
        { id: 1, name: 'Amongus - Discovery Phase', start: 'Feb 01, 2023', end: 'Mar 05, 2023', status: 'Completed' },
        { id: 2, name: 'Wildcare - Development Project', start: 'Feb 12, 2023', end: 'April 20, 2023', status: 'Completed' },
        { id: 3, name: 'Hingutsan Web Development', start: 'April 05, 2023', end: 'October 05, 2023', status: 'In Process' },
        { id: 4, name: 'Montilisy Ecommerce Platform', start: 'May 12, 2023', end: 'August 12, 2023', status: 'In Process' },
    ];

    return (
        <div>
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="text-gray-400 border-b border-gray-100">
                        <th className="pb-4 font-normal">Sr. No.</th>
                        <th className="pb-4 font-normal">Project Name</th>
                        <th className="pb-4 font-normal">Start Date</th>
                        <th className="pb-4 font-normal">Finish Date</th>
                        <th className="pb-4 font-normal">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {projects.map((proj) => (
                        <tr key={proj.id}>
                            <td className="py-4 text-gray-900">{proj.id}</td>
                            <td className="py-4 font-medium text-gray-900">{proj.name}</td>
                            <td className="py-4 text-gray-600">{proj.start}</td>
                            <td className="py-4 text-gray-600">{proj.end}</td>
                            <td className="py-4">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${proj.status === 'Completed'
                                        ? 'bg-green-50 text-green-600'
                                        : 'bg-yellow-50 text-yellow-600'
                                    }`}>
                                    {proj.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectHistory;
