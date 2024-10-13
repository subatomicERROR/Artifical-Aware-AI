import React from 'react';
import { Save } from 'lucide-react';

const Settings = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Settings</h2>
      <div className="bg-gray-800 rounded-lg p-8">
        <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-gray-700 rounded px-3 py-2"
              defaultValue="user@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full bg-gray-700 rounded px-3 py-2"
              placeholder="••••••••"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-8 mb-4">Notification Preferences</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" defaultChecked />
            Email notifications for new messages
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" defaultChecked />
            Email notifications for transformation completions
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Weekly digest of community activities
          </label>
        </div>
        <h3 className="text-xl font-semibold mt-8 mb-4">API Access</h3>
        <div>
          <label className="block text-sm font-medium mb-2">API Key</label>
          <input
            type="text"
            className="w-full bg-gray-700 rounded px-3 py-2"
            value="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            readOnly
          />
          <button className="mt-2 text-blue-500 hover:text-blue-400">
            Generate New Key
          </button>
        </div>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded flex items-center">
          <Save className="w-5 h-5 mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;