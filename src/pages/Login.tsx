import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";

/**
 * Login Page - Simple demo login (no real authentication)
 * Clicking "Login" just navigates to the dashboard
 */
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("demo@ecocircle.demo");
  const [password, setPassword] = useState("demo1234");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo only — just navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <CardTitle className="text-xl">Welcome to EcoCircle</CardTitle>
          <p className="text-sm text-muted-foreground">Demo login — just click Login</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Password</label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
