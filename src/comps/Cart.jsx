import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = ({ close }) => {
    const { cart, total, advance, advanceValue, increaseAdvance, decreaseAdvance, removeFromCart } = useCart();
    const nav = useNavigate();

    return (
        <div className='fixed h-screen w-screen inset-0 z-50'>
            <div onClick={close} className='absolute inset-0 bg-black/50 backdrop-blur-xs'/>
            
            <div className='absolute top-0 right-0 bg-[#fcf8f5] md:h-screen w-screen md:w-[70%] flex rounded-b-3xl md:rounded-none overflow-hidden'>
                
                {/* --- LISTA DE PRODUCTOS --- */}
                <div className='h-full w-[60%] hidden md:flex flex-col items-center p-10'>
                    {cart[0]&&<h2 className='font-bold text-2xl pb-10'>TU PEDIDO ACTUAL</h2>}

                    <div className='grid grid-cols-2 gap-5 w-full h-full overflow-y-auto'>
                        {cart.map(prod => (
                            <div key={prod.id}>
                                <div className='relative'>
                                    <img src={prod.image_path || prod.image_url} alt={prod.name} />
                                    <div onClick={() => removeFromCart(prod.id)} className='absolute top-3 right-3 p-1 cursor-pointer rounded-full bg-red-600'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></div>
                                    <h3 className='absolute bottom-3 left-3 text-white font-bold text-5xl text-shadow-lg'>x{prod.quantity}</h3>
                                    </div>
                                <div className='flex justify-between font-bold text-xl'>
                                    <h3>{prod.name}</h3>
                                    <h3>${Number(prod.price).toFixed(2)}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- RESUMEN --- */}
                <div className='h-full w-full md:h-full md:w-[40%] bg-[#ffdbbf] flex flex-col justify-between items-center p-10'>
                    
                    <div className='w-full font-bold'>
                        
                        <div className="flex flex-col gap-1 max-h-50 overflow-y-auto">
                            {cart.map(prod => (
                                <div className='flex justify-between' key={prod.id}>
                                    <h2>{prod.name}</h2>
                                    <h2>${prod.price * prod.quantity}</h2>
                                </div>
                            ))}
                        </div>

                        <hr className='border my-2'/>

                        <div className='flex justify-between text-2xl'>
                            <h2>TOTAL</h2>
                            <h2>${total.toFixed(2)}</h2>
                        </div>

                        <div className='flex justify-between text-xl mt-2'>
                            <h2>ANTICIPO ({advance.toFixed(2)}%)</h2>
                            <h2>${advanceValue.toFixed(2)}</h2>
                        </div>
                    </div>

                    {/* --- CONTROLES ANTICIPO --- */}
                    <div className='flex py-10 md:flex-col items-center justify-between w-full gap-5'>
                        <div className='flex flex-col items-center justify-center'>
                        <h3 className='font-semibold text-2xl'>ANTICIPO</h3>
                        <div className='flex items-center gap-10'>
                            <div
                                onClick={decreaseAdvance}
                                className='cursor-pointer rounded-full bg-amber-600'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3">
                                    <path d="M200-440v-80h560v80H200Z"/>
                                </svg>
                            </div>

                            <span className='text-4xl'>{advance}%</span>

                            <div
                                onClick={increaseAdvance}
                                className='cursor-pointer rounded-full bg-amber-600'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3">
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                                </svg>
                            </div>
                        </div>
                        </div>
                        <button onClick={()=>{
                            nav("/order");
                            close();
                            }} className='cursor-pointer px-5 py-2 bg-amber-600 text-white text-2xl font-semibold'>
                            CONFIRMAR<br/>PEDIDO
                        </button>
                    </div>

                    <button onClick={close} className='cursor-pointer px-5 py-2 bg-amber-600 text-white font-semibold flex gap-5'>
                        <h3>CONTINUAR VIENDO</h3>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white">
                                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                            </svg>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Cart;