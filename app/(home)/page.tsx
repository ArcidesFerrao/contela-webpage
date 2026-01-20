import { Details } from "@/components/Details";
import Header from "@/components/Header";
import MidSection from "@/components/MidSection";
import Navigator from "@/components/Navigator";
import Reason from "@/components/Reason";

export default function page() {
  return (
    <main>
      <Navigator />
      <Header />
      <MidSection />
      <Details />
      <Reason />
    </main>
  );
}
