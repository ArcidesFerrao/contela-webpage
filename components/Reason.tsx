import React from "react";
import { ReasonCard } from "./Card";

export default function Reason() {
  return (
    <section className="w-full flex justify-between items-end ">
      <div className="flex flex-col gap-10">
        <h2>Para quem é a Contela</h2>
        <div className="flex flex-col gap-4">
          <div>
            <h5>Para pequenos negócios que usam stock </h5>
            <h5>para ganhar dinheiro</h5>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="accent">
                Se o seu negócio depende de materiais ou produtos para
              </p>
              <p className="accent">funcionar, a Contela é para si.</p>
            </div>
            <div>
              <p className="accent">
                Seja a vender produtos ou a usar materiais para
              </p>
              <p className="accent">prestar um serviço.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ReasonCard label="Restaurantes" />
        <ReasonCard label="Lojas & Bares" />
        <ReasonCard label="Lavandarias" />
        <ReasonCard label="Serviços" />
        <ReasonCard label="Negócios" />
        <ReasonCard label="Minimercados" />
      </div>
    </section>
  );
}
