export function applyFilters(workshops, filters) {
  let sortedWorkshops = [...workshops];

  switch (filters.date) {
    case "newest":
      sortedWorkshops.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      break;
    case "oldest":
      sortedWorkshops.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      break;
    default:
      break;
  }

  switch (filters.audience) {
    case "mentor":
      sortedWorkshops = sortedWorkshops.filter(workshop => {
        const mentorEOIs = workshop.eois.filter(eoi => eoi.eoi_type === "Mentor");
        return mentorEOIs.length < workshop.mentor_target;
      });
      break;
    case "learn":
      sortedWorkshops = sortedWorkshops.filter(workshop => {
        const attendeeEOIs = workshop.eois.filter(eoi => eoi.eoi_type === "Attend");
        return attendeeEOIs.length < workshop.attendee_target;
      });
      break;
    default:
      // Handle default case
      break;
  }

  if (filters.category) {
    if(filters.category === "none") return sortedWorkshops;
    sortedWorkshops = sortedWorkshops.filter(workshop => workshop.category === filters.category);
  }

  return sortedWorkshops;
}