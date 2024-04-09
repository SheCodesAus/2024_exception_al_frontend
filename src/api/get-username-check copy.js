export default async function checkUsername(username) {
  const url = `${import.meta.env.VITE_API_URL}/user/check_username/?username=${encodeURIComponent(username)}`;
  const res = await fetch(url, { method: "GET" });
  if (!res.ok) {
    throw new Error(`Error checking username`);
  }
  const data = await res.json();
  return data.username_exists;
}