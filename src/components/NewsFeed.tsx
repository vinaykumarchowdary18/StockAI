import React from 'react';
import { ExternalLink } from 'lucide-react';

const newsItems = [
  {
    title: "Apple's AI Strategy: A Game-Changer for Stock Performance",
    source: "TechInsights",
    time: "2h ago",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Federal Reserve Hints at Rate Cuts, Markets Rally",
    source: "MarketWatch",
    time: "4h ago",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Tech Sector Leads Market Surge Amid AI Boom",
    source: "Bloomberg",
    time: "6h ago",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

export default function NewsFeed() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Latest News</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <div key={index} className="flex space-x-4 p-3 hover:bg-gray-50 rounded-lg transition">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <span>{item.source}</span>
                <span className="mx-2">•</span>
                <span>{item.time}</span>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}