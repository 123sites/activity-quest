export async function getRecentEvents(lat, long) {
  const response = await fetch(`/events/${lat}/${long}`);

  if (!response.ok) {
    const data = await response.json();
    console.error(data);
    throw new Error(data.message);
  }

  return await response.json();
}
