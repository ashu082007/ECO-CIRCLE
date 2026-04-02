import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import { users, activities, rewards, redeemedRewards } from "@/data/mockData";
import { Users, CheckCircle, Star, Gift } from "lucide-react";

/**
 * Admin Dashboard - Overview stats for admin
 */
const AdminDashboard = () => {
  const approvedActivities = activities.filter((a) => a.status === "Approved").length;
  const totalPointsIssued = activities.reduce((sum, a) => sum + a.points, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Users" value={users.length} icon={Users} />
          <StatCard title="Approved Activities" value={approvedActivities} icon={CheckCircle} />
          <StatCard title="Points Issued" value={totalPointsIssued} icon={Star} />
          <StatCard title="Rewards Redeemed" value={redeemedRewards.length} icon={Gift} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
