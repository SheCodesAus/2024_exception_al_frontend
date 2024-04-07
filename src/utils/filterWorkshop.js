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
      sortedWorkshops= sortedWorkshops.filter(workshop => workshop.mentor_target < workshop.eois.filter(eoi => eoi.eoi_type=== "Mentor").length);
      break;
    case "learn":
      sortedWorkshops = sortedWorkshops.filter(workshop => workshop.attendee_target < workshop.eois.filter(eoi => eoi.eoi_type=== "Attend").length);
  }

  if (filters.category) {
    if(filters.category === "none") return sortedWorkshops;
    sortedWorkshops = sortedWorkshops.filter(workshop => workshop.category === filters.category);
  }

  return sortedWorkshops;
}