import { IconShoppingCart, IconStarFilled } from '@tabler/icons-react';
import Image from 'next/image';

export default function Card() {
  return (
    <div className="flex flex-col gap-4 bg-zinc-100 w-96 p-4 rounded-md">
      <div className="w-full h-64 relative">
        <div className="absolute top-2 left-2 bg-black rounded-full text-sm z-50 text-white px-2 py-0.5">
          39% off
        </div>
        <Image
          src="https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-branco-rose-feminino-court-vison-lo-76653/299727-1.jpg?w=670&h=670&v=no-change&qs=ignore"
          fill
          alt="Tênis Casual Nike Air Force Branco"
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-lg">Niker Air Force</div>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-xl mr-1">R$ 199,00</span>
            <span className="line-through text-sm text-zinc-500">
              R$ 299,00
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <IconStarFilled size={18} className="text-yellow-400" />
            <IconStarFilled size={18} className="text-yellow-400" />
            <IconStarFilled size={18} className="text-yellow-400" />
            <IconStarFilled size={18} className="text-yellow-400" />
            <IconStarFilled size={18} className="text-yellow-400" />
            <div className="bg-yellow-100 p-1 text-sm font-semibold">5.0</div>
          </div>
        </div>
        <button className="btn flex items-center justify-center gap-2">
          <IconShoppingCart size={24} />
          <span>Comprar</span>
        </button>
      </div>
    </div>
  );
}
