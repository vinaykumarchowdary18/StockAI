import React from 'react';
import { Star, TrendingUp, TrendingDown, Bell } from 'lucide-react';

const watchlistData = [
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 721.28,
    change: 2.5,
    alerts: [
      { type: "price", value: "Above $700" },
      { type: "volume", value: "Unusual volume" }
    ]
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 185.10,
    change: -1.2,
    alerts: [
      { type: "price", value: "Below $190" }
    ]
  },
  {
    symbol: "META",
    name: "Meta Platforms, Inc.",
    price: 485.92,
    change: 1.8,
    alerts: [
      { type: "technical", value: "Golden cross" }
    ]
  }
];

export default function Watchlist() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Watchlist</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Stock
        </button>
      </div>

      <div className="grid gap-4">
        {watchlistData.map((stock, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <h3 className="text-lg font-semibold ml-2">{stock.symbol}</h3>
                </div>
                <p className="text-sm text-gray-600">{stock.name}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">${stock.price}</p>
                <div className={`flex items-center justify-end ${
                  stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stock.change >= 0 ? 
                    <TrendingUp className="h-4 w-4 mr-1" /> : 
                    <TrendingDown className="h-4 w-4 mr-1" />
                  }
                  {Math.abs(stock.change)}%
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center text-sm text-gray-600">
                <Bell className="h-4 w-4 mr-2" />
                <span>Active Alerts:</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {stock.alerts.map((alert, alertIndex) => (
                  <span 
                    key={alertIndex}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {alert.value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}