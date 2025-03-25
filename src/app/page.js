export const dynamic = "force-dynamic";

import Homepage from "@/Homepage/Homepage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <h2 className="text-5xl text-red-500">
       <Homepage></Homepage>
      </h2>
    </div>
  );
}
