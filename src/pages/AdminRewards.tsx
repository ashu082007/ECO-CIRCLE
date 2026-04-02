import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { rewards as initialRewards, type Reward } from "@/data/mockData";
import { toast } from "sonner";
import { Plus, Trash2, Pencil } from "lucide-react";

/**
 * Admin Manage Rewards Page - Add, edit, or remove rewards
 */
const AdminRewards = () => {
  const [rewardList, setRewardList] = useState<Reward[]>(initialRewards);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ title: "", description: "", pointsRequired: "", image: "🎁" });

  const resetForm = () => {
    setForm({ title: "", description: "", pointsRequired: "", image: "🎁" });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSave = () => {
    if (!form.title || !form.pointsRequired) {
      toast.error("Please fill in title and points.");
      return;
    }

    if (editingId !== null) {
      setRewardList((prev) =>
        prev.map((r) =>
          r.id === editingId
            ? { ...r, title: form.title, description: form.description, pointsRequired: Number(form.pointsRequired), image: form.image }
            : r
        )
      );
      toast.success("Reward updated!");
    } else {
      const newReward: Reward = {
        id: Date.now(),
        title: form.title,
        description: form.description,
        pointsRequired: Number(form.pointsRequired),
        image: form.image,
      };
      setRewardList((prev) => [...prev, newReward]);
      toast.success("Reward added!");
    }
    resetForm();
  };

  const handleEdit = (reward: Reward) => {
    setForm({
      title: reward.title,
      description: reward.description,
      pointsRequired: String(reward.pointsRequired),
      image: reward.image,
    });
    setEditingId(reward.id);
    setShowForm(true);
  };

  const handleRemove = (id: number) => {
    setRewardList((prev) => prev.filter((r) => r.id !== id));
    toast.success("Reward removed.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Manage Rewards</h1>
          <Button onClick={() => { resetForm(); setShowForm(!showForm); }}>
            <Plus className="w-4 h-4 mr-1" /> Add Reward
          </Button>
        </div>

        {/* Add/Edit form */}
        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{editingId ? "Edit Reward" : "New Reward"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              <Input placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              <Input placeholder="Points Required" type="number" value={form.pointsRequired} onChange={(e) => setForm({ ...form, pointsRequired: e.target.value })} />
              <Input placeholder="Emoji icon (e.g. 🎍)" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
              <div className="flex gap-2">
                <Button onClick={handleSave}>{editingId ? "Update" : "Add"}</Button>
                <Button variant="outline" onClick={resetForm}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Rewards list */}
        <Card>
          <CardContent className="p-0">
            {rewardList.map((r) => (
              <div key={r.id} className="flex items-center justify-between px-5 py-4 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{r.image}</span>
                  <div>
                    <p className="font-medium text-foreground">{r.title}</p>
                    <p className="text-sm text-muted-foreground">{r.pointsRequired} pts</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" onClick={() => handleEdit(r)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => handleRemove(r.id)}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminRewards;
