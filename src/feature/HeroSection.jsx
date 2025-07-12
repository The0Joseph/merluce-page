// import Banner from '../assets/img/BannerTienda.jpg'
import Banner from '../assets/img/banner-merluce.jpg'

export const HeroSection = () => {
    return (
        <div className='relative'>
            {/* // ? disign Modo MOBIL */}
            <div className='block md:hidden'>
                <div className='relative'>
                    <div>
                        <img src={Banner} className='w-full' alt="" />
                        <div class="absolute inset-0 bg-black/40"></div>
                        <h1 className="mx-5 w-full font-semibold absolute bottom-40 left-0 text-7xl text-white md:text-[#2D4A22] font-[100] leading-tight py-5">
                            <span>Descubre</span> <br />
                            <span>Merluce</span>
                        </h1>
                    </div>
                </div>
                <div className='absolute -bottom-30 left-0 z-10 bg-white rounded-xl'>
                    <div className='m-5'>
                        <p className=" text-lg text-[#2D4A22] lg:mr-70 font-serif leading-loose ">Merluce es tu tienda de abarrotes de confianza, con mas de 10 años ofreciendo productos escenciales, atención amable y un servicio con valores como la responsabilidad y dedicación.</p>
                        <div className='mt-10 text-center'>
                            <a href="#" className='mt-8 px-15 py-4 bg-[#2D4A22] text-white rounded-full text-[14px] hover:bg-green-900 transition duration-300'>
                                Explorar
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            {/* // ? disign Modo PC */}
            <div className="hidden md:grid h-svh">
                <div className=" grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                    <div className="font-serif px-5 sm:pl-10 lg:pl-30 flex flex-col justify-center">
                        <h1 className="text-7xl text-[#2D4A22] font-[100] leading-tight ">
                            <span>Descubre</span> <br />
                            <span>Merluce</span>
                        </h1>
                        <p className="mt-6 text-lg text-[#2D4A22] lg:mr-70 font-serif leading-loose ">Merluce es tu tienda de abarrotes de confianza, con mas de 10 años ofreciendo productos escenciales, atención amable y un servicio con valores como la responsabilidad y dedicación.</p>
                        <div className='mt-10'>
                            <a href="#" className='mt-8 px-15 py-4 bg-[#2D4A22] text-white rounded-full text-[14px] hover:bg-green-900 transition duration-300'>
                                Explorar
                            </a>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <img src={Banner} className='w-full h-200 object-cover object-bottom' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
