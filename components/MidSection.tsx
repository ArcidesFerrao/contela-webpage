import { Card, LongCard } from "./Card";

export default function MidSection() {
  return (
    <section className="flex flex-col items-center gap-10 py-5">
      <h2 className="text-center">Problemas que a Contela resolve</h2>
      <div className="flex gap-4">
        <Card
          text="Mensagens perdidas no WhatsApp"
          url="/assets/WA-Business.png"
          alt="whatsapp icon"
        />
        <Card
          text="Excel confuso e desatualizado"
          url="/assets/excel-organize.jpg"
          alt="confused excel icon"
        />

        <LongCard
          textUp="Stock que desaparece"
          textDown="sem explicação"
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
