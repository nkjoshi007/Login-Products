export const Add=(item)=>{
    return{
        type:'Addcart',
        payload:item
    }
}
export const Remove=(item)=>{
    return{
        type:'Removecart',
        payload:item
    }
}