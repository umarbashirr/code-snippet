import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <header className="h-16 flex items-center justify-end px-4 border-b">
        <form
          action={async () => {
            "use server";
            await signOut({
              redirectTo: "/login",
            });
          }}
        >
          <Button
            type="submit"
            className="flex items-center justify-center gap-2 text-center"
          >
            <LogOutIcon className="w-4 h-4" /> Logout
          </Button>
        </form>
      </header>
      <div>
        <h1>Logged In User</h1>
        <p>ID:{session.user?.id}</p>
        <p>Name:{session.user?.name}</p>
        <p>email:{session.user?.email}</p>
      </div>
    </div>
  );
};

export default Page;
