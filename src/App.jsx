"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"
import "./App.css"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json());


function App() {
  // https://script.google.com/macros/s/AKfycbxnBrjCvFDY-oLHoJztJz_08ub7DPA3EXFjQeRUJtJERmmAt0ai4JYjxRDmithaols8_g/exec

  const { data, error, isLoading } = useSWR(
    'https://script.google.com/macros/s/AKfycbxnBrjCvFDY-oLHoJztJz_08ub7DPA3EXFjQeRUJtJERmmAt0ai4JYjxRDmithaols8_g/exec',
    fetcher
  );

 

  return (
    <div className="app">
      <Header />
      <main>
        <LandingPage />
        <ProductList products={data} loading={isLoading} />
      </main>
      <Footer />
    </div>
  )
}

export default App

