import React from 'react';
import { Home, BookOpen, Users, Calendar, Settings, LogOut } from 'lucide-react';

const navItems = [
  { name: 'Overview', icon: Home },
  { name: 'My Courses', icon: BookOpen },
  { name: 'Community', icon: Users },
  { name: 'Calendar', icon: Calendar },
  { name: 'Settings', icon: Settings },
];

const Sidebar = ({ active, setActive, open }) => {
  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-r border-slate-200 transform transition-transform duration-300 ${
        open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <div className="h-16 border-b border-slate-200 px-6 flex items-center font-semibold text-slate-900">
        LearnSphere
      </div>
      <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
        {navItems.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
              active === name
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{name}</span>
          </button>
        ))}
        <div className="pt-4 mt-4 border-t border-slate-200">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-rose-600 hover:bg-rose-50">
            <LogOut className="h-5 w-5" />
            <span>Sign out</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
