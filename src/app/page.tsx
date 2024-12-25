import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <header className="h-16 w-full  flex items-center justify-between px-6 border-b">
        <div>
          <Link href="/">Logo</Link>
        </div>
        <nav>
          <Button asChild>
            <Link href="/login">Login Now</Link>
          </Button>
        </nav>
      </header>
    </div>
  );
};

export default HomePage;
