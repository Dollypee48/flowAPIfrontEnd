import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RequestEditor from "../components/RequestEditor";
import ResponseViewer from "../components/ResponseViewer";
import ExportButton from "../components/ExportButton";

export default function Dashboard() {
  const [currentProject, setCurrentProject] = useState(null);
  const [response, setResponse] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar onProjectSelect={setCurrentProject} />

        <main className="flex-1 p-6 overflow-auto">
          {/* Header and Project Controls */}
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-blue-400">FlowAPI</h1>
              <p className="text-sm text-gray-400">
                Project:{" "}
                <span className="font-medium text-blue-300">
                  {currentProject?.name || "None selected"}
                </span>
              </p>
            </div>

            {/* Only show Export when a project is selected */}
            {currentProject && <ExportButton project={currentProject} />}
          </div>

          {/* Request/Response Area */}
          {currentProject ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RequestEditor
                project={currentProject}
                setResponse={setResponse}
              />
              <ResponseViewer response={response} />
            </div>
          ) : (
            <div className="text-center text-gray-400 mt-10">
              Select or add a project to get started.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
