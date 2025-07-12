import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white px-6 py-16 flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-400 mb-6">About Flow<span className="text-white">API</span></h1>

          <p className="text-gray-300 text-lg mb-4">
            <strong>FlowAPI</strong> is a developer-focused tool that helps you streamline your API development workflow. Whether you're building RESTful services, testing endpoints, or managing authentication headers — this tool is designed to make your life easier.
          </p>

          <p className="text-gray-400 mb-4">
            It’s ideal for solo developers, teams, and testers who need a fast, flexible interface to organize and execute API requests. With features like project-based request saving, response previews, and token management, you stay productive and focused.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>🔹 Organize API requests by project</li>
            <li>🔹 Send GET, POST, PUT, DELETE requests</li>
            <li>🔹 Preview structured JSON responses</li>
            <li>🔹 Include headers, body, tokens, and query params</li>
            <li>🔹 Export test flows</li>
            <li>🔹 Built for speed and simplicity</li>
          </ul>

          <p className="text-gray-400 mt-8">
            This app was built using <span className="text-blue-500">React.js</span> and <span className="text-blue-500">Tailwind CSS</span> with a future-proof structure to enable backend testing, token-based authentication, and JSON parsing.
          </p>
        </div>
      </div>
    </>
  );
}
