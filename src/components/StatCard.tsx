import { Card, CardContent } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

/**
 * StatCard - Reusable card to display a single statistic
 * Used on Dashboard, Admin pages, etc.
 */
interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

const StatCard = ({ title, value, icon: Icon }: StatCardProps) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-5">
        <div className="rounded-lg bg-secondary p-3">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
