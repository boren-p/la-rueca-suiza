import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <div style={{backgroundImage:"url(./hero.png)"}} className='h-screen w-full bg-cover bg-bottom-right bg-no-repeat flex md:flex-col-reverse md:px-[10%] px-[5%] pt-[23%] pb-[13%]'>
             <h2 className='text-[#fcf8f5] text-shadow-lg text-6xl md:text-8xl'>Hecho a mano <br/>para tu hogar</h2>
            </div>
            <div className='md:h-screen w-full bg-[#f6f1ed] flex flex-col md:flex-row'>
                <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1675767528117-963ce219b52a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}} alt="muebles" className='md:h-screen h-100 w-full md:w-[55%] bg-cover bg-center bg-no-repeat' />
                <div className='h-full w-full md:w-[45%] flex flex-col gap-10 pl-[5%] py-10 items-baseline justify-center'>
                    <h2 className='text-5xl'>Hechas a mano <br/>conscientemente</h2>
                    <p className='w-full md:w-[60%]'>Muebles la Rueca Suiza es una empresa dedicada por más de 30 años a la fabricación de muebles, lámparas y accesorios para el hogar, la cual a través de sus productos ofrece a sus clientes calidad y cumplimiento, características importantes que la han llevado a posicionarse en el mercado colombiano.</p>
                    <button className='cursor-pointer p-5 bg-amber-600 text-white font-bold'>DESCARGA NUESTRO CATALOGO</button>
                </div>
            </div>
            <div className='h-190 md:h-screen w-full flex  items-center justify-center bg-[#fcf8f5] py-[10%] px-[10%]'>
                <div className='h-full w-full flex flex-col md:flex-row items-start justify-between'>
                <div className='h-full md:w-[20%] w-full flex flex-col md:items-start items-end justify-baseline gap-5'>
                    <h2 className='text-6xl'>Nuestro Trabajo</h2>
                    <Link to="/products"><button className='p-5 bg-amber-600 text-white font-bold'>VER PRODUCTOS</button></Link>
                </div>
                <div className='md:h-full md:w-[60%] flex flex-col md:flex-row items-start justify-center md:gap-3 gap-7'>
                    <div className='h-auto w-full md:w-[30%] md:h-full flex md:flex-col gap-3'>
                        <div style={{backgroundImage:"url(https://www.gollo.com/media/wysiwyg/Blog/CuerpoArticulo/shutterstock_1935725896.jpg)"}} className='h-full w-full bg-cover bg-center shadow-xl mb-4'/>
                        <div className='flex flex-col gap-3'>
                        <h3 className='text-2xl font-semibold'>Comedores</h3>
                        <p>Comedores de estilo suizo elaborados con materiales de alta calidad para brindar elegancia y confort.</p>
                        </div>
                    </div>
                    <div className='h-auto w-full md:w-[30%] md:h-full flex md:flex-col gap-3 '>
                        <div style={{backgroundImage:"url(https://www.pintuco.com.co/wp-content/uploads/2022/12/minimalisto-salas-pequenas-modernas-1-jpg.webp)"}} className='h-full w-full bg-bottom bg-cover shadow-xl mb-4'/>
                        <div className='flex flex-col gap-3'>
                        <h3 className='text-2xl font-semibold'>Salas</h3>
                        <p>Salas de diseño clásico y suizo con materiales de alta calidad para ofrecer exclusividad y confort.</p>
                        </div>
                    </div>
                    <div className='h-auto w-full md:w-[30%] md:h-full flex md:flex-col gap-3 '>
                        <div style={{backgroundImage:"url(https://miredvista.co/wp-content/uploads/2021/08/elegante-762x570.jpg)"}} className='h-full w-full bg-cover bg-bottom shadow-xl mb-4'/>
                        <div className='flex flex-col gap-3'>
                        <h3 className='text-2xl font-semibold'>Alcobas</h3>
                        <p>Materiales de alta calidad y trabajo artesanal, diseños estéticamente distintivos para el hogar.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
