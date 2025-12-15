import React, { useReducer, useState } from 'react';
import { useCart } from '../context/CartContext';
import Checkbox from '../assets/Checkbox';


const inState = {
    name : "",
    city : "",
    address : "",
    phone : "",
    email : "",
    auth : false,
    confirmAdvance : false,
}

function reducer (state, action){
    switch (action.type) {
        case "name":
            return({...state, name:action.payload })
        case "city":
            return({...state, city:action.payload })
        case "address":
            return({...state, address:action.payload })
        case "phone":
            return({...state, phone:action.payload })
        case "email":
            return({...state, email:action.payload })
        case "auth":
            return({...state, auth:action.payload })
        case "confirmAdvance":
            return({...state, confirmAdvance:action.payload })
        default:
            break;
    }
}

const Form = () => {
    const [ state, dispatch ] = useReducer(reducer, inState);
    const [ error, setError ] = useState(false);
    const { cart, total, advance, advanceValue, increaseAdvance, decreaseAdvance, removeFromCart } = useCart();

    async function HandleSubmit (e){
        e.preventDefault();

        if(!state.name 
            || !state.city
            || !state.address
            || !state.phone
            || !state.email
            || !state.auth 
            || !state.confirmAdvance){
            setError(true);
            return;
        } else {
            setError(false);
        }

        try {
            const answ = await fetch("/api/resend", {
                method:"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    formData: state, 
                    cart, 
                    total }),
            })

            const confirm = await answ.json();
            console.log(confirm)
        } catch (error) {
            
        }
    }
    return (
        <div className='py-20 px-[10%] w-full'>
            <h1 className='font-semibold text-4xl my-10'>Finaliza tu pedido</h1>
            <div className='flex flex-col-reverse md:flex-row items-start justify-center w-full gap-10'>
                <div className='w-full md:w-[50%] flex flex-col'>
                    <form onSubmit={HandleSubmit} className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='text-2xl font-semibold'>Nombre Completo</label>
                            <input 
                                type="text" 
                                value={state.name}
                                onChange={(e) => {
                                    dispatch({ type: "name", payload: e.target.value });
                                }} 
                                className='text-center text-2xl appearance-none bg-amber-200 h-10 inset-shadow-2xs rounded-xl focus:border-2 focus:bg-amber-100 focus:inset-shadow-none focus:shadow-2xl border-amber-400 outline-none focus:outline-none'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='text-2xl font-semibold'>Ciudad</label>
                            <input 
                                type="text" 
                                value={state.city}
                                onChange={(e) => {
                                    dispatch({ type: "city", payload: e.target.value });
                                }}
                                className='text-center text-2xl appearance-none bg-amber-200 h-10 inset-shadow-2xs rounded-xl focus:border-2 focus:bg-amber-100 focus:inset-shadow-none focus:shadow-2xl border-amber-400 outline-none focus:outline-none'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='text-2xl font-semibold'>Dirección</label>
                            <input 
                                type="text" 
                                value={state.address}
                                onChange={(e) => {
                                    dispatch({ type: "address", payload: e.target.value });
                                }}
                                className='text-center text-2xl appearance-none bg-amber-200 h-10 inset-shadow-2xs rounded-xl focus:border-2 focus:bg-amber-100 focus:inset-shadow-none focus:shadow-2xl border-amber-400 outline-none focus:outline-none'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='text-2xl font-semibold'>Telefono</label>
                            <input 
                                type="tel" 
                                value={state.phone}
                                onChange={(e) => {
                                    dispatch({ type: "phone", payload: e.target.value });
                                }}
                                className='text-center text-2xl appearance-none bg-amber-200 h-10 inset-shadow-2xs rounded-xl focus:border-2 focus:bg-amber-100 focus:inset-shadow-none focus:shadow-2xl border-amber-400 outline-none focus:outline-none'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='text-2xl font-semibold'>Correo Electronico</label>
                            <input 
                                type="email" 
                                value={state.email}
                                onChange={(e) => {
                                    dispatch({ type: "email", payload: e.target.value });
                                }}
                                className='text-center text-2xl appearance-none bg-amber-200 h-10 inset-shadow-2xs rounded-xl focus:border-2 focus:bg-amber-100 focus:inset-shadow-none focus:shadow-2xl border-amber-400 outline-none focus:outline-none'/>
                        </div>
                        <div className='flex gap-3 pl-5 w-full items-center'>
                            <input 
                                type="checkbox" 
                                checked={state.auth}
                                onChange={(e) => {
                                    dispatch({ type: "auth", payload: e.target.checked });
                                }}
                                name="" 
                                id="" 
                                className='size-5'/>
                            <label htmlFor="">Autorizo el tratamiento de mis datos personales.</label>
                        </div>
                        <div className='flex gap-3 pl-5 w-full items-center'>
                            <input 
                                type="checkbox" 
                                checked={state.confirmAdvance}
                                onChange={(e) => {
                                    dispatch({ type: "confirmAdvance", payload: e.target.checked });
                                }}
                                name="" 
                                id="" 
                                className='size-5'/>
                            <label htmlFor="">Confirmo el anticipo del <strong>{advance}%</strong> que quiero hacer para realizar este pedido.</label>
                        </div>
                        {error && <div className='px-5 py-2 bg-red-600 text-white text-center text-2xl font-semibold'> TODOS LOS CAMPOS SON OBLIGATORIOS</div>}

                        <button  type="submit" className='cursor-pointer px-5 py-2 bg-amber-600 text-white text-2xl font-semibold'>
                            CONFIRMAR PEDIDO
                        </button>
                    </form>
                </div>
                <div className='w-full md:w-[50%]'>
                    {cart[0]&&<h2 className='w-full text-center py-3 text-4xl font-semibold'>Tu pedido</h2>}
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
                                    <h3>${prod.price}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
