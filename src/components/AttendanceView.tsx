import React, { useState } from 'react';
import { 
  Calendar,
  Filter,
  Download,
  QrCode,
  Camera,
  Fingerprint,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';

const attendanceData = [
  {
    id: '1',
    subject: 'Data Structures & Algorithms',
    class: 'CSE-4A',
    faculty: 'Dr. Rajesh Kumar',
    time: '09:00 - 10:00 AM',
    present: 42,
    absent: 8,
    late: 3,
    total: 53,
    date: '2024-01-15'
  },
  {
    id: '2',
    subject: 'Digital Electronics',
    class: 'ECE-3B',
    faculty: 'Prof. Sunita Sharma',
    time: '10:00 - 11:00 AM',
    present: 38,
    absent: 12,
    late: 2,
    total: 52,
    date: '2024-01-15'
  },
  {
    id: '3',
    subject: 'Thermodynamics',
    class: 'ME-2A',
    faculty: 'Dr. Amit Gupta',
    time: '11:00 - 12:00 PM',
    present: 45,
    absent: 7,
    late: 1,
    total: 53,
    date: '2024-01-15'
  },
  {
    id: '4',
    subject: 'Database Management Systems',
    class: 'IT-4B',
    faculty: 'Ms. Priya Singh',
    time: '02:00 - 03:00 PM',
    present: 39,
    absent: 9,
    late: 4,
    total: 52,
    date: '2024-01-15'
  }
];

const methodIcons = {
  qr: QrCode,
  facial: Camera,
  biometric: Fingerprint
};

export const AttendanceView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('2024-01-15');
  const [selectedMethod, setSelectedMethod] = useState<'qr' | 'facial' | 'biometric'>('qr');

  const calculatePercentage = (present: number, total: number) => {
    return ((present / total) * 100).toFixed(1);
  };

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 75) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Attendance Tracking</h1>
          <p className="text-gray-600 mt-1">Monitor and manage class attendance</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Today's Classes</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                    <option>All Classes</option>
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>ME</option>
                    <option>IT</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {attendanceData.map((item) => {
                const percentage = parseFloat(calculatePercentage(item.present, item.total));
                
                return (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 mb-1">{item.subject}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{item.class}</span>
                          <span>•</span>
                          <span>{item.faculty}</span>
                          <span>•</span>
                          <span>{item.time}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-bold ${getPercentageColor(percentage)}`}>
                          {percentage}%
                        </p>
                        <p className="text-xs text-gray-500">attendance</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Present: {item.present}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-amber-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">Late: {item.late}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-red-600">
                        <XCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Absent: {item.absent}</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            percentage >= 90 ? 'bg-green-500' :
                            percentage >= 75 ? 'bg-amber-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{item.present} present</span>
                        <span>Total: {item.total}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Attendance Method</h3>
            <div className="space-y-3">
              {Object.entries(methodIcons).map(([method, Icon]) => (
                <button
                  key={method}
                  onClick={() => setSelectedMethod(method as any)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg border-2 transition-all ${
                    selectedMethod === method
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium capitalize">{method} Scan</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Classes Today</span>
                <span className="font-bold text-gray-800">{attendanceData.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Students</span>
                <span className="font-bold text-gray-800">
                  {attendanceData.reduce((sum, item) => sum + item.total, 0)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Present</span>
                <span className="font-bold text-green-600">
                  {attendanceData.reduce((sum, item) => sum + item.present, 0)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Absent</span>
                <span className="font-bold text-red-600">
                  {attendanceData.reduce((sum, item) => sum + item.absent, 0)}
                </span>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Overall Rate</span>
                  <span className="font-bold text-lg text-blue-600">
                    {calculatePercentage(
                      attendanceData.reduce((sum, item) => sum + item.present, 0),
                      attendanceData.reduce((sum, item) => sum + item.total, 0)
                    )}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-3">Start Live Attendance</h3>
            <p className="text-blue-100 text-sm mb-4">
              Begin real-time attendance tracking for your current class
            </p>
            <button className="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
              Start Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};