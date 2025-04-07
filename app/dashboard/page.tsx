export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-5 shadow-lg">
        <h2 className="text-xl font-bold text-gray-700">E-Learning Dashboard</h2>
        <nav className="mt-5">
          <ul>
            <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Courses</li>
            <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Quizzes</li>
            <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Settings</li>
          </ul>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center pb-5 border-b">
          <h1 className="text-2xl font-semibold">Welcome to Your E-Learning Dashboard</h1>
          <button  className=" href bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">Logout</button>
        </header>
        
        {/* Stats */}
        <section className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-gray-600">Enrolled Courses</h3>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-gray-600">Completed Quizzes</h3>
            <p className="text-2xl font-bold">15</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-gray-600">Achievements</h3>
            <p className="text-2xl font-bold">5 Badges</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className=" text-amber-50"> categories </h3>
            <p className=" text-2xl font-bold"> many of coures </p>
          </div>
        </section>
      </main>
    </div>

          
          

  );
}