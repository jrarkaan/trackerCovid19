import React, { Component, useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import "./infoBox.css";

const InfoBox = ({ title, cases, total, active, isRed, ...props })=>{
  return(
    <Card onClick={props.onClick}
      className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}
    >
      <CardContent >
        {/* Title i.e Coronavirus cases */}
        <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
        {/* +120k number of cases */}
        <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>{cases}</h2>
        {/* 1.2M Total */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}
export default InfoBox;
