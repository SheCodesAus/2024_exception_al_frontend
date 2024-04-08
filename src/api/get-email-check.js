export default async function checkEmail(email) {
  const url = `${import.meta.env.VITE_API_URL}/user/check_email/?email=${encodeURIComponent(email)}`;
  const res = await fetch(url, { method: "GET" });
  if (!res.ok) {
    throw new Error(`Error checking email`);
  }
  const data = await res.json();
  return data.email_exists;
}