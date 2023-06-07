import React from 'react';

const CueTable = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full">
                <thead>
                    <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{ fontSize: '0.9674rem' }}>
                        <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: '#f8f8f8' }}>Start Seg RT</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Activity</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Presenter</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Audio</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Center</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Wings</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Lighting</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Stage</th>
                    </tr>
                </thead>
                <tbody className="text-sm font-normal text-gray-700">
                    {data.map((rowData, index) => (
                        <tr key={index} className="hover:bg-gray-100 border-b border-gray-200 py-10">
                            <td className="px-4 py-4">{rowData.startSegRT}</td>
                            <td className="px-4 py-4">{rowData.activity}</td>
                            <td className="px-4 py-4">{rowData.presenter}</td>
                            <td className="px-4 py-4">{rowData.audio}</td>
                            <td className="px-4 py-4">{rowData.center}</td>
                            <td className="px-4 py-4">{rowData.wings}</td>
                            <td className="px-4 py-4">{rowData.lighting}</td>
                            <td className="px-4 py-4">{rowData.stage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CueTable;
