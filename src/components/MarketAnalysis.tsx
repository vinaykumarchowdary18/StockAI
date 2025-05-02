import React from 'react';
import { LineChart, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';

const marketInsights = [
  {
    title: "Market Sentiment",
    value: "Bullish",
    change: "+2.3%",
    isPositive: true,
    description: "Overall market sentiment is positive with strong buying pressure"
  },
  {
    title: "Volume Analysis",
    value: "Above Average",
    change: "+15.4%",
    isPositive: true,
    description: "Trading volume is significantly higher than 30-day average"
  },
  {
    title: "Technical Indicators",
    value: "Buy",
    signals: {
      bullish: 12,
      neutral: 5,
      bearish: 3
    }
  }
];

export default function MarketAnalysis() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Market Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {marketInsights.map((insight, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{insight.title}</h3>
              <Info className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold">{insight.value}</span>
              {insight.change && (
                <div className={`ml-2 flex items-center ${
                  insight.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {insight.isPositive ? 
                    <ArrowUpRight className="h-5 w-5" /> : 
                    <ArrowDownRight className="h-5 w-5" />
                  }
                  <span className="ml-1">{insight.change}</span>
                </div>
              )}
            </div>
            {insight.description && (
              <p className="text-sm text-gray-600 mt-2">{insight.description}</p>
            )}
            {insight.signals && (
              <div className="mt-2 flex space-x-2">
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  Buy: {insight.signals.bullish}
                </div>
                <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                  Neutral: {insight.signals.neutral}
                </div>
                <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                  Sell: {insight.signals.bearish}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Market Trend Analysis</h3>
        <div className="h-[400px] w-full bg-gray-50 rounded flex items-center justify-center">
          <LineChart className="h-8 w-8 text-gray-400" />
          <span className="ml-2 text-gray-500">Interactive trend chart would be rendered here</span>
        </div>
      </div>
    </div>
  );
}