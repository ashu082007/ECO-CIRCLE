import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import StatusBadge from "@/components/StatusBadge";
import Navbar from "@/components/Navbar";
import { currentUser, activities, redeemedRewards, GOOGLE_FORM_URL } from "@/data/mockData";
import { Star, Zap, TreePine, ExternalLink } from "lucide-react";

/**
 * User Dashboard - Shows points, badge, recent activities, impact summary
 */
const Dashboard = () => {
  const userActivities = activities.filter((a) => a.userId === currentUser.id);
  const approvedCount = userActivities.filter((a) => a.status === "Approved").length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Greeting */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Hi, {currentUser.name} 👋</h1>
            <p className="text-muted-foreground">{currentUser.badge}</p>
          </div>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button>
              Submit Activity <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="Total Points" value={currentUser.points} icon={Star} />
          <StatCard title="Activities Approved" value={approvedCount} icon={Zap} />
          <StatCard title="Rewards Redeemed" value={redeemedRewards.length} icon={TreePine} />
        </div>

        {/* Recent Activities */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Activities</CardTitle>
            <Link to="/activities" className="text-sm text-primary hover:underline">View all</Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {userActivities.slice(0, 3).map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{activity.type}</p>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge status={activity.status} />
                    {activity.points > 0 && (
                      <span className="text-sm font-medium text-primary">+{activity.points} pts</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Redeemed Rewards */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Rewards Redeemed</CardTitle>
          </CardHeader>
          <CardContent>
            {redeemedRewards.length === 0 ? (
              <p className="text-muted-foreground text-sm">No rewards redeemed yet.</p>
            ) : (
              <div className="space-y-2">
                {redeemedRewards.map((r) => (
                  <div key={r.id} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="text-foreground">{r.rewardTitle}</span>
                    <span className="text-sm text-muted-foreground">-{r.pointsSpent} pts · {r.date}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Impact Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">🌍 Your Impact</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">12 kg</p>
              <p className="text-sm text-muted-foreground">CO₂ Saved</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">Green Trips</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">5 kWh</p>
              <p className="text-sm text-muted-foreground">Solar Generated</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
