import { IconBrandTailwind } from "@tabler/icons-react";
import Link from "next/link";

interface HeaderProps {
  href: string;
}

export default function Logo(props: HeaderProps) {
  return (
    <Link href={props.href} className="flex items-center gap-2">
      <IconBrandTailwind size={40} stroke={1} />
      <div>
        <span className="font-bold">Tailwind</span>  
        <span>Essencial</span> 
      </div>
    </Link>
  );
}
