import { useState } from "react";
import Navbar from "@/components/Navbar";
import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activities as initialActivities, type Activity } from "@/data/mockData";
import { toast } from "sonner";

/**
 * Admin Review Activities Page - Approve or reject pending activities
 */
const AdminReview = () => {
  const [activityList, setActivityList] = useState<Activity[]>(initialActivities);

  const updateStatus = (id: number, newStatus: "Approved" | "Rejected") => {
    setActivityList((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, status: newStatus, points: newStatus === "Approved" ? 150 : 0 }
          : a
      )
    );
    toast.success(`Activity ${newStatus.toLowerCase()}!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">Review Activities</h1>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">All Submitted Activities</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-3 pr-4">User</th>
                  <th className="py-3 pr-4">Activity</th>
                  <th className="py-3 pr-4">Date</th>
                  <th className="py-3 pr-4">Status</th>
                  <th className="py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {activityList.map((a) => (
                  <tr key={a.id} className="border-b border-border last:border-0">
                    <td className="py-3 pr-4 text-foreground">{a.userName}</td>
                    <td className="py-3 pr-4 font-medium text-foreground">{a.type}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{a.date}</td>
                    <td className="py-3 pr-4"><StatusBadge status={a.status} /></td>
                    <td className="py-3 text-right">
                      {a.status === "Pending" ? (
                        <div className="flex justify-end gap-2">
                          <Button size="sm" onClick={() => updateStatus(a.id, "Approved")}>
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => updateStatus(a.id, "Rejected")}>
                            Reject
                          </Button>
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-xs">Done</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminReview;
