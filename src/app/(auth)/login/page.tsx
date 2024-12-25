import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const LoginPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex items-center justify-center w-full h-screen p-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>We are very happy to see you again.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={async () => {
              "use server";
              await signIn("github", {
                redirectTo: "/dashboard",
              });
            }}
          >
            <Button
              type="submit"
              className="flex items-center justify-center text-center"
            >
              <Github className="w-4 h-4" /> Continue with Github
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
