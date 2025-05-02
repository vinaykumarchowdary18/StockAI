import React from 'react';
import { X } from 'lucide-react';

interface NotificationsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Notifications({ isOpen, onClose }: NotificationsProps) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: "AAPL Stock Alert",
      message: "Apple stock has increased by 5% today",
      time: "5 minutes ago",
      type: "alert"
    },
    {
      id: 2,
      title: "Market Update",
      message: "US markets opening bell in 30 minutes",
      time: "25 minutes ago",
      type: "info"
    },
    {
      id: 3,
      title: "Portfolio Update",
      message: "Your watchlist stock TSLA is up by 3%",
      time: "1 hour ago",
      type: "update"
    }
  ];

  return (
    <div className="absolute right-0 top-16 mt-2 w-96 bg-white rounded-lg shadow-lg py-2 border">
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <button onClick={onClose}>
          <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
        </button>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <div className="flex justify-between">
              <p className="text-sm font-medium text-gray-900">{notification.title}</p>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
          </div>
        ))}
      </div>

      <div className="px-4 py-2 border-t">
        <button className="text-sm text-blue-600 hover:text-blue-800">
          Mark all as read
        </button>
      </div>
    </div>
  );
}