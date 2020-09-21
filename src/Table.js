import React, { Component } from 'react';
import cx from "classnames";
import styles from "./Table.module.css";
import numeral from "numeral";

const Table = ({ countries })=>{
  return(
    <div className={styles.table}>
      {
        countries.map(country=>(
          <tr>
            <td>{country.country}</td>
            <td><strong>{numeral(country.cases).format("0,0")}</strong></td>
          </tr>
        ))
      }
    </div>
  );
}

export default Table;
