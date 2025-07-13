import { Search, ShoppingCart, User } from 'lucide-react';
import LogoMerluceHrz from '../../assets/img/LogoMerluceHrz.png'
import { Link } from 'react-router-dom';
export const HeaderComponent = ({ cartItems }) => {
   return (
      <div className=" p-4 sticky top-0 bg-white z-40">
         <div className='flex items-center justify-between w-full mx-auto container'>
            <div className='w-34'>
               <img src={LogoMerluceHrz} className='w-100' alt="" />
            </div>
            <div className='flex'>
               <div className='px-4'>
                  <a href="#"><Search /></a>
               </div>
               <div className='px-4 relative'>
                  <a href="#"><ShoppingCart /></a>
                  {cartItems.length > 0 && (
                     <span className="absolute -top-2 -right-2 bg-color-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {cartItems.length}
                     </span>
                  )}
               </div>
               <div className='px-4'>
                  <a href="">
                     <User />
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
};

