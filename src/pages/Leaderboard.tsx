import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { users } from "@/data/mockData";
import { Trophy } from "lucide-react";

/**
 * Leaderboard Page - Shows top users ranked by points
 */
const Leaderboard = () => {
  const sorted = [...users].sort((a, b) => b.points - a.points);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-primary" /> Leaderboard
        </h1>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Eco Contributors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-0">
            {sorted.map((user, index) => (
              <div
                key={user.id}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    index === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}>
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.badge}</p>
                  </div>
                </div>
                <span className="font-semibold text-primary">{user.points} pts</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
