import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { useCart } from '../context/CartContext';

const ProductDetails2 = ({id, close}) => {
    const { addToCart } = useCart();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const [qty, setQty] = useState(1);

    useEffect(() => {
    async function getProduct() {
        setLoading(true);
        try {
            const answ = await fetch(`https://api-funval-g6.onrender.com/products/${id}`);
            const prd = await answ.json();
            setData(prd)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    getProduct();
    }, []);
    
    function handleAdd() {
        addToCart({
            ...data,
            quantity: qty
        });
    }

    return (
        <div className="fixed top-20 left-0 z-30">
            <div onClick={close} className="absolute inset-0 w-screen h-screen bg-black/50 backdrop-blur-xs z-30" />
            <div className="relative z-40 w-screen bg-[#fcf8f5] px-[10%] py-10">
                {loading && <Loader/>}
                <div className='flex items-stretch justify-between gap-20'>
                    <img src={data.image_url} alt={"imagen de"+data.name} className='h-100 w-auto' />
                    <div className='w-full h-100 flex flex-col justify-between'>
                        <div>
                            <div className='w-full flex items-start justify-between'>
                                <h1 className='pb-5 text-4xl font-bold max-w-100'>{data.name}</h1>
                                <div onClick={close} className='cursor-pointer rounded-full bg-red-600'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="white" className='size-9'><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg></div>
                            </div>
                            <p>{data.description}</p>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <h3 className='font-bold text-4xl'>${data.price}</h3>
                            <div className='flex gap-10'>
                            <div className='flex items-center text-center gap-10'>
                                <div onClick={() => qty > 1 && setQty(qty - 1)} className='cursor-pointer rounded-full bg-amber-600'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"/></svg></div>
                                <span className='text-2xl'>{qty}</span>
                                <div onClick={() => setQty(qty + 1)} className='cursor-pointer rounded-full bg-amber-600' ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></div>
                            </div>
                            <button onClick={() => {
                                handleAdd();
                                close();
                                }} className='cursor-pointer px-5 py-2 bg-amber-600 text-white text-2xl font-semibold'>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails2;
