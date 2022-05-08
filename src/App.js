import React from 'react'
import '../src/components/Row/Row.css'
import { Row } from '../src/components/Row/Row'
import {Banner} from '../src/components/Banner/Banner'
import request from '../src/utils/request'

export const App = () => {

  return (
    <div className="app">
    
<Banner/>
      <Row title="NETFLIX ORIGINALS" urlFetch={request.fetchNetflixOriginals} isLargeRow></Row>
      <Row title="Acción" urlFetch={request.fetchActionMovies} ></Row>
      <Row title="Comedia" urlFetch={request.fetchComedyMovies} ></Row>
      <Row title="Terror" urlFetch={request.fetchHorrorMovies}></Row>


    </div>

  )
}
