import React from 'react';

export const AttendanceChart: React.FC = () => {
  const data = [
    { day: 'Mon', present: 1089, absent: 158 },
    { day: 'Tue', present: 1123, absent: 124 },
    { day: 'Wed', present: 1067, absent: 180 },
    { day: 'Thu', present: 1145, absent: 102 },
    { day: 'Fri', present: 1098, absent: 149 },
    { day: 'Sat', present: 876, absent: 371 },
    { day: 'Sun', present: 0, absent: 0 },
  ];

  const maxValue = Math.max(...data.map(d => d.present + d.absent));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-600">Present</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-gray-600">Absent</span>
        </div>
      </div>
      
      <div className="flex items-end justify-between h-40 space-x-2">
        {data.map((item, index) => {
          const totalHeight = 120;
          const presentHeight = (item.present / maxValue) * totalHeight;
          const absentHeight = (item.absent / maxValue) * totalHeight;
          
          return (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full flex flex-col justify-end" style={{ height: totalHeight }}>
                {item.absent > 0 && (
                  <div
                    className="w-full bg-red-500 rounded-t-md"
                    style={{ height: absentHeight }}
                  ></div>
                )}
                {item.present > 0 && (
                  <div
                    className="w-full bg-green-500 rounded-t-md"
                    style={{ height: presentHeight }}
                  ></div>
                )}
              </div>
              <span className="text-xs text-gray-600 mt-2 font-medium">{item.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};