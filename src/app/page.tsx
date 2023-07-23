import Header from "@/components/globals/header";
import { Body } from "@/components/homepage/Body";

export default function Home() {
  return (
    <div className="min-w-screen font-inter min-h-screen overflow-x-hidden bg-[#E09AC0]">
      <Header />

      <main>
        <Body />
      </main>
    </div>
  );
}
