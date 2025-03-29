import { twMerge } from "tailwind-merge";

interface CardProjectProps {
  className?: string;
  title: string;
  text: string;
  img: string;
  alt?: string;
  link: string;
}

export function CardProject({
  className,
  title,
  text,
  img,
  alt,
  link,
}: CardProjectProps) {
  return (
    <div
      className={twMerge(
        " p-4 bg-neutral-900 hover:bg-neutral-800 hover:transition-[2s] transition-[2s] rounded-lg flex flex-col  gap-3 w-[30%]",
        className
      )}
    >
      <span className="text-dark-text-primary font-bold">{title}</span>
      <span className="text-dark-text-secondary ">{text}</span>
      <img src={img} alt={alt} />
      <a href={link} className="w-[40%] text-center bg-green-500 roundhovered-sm rounded-sm hover:bg-green-400  p-2">
        <span className="font-semibold text-dark-primary">
          Repositório
        </span>
      </a>
    </div>
  );
}
