export function methodColor(method) {
  switch (method.toUpperCase()) {
    case "GET":
      return "text-green-600";
    case "POST":
      return "text-blue-600";
    case "PUT":
      return "text-yellow-600";
    case "DELETE":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
}