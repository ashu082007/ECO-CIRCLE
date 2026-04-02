import Navbar from "@/components/Navbar";
import StatusBadge from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activities, currentUser } from "@/data/mockData";

/**
 * My Activities Page - Shows the current user's activity submissions
 */
const Activities = () => {
  const userActivities = activities.filter((a) => a.userId === currentUser.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">My Activities</h1>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Submitted Activities</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Table for larger screens, stacked cards for mobile */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="py-3 pr-4">Activity</th>
                    <th className="py-3 pr-4">Date</th>
                    <th className="py-3 pr-4">Status</th>
                    <th className="py-3 text-right">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {userActivities.map((a) => (
                    <tr key={a.id} className="border-b border-border last:border-0">
                      <td className="py-3 pr-4 font-medium text-foreground">{a.type}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{a.date}</td>
                      <td className="py-3 pr-4"><StatusBadge status={a.status} /></td>
                      <td className="py-3 text-right text-primary font-medium">
                        {a.points > 0 ? `+${a.points}` : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile view */}
            <div className="sm:hidden space-y-4">
              {userActivities.map((a) => (
                <div key={a.id} className="border border-border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{a.type}</span>
                    <StatusBadge status={a.status} />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{a.date}</span>
                    <span className="text-primary font-medium">
                      {a.points > 0 ? `+${a.points} pts` : "—"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Activities;
