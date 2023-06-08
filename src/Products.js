import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Cartfetch } from "./Redux/Cartfetch";
import { Button, ButtonGroup, FormControlLabel, Grid } from "@mui/material";
import { Add } from "./Redux/Actions.js/Action";

export const Product = () => {
  const data = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const send = (e) => {
    console.log(e);
    dispatch(Add(e));
    
  };
  console.log("hiii", data);
  useEffect(() => {
    dispatch(Cartfetch());
  }, [dispatch]);
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Products
        <hr className="text-light" />
      </h1>
      <Grid
        container
        spacing={2}
        sx={{ ml: "5vw", color: "white", width: "93vw" }}
        item
      >
        {data.data.map((items) => {
          return (
            <>
              <Grid xs={12} md={6} lg={4} item>
                <div style={{ width: "10vw" }}>
                  <h5 className="card-title">{items.title}</h5>

                  <img
                    src={items.thumbnail}
                    style={{ height: "250px", width: "250px" }}
                    alt="Internet error"
                  />
                  <p className="card-text">{items.description}</p>
                  <p className="card-text text-center">
                    Price: ₹{items.price}{" "}
                    <span className="mx-5">Stock: {items.stock}</span>
                  </p>

                  <p>Discount: {items.discountPercentage}%</p>

                  <ButtonGroup sx={{ mx: "auto", mt: "2rem" }}>
                    <FormControlLabel
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
                    />
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
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};
