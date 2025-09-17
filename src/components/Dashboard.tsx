import React from 'react';
import { 
  Users, 
  CheckCircle, 
  XCircle, 
  TrendingUp,
  Calendar,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { StatsCard } from './StatsCard';
import { AttendanceChart } from './AttendanceChart';
import { RecentActivity } from './RecentActivity';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome to the Attendance Monitoring System</p>
        </div>
        <div className="flex items-center space-x-3 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Students"
          value="1,247"
          change="+5.2%"
          changeType="positive"
          icon={Users}
          color="blue"
        />
        <StatsCard
          title="Present Today"
          value="1,089"
          change="+2.1%"
          changeType="positive"
          icon={CheckCircle}
          color="green"
        />
        <StatsCard
          title="Absent Today"
          value="158"
          change="-1.3%"
          changeType="negative"
          icon={XCircle}
          color="red"
        />
        <StatsCard
          title="Attendance Rate"
          value="87.3%"
          change="+0.8%"
          changeType="positive"
          icon={TrendingUp}
          color="indigo"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Weekly Attendance Trend</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Last 7 days</span>
            </div>
          </div>
          <AttendanceChart />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          </div>
          <RecentActivity />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Department-wise Attendance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Computer Science', present: 234, total: 267, percentage: 87.7 },
            { name: 'Electronics', present: 198, total: 221, percentage: 89.6 },
            { name: 'Mechanical', present: 276, total: 312, percentage: 88.5 },
            { name: 'Civil Engineering', present: 189, total: 208, percentage: 90.9 },
            { name: 'Information Tech', present: 145, total: 167, percentage: 86.8 },
            { name: 'Electrical', present: 167, total: 192, percentage: 87.0 },
          ].map((dept) => (
            <div key={dept.name} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-2">{dept.name}</h4>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Present: {dept.present}</span>
                <span>Total: {dept.total}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${dept.percentage}%` }}
                ></div>
              </div>
              <p className="text-sm font-medium text-gray-700">{dept.percentage}% attendance</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};