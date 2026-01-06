import { fetchLeadersSample, fetchAllLeaders } from "@/lib/data/leadership";
import { DashboardClient } from "./DashboardClient";

export default async function DashboardPage() {
  // Fetch 50 leaders with real voting data enrichment for first 10
  const leaders = await fetchLeadersSample(50, true);
  const featuredLeader = leaders[0];
  
  // Fetch all leaders for category dashboard
  const allLeaders = await fetchAllLeaders();

  return (
    <DashboardClient 
      initialFeaturedLeader={featuredLeader}
      allLeaders={allLeaders}
    />
  );
}
