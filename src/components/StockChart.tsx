import React, { useState, useEffect, useRef } from 'react';
import { createChart, ColorType, IChartApi, ISeriesApi, LineData } from 'lightweight-charts';
import { ZoomIn, ZoomOut, MousePointer, Maximize2, Download } from 'lucide-react';

interface ChartData {
  time: string;
  value: number;
}

const generateData = (days: number, startPrice: number = 180): ChartData[] => {
  const data: ChartData[] = [];
  let currentPrice = startPrice;
  
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (days - i));
    
    currentPrice += (Math.random() - 0.5) * 2;
    if (i % 7 === 0) currentPrice += (Math.random() - 0.5) * 5;
    
    data.push({
      time: date.toISOString().split('T')[0],
      value: parseFloat(currentPrice.toFixed(2))
    });
  }
  
  return data;
};

const timeRangeData = {
  '1D': generateData(1, 182.63),
  '1W': generateData(7, 180),
  '1M': generateData(30, 175),
  '3M': generateData(90, 170),
  '1Y': generateData(365, 160),
  '5Y': generateData(1825, 120)
};

export default function StockChart() {
  const [selectedRange, setSelectedRange] = useState('1M');
  const [zoomLevel, setZoomLevel] = useState(1);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<'Line'> | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.5));

  // Initialize chart
  useEffect(() => {
    const container = chartContainerRef.current;
    if (!container) return;

    const chart = createChart(container, {
      layout: {
        background: { type: ColorType.Solid, color: '#ffffff' },
        textColor: '#333',
      },
      grid: {
        vertLines: { color: '#f0f0f0' },
        horzLines: { color: '#f0f0f0' },
      },
      width: container.clientWidth,
      height: 400,
      timeScale: {
        timeVisible: true,
        borderColor: '#D1D5DB',
      },
    });

    const lineSeries = chart.addLineSeries({
      color: '#2563eb',
      lineWidth: 2,
      crosshairMarkerVisible: true,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: '#2563eb',
      crosshairMarkerBackgroundColor: '#ffffff',
    });

    // Set initial data
    const initialData = timeRangeData[selectedRange];
    lineSeries.setData(initialData);

    chartRef.current = chart;
    seriesRef.current = lineSeries;

    // Handle resize
    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0] && chartRef.current) {
        const { width } = entries[0].contentRect;
        chartRef.current.applyOptions({ width });
      }
    });

    resizeObserver.observe(container);
    resizeObserverRef.current = resizeObserver;

    return () => {
      resizeObserver.disconnect();
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
        seriesRef.current = null;
      }
    };
  }, []);

  // Update data when range changes
  useEffect(() => {
    if (!seriesRef.current) return;

    const data = timeRangeData[selectedRange];
    seriesRef.current.setData(data);
    
    if (chartRef.current) {
      chartRef.current.timeScale().fitContent();
    }
  }, [selectedRange]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AAPL</h2>
          <div className="flex items-center">
            <span className="text-3xl font-semibold text-gray-900">$182.63</span>
            <span className="ml-2 px-2 py-1 text-sm font-medium text-green-600 bg-green-100 rounded">
              +2.31%
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleZoomIn}
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded"
          >
            <ZoomIn size={20} />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded"
          >
            <ZoomOut size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded">
            <MousePointer size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded">
            <Maximize2 size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded">
            <Download size={20} />
          </button>
        </div>
      </div>
      
      <div 
        ref={chartContainerRef}
        className="w-full transition-transform"
        style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top left' }}
      />
      
      <div className="flex justify-center space-x-4 mt-4">
        {Object.keys(timeRangeData).map((period) => (
          <button
            key={period}
            onClick={() => setSelectedRange(period)}
            className={`px-3 py-1 rounded transition-colors ${
              period === selectedRange
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
}