import Image from "next/image";
import { TryButton } from "./StartButton";

export default function Header() {
  return (
    <section className="flex flex-col w-full gap-5 py-10">
      <span>
        <Image src="/favicon.png" alt="evolure logo" width={64} height={64} />
      </span>
      <div className="flex flex-col items-start">
        <h1>O seu negócio a funcionar sem </h1>
        <h1 className="accent">confusão</h1>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="accent">
          Gestão de stock, fornecedores e entregas num só lugar
        </h5>

        <div>
          <p>
            Sem caos no WhatsApp. Sem adivinhações no Excel. Sem stock perdido.
          </p>
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
