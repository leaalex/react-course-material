import React from "react";

const Container = ({children}) => {
  console.log(children)
  return <div className={'container'}>{children}</div>
}
export default Container
