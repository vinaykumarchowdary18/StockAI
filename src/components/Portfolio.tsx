import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, PieChart } from 'lucide-react';

const portfolioData = {
  totalValue: 125750.32,
  dayChange: 1250.21,
  dayChangePercent: 1.23,
  holdings: [
    {
      symbol: "AAPL",
      shares: 100,
      avgPrice: 150.25,
      currentPrice: 182.63,
      value: 18263.00,
      change: 12.5,
      weight: 25
    },
    {
      symbol: "MSFT",
      shares: 50,
      avgPrice: 220.15,
      currentPrice: 245.32,
      value: 12266.00,
      change: 8.2,
      weight: 20
    },
    {
      symbol: "GOOGL",
      shares: 30,
      avgPrice: 2100.50,
      currentPrice: 2300.75,
      value: 69022.50,
      change: -2.1,
      weight: 15
    }
  ]
};

export default function Portfolio() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Portfolio</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Investment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Value</p>
              <p className="text-2xl font-bold">${portfolioData.totalValue.toLocaleString()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Day's Change</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-green-600">
                  +${portfolioData.dayChange.toLocaleString()}
                </p>
                <span className="ml-2 text-sm text-green-600">
                  (+{portfolioData.dayChangePercent}%)
                </span>
              </div>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Portfolio Allocation</p>
              <p className="text-2xl font-bold">3 Assets</p>
            </div>
            <PieChart className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {portfolioData.holdings.map((holding, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{holding.symbol}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{holding.shares}</td>
                <td className="px-6 py-4 whitespace-nowrap">${holding.avgPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap">${holding.currentPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap">${holding.value.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`flex items-center ${
                    holding.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {holding.change >= 0 ? 
                      <TrendingUp className="h-4 w-4 mr-1" /> : 
                      <TrendingDown className="h-4 w-4 mr-1" />
                    }
                    {holding.change}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}