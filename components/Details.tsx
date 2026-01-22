import React from "react";
import { DetailCard } from "./Card";

export const Details = () => {
  return (
    <section className="detail-section items-center flex flex-col w-full gap-5">
      <h2>O que pode fazer com a Contela</h2>
      <p className="accent">Tudo num sistema simples e conectado</p>
      <div className="detail-grid place-items-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between w-full row-gap-4">
        <DetailCard
          url="/assets/icons/date-time.svg"
          detail="Stock em Tempo Real"
          text="Veja o stock agora. Sem contas. Sem dúvidas."
        />
        <DetailCard
          url="/assets/icons/sales-ops.svg"
          detail="Registo de Vendas Rápido"
          text="Registe vendas em segundos. O stock atualiza sozinho."
        />
        <DetailCard
          url="/assets/icons/outline-alerted.svg"
          detail="Alertas Inteligentes"
          text="Receba avisos antes do stock acabar."
        />
        <DetailCard
          url="/assets/icons/park-outline.svg"
          detail="Pedidos Diretos"
          text="Faça pedidos aos fornecedores sem chamadas."
        />
        <DetailCard
          url="/assets/icons/delivery-truck-clock.svg"
          detail="Acompanhamento de Entregas"
          text="Saiba quando o pedido chega. Do pedido à prateleira."
        />
        <DetailCard
          url="/assets/icons/circular-connection.svg"
          detail="Tudo Conectado"
          text="Venda, stock e entregas ligados automaticamente."
        />
      </div>
    </section>
  );
};
