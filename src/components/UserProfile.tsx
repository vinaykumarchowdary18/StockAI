import React from 'react';
import { User, Mail, LogOut } from 'lucide-react';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserProfile({ isOpen, onClose }: UserProfileProps) {
  if (!isOpen) return null;

  const userData = {
    id: "USR123456",
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "Member since Jan 2024"
  };

  return (
    <div className="absolute right-0 top-16 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 border">
      <div className="px-4 py-3 border-b">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{userData.name}</p>
            <p className="text-xs text-gray-500">ID: {userData.id}</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="flex items-center py-2 text-sm text-gray-700">
          <User className="h-4 w-4 mr-3" />
          Profile Settings
        </div>
        <div className="flex items-center py-2 text-sm text-gray-700">
          <Mail className="h-4 w-4 mr-3" />
          {userData.email}
        </div>
        <button 
          onClick={onClose}
          className="flex items-center w-full py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
        >
          <LogOut className="h-4 w-4 mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
}