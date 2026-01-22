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
        <h3 className="accent font-semibold text-xl">
          Mesmo usando apenas o telefone
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <h4>Gestão de stock simples para o dia-a-dia do seu negócio</h4>

        <div>
          <p>Sem WhatsApp, sem Excel.</p>
          <p>Tudo está ligado. Tudo é visível. </p>
        </div>
      </div>
      <TryButton />
    </section>
  );
}
