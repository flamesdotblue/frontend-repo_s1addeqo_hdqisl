import React from 'react';
import { BookOpen, Play, ChevronRight } from 'lucide-react';

const ProgressBar = ({ value }) => (
  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
    <div
      className="h-full bg-indigo-600 rounded-full transition-all"
      style={{ width: `${value}%` }}
    />
  </div>
);

const CourseItem = ({ title, category, lessons, progress, color }) => {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${color} text-white shadow`}> 
          <BookOpen className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-slate-900 truncate">{title}</h3>
            <span className="text-xs text-slate-500 whitespace-nowrap">{lessons} lessons</span>
          </div>
          <p className="text-sm text-slate-500 mt-0.5">{category}</p>
          <div className="flex items-center gap-3 mt-3">
            <ProgressBar value={progress} />
            <span className="text-xs text-slate-600 w-8 text-right">{progress}%</span>
          </div>
          <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
            <Play className="h-4 w-4" /> Continue
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CourseList = () => {
  const courses = [
    { title: 'Modern JavaScript Mastery', category: 'Programming', lessons: 48, progress: 62, color: 'bg-indigo-600' },
    { title: 'UI/UX Design Foundations', category: 'Design', lessons: 32, progress: 35, color: 'bg-rose-600' },
    { title: 'Data Analysis with Python', category: 'Data Science', lessons: 40, progress: 80, color: 'bg-emerald-600' },
    { title: 'Product Management Essentials', category: 'Business', lessons: 28, progress: 18, color: 'bg-amber-600' },
  ];

  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-slate-900">Continue Learning</h2>
        <button className="text-sm text-slate-600 hover:text-slate-900">View all</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
        {courses.map((c) => (
          <CourseItem key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
};

export default CourseList;
