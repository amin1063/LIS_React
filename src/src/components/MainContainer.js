import React from 'react'

const MainContainer = ({children}) => {
  return (
    <div style={{maxWidth:'1200px',margin:'0 auto',overflow:'hidden'}}>{children}</div>
  )
}

export default MainContainer