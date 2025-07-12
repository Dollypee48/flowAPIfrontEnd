export default function ExportButton({ project }) {
  const handleExport = () => {
    if (!project) return alert("No project selected.");

    const dataStr = JSON.stringify(project, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${project.name.replace(/\s+/g, "_")}_flow.json`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm"
    >
      Export Flow
    </button>
  );
}
