import React from 'react';
import { BookOpen, CheckCircle, Clock, Award } from 'lucide-react';

const StatCard = ({ title, value, change, icon: Icon, color }) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5">
      <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-10 ${color}`} />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-600">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
          {change && (
            <p className="mt-1 text-xs text-slate-500">{change}</p>
          )}
        </div>
        <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${color.replace('bg-', 'bg-opacity-10 bg-')} text-white`}> 
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

const StatsGrid = () => {
  const stats = [
    { title: 'Enrolled Courses', value: 8, change: '+2 this month', icon: BookOpen, color: 'bg-indigo-600' },
    { title: 'Completed', value: 14, change: '+1 this week', icon: CheckCircle, color: 'bg-emerald-600' },
    { title: 'Learning Hours', value: '72h', change: 'Last 30 days', icon: Clock, color: 'bg-amber-600' },
    { title: 'Certificates', value: 3, change: 'Great progress', icon: Award, color: 'bg-rose-600' },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((s) => (
        <StatCard key={s.title} {...s} />
      ))}
    </section>
  );
};

export default StatsGrid;
