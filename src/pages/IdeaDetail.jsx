export default function LoginPage() {
  // const link for idea data HERE
  return (
    <>
      <section>
        <img src={ideaData.image} alt={ideaData.description}></img>
        <h2>{ideaData.title}</h2>
        <p>{ideaData.description}</p>
      </section>
      <section>
        {/* workshop EOIs number */}
        {/* mentor EOI number */}
      </section>
      <section>
        <p>{ideaData.attendees}</p>
        <p>{ideaData.mentors}</p>
        <p>{ideaData.organiser}</p>
      </section>
    </>
  );
}
