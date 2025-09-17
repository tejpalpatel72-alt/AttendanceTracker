import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
  color: 'blue' | 'green' | 'red' | 'indigo' | 'amber';
}

const colorClasses = {
  blue: 'from-blue-500 to-blue-600 text-blue-600 bg-blue-50',
  green: 'from-green-500 to-green-600 text-green-600 bg-green-50',
  red: 'from-red-500 to-red-600 text-red-600 bg-red-50',
  indigo: 'from-indigo-500 to-indigo-600 text-indigo-600 bg-indigo-50',
  amber: 'from-amber-500 to-amber-600 text-amber-600 bg-amber-50',
};

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mb-2">{value}</p>
          <div className="flex items-center">
            <span className={`text-sm font-medium ${
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {change}
            </span>
            <span className="text-gray-500 text-sm ml-2">vs last week</span>
          </div>
        </div>
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[color].split(' ')[0]} ${colorClasses[color].split(' ')[1]} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};