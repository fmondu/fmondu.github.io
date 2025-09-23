import type { FC } from 'react'

const App: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Fabio Monsalve
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern React TypeScript application built with Vite and Tailwind CSS, deployed on GitHub Pages
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Performance</h3>
              <p className="text-gray-600">Built with modern React and optimized for speed and performance.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Beautiful Design</h3>
              <p className="text-gray-600">Crafted with Tailwind CSS for a modern and responsive design.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Deployment</h3>
              <p className="text-gray-600">Automatically deployed to GitHub Pages with every push to main.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              This is your starting point. Customize this page to showcase your projects and skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                View Projects
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </main>

        <footer className="text-center mt-16 text-gray-500">
          <p>&copy; 2025 Fabio Monsalve. Built with React, TypeScript, Vite and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}

export default App
