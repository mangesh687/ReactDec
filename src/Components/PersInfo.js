import React from 'react'
function PersInfo({name,age}) {
//function PersInfo(props) {
//  const { name, age } = props;
  return (
    <div className='person-card'>
      {/* // <h2>Name:{props.name}</h2>
      //  <h2>Age: {props.age}</h2> */}
       <h2>Name:{name}</h2>
       <h2>Age: {age}</h2>
    </div>
  )
}

export default PersInfo;