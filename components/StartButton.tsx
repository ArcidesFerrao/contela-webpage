import Link from "next/link";

export const StartButton = () => {
  return (
    <Link
      href="https://inventory-eight-lemon.vercel.app/"
      className="cursor-pointer font-semibold bg-accent w-fit border py-2 px-4 rounded-sm"
    >
      Começar Agora
    </Link>
  );
};
export const TryButton = () => {
  return (
    <Link
      href="https://inventory-eight-lemon.vercel.app/"
      className="cursor-pointer font-semibold bg-accent w-fit border py-2 px-4 rounded-sm"
    >
      Experimente Gratis
    </Link>
  );
};
