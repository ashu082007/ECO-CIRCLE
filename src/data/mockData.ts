// ============================================
// Mock Data for EcoCircle
// All data is static/sample for demo purposes
// ============================================

export interface User {
  id: number;
  name: string;
  email: string;
  points: number;
  badge: string;
  avatar: string;
}

export interface Activity {
  id: number;
  userId: number;
  userName: string;
  type: "Eco-Driving" | "EV Driving" | "Solar Generation";
  date: string;
  status: "Pending" | "Approved" | "Rejected";
  points: number;
}

export interface Reward {
  id: number;
  title: string;
  description: string;
  pointsRequired: number;
  image: string;
}

export interface RedeemedReward {
  id: number;
  rewardTitle: string;
  date: string;
  pointsSpent: number;
}

// Current logged-in user (demo)
export const currentUser: User = {
  id: 1,
  name: "Ayush",
  email: "ayush@ecocircle.demo",
  points: 1250,
  badge: "🌿 Eco Champion",
  avatar: "PS",
};

// Sample users for leaderboard
export const users: User[] = [
  { id: 1, name: "Ayush D Nayak", email: "ayush@ecocircle.demo", points: 1250, badge: "🌿 Eco Champion", avatar: "PS" },
  { id: 2, name: "Rishita B R", email: "rishita@ecocircle.demo", points: 980, badge: "🌱 Green Starter", avatar: "AP" },
  { id: 3, name: "Pragna", email: "pragna@ecocircle.demo", points: 870, badge: "🌱 Green Starter", avatar: "MN" },
  { id: 4, name: "Poorima", email: "poornima@ecocircle.demo", points: 650, badge: "🍃 Seedling", avatar: "RK" },
  { id: 5, name: "Ananya Das", email: "ananya@ecocircle.demo", points: 520, badge: "🍃 Seedling", avatar: "AD" },
];

// Sample activities
export const activities: Activity[] = [
  { id: 1, userId: 1, userName: "Ayush D Nayak", type: "Eco-Driving", date: "2026-03-28", status: "Approved", points: 150 },
  { id: 2, userId: 1, userName: "Ayush D Nayak", type: "EV Driving", date: "2026-03-25", status: "Approved", points: 200 },
  { id: 3, userId: 1, userName: "Ayush D Nayak", type: "Solar Generation", date: "2026-03-22", status: "Pending", points: 0 },
  { id: 4, userId: 2, userName: "Rishita B R", type: "EV Driving", date: "2026-03-27", status: "Pending", points: 0 },
  { id: 5, userId: 3, userName: "Pragna", type: "Eco-Driving", date: "2026-03-26", status: "Approved", points: 120 },
  { id: 6, userId: 2, userName: "Rishita B R", type: "Solar Generation", date: "2026-03-20", status: "Rejected", points: 0 },
];

// Sample rewards
export const rewards: Reward[] = [
  { id: 1, title: "Bamboo Bottle", description: "Eco-friendly reusable bamboo water bottle", pointsRequired: 300, image: "🎍" },
  { id: 2, title: "Tree Planting Certificate", description: "Plant a tree in your name through our partner NGO", pointsRequired: 500, image: "🌳" },
  { id: 3, title: "EV Charging Voucher", description: "Free EV charging session at partner stations", pointsRequired: 400, image: "⚡" },
  { id: 4, title: "Sustainable Tote Bag", description: "Handmade organic cotton tote bag", pointsRequired: 200, image: "👜" },
];

// Rewards the current user has redeemed
export const redeemedRewards: RedeemedReward[] = [
  { id: 1, rewardTitle: "Sustainable Tote Bag", date: "2026-03-15", pointsSpent: 200 },
];

// Google Form link (placeholder)
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdxW5sSzOm0bnT3xkzgT01CJHa-Yx5NyzXpis69DyhOprr6eA/viewform?usp=publish-editor";
