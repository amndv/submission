import Image from 'next/image'

interface CategoryProps{
    src: string 
    text: string
}
const Category = (props: CategoryProps) => {
    return (
        <div className='justify-center text-center items-center flex-col cursor-pointer'>
            <Image alt="" src={props.src} height={100} width={100} className='h-[80px] w-auto'/>
             <p className='text-md' >{props.text}</p>
        </div>
   
    );
  };
  
  export default Category;
