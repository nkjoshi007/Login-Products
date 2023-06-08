const Cart_Products={
    Cart:[]
}

  const cartreducer=(state=Cart_Products,action)=>{
switch (action.type){
    case "Addcart":
    const No_cart = state.Cart.findIndex((item)=>item.id===action.payload.id)
    if(No_cart>=0){
    state.Cart[No_cart].qnty+=1
    return{
        ...state,
        Cart:[...state.Cart]
    }
    }else{
        const inp_qnty={...action.payload,qnty:1}
        return{
            ...state,
            Cart:[...state.Cart,inp_qnty]
        }
    }
    case "Removecart":
    const No_cart1 = state.Cart.findIndex((item)=>item.id===action.payload.id)
        if(state.Cart[No_cart1].qnty>1){
            state.Cart[No_cart1].qnty-=1
            return{
                ...state,
                Cart:[...state.Cart]
            }
            }else if(state.Cart[No_cart1].qnty===1){
                const data = state.Cart.filter((el)=>el.id !== action.payload.id);
                return{
                    ...state,
                    Cart:data
                }

            }   
            
    default:
        return state;
}
}
export default cartreducer;