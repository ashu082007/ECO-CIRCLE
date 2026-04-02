import { Badge } from "@/components/ui/badge";

/**
 * StatusBadge - Shows activity status with appropriate color
 */
const StatusBadge = ({ status }: { status: "Pending" | "Approved" | "Rejected" }) => {
  const styles = {
    Pending: "bg-warning/15 text-warning border-warning/30",
    Approved: "bg-success/15 text-success border-success/30",
    Rejected: "bg-destructive/15 text-destructive border-destructive/30",
  };

  return (
    <Badge variant="outline" className={styles[status]}>
      {status}
    </Badge>
  );
};

export default StatusBadge;
