import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import StatsGrid from './components/StatsGrid.jsx';
import CourseList from './components/CourseList.jsx';

function App() {
  const [active, setActive] = useState('Overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Sidebar + Content */}
      <div className="flex">
        <Sidebar active={active} setActive={setActive} open={sidebarOpen} />
        <div className="flex-1 min-w-0 lg:ml-0">
          <Header onMenuClick={() => setSidebarOpen((s) => !s)} />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Page heading */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-900">Welcome back, Alex</h2>
              <p className="text-slate-600 mt-1">Here is an overview of your learning journey.</p>
            </div>

            <StatsGrid />
            <CourseList />

            {/* Announcements */}
            <section className="mt-8">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-900">Announcements</h3>
                <ul className="mt-3 space-y-3">
                  <li className="text-sm text-slate-700">
                    • New course "AI for Everyone" launches next week. Early-bird discount available now.
                  </li>
                  <li className="text-sm text-slate-700">
                    • Maintenance window on Saturday 1–3am UTC. Some features may be temporarily unavailable.
                  </li>
                  <li className="text-sm text-slate-700">• Join the live Q&A session with mentors this Friday.</li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/30 lg:hidden"
          aria-label="Close sidebar"
        />
      )}
    </div>
  );
}

export default App;
