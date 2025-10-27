import React from 'react';
import { Bell, Search, Settings } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Open sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">LMS Dashboard</h1>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-indigo-500">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search courses, lessons..."
              className="ml-2 bg-transparent outline-none text-sm w-full placeholder-slate-500"
            />
          </div>
          <button className="relative inline-flex items-center justify-center rounded-full h-10 w-10 hover:bg-slate-100">
            <Bell className="h-5 w-5 text-slate-700" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-rose-500 rounded-full ring-2 ring-white" />
          </button>
          <button className="hidden sm:inline-flex items-center justify-center rounded-full h-10 w-10 hover:bg-slate-100">
            <Settings className="h-5 w-5 text-slate-700" />
          </button>
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=13"
              alt="User avatar"
              className="h-9 w-9 rounded-full ring-2 ring-white object-cover"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-slate-900">Alex Johnson</p>
              <p className="text-xs text-slate-500">Student</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
