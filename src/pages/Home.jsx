import { Link } from "react-router-dom";
import { CheckCircle, PlayCircle, Zap, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Welcome to <span className="text-white">FlowAPI</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Build, test, and organize API requests with ease. Save your test flows, manage authentication, and export or share them across teams.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">What You Can Do</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 mt-1" />
              <span>Save API endpoints per project</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 mt-1" />
              <span>Run tests with full JSON response view</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 mt-1" />
              <span>Manage auth headers, tokens & query params</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 mt-1" />
              <span>Export test flows as JSON files</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 mt-1" />
              <span>Beautiful, responsive, and intuitive interface</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-900 py-20 px-4 border-t border-gray-700">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <PlayCircle className="text-blue-400 w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">1. Create Project</h3>
              <p className="text-gray-400 text-sm">
                Start by creating a project to organize your requests.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <Zap className="text-green-400 w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">2. Build Requests</h3>
              <p className="text-gray-400 text-sm">
                Choose your method, enter the URL, and add headers or body.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <Send className="text-yellow-400 w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">3. Test & Export</h3>
              <p className="text-gray-400 text-sm">
                View response, save requests, and export test flows.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
