export const runApiRequest = async (method, url, body = "") => {
  try {
    if (!url || !method) {
      return {
        ok: false,
        error: "Missing URL or method",
      };
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;

    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const options = {
      method,
      headers,
      credentials: "include", 
    };

    if (method !== "GET" && body) {
      try {
        options.body = JSON.stringify(JSON.parse(body));
      } catch (err) {
        return {
          ok: false,
          error: "Invalid JSON in request body",
        };
      }
    }

    const response = await fetch(url, options);

    const contentType = response.headers.get("content-type");
    const data = contentType?.includes("application/json")
      ? await response.json()
      : await response.text();

    return {
      status: response.status,
      ok: response.ok,
      data,
      error: !response.ok ? `Error ${response.status}: ${response.statusText}` : null,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message || "Network request failed",
    };
  }
};
