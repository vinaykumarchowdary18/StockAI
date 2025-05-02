import React from 'react';
import { BookOpen, Play, CheckCircle, Clock } from 'lucide-react';

const learningData = {
  inProgress: [
    {
      title: "Technical Analysis Fundamentals",
      progress: 65,
      nextLesson: "Understanding Moving Averages",
      timeLeft: "30 mins"
    }
  ],
  courses: [
    {
      title: "Stock Market Basics",
      lessons: 12,
      completed: 12,
      level: "Beginner"
    },
    {
      title: "Advanced Trading Strategies",
      lessons: 8,
      completed: 5,
      level: "Advanced"
    },
    {
      title: "Risk Management",
      lessons: 6,
      completed: 2,
      level: "Intermediate"
    }
  ]
};

export default function Learning() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Learning Center</h2>

      {learningData.inProgress.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>
          {learningData.inProgress.map((course, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{course.title}</p>
                  <p className="text-sm text-gray-600">Next: {course.nextLesson}</p>
                </div>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Play className="h-4 w-4 mr-2" />
                  Continue
                </button>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      {course.progress}% Complete
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-xs font-semibold text-gray-500">
                      {course.timeLeft} left
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                  <div 
                    style={{ width: `${course.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningData.courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{course.title}</h3>
                <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {course.level}
                </span>
              </div>
              <BookOpen className="h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Progress</span>
                <span>{course.completed}/{course.lessons} lessons</span>
              </div>
              <div className="mt-2 relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                  <div 
                    style={{ width: `${(course.completed / course.lessons) * 100}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}