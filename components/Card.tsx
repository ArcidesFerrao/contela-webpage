import Image from "next/image";

export const Card = ({
  text,
  url,
  alt,
}: {
  text: string;
  url: string;
  alt: string;
}) => {
  return (
    <div className="mid-card flex flex-col gap-2 items-center">
      <span className="bg-accent rounded-md overflow-hidden">
        <Image src={url} alt={alt} width={200} height={200} />
      </span>
      <p>{text}</p>
    </div>
  );
};
export const LongCard = ({
  textUp,
  textDown,
  url,
  alt,
}: {
  textUp: string;
  textDown: string;
  url: string;
  alt: string;
}) => {
  return (
    <div className="mid-card gap-2 flex flex-col items-center">
      <span className="bg-accent rounded-md overflow-hidden">
        <Image src={url} alt={alt} width={200} height={200} />
      </span>
      <div className="text-center">
        <p>{textUp}</p>
        <p>{textDown}</p>
      </div>
    </div>
  );
};

export const DetailCard = ({
  text,
  url,
  detail,
}: {
  text: string;
  url: string;
  detail: string;
}) => {
  return (
    <div className="detail-card p-2 flex flex-col gap-2 rounded-sm">
      <span>
        <Image src={url} alt="icon" width={64} height={64} />
      </span>
      <div className="flex flex-col gap-2">
        <h4>{detail}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export const ReasonCard = ({ label }: { label: string }) => {
  return (
    <div className="border rounded-sm reason-card text-center flex justify-center items-center">
      <p>{label}</p>
    </div>
  );
};
