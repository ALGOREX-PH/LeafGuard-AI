import React from 'react';
import LiveHealthDashboard from '../components/monitoring/LiveHealthDashboard';
import AlertsRecommendations from '../components/monitoring/AlertsRecommendations';
import PerformanceMetrics from '../components/monitoring/PerformanceMetrics';
import MobileIntegration from '../components/monitoring/MobileIntegration';

export default function RealTimeMonitoring() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-emerald-900/20 to-[#003025]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[28rem] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013')] bg-cover bg-center opacity-20" />
        
        <div className="relative container mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real-Time Monitoring
          </h1>
          <p className="text-xl text-emerald-100/80 mb-8 max-w-3xl">
            Revolutionizing orchard management with continuous leaf health surveillance and instant actionable insights.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Live Health Dashboard */}
        <div className="mb-12">
          <LiveHealthDashboard />
        </div>

        {/* Alerts & Recommendations */}
        <div className="mb-12">
          <AlertsRecommendations />
        </div>

        {/* Performance Metrics */}
        <div className="mb-12">
          <PerformanceMetrics />
        </div>

        {/* Mobile Integration */}
        <div className="mb-12">
          <MobileIntegration />
        </div>
      </div>
    </div>
  );
}