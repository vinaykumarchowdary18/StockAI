import React, { useState } from 'react';
import { Moon, Sun, Bell, Lock, User, LogOut } from 'lucide-react';

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {isDarkMode ? <Moon className="h-5 w-5 mr-3" /> : <Sun className="h-5 w-5 mr-3" />}
              <div>
                <p className="font-medium">Theme</p>
                <p className="text-sm text-gray-500">Switch between light and dark mode</p>
              </div>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{ backgroundColor: isDarkMode ? '#3B82F6' : '#E5E7EB' }}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isDarkMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="flex items-center">
            <Bell className="h-5 w-5 mr-3" />
            <div>
              <p className="font-medium">Notifications</p>
              <p className="text-sm text-gray-500">Manage your notification preferences</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="flex items-center">
            <Lock className="h-5 w-5 mr-3" />
            <div>
              <p className="font-medium">Security</p>
              <p className="text-sm text-gray-500">Update your security settings</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="flex items-center">
            <User className="h-5 w-5 mr-3" />
            <div>
              <p className="font-medium">Account</p>
              <p className="text-sm text-gray-500">Manage your account details</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <button className="flex items-center text-red-600 hover:text-red-700">
            <LogOut className="h-5 w-5 mr-3" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}