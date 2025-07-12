import { useState, useEffect } from "react";
import { runApiRequest } from "../utils/apiRunner";

export default function RequestEditor({ project, setResponse }) {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("{}");

  const handleSend = async () => {
    const result = await runApiRequest(method, url, body);
    setResponse(result);

    
    const allProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const updated = allProjects.map((p) =>
      p.id === project.id
        ? {
            ...p,
            requests: [
              ...(p.requests || []),
              {
                method,
                url,
                body: method !== "GET" ? body : "",
                response: result,
                timestamp: new Date().toISOString(),
              },
            ],
          }
        : p
    );
    localStorage.setItem("projects", JSON.stringify(updated));
  };

  return (
    <div className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white">
      <h3 className="text-lg font-semibold text-blue-400 mb-4">
        Build Your Request
      </h3>

      <div className="flex flex-col md:flex-row items-stretch gap-3 mb-4">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="bg-gray-900 text-white border border-gray-600 rounded px-3 py-2"
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter API URL"
          className="flex-1 bg-gray-900 text-white border border-gray-600 rounded px-3 py-2"
        />

        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
        >
          Send
        </button>
      </div>

      {method !== "GET" && (
        <>
          <label className="block text-sm text-gray-300 mb-2">
            Request Body (JSON)
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="10"
            className="w-full bg-gray-900 text-green-200 border border-gray-700 rounded p-3 text-sm font-mono"
            placeholder='{"key": "value"}'
          />
        </>
      )}
    </div>
  );
}
