
export default async function postWorkshop(formData) {
  const url = `${import.meta.env.VITE_API_URL}/workshops/`;
  const token = window.localStorage.getItem('token');
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": "Token " + token
    },
    body: formData
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
