import React from 'react'
import { UserContext } from '../../App'

function ComponentC() {
  return (
    <div>
        <UserContext.Consumer>
            {value=> <h2>My name is {value}</h2>}
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC