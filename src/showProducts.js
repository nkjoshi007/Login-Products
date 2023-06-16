import { Product } from "./Products"

export const showProducts=()=>{
    return(
        <>
         <h1 style={{ textAlign: "center", color: "white" }}>
        Products
        <hr className="text-light" />
      </h1>
      <Product/>
        </>
    )
}