import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-center p-5 w-full ">
      <h4 className="text-md">Contacte-nos</h4>
      <Link
        href={`https://wa.me/258852740554?text=Ol%C3%A1%2C%20vi%20a%20Contela%20e%20gostaria%20de%20saber%20como%20funciona%20para%20o%20meu%20neg%C3%B3cio.
`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="ri--whatsapp-fill"></span>
      </Link>
      <p className="text-xs font-thin">
        © 2026 Evolure Labs. Todos os direitos reservados.
      </p>
    </footer>
  );
};
