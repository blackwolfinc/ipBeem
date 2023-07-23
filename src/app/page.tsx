import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import { Body } from "@/components/homepage/Body";

export default function Home() {
  return (
    <div className="min-w-screen font-inter relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#E09AC0] to-[#C2A9F1]">
      <Header />

      <main>
        <Body />
      </main>

      <Footer />
    </div>
  );
}
