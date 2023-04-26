import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <MDBFooter className={classes.input}>
      <MDBContainer className="p-3">
        <section  style={{ textAlign: "center" }}>
          <h6>
            <b>
              HowToBasic is a free learning website where you can learn basic
              skills in a fun and easy way.
            </b>
          </h6>
        </section>
      </MDBContainer>
      <div
        className="text-center"
        style={{ backgroundColor: "rgba(1, 1, 1)",color:"white" }}
      >
        © 2022 Copyright: &nbsp;
        <Link to="/" style={{ textDecoration: "none", }}>
          HowToBasic
        </Link>
      </div>
    </MDBFooter>
  );
}
