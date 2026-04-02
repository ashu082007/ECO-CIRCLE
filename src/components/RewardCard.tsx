import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Reward } from "@/data/mockData";

/**
 * RewardCard - Displays a single reward in the marketplace
 */
interface RewardCardProps {
  reward: Reward;
  userPoints: number;
  onRedeem: (reward: Reward) => void;
}

const RewardCard = ({ reward, userPoints, onRedeem }: RewardCardProps) => {
  const canAfford = userPoints >= reward.pointsRequired;

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      {/* Emoji icon as image placeholder */}
      <div className="bg-secondary flex items-center justify-center h-32 text-5xl">
        {reward.image}
      </div>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold text-foreground">{reward.title}</h3>
        <p className="text-sm text-muted-foreground">{reward.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-primary">{reward.pointsRequired} pts</span>
          <Button
            size="sm"
            disabled={!canAfford}
            onClick={() => onRedeem(reward)}
          >
            {canAfford ? "Redeem" : "Not enough pts"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RewardCard;
