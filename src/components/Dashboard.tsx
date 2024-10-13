import React from 'react';
import { BarChart, Users, Brain, Zap } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Active Models"
          value="12"
          icon={Brain}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Transformations"
          value="48"
          icon={Zap}
          color="bg-green-500"
        />
        <DashboardCard
          title="Community Members"
          value="1,024"
          icon={Users}
          color="bg-purple-500"
        />
        <DashboardCard
          title="Performance Gain"
          value="35%"
          icon={BarChart}
          color="bg-yellow-500"
        />
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Recent Activity</h3>
        <div className="bg-gray-800 rounded-lg p-4">
          <p>• Model "ChatGPT-4" transformation completed (2 hours ago)</p>
          <p>• New community discussion: "Quantum AI Ethics" (5 hours ago)</p>
          <p>• User JohnDoe uploaded a new model (1 day ago)</p>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon: Icon, color }) => (
  <div className={`${color} rounded-lg p-6 flex items-center`}>
    <Icon className="w-12 h-12 mr-4" />
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  </div>
);

export default Dashboard;