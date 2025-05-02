import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MarketOverview from './components/MarketOverview';
import StockChart from './components/StockChart';
import NewsFeed from './components/NewsFeed';
import MarketAnalysis from './components/MarketAnalysis';
import Portfolio from './components/Portfolio';
import Watchlist from './components/Watchlist';
import Learning from './components/Learning';
import Community from './components/Community';
import Settings from './components/Settings';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'market-analysis':
        return <MarketAnalysis />;
      case 'news':
        return <NewsFeed />;
      case 'portfolio':
        return <Portfolio />;
      case 'watchlist':
        return <Watchlist />;
      case 'learning':
        return <Learning />;
      case 'community':
        return <Community />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <MarketOverview />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <StockChart />
              </div>
              <div>
                <NewsFeed />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="flex pt-16">
        <Sidebar onViewChange={setCurrentView} currentView={currentView} />
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          {renderView()}
        </main>
      </div>
    </div>
  );
}

export default App;