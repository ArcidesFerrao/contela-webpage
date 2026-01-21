import { UseCard } from "./Card";

export const UseCase = () => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-center">Porque Usar Contela</h2>
      <ul className="flex flex-col gap-4">
        <UseCard text="Pouco tempo no dia-a-dia" />
        <UseCard text="Reduz perdas de stock" />
        <UseCard text="Evita atrasos dos fornecedores" />
        <UseCard text="Mantém tudo organizado num só lugar" />
        <UseCard text="Gere o negócio com confiança" />
      </ul>

      <div className="bg-accent-blur ready-cta rounded-lg flex flex-col gap-10 items-center p-8">
        <div className="flex flex-col items-center">
          <h2>Pronto para simplificar o seu </h2>
          <h2>negócio?</h2>
        </div>
        <p className="accent font-thin">
          Criado para negócios reais. Criado para realidades locais.
        </p>
        <button className="cursor-pointer bg-accent w-fit font-semibold border py-2 px-5 rounded-sm">
          Começar Agora
        </button>
      </div>
    </section>
  );
};
