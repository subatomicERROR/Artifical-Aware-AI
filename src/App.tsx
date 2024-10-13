import React, { useState } from 'react';
import { Brain, Upload, BarChart, Users, Settings as SettingsIcon, LogOut } from 'lucide-react';
import Dashboard from './components/Dashboard';
import ModelUpload from './components/ModelUpload';
import Transformation from './components/Transformation';
import Community from './components/Community';
import SettingsComponent from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'upload':
        return <ModelUpload />;
      case 'transform':
        return <Transformation />;
      case 'community':
        return <Community />;
      case 'settings':
        return <SettingsComponent />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-800 p-6">
        <div className="flex items-center mb-8">
          <Brain className="w-8 h-8 mr-2 text-blue-500" />
          <h1 className="text-2xl font-bold">AI Transform</h1>
        </div>
        <ul>
          {[
            { name: 'Dashboard', icon: BarChart, id: 'dashboard' },
            { name: 'Upload Model', icon: Upload, id: 'upload' },
            { name: 'Transform', icon: Brain, id: 'transform' },
            { name: 'Community', icon: Users, id: 'community' },
            { name: 'Settings', icon: SettingsIcon, id: 'settings' },
          ].map((item) => (
            <li key={item.id} className="mb-4">
              <button
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full p-2 rounded ${
                  activeTab === item.id ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <button className="flex items-center mt-auto p-2 hover:bg-gray-700 rounded">
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </button>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;