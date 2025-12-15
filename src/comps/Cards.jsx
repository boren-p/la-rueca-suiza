import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import ProductDetails from './ProductDetails';
import ProductDetails2 from './ProductDetails2';

const Cards = () => {
    const [data, setData] = useState([]); 
    const [data2, setData2] = useState([]); 
    const [dataSwitch, setDataSwitch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState(false);
    const [details2, setDetails2] = useState(false);
    const [prodSel, setProdSel] = useState("");
    const [prodSel2, setProdSel2] = useState("");

    useEffect(()=>{
    async function getData(){
        setLoading(true);
        try {
            const answ = await fetch("https://furniture-api.fly.dev/v1/products?limit=100");
            const dataM = await answ.json();
            setData(dataM.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    getData();
    }, [])

    useEffect(()=>{
    async function getData(){
        setLoading(true);
        try {
            const answ = await fetch("https://api-funval-g6.onrender.com/products/?skip=0&limit=100&category=muebles");
            const dataM = await answ.json();
            setData2(dataM);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    getData();
    }, [])
    useEffect(()=>{
        console.log(data2);
    }, [data2])
    
    function closeModal(){
        setDetails(false);
        setDetails2(false);
    }
    
    return (
        <div className='px-[5%] md:px-[10%]'>
            {loading && <div className="z-50 flex w-full h-100 items-center justify-center bg-[#fcf8f5]"><Loader/></div>}
            {details && <ProductDetails id={prodSel} close={closeModal}/>}
            {details2 && <ProductDetails2 id={prodSel2} close={closeModal}/>}
            {dataSwitch
                ?<button onClick={()=>{setDataSwitch(false)}} className='cursor-pointer px-5 py-2 bg-amber-600 text-white text-2xl font-semibold mb-5'>Mostrar Antiguos</button>
                :<button onClick={()=>{setDataSwitch(true)}} className='cursor-pointer px-5 py-2 bg-amber-600 text-white text-2xl font-semibold mb-5'>Mostrar Nuevos</button>}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {!dataSwitch && data.map((dat)=>{
                    return(
                    <div key={dat.id} onClick={()=>{
                            setProdSel(dat.sku)
                            setDetails(true);
                            }} >
                    <div className='relative z-10'>
                        <img src={dat.image_path} alt={"imagen de "+ dat.name} />
                        <div className='absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs opacity-0 md:hover:opacity-100 active:opacity-100 transition'>
                            <h3 className='text-white font-semibold text-2xl drop-shadow-lg'>VER DETALLES</h3>
                        </div>
                    </div>
                    <div className='flex justify-between font-bold text-xl'>
                        <h3>{dat.name}</h3>
                        <h3>{"$"+dat.price}</h3>
                    </div>
                    <h3>{dat.category}</h3>    
                    </div>
                )})}
                {dataSwitch && data2.map((dat)=>{
                    return(
                    <div key={dat.id} onClick={()=>{
                            setProdSel2(dat.id)
                            setDetails2(true);
                            }} >
                    <div className='relative z-10'>
                        <img src={dat.image_url} alt={"imagen de "+ dat.name} />
                        <div className='absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs opacity-0 hover:opacity-100 transition'>
                            <h3 className='text-white font-semibold text-2xl drop-shadow-lg'>VER DETALLES</h3>
                        </div>
                    </div>
                    <div className='flex justify-between font-bold text-xl'>
                        <h3>{dat.name}</h3>
                        <h3>{"$"+dat.price}</h3>
                    </div>
                    <h3>{dat.category}</h3>    
                    </div>
                )})}
            </div>
        </div>
    );
}

export default Cards;
