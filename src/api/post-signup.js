
export default async function postSignUp(data) {
  const url = `${import.meta.env.VITE_API_URL}/users/`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "username": data.username,
      "first_name": data.firstName,
      "last_name": data.lastName,
      "email": data.email,
      "biography": "",
      "password": data.password,
      "interests": data.interests.join("|"),
      "skills": data.skills.join("|")
    })
  })
  if(!res.ok) {
    const fallbackError = "Error trying to sign up";
    const data = await res.json().catch(() => {
      throw new Error(fallbackError)
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await res.json();
}
