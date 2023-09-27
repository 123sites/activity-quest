const apiUrl = process.env.REACT_APP_API_URL || "";

export async function getRecentEvents(lat, long) {
  const response = await fetch(`${apiUrl}/events/${lat}/${long}`);

  if (!response.ok) {
    const data = await response.json();
    console.error(data);
    throw new Error(data.message);
  }

  return await response.json();
}
