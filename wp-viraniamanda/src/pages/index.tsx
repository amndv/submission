import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { IAPIResponse } from '@/interface/iapi'
import { useEffect, useState } from 'react'
import Category from '@/components/category'
import Infografis from '@/components/infografis'

const inter = Inter({ subsets: ['latin'] })

interface IData{
  id: number
  attributes:{
    judul: string
    slug: string
    narasi: string
    tanggal: string | Date
    publishedAt?: string | Date
    gambar:{
      data:{
        id: Number
        attributes:{
          name:string
          alternativeText?:string
          formats:{
            thumbnail:{
              ext: string
              url: string
              hash: string
              name: string
            }
          }
          url: string
        }
      }
    }
  }
  
}
export default function Home() {
  const [data, setData] = useState<IAPIResponse<IData[]>>();

  const getCategories = async () => {
    try {
      const res = await axios.get(`https://diskopukm.palembang.go.id/api/beritas?sort[0]=tanggal%3Adesc&pagination[pageSize]=9&populate=*`);

      const data = (res.data as IAPIResponse<IData[]>);
      setData(data)
    } catch (e) {
      if (axios.isAxiosError(e)) {
       console.log("error");
       
      }
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-24 ${inter.className}`}
    >
     <div  >
      <div className='w-full flex justify-between flex items-cener py-5' >
         <div className='flex w-[24%]  items-center' >
            <Image alt="logo"  width={100} height={24} src='/assets/logo.png' style={{height:"70px", width:"auto"}}/>
            <div className='text-3xl font-bold pl-4'> 
                  <p className='text-xl text-[#016ABF]' >Koperasi</p> 
                  <p className='text-sm'>Kota Palembang</p>
            </div>
          </div>
          <div className='flex w-[75%] items-center justify-between font-sm'>
            <p className='font-sm'>Beranda</p>
            <p>Profil</p>
            <p>Berita</p>
            <p>Bidang</p>
            <p>Galeri</p>
            <p>Survey Kepuasan</p>
            <p>Informasi</p>
          </div>
      </div>
      <div></div>
      <div>
        <Image alt='' src={'/assets/banner.png'} height={1000} width={1000} className='w-full h-full'/>
      </div>
      <div className='text-center justify-center '>
        <p className='text-2xl font-bold justify-center flex py-5'>Cari Berdasarkan</p>
        <div className='flex items-center justify-between'>
         
          <Category  src='/assets/agenda-pelatihan.png' text='Agenda Pelatihan'/>
          <Category  src='/assets/galeri.png' text='Galeri'/>
          <Category  src='/assets/konsultasi-koperasi.png' text='Konsultasi Koperasi'/>
          <Category src='/assets/konsultasi-umkm.png' text='Konsultasi UMKM'/>
          <Category src='/assets/pendataan-koperasi.png' text='Pendataan Koperasi'/>
          <Category  src='/assets/pendataan-umkm.png' text='Pendataan UMKM'/>
        </div>
      </div>
      <div className='flex w-full gap-5 py-10 items-center'>
        <div className='w-[40%]'>
        <Image alt='' src='/assets/person.png' className='h-auto w-full' height={100} width={200}/>  
        </div>
        <div className='w-[60%]'>
          <p className='text-sm py-2 text-[#016ABF] cursor-pointer'>Selayang Pandang</p>
          <p className='text-xl font-bold py-2'>Selamat Datang di Dinas PPKUKM Kota Palembang</p>
          <p className='text-sm py-2'>ida berenang di Sungai Musi
Selamat datang di web PPKUKM Kota Palembang
Semoga dapat memberikan informasi
Kita wujudkan visi Palembang Emas Darussalam 2023
"Pengelolaan Keuangan & Aset Daerah yang Akuntabel menuju Opini Laporan Keuangan WTP"</p>
        </div>
      </div>
      <div className=''>
        <div className='flex items-center justify-between py-3'>
          <p className='text-xl font-bold gap-2'> <span className='font-bold text-[#016ABF]'>|</span>Berita PPUKM</p>
          <p className='text-sm text-[#016ABF]'>Selengkapnya -&gt;</p>
        </div>
        <div className='flex'>
          {data?.data?.map((v,i)=>(
            <div className='grid grid-rows-3'> 
            <img src={v.attributes.gambar.data.attributes.name} alt="image"  />
           
            <p> {v.attributes.judul.length > 35
                ? `${v.attributes.judul.substring(0, 35)}...`
                : v.attributes.judul}</p> 
 {/* <Image key={i} alt='' src={v.gambar.data.attributes.url} height={100} width={100}/> */}
 </div>
          
          ))}
        
        </div>
      </div>
      <div className=' w-full'>
        <p className='flex gap-2 text-xl font-bold pb-3 '> <span className='font-bold text-[#016ABF]'>|</span> Video UMKM</p>
       <div className='flex gap-3'>
       <div className='w-[75%] gap-y-5'>
              <div>
                <Image alt=''src='/assets/yt.png' height={100} width={100} className='w-full'/>
                <p>Wawako Memantau Pendistribusian Bantuan dari Yayasan Budha Tzu Chi di Rumah...</p>
             <p className='text-sm'>Selasa, 21 Februari 2022</p>
              </div>
              <div className='flex gap-5'>
                <div>
                  <Image alt=''src='/assets/yt.png' height={100} width={100} className='w-full'/>
                  <p>Wawako Memantau Pendistribusian Bantuan dari Yayasan Budha Tzu Chi di Rumah...</p>
                  <p className='text-sm'>Selasa, 21 Februari 2022</p>
                </div>
                <div>
                  <Image alt=''src='/assets/yt.png' height={100} width={100} className='w-full'/>
                  <p>Wawako Memantau Pendistribusian Bantuan dari Yayasan Budha Tzu Chi di Rumah...</p>
                 <p className='text-sm'>Selasa, 21 Februari 2022</p>
                </div>
              </div>
        </div>
        <div className='w-[25%]'>
          <div >
         <div className='flex items-center justify-between'>
         <p className='flex gap-2 text-xl font-bold'> <span className='font-bold text-[#016ABF]'>|</span>Infografis</p>
          <p className='text-sm text-[#016ABF]'>Lihat lainnya -&gt;</p>
         </div>
              <div>
                  <Infografis src='/assets/infografis.png' text="Selamat hari raya natal"/> 
                  <Infografis src='/assets/infografis.png' text="Selamat hari raya natal"/> 
                  <Infografis src='/assets/infografis.png' text="Selamat hari raya natal"/> 
              </div>
          </div>
        </div>
       </div>
      </div>
     
      
    </div>
    </main>
  )
}

// export const getServerSideProps: GetServerSideProps = async (
// ) => {
//   try {
//     const response = await axios.get(`https://diskopukm.palembang.go.id/api/beritas?sort[0]=tanggal%3Adesc&pagination[pageSize]=9&populate=*`);
//     const data = (response.data as IData).attributes;

//     const res = await axios.get(`https://diskopukm.palembang.go.id/api/beritas?sort[0]=tanggal%3Adesc&pagination[pageSize]=9&populate=*`);
//     const image = (res.data as IData).gambar;

//     return {
//       props: {
//         data,
//         image
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);

//     return {
//       notFound: true,
//     };
//   }
// };
