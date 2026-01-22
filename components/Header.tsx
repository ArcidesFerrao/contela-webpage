import Image from "next/image";
import { TryButton } from "./StartButton";

export default function Header() {
  return (
    <section className="header-section flex flex-col w-full gap-5 py-10">
      <span>
        <Image src="/favicon.png" alt="evolure logo" width={64} height={64} />
      </span>
      <div className="flex flex-col gap-2 items-start">
        <div className="flex gap-2 flex-wrap">
          <h1>O seu negócio a funcionar sem </h1>
          <h1 className="accent">confusão</h1>
        </div>
        <h4 className="accent">Mesmo usando apenas o telefone</h4>
      </div>
      <div className="flex flex-col gap-4">
        <h5>Gestão simples de stock para pequenos negócios</h5>

        <div>
          <p>Sem WhatsApp, sem Excel.</p>
          <p>Tudo está ligado. Tudo é visível. </p>
        </div>
      </div>
      <TryButton />
      {/* <button className="cursor-pointer bg-accent px-4 py-2 rounded-sm w-fit font-semibold">
        Experimente Gratis
      </button> */}
    </section>
  );
}
