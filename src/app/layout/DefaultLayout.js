import React from 'react'

import Header from 'app/components/Header'
import Footer from 'app/components/Footer' 

const DefaultLayout = ({children}) => {
  return (
    <React.Fragment>
      <Header/> 
      <main>
        {children}
      </main>
      <Footer/>
    </React.Fragment>
  )
}

export default DefaultLayout
