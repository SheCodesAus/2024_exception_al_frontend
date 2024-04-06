
export default async function postEOI(data) {
  const url = `${import.meta.env.VITE_API_URL}/eois/`;
  const token = window.localStorage.getItem('token');
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Token " + token
    },
    body: JSON.stringify({
      "workshop": data.workshopId,
      "eoi_type": data.type,
    })
  })
  if(!res.ok) {
    const fallbackError = "Error trying to post workshop";
    const data = await res.json().catch(() => {
      throw new Error(fallbackError)
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await res.json();
}
