import { Apps } from "@/sections/Apps";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Apps />
        <Features />
        <span id="about" />
      </main>
      <Footer />
    </>
  );
}
