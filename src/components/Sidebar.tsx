import React from 'react';
import { 
  LineChart, 
  Newspaper, 
  TrendingUp, 
  Wallet, 
  Star,
  BookOpen,
  Users,
  Settings
} from 'lucide-react';

interface SidebarProps {
  onViewChange: (view: string) => void;
  currentView: string;
}

const menuItems = [
  { id: 'dashboard', icon: LineChart, label: 'Dashboard' },
  { id: 'market-analysis', icon: TrendingUp, label: 'Market Analysis' },
  { id: 'news', icon: Newspaper, label: 'News Feed' },
  { id: 'portfolio', icon: Wallet, label: 'Portfolio' },
  { id: 'watchlist', icon: Star, label: 'Watchlist' },
  { id: 'learning', icon: BookOpen, label: 'Learning' },
  { id: 'community', icon: Users, label: 'Community' },
  { id: 'settings', icon: Settings, label: 'Settings' }
];

export default function Sidebar({ onViewChange, currentView }: SidebarProps) {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full ${
                    currentView === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-6 w-6 ${
                      currentView === item.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}