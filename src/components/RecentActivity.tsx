import React from 'react';
import { 
  UserCheck, 
  UserX, 
  AlertCircle, 
  Clock 
} from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'check-in',
    student: 'Arjun Singh',
    class: 'CSE-4A',
    time: '09:15 AM',
    subject: 'Data Structures'
  },
  {
    id: 2,
    type: 'late',
    student: 'Priya Sharma',
    class: 'ECE-3B',
    time: '10:25 AM',
    subject: 'Digital Electronics'
  },
  {
    id: 3,
    type: 'absent',
    student: 'Rahul Kumar',
    class: 'ME-2A',
    time: '11:00 AM',
    subject: 'Thermodynamics'
  },
  {
    id: 4,
    type: 'check-in',
    student: 'Sneha Patel',
    class: 'IT-4B',
    time: '11:30 AM',
    subject: 'Database Systems'
  },
  {
    id: 5,
    type: 'late',
    student: 'Vikash Gupta',
    class: 'EE-3A',
    time: '02:15 PM',
    subject: 'Power Systems'
  }
];

export const RecentActivity: React.FC = () => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'check-in':
        return <UserCheck className="w-4 h-4 text-green-600" />;
      case 'late':
        return <Clock className="w-4 h-4 text-amber-600" />;
      case 'absent':
        return <UserX className="w-4 h-4 text-red-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'check-in':
        return 'border-green-200 bg-green-50';
      case 'late':
        return 'border-amber-200 bg-amber-50';
      case 'absent':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getActivityText = (type: string) => {
    switch (type) {
      case 'check-in':
        return 'marked present';
      case 'late':
        return 'arrived late';
      case 'absent':
        return 'marked absent';
      default:
        return 'unknown activity';
    }
  };

  return (
    <div className="space-y-3">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className={`flex items-center space-x-3 p-3 rounded-lg border ${getActivityColor(activity.type)} hover:shadow-sm transition-shadow`}
        >
          <div className="flex-shrink-0">
            {getActivityIcon(activity.type)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 truncate">
              {activity.student} ({activity.class})
            </p>
            <p className="text-xs text-gray-600">
              {getActivityText(activity.type)} in {activity.subject}
            </p>
          </div>
          <div className="flex-shrink-0 text-xs text-gray-500 font-medium">
            {activity.time}
          </div>
        </div>
      ))}
      <div className="text-center pt-2">
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
          View all activities →
        </button>
      </div>
    </div>
  );
};