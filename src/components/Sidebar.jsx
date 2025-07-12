import { useEffect, useState } from "react";

export default function Sidebar({ onProjectSelect }) {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [currentProject, setCurrentProject] = useState(null);

  // Load on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(saved);
    if (saved.length) {
      setCurrentProject(saved[0]);
      onProjectSelect(saved[0]);
    }
  }, []);

  // Save to localStorage
  const saveProjects = (updated) => {
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
  };

  const handleAdd = () => {
    if (!projectName.trim()) return;
    const newProject = {
      id: Date.now(),
      name: projectName.trim(),
      requests: [],
    };
    const updated = [...projects, newProject];
    saveProjects(updated);
    setProjectName("");
    setCurrentProject(newProject);
    onProjectSelect(newProject);
  };

  const handleDelete = (id) => {
    const updated = projects.filter((p) => p.id !== id);
    saveProjects(updated);
    if (currentProject?.id === id && updated.length > 0) {
      setCurrentProject(updated[0]);
      onProjectSelect(updated[0]);
    } else if (updated.length === 0) {
      setCurrentProject(null);
      onProjectSelect(null);
    }
  };

  const handleSelect = (project) => {
    setCurrentProject(project);
    onProjectSelect(project);
  };

  return (
    <aside className="w-full md:w-64 bg-gray-800 text-white h-full p-5 border-r border-gray-700">
      <h2 className="text-lg font-semibold mb-4 text-blue-400">Projects</h2>

      <ul className="space-y-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className={`flex justify-between items-center p-2 rounded cursor-pointer ${
              currentProject?.id === project.id
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-blue-500"
            }`}
          >
            <span onClick={() => handleSelect(project)} className="flex-1 truncate">
              {project.name}
            </span>
            <button
              onClick={() => handleDelete(project.id)}
              className="ml-2 text-red-300 text-xs hover:text-red-500"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="New project name"
          className="w-full bg-gray-900 text-white border border-gray-600 px-3 py-2 rounded text-sm"
        />
        <button
          onClick={handleAdd}
          className="w-full bg-blue-500 hover:bg-blue-600 mt-2 text-white py-2 rounded text-sm font-medium"
        >
          + Add Project
        </button>
      </div>
    </aside>
  );
}
