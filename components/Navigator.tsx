import Image from "next/image";

export default function Navigator() {
  return (
    <nav className="flex items-center  justify-between p-4 w-full">
      <Image
        src="/contela-logo.png"
        width={200}
        height={70}
        alt="contela-logo"
      />

      <button className="cursor-pointer font-semibold bg-accent w-fit border py-2 px-4 rounded-sm">
        Começar Agora
      </button>
    </nav>
  );
}
