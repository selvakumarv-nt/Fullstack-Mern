//import React from 'react'

import Child from "./Child"

const Parent = () => {
  return (
    <div>
        <Child name="sk" age ={25} marks={[90,91,92,93,94,95]} person ={{name:"sk",dep:["ct","ds"]}}/>
    </div>
  )
}

export default Parent