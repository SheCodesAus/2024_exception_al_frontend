async function deleteEOI(eoiId) {
  const url = `${import.meta.env.VITE_API_URL}/eoi/${eoiId}/`;
  const token = window.localStorage.getItem('token');
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Authorization": "Token " + token
    }
  })
  if (!response.ok) {
    const fallbackError = "Error deleting eoi with id " + eoiId;

    const data = await response.json().catch(() => {
     throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await response;
}
export default deleteEOI;
