import Image from 'next/image'

interface CategoryProps{
    src: string 
    text: string
}
const Infografis = (props: CategoryProps) => {
    return (
        <div className='justify-center text-center items-center  cursor-pointer flex gap-2 py-2'>
            <Image alt="" src={props.src} height={100} width={100} className='h-[70px] w-auto'/>

            <div className='text-left'>
            <p className='text-sm font-bold' >{props.text}</p>
             <p className='text-sm '>Senin, 18 Desember 2023</p>
            </div>
             
        </div>
   
    );
  };
  
  export default Infografis;
