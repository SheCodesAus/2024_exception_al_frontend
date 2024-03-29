
export default async function getUser(userId) {
  const url = `${import.meta.env.VITE_API_URL}/user/${userId}`;
  const res = await fetch(url, { method: "GET" });
  if (!res.ok) {
    const fallbackError = `Error fetching user with id ${userId}`;
    const data = await res.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await res.json();
}
