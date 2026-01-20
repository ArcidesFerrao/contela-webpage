import React from "react";
import { DetailCard } from "./Card";

export const Details = () => {
  return (
    <section className="detail-section items-center flex flex-col gap-5">
      <h2>O que pode fazer com a Contela</h2>
      <p className="accent">Tudo num sistema simples e conectado</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <DetailCard
          url="/assets/icons/date-time.svg"
          detail="Stock em Tempo Real"
          text="Veja o que tem disponível a qualquer momento. Nunca mais perca vendas por falta de stock."
        />
        <DetailCard
          url="/assets/icons/sales-ops.svg"
          detail="Registo de Vendas Rápido"
          text="Registre vendas e serviços com facilidade. O stock atualiza automaticamente."
        />
        <DetailCard
          url="/assets/icons/outline-alerted.svg"
          detail="Alertas Inteligentes"
          text="Receba avisos quando o stock está a acabar. Nunca mais fique sem produtos importantes."
        />
        <DetailCard
          url="/assets/icons/park-outline.svg"
          detail="Pedidos Diretos"
          text="Faça pedidos aos fornecedores diretamente pelo sistema. Sem chamadas perdidas."
        />
        <DetailCard
          url="/assets/icons/delivery-truck-clock.svg"
          detail="Acompanhamento de Entregas"
          text="Saiba exatamente quando os pedidos vão chegar. Do pedido até à prateleira."
        />
        <DetailCard
          url="/assets/icons/circular-connection.svg"
          detail="Tudo Conectado"
          text="Sem controlo manual. Sem adivinhações. O sistema funciona sozinho."
        />
      </div>
    </section>
  );
};
