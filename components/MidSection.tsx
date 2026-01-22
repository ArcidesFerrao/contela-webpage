import { Card, LongCard } from "./Card";

export default function MidSection() {
  return (
    <section className=" flex flex-col w-full items-center gap-8 py-5">
      <h2 className="text-center">Problemas que a Contela resolve</h2>
      <p className="accent">
        Se isto acontece no seu negócio, a Contela resolve.
      </p>
      <div className="mid-section flex gap-4">
        <Card
          text="Pedidos perdidos no WhatsApp"
          url="/assets/WA-Business.png"
          alt="whatsapp icon"
        />
        <Card
          text="Ninguém sabe o stock real"
          url="/assets/excel-organize.jpg"
          alt="confused excel icon"
        />

        <LongCard
          textUp="O stock acaba e ninguém"
          textDown="sabe porquê"
          url="/assets/stock-check.jpg"
          alt="missing stock icon"
        />
      </div>
      <h4 className="text-center accent font-semibold">
        A Contela mantém tudo organizado automaticamente
      </h4>
    </section>
  );
}
