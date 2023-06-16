import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Cartfetch } from "./Redux/Cartfetch";
import { Button, ButtonGroup, FormControlLabel, Grid } from "@mui/material";
import { Add, Remove } from "./Redux/Actions.js/Action";
import { Link, Outlet } from "react-router-dom";

export const Product = () => {
  const data = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const send = (e) => {
    console.log(e);
    dispatch(Add(e));
  };
  const sendRemove = (e) => {
    console.log(e);
    dispatch(Remove(e));
  };
  console.log("hiii", data);
  useEffect(() => {
    dispatch(Cartfetch());
  }, [dispatch]);
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ ml: "5vw",mt:"5vh", color: "white", width: "93vw" }}
        item
      >
        {data.data.map((items) => {
          return (
            <>
              <Grid xs={12} md={6} lg={4} item>
                <div className="product_cart">
                  <h3 style={{textAlign:"center"}}>{items.title}</h3>
                  <Link to={`/Products/${items.id}`} className="link">
                  <img
                    src={items.thumbnail}
                    style={{ height: "15rem", width: "15rem" }}
                    alt="Internet error"
                  />                        </Link>
                  
                  <Link to={`/Products/${items.id}`} className="link">
                  <p>{items.description}</p>
                        </Link>
                  <p>
                    Price: ${items.price}{" "}
                  </p>
                    <p className="mx-5">Stock: {items.stock}</p>

                  <p>Discount: {items.discountPercentage}%</p>
                  <ButtonGroup sx={{ ml:"3rem", mt: "2rem" }}>
                    {(items.qnty>1) ? (<><FormControlLabel
                    control={
                      <Button
                        color="primary"
                        variant="outlined"
                        sx={{ width: "10vw" }}
                        onClick={()=>send(items)}
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
                        onClick={()=>sendRemove(items)}
                      >
                        -
                      </Button>
                    }
                  /></>):(<><FormControlLabel
                    control={
                   <Button
                        color="primary"
                        variant="contained"
                        sx={{ width: "10vw" }}
                        onClick={()=>send(items)}
                      >
                        Add to Cart
                      </Button> 
                    }
                  /></>)}
                    <FormControlLabel
                      control={
                        <Button
                          color="secondary"
                          variant="contained"
                          sx={{ width: "10vw" }}
                        >
                          <Link to={`/Products/${items.id}`} className="link">
                          Buy Now
                        </Link>
                          
                        </Button>
                      }
                    />
                  </ButtonGroup>
                </div>
              </Grid>
            </>
          );
        })}
      </Grid>
      <Outlet/>
    </>
  );
};
