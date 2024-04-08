
async function updateWorkshop(workshopId, type) {
  const url = `${import.meta.env.VITE_API_URL}/workshops/${workshopId}/`;
  const token = window.localStorage.getItem('token');
  const data = type === "authorise" && {is_open: true}
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Token " + token
    },
    body: JSON.stringify(data)
  })
  if(!res.ok) {
    const fallbackError = "Error fetching update workshop";
    const data = await res.json().catch(() => {
      throw new Error(fallbackError)
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await res.json();
}

export default updateWorkshop;