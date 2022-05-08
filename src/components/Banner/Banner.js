import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios'
import requests from '../../utils/request'
import './Banner.css'

export const Banner = () => {
    const imagePath = "https://image.tmdb.org/t/p/original"
    const [movie, setmovie] = useState([])

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setmovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)]
            )
            return request
        }
        fetchData()
    }, [])
    function truncate (str,n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str 
    }

    return (
        <>
            <header className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${imagePath}${movie?.backdrop_path})`,
                    backgroundPosition: "top center"
                }}
            >
                <div className='banner-contents'>
                    <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                    <h1 className="banner-description">{truncate(movie?.overview,200)}</h1>
                    <div className='banner-buttons'>
                        <button className='banner-button'>Reproducir</button>
                        <button className='banner-button'>Mi Lista</button>
                    </div>
                </div>
                <div className="banner-fadeBottom"></div>
            </header>
        </>
    )
}
