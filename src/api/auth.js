const apiUrl = process.env.REACT_APP_API_URL || "";

export async function signUp({ username, password }) {
  const response = await fetch(`${apiUrl}/auth/signup`, {
    method: "POST",
    // Send all cookies with this request.
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }

  return await response.json();
}

export async function logIn({ username, password }) {
  const response = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    // Send all cookies with this request.
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }

  return await response.json();
}

export async function getCurrentUser() {
  const response = await fetch(`${apiUrl}/auth/user`, {
    method: "GET",
    // Send all cookies with this request.
    credentials: "include",
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }

  return await response.json();
}

export async function logout() {
  const response = await fetch(`${apiUrl}/auth/logout`, {
    method: "GET",
    // Send all cookies with this request.
    credentials: "include",
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }

  return await response.json();
}
