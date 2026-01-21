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
      <Image
        className="bg-accent rounded-md overflow-hidden"
        src={url}
        alt={alt}
        width={300}
        height={200}
      />
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
    <div className="long-card gap-2 flex flex-col items-center">
      <Image
        className="bg-accent rounded-md overflow-hidden"
        src={url}
        alt={alt}
        width={300}
        height={200}
      />
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
    <div className="detail-card p-4 flex flex-col gap-2 rounded-sm">
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

export const UseCard = ({ text }: { text: string }) => {
  return (
    <li className="bg-accent-blur use-list-card flex items-center gap-4">
      <Image
        src="/assets/icons/check-mark.svg"
        alt="check"
        width={20}
        height={20}
      />
      <p>{text}</p>
    </li>
  );
};
