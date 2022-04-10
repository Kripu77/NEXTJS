import React from 'react'
import link from 'next/link'
import Link from 'next/link'
import logo from "./logo.svg"
const index = () => {
  return (
    <div style={{marginTop:'90px'}}>
      <img src={'https://www.hungryjacks.com.au/App_Themes/HJ/assets/images/HJLogo.svg'} className="App-logo" alt="logo" />
      <h1> This page will contain our trading hours view</h1>
      <Link href="/"> Back to Home Page</Link>
      <br></br>
      <Link href="/tradinghours/data">View Data Source</Link>
    </div>
  );
}

export default index
