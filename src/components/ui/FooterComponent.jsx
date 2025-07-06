import LogoMerluceHrz from '../../assets/img/LogoMerluceHrz.png'
export const FooterComponent = () => {
    return (
        <div className="my-10 mx-auto w-full container text-color-primary font-serif">
            <div className="grid grid-cols-3 ">
                <div>
                    <img className='w-50' src={LogoMerluceHrz} alt="" />
                </div>
                <div className="flex gap-10">
                    <div>
                        <div className='my-2'>
                            <p>+51 914 505 101</p>
                            <a href="merluce.com">merluce.com</a>
                        </div>
                        <div className='my-5'>
                            <p>Av. José Olaya, Pucalá, Chiclayo, Perú</p>
                        </div>
                        <hr className='my-4' />

                    </div>
                    <div>
                        <ul className='leading-relaxed pl-20'>
                            <li className='my-2'><a href="">Política de Privacidad</a></li>
                            <li className='my-2'><a href="">Declaracion de Accesibilidad</a></li>
                            <li className='my-2'><a href="">Política de Envío Términos y Condiciones</a></li>
                            <li className='my-2'><a href="">Politica de Reembolso</a></li>
                        </ul>
                    </div>
                </div>
                <div className='ml-30'>
                    <h3 className='text-xl mb-4'>Politica de Privacidad</h3>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>
                    <hr className='my-4' />

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="subscribe"
                            className="w-4 h-4 border-gray-300 rounded focus:ring-gray-400"
                        />
                        <label htmlFor="subscribe" className="text-sm">
                            Yes, subscribe me to your newsletter. *
                        </label>
                    </div>

                    <button
                        className="my-10 w-full border border-color-primary bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-medium py-3 px-6  transition-colors"
                    >
                        ¡Suscrito!
                    </button>
                </div>
            </div>
        </div>
    )
};