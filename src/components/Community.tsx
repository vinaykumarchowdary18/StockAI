import React from 'react';
import { Users, MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

const communityData = {
  groups: [
    {
      name: "Day Trading Strategies",
      members: 1250,
      posts: 45,
      isJoined: true
    },
    {
      name: "Technical Analysis",
      members: 3420,
      posts: 89,
      isJoined: false
    }
  ],
  discussions: [
    {
      author: "Sarah Chen",
      title: "NVDA Technical Analysis",
      content: "Looking at the recent price action...",
      likes: 24,
      comments: 12,
      time: "2h ago"
    },
    {
      author: "Mike Johnson",
      title: "Market Outlook 2024",
      content: "With the current economic indicators...",
      likes: 45,
      comments: 18,
      time: "4h ago"
    }
  ]
};

export default function Community() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Community</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create Post
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {communityData.discussions.map((discussion, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center mb-3">
                <img
                  className="h-10 w-10 rounded-full"
                  src={`https://i.pravatar.cc/150?u=${discussion.author}`}
                  alt={discussion.author}
                />
                <div className="ml-3">
                  <p className="font-medium">{discussion.author}</p>
                  <p className="text-sm text-gray-500">{discussion.time}</p>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{discussion.title}</h3>
              <p className="text-gray-600 mb-4">{discussion.content}</p>
              <div className="flex items-center space-x-4 text-gray-500">
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <ThumbsUp className="h-5 w-5" />
                  <span>{discussion.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <MessageSquare className="h-5 w-5" />
                  <span>{discussion.comments}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-semibold text-lg mb-4">Your Groups</h3>
            {communityData.groups.map((group, index) => (
              <div key={index} className="py-3 border-b last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{group.name}</p>
                    <p className="text-sm text-gray-500">
                      {group.members.toLocaleString()} members • {group.posts} posts today
                    </p>
                  </div>
                  <button
                    className={`px-3 py-1 rounded-full text-sm ${
                      group.isJoined
                        ? 'bg-gray-100 text-gray-600'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {group.isJoined ? 'Joined' : 'Join'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}