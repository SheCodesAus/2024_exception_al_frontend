
async function updateUser(userId, formData) {
  const url = `${import.meta.env.VITE_API_URL}/users/${userId}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "username": formData.username,
      "password": formData.password,
    })
  })
  if(!res.ok) {
    const fallbackError = "Please check your username and password and try again.";
    const data = await res.json().catch(() => {
      throw new Error(fallbackError)
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await res.json();
}

export default updateUser;