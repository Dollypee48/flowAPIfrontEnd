export default function ProjectList({ projects = [], onSelect }) {
  return (
    <div className="mt-4">
      <h2 className="text-md font-semibold mb-2">Your Projects</h2>
      <ul className="space-y-2">
        {projects.length === 0 ? (
          <li className="text-sm text-gray-500">No projects yet.</li>
        ) : (
          projects.map((project, index) => (
            <li
              key={index}
              onClick={() => onSelect(project)}
              className="bg-white p-2 rounded shadow text-sm cursor-pointer hover:bg-blue-100"
            >
              {project.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}