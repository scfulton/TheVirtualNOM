import React from "react";


export default function RestaurantCard(props) {
    console.log("in card "+ props)
  return <div>{props.children}</div>;
}
