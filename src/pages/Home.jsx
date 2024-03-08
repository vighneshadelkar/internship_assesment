import React from 'react'
import Card1 from '../components/Card1';
import "../styles/Home.css";
import card1data from "../data/Card1data"

export default function Home() {
  return (
  <div className="homeContainer">
    <div className="homeWrapper">
        <h2 className="title">Best Website Builder in the US</h2>
        <div className="cards">
            {card1data.map((d)=>{
                return <Card1 key={d.id} {...d}/>;
            })}
        </div>
        <Card1/>
    </div>
  </div>
  )
}
