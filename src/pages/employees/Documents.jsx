import React from 'react';
import { Upload } from 'lucide-react';

const UploadBox = ({ label, hint }) => (
    <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <div className="flex h-32 flex-col items-center justify-center rounded-xl border border-dashed border-[#6C5DD3] bg-purple-50 text-center">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#6C5DD3] text-white">
                <Upload size={16} />
            </div>
            <p className="text-sm text-gray-900">
                Drag & Drop or <span className="text-[#6C5DD3] hover:underline cursor-pointer">choose file</span> to upload
            </p>
            <p className="text-xs text-gray-500 mt-1">{hint}</p>
        </div>
    </div>
);

const Documents = ({ onNext }) => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                <UploadBox label="Upload Appointment Letter" hint="Supported formats : Jpeg, pdf" />
                <UploadBox label="Upload Salary Slips" hint="Supported formats : Jpeg, pdf" />
                <UploadBox label="Upload Reliving Letter" hint="Supported formats : Jpeg, pdf" />
                <UploadBox label="Upload Experience Letter" hint="Supported formats : Jpeg, pdf" />
            </div>

            <div className="mt-8 flex justify-end gap-3">
                <button className="rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Cancel
                </button>
                <button
                    onClick={onNext}
                    className="rounded-lg bg-[#6C5DD3] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-purple-700"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Documents;
