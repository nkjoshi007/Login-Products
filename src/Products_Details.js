import { Alert, Button, ButtonGroup, FormControlLabel, Grid, Snackbar } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Product } from "./Products"
import { Add, Remove } from "./Redux/Actions.js/Action"
import React, { useState } from "react"

export const ProductsDetails=()=>{
  const [open, setOpen] = useState(false);



  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
    const {Product_id}= useParams()

    const post = useSelector(state =>
      state.Cart.data.find(post => post.id === parseInt(Product_id))
    )
    // const data = useSelector((state) => state.cartreducer.Cart);
    const dispatch = useDispatch();
    const send = (e) => {
      console.log(e);
      dispatch(Add(e));
      setOpen(true);
    };
    const sendRemove = (e) => {
      console.log(e);
      dispatch(Remove(e));
    };
    console.log("singleproduct",post)
  
    if (!post) {
      return (
        <section>
          <h2 style={{textAlign:"center",marginTop:"38vh",marginBottom:"39vh"}}>Post not found!</h2>
        </section>
      )
    }
  
    return (
        <>
      
       <Grid sx={{mt:"2rem"}} container item>
              <Grid xs={12} md={6} lg={4} item>
                <div className="singlecart_heading">
                  <h1 style={{textAlign:"center"}}>{post.title}</h1>
                <div className="singlecart">
                  <div className="product">

                  <img
                    src={post.thumbnail}
                    style={{ height: "40vh", width: "30vw" }}
                    alt="Internet error"
                  />
                  </div>
                  <div className="product_detail">
                  <p>{post.description}</p>
                  <p>
                    Price: ${post.price}{" "}
                  </p>
                    <p className="mx-5">Stock: {post.stock}</p>

                  <p>Discount: {post.discountPercentage}%</p>
                  <ButtonGroup sx={{ mt: "2rem",display:"block" }}>
                      <FormControlLabel
                        control={
                          <Button
                            color="primary"
                            variant="outlined"
                            sx={{ width: "10vw" }}
                            onClick={()=>send(post)}
                          >
                            +
                          </Button>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Button
                            color="secondary"
                            variant="outlined"
                            sx={{ width: "10vw" }}
                            onClick={()=>sendRemove(post)}
                          >
                            -
                          </Button>
                        }
                      />
                    </ButtonGroup>
                  <ButtonGroup sx={{ mt: "2rem" }}>
                    <FormControlLabel
                      control={
                        <Button
                          color="primary"
                          variant="contained"
                          sx={{ width: "10vw" }}
                          onClick={()=>send(post)}

                        >
                          Add to Cart
                        </Button>
                      }
                    />
    <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Added item to your cart
            </Alert>
          </Snackbar>                    
          <FormControlLabel
                      control={
                        <Button
                          color="secondary"
                          variant="contained"
                          sx={{ width: "10vw" }}
                        >
                          Buy Now
                          
                        </Button>
                      }
                    />
                  </ButtonGroup>
                  </div>
                </div>
                </div>
              </Grid>
              </Grid>
              <Product/>
              </>
    )
  }
    
