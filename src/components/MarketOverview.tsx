import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const marketData = [
  { 
    symbol: 'NASDAQ', 
    price: '16,248.52', 
    change: '+1.25%', 
    up: true,
    details: {
      volume: "2.1B",
      high: "16,302.24",
      low: "16,198.12",
      marketCap: "$21.4T"
    }
  },
  { 
    symbol: 'S&P 500', 
    price: '4,783.45', 
    change: '+0.87%', 
    up: true,
    details: {
      volume: "1.8B",
      high: "4,790.12",
      low: "4,775.34",
      marketCap: "$38.2T"
    }
  },
  { 
    symbol: 'DOW', 
    price: '37,592.98', 
    change: '-0.12%', 
    up: false,
    details: {
      volume: "892M",
      high: "37,622.45",
      low: "37,558.23",
      marketCap: "$11.8T"
    }
  },
  { 
    symbol: 'BTC/USD', 
    price: '52,341.65', 
    change: '+2.54%', 
    up: true,
    details: {
      volume: "$42.5B",
      high: "52,890.12",
      low: "51,234.56",
      marketCap: "$1.02T"
    }
  }
];

export default function MarketOverview() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {marketData.map((item, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-xl"
          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{item.symbol}</h3>
              <p className="text-2xl font-bold mt-1">{item.price}</p>
            </div>
            <div className={`flex items-center ${
              item.up ? 'text-green-600' : 'text-red-600'
            }`}>
              {item.up ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
              <span className="ml-1 font-medium">{item.change}</span>
            </div>
          </div>

          {expandedIndex === index && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Volume</p>
                  <p className="text-sm font-medium">{item.details.volume}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Market Cap</p>
                  <p className="text-sm font-medium">{item.details.marketCap}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Day High</p>
                  <p className="text-sm font-medium">{item.details.high}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Day Low</p>
                  <p className="text-sm font-medium">{item.details.low}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}