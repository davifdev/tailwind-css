import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaBorder() {
  return (
    <Pagina>
        <Titulo texto='Utilizando Bordas' descricao='Adiciona um contorno em volta do elemento' />
      <div className='flex  py-7 gap-4'>
          <div className='flex flex-col gap-9'>
            <div className='w-32 h-10 border-blue-500 border-4 text-center'>
              Border Full
            </div>
            <div className='w-32 h-10 border-red-500 border-t-4 text-center'>
              Border Top
            </div>
            <div className='w-32 h-10 border-green-500 border-r-4 text-center'>
              Border Right
            </div>
            <div className='w-32 h-10 border-purple-500 border-b-4 text-center'>
              Border Bottom
            </div>
            <div className='w-32 h-10 border-orange-500 border-l-4 text-center'>
              Border Left
            </div>
            <div className='w-32 h-10 border-pink-500 border-x-4 text-center'>
              Border X
            </div>
            <div className='w-32 h-10 border-yellow-500 border-y-4 text-center'>
              Border Y
            </div>
          </div>

          <div className="flex flex-col gap-9">
           <div className='flex gap-1'>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-full'>R-Full</div>
           <div className='w-24 h-10 bg-red-500 text-center text-white rounded-sm'>R-SM</div>
           <div className='w-24 h-10 bg-green-500 text-center text-white rounded-md'>R-MD</div>
           <div className='w-24 h-10 bg-purple-500 text-center text-white rounded-lg'>R-LG</div>
           <div className='w-24 h-10 bg-orange-500 text-center text-white rounded-xl'>R-XL</div>
           <div className='w-24 h-10 bg-pink-500 text-center text-white rounded-2xl'>R-2XL</div>
           <div className='w-24 h-10 bg-yellow-500 text-center text-white rounded-3xl'>R-3XL</div>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-none'>R-NONE</div>
           </div>
           <div className='flex gap-1'>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-s-full'>R-S-Full</div>
           <div className='w-24 h-10 bg-red-500 text-center text-white rounded-s-sm'>R-S-SM</div>
           <div className='w-24 h-10 bg-green-500 text-center text-white rounded-s-md'>R-S-MD</div>
           <div className='w-24 h-10 bg-purple-500 text-center text-white rounded-s-lg'>R-S-LG</div>
           <div className='w-24 h-10 bg-orange-500 text-center text-white rounded-s-xl'>R-S-XL</div>
           <div className='w-24 h-10 bg-pink-500 text-center text-white rounded-s-2xl'>R-S-2XL</div>
           <div className='w-24 h-10 bg-yellow-500 text-center text-white rounded-s-3xl'>R-S-3XL</div>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-s-none'>R-S-NONE</div>
           </div>
           <div className='flex gap-1'>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-e-full'>R-E-Full</div>
           <div className='w-24 h-10 bg-red-500 text-center text-white rounded-e-sm'>R-E-SM</div>
           <div className='w-24 h-10 bg-green-500 text-center text-white rounded-e-md'>R-E-MD</div>
           <div className='w-24 h-10 bg-purple-500 text-center text-white rounded-e-lg'>R-E-LG</div>
           <div className='w-24 h-10 bg-orange-500 text-center text-white rounded-e-xl'>R-E-XL</div>
           <div className='w-24 h-10 bg-pink-500 text-center text-white rounded-e-2xl'>R-E-2XL</div>
           <div className='w-24 h-10 bg-yellow-500 text-center text-white rounded-e-3xl'>R-E-3XL</div>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-e-none'>R-E-NONE</div>
           </div>
           <div className='flex gap-1'>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-t-full'>R-T-Full</div>
           <div className='w-24 h-10 bg-red-500 text-center text-white rounded-t-sm'>R-T-SM</div>
           <div className='w-24 h-10 bg-green-500 text-center text-white rounded-t-md'>R-T-MD</div>
           <div className='w-24 h-10 bg-purple-500 text-center text-white rounded-t-lg'>R-T-LG</div>
           <div className='w-24 h-10 bg-orange-500 text-center text-white rounded-t-xl'>R-T-XL</div>
           <div className='w-24 h-10 bg-pink-500 text-center text-white rounded-t-2xl'>R-T-2XL</div>
           <div className='w-24 h-10 bg-yellow-500 text-center text-white rounded-t-3xl'>R-T-3XL</div>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-t-none'>R-T-NONE</div>
           </div>
           <div className='flex gap-1'>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-r-full'>R-R-Full</div>
           <div className='w-24 h-10 bg-red-500 text-center text-white rounded-r-sm'>R-R-SM</div>
           <div className='w-24 h-10 bg-green-500 text-center text-white rounded-r-md'>R-R-MD</div>
           <div className='w-24 h-10 bg-purple-500 text-center text-white rounded-r-lg'>R-R-LG</div>
           <div className='w-24 h-10 bg-orange-500 text-center text-white rounded-r-xl'>R-R-XL</div>
           <div className='w-24 h-10 bg-pink-500 text-center text-white rounded-r-2xl'>R-R-2XL</div>
           <div className='w-24 h-10 bg-yellow-500 text-center text-white rounded-r-3xl'>R-R-3XL</div>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-r-none'>R-R-NONE</div>
           </div>
           <div className='flex gap-1'>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-b-full'>R-B-Full</div>
           <div className='w-24 h-10 bg-red-500 text-center text-white rounded-b-sm'>R-B-SM</div>
           <div className='w-24 h-10 bg-green-500 text-center text-white rounded-b-md'>R-B-MD</div>
           <div className='w-24 h-10 bg-purple-500 text-center text-white rounded-b-lg'>R-B-LG</div>
           <div className='w-24 h-10 bg-orange-500 text-center text-white rounded-b-xl'>R-B-XL</div>
           <div className='w-24 h-10 bg-pink-500 text-center text-white rounded-b-2xl'>R-B-2XL</div>
           <div className='w-24 h-10 bg-yellow-500 text-center text-white rounded-b-3xl'>R-B-3XL</div>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-b-none'>R-B-NONE</div>
           </div>
           <div className='flex gap-1'>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-l-full'>R-L-Full</div>
           <div className='w-24 h-10 bg-red-500 text-center text-white rounded-l-sm'>R-L-SM</div>
           <div className='w-24 h-10 bg-green-500 text-center text-white rounded-l-md'>R-L-MD</div>
           <div className='w-24 h-10 bg-purple-500 text-center text-white rounded-l-lg'>R-L-LG</div>
           <div className='w-24 h-10 bg-orange-500 text-center text-white rounded-l-xl'>R-L-XL</div>
           <div className='w-24 h-10 bg-pink-500 text-center text-white rounded-l-2xl'>R-L-2XL</div>
           <div className='w-24 h-10 bg-yellow-500 text-center text-white rounded-l-3xl'>R-L-3XL</div>
           <div className='w-24 h-10 bg-blue-500 text-center text-white rounded-l-none'>R-L-NONE</div>
           </div>
          </div>
      </div>
    </Pagina>
  );
}
