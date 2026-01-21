import { Details } from "@/components/Details";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import MidSection from "@/components/MidSection";
import Navigator from "@/components/Navigator";
import Reason from "@/components/Reason";
import { UseCase } from "@/components/UseCase";

export default function page() {
  return (
    <main>
      <Navigator />
      <Header />
      <MidSection />
      <Details />
      <Reason />
      <UseCase />
      <Footer />
    </main>
  );
}
