import React from "react";

const addClass = (Component, name) => {
  return (props) => {
    return (
      <div className={name}><Component parent={'addClass'} {...props}/></div>
    )
  }
}

export default addClass
