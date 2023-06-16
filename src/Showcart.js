import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Button, ButtonGroup, FormControlLabel, Grid } from "@mui/material";
import { Add, Remove } from "./Redux/Actions.js/Action";
export const Showcart = () => {
    const data = useSelector((state) => state.cartreducer.Cart);
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
    return (
      <>
        <h1 style={{ textAlign: "center", color: "white" }}>
          Cart Details
          <hr className="text-light" />
        </h1>
        <Grid
          container
          spacing={2}
          sx={{ ml: "5vw", color: "white", width: "93vw" }}
          item
        >
          {data.map((items) => {
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
                      Price: ${items.price}{" "}
                      <span className="mx-5">Stock: {items.stock}</span><br/>
                      <span className="mx-5">Quantity: {items.qnty}</span>
                    </p>
  
                    <p>Discount: {items.discountPercentage}%</p>
                    <p>Total: ${items.qnty*items.price}</p>
  
                    <ButtonGroup sx={{ mx: "auto", mt: "2rem" }}>
                      <FormControlLabel
                        control={
                          <Button
                            color="primary"
                            variant="contained"
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
                            variant="contained"
                            sx={{ width: "10vw" }}
                            onClick={()=>sendRemove(items)}
                          >
                            -
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