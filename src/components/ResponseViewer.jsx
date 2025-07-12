export default function ResponseViewer({ response }) {
  
  return (
    <div className="w-full p-4 bg-gray-900 text-white border border-gray-700 rounded-xl">
      <h3 className="text-lg font-semibold text-green-400 mb-4">
        Response Output
      </h3>

      
      {!response && (
        <div className="bg-gray-800 text-gray-400 p-4 rounded text-sm">
          🕒 Waiting for response... Send a request to see the output here.
        </div>
      )}

     
      {response?.error && (
        <div className="bg-red-800 text-red-200 p-4 rounded text-sm">
          ❌ Error: {response.error}
        </div>
      )}

     
      {response?.data && (
        <pre className="bg-gray-800 text-green-300 p-4 rounded text-sm font-mono overflow-auto max-h-[500px] whitespace-pre-wrap">
          {typeof response.data === "object"
            ? JSON.stringify(response.data, null, 2)
            : response.data}
        </pre>
      )}
    </div>
  );
}
