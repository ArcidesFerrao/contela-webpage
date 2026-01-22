export const FunctionSection = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <h2>Como a Contela funciona</h2>
      <p className="accent">Simples e automático</p>
      <ul className="function-list flex flex-col gap-4">
        <li>
          <span>1</span>
          <div className="flex flex-col">
            <h4>Vende um produto ou conclui um serviço</h4>
            <p className="accent text-sm font-thin">
              Regista a venda no sistema
            </p>
          </div>
        </li>
        <li>
          <span>2</span>
          <div className="flex flex-col">
            <h4>Stock atualiza automaticamente</h4>
            <p className="accent text-sm font-thin">Sem precisar fazer nada</p>
          </div>
        </li>
        <li>
          <span>3</span>
          <div className="flex flex-col ">
            <h4>Sistema avisa quando está baixo</h4>
            <p className="accent text-sm font-thin">
              Recebe alerta no momento certo
            </p>
          </div>
        </li>
        <li>
          <span>4</span>
          <div className="flex flex-col">
            <h4>Faz o pedido ao fornecedor</h4>
            <p className="accent text-sm font-thin">Direto pelo sistema</p>
          </div>
        </li>
        <li>
          <span>5</span>
          <div className="flex flex-col">
            <h4>Entrega chega e stock atualiza</h4>
            <p className="accent text-sm font-thin">
              Tudo registado automaticamente
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
