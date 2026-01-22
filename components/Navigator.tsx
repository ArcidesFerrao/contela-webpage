import Image from "next/image";
import { StartButton } from "./StartButton";

export default function Navigator() {
  return (
    <nav className="flex items-center  justify-between m-4 w-full">
      <Image
        src="/contela-logo.png"
        width={200}
        height={70}
        alt="contela-logo"
      />

      <StartButton />
    </nav>
  );
}
