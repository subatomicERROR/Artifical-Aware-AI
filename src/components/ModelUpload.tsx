import React, { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';

const ModelUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    setUploading(true);
    // Simulating upload process
    setTimeout(() => {
      setUploading(false);
      setUploadComplete(true);
    }, 3000);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Upload AI Model</h2>
      <div className="bg-gray-800 rounded-lg p-8">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Model Name</label>
          <input
            type="text"
            className="w-full bg-gray-700 rounded px-3 py-2"
            placeholder="Enter model name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Model Type</label>
          <select className="w-full bg-gray-700 rounded px-3 py-2">
            <option>TensorFlow</option>
            <option>PyTorch</option>
            <option>Keras</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Upload File</label>
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="w-12 h-12 mb-2 text-blue-500" />
              <span className="text-blue-500">Choose a file</span>
              <span className="text-sm text-gray-400 mt-2">
                or drag and drop it here
              </span>
            </label>
            {file && <p className="mt-2">{file.name}</p>}
          </div>
        </div>
        <button
          onClick={handleUpload}
          disabled={!file || uploading || uploadComplete}
          className={`w-full py-2 rounded-lg ${
            !file || uploading || uploadComplete
              ? 'bg-gray-600'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {uploading ? 'Uploading...' : uploadComplete ? 'Uploaded' : 'Upload'}
        </button>
        {uploadComplete && (
          <div className="mt-4 text-green-500 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            Upload complete! Your model is ready for transformation.
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelUpload;