async function deleteWorkshop(workshopId) {
  const url = `${import.meta.env.VITE_API_URL}/workshops/${workshopId}/`;
  const token = window.localStorage.getItem('token');
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Authorization": "Token " + token
    }
  })
  if (!response.status === 204) {
    const fallbackError = "Error deleting workshop with id " + workshopId;

    const data = await response.catch(() => {
     throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await response;
}
export default deleteWorkshop;
