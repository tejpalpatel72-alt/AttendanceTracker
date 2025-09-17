import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  Users,
  BookOpen,
  AlertTriangle
} from 'lucide-react';

const departmentData = [
  { name: 'Computer Science', students: 267, avgAttendance: 87.7, trend: 2.3 },
  { name: 'Electronics', students: 221, avgAttendance: 89.6, trend: 1.8 },
  { name: 'Mechanical', students: 312, avgAttendance: 88.5, trend: -0.5 },
  { name: 'Civil Engineering', students: 208, avgAttendance: 90.9, trend: 3.1 },
  { name: 'Information Technology', students: 167, avgAttendance: 86.8, trend: -1.2 },
  { name: 'Electrical', students: 192, avgAttendance: 87.0, trend: 0.8 },
];

const monthlyTrend = [
  { month: 'Aug', attendance: 85.2 },
  { month: 'Sep', attendance: 87.1 },
  { month: 'Oct', attendance: 86.8 },
  { month: 'Nov', attendance: 88.3 },
  { month: 'Dec', attendance: 87.9 },
  { month: 'Jan', attendance: 88.7 },
];

const lowAttendanceStudents = [
  { name: 'Rahul Kumar', class: 'ME-2A', attendance: 65.2, absences: 14 },
  { name: 'Aisha Patel', class: 'CSE-3B', attendance: 68.8, absences: 12 },
  { name: 'Rohit Singh', class: 'ECE-4A', attendance: 69.5, absences: 11 },
  { name: 'Kavya Sharma', class: 'IT-2B', attendance: 71.3, absences: 10 },
  { name: 'Manish Gupta', class: 'EE-3A', attendance: 72.1, absences: 9 },
];

export const AnalyticsView: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Analytics & Reports</h1>
          <p className="text-gray-600 mt-1">Comprehensive attendance insights and trends</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="semester">This Semester</option>
              <option value="year">Academic Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Overall Attendance</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">88.7%</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-green-600 text-sm font-medium">+1.8%</span>
                <span className="text-gray-500 text-sm ml-2">vs last month</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Active Students</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">1,367</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-green-600 text-sm font-medium">+5.2%</span>
                <span className="text-gray-500 text-sm ml-2">new admissions</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">At-Risk Students</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">47</p>
              <div className="flex items-center mt-2">
                <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                <span className="text-red-600 text-sm font-medium">-3</span>
                <span className="text-gray-500 text-sm ml-2">this week</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Avg. Classes/Day</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">6.3</p>
              <div className="flex items-center mt-2">
                <span className="text-gray-600 text-sm">Across all departments</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trend Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Attendance Trend</h3>
            <div className="text-sm text-gray-500">Last 6 months</div>
          </div>
          <div className="space-y-4">
            <div className="flex items-end justify-between h-48 space-x-2">
              {monthlyTrend.map((item, index) => {
                const height = (item.attendance / 100) * 160;
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full flex flex-col justify-end" style={{ height: 160 }}>
                      <div
                        className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md hover:from-blue-700 hover:to-blue-500 transition-colors cursor-pointer"
                        style={{ height }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2 font-medium">{item.month}</span>
                    <span className="text-xs text-gray-500">{item.attendance}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* At-Risk Students */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Students Requiring Attention</h3>
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          </div>
          <div className="space-y-3">
            {lowAttendanceStudents.map((student, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{student.name}</p>
                    <p className="text-xs text-gray-500">{student.class}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-red-600">{student.attendance}%</p>
                  <p className="text-xs text-gray-500">{student.absences} absences</p>
                </div>
              </div>
            ))}
            <button className="w-full text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors pt-2">
              View all at-risk students →
            </button>
          </div>
        </div>
      </div>

      {/* Department-wise Analysis */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Department-wise Performance</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentData.map((dept, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-800 text-sm">{dept.name}</h4>
                <div className="flex items-center space-x-1">
                  {dept.trend >= 0 ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  )}
                  <span className={`text-xs font-medium ${
                    dept.trend >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {dept.trend >= 0 ? '+' : ''}{dept.trend}%
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Students</span>
                  <span className="font-medium">{dept.students}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg. Attendance</span>
                  <span className="font-medium text-blue-600">{dept.avgAttendance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      dept.avgAttendance >= 90 ? 'bg-green-500' :
                      dept.avgAttendance >= 80 ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${dept.avgAttendance}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};