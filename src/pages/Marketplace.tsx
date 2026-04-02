import { useState } from "react";
import Navbar from "@/components/Navbar";
import RewardCard from "@/components/RewardCard";
import { rewards, currentUser, type Reward } from "@/data/mockData";
import { toast } from "sonner";

/**
 * Marketplace Page - Browse and redeem rewards using points
 */
const Marketplace = () => {
  const [points, setPoints] = useState(currentUser.points);

  const handleRedeem = (reward: Reward) => {
    setPoints((prev) => prev - reward.pointsRequired);
    toast.success(`Redeemed "${reward.title}"! 🎉`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h1 className="text-2xl font-bold text-foreground">Marketplace</h1>
          <span className="bg-secondary text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            {points} pts available
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rewards.map((reward) => (
            <RewardCard
              key={reward.id}
              reward={reward}
              userPoints={points}
              onRedeem={handleRedeem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
