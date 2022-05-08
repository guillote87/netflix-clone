import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios'

export const Row = ({ title, urlFetch, isLargeRow }) => {
    const imagePath = "https://image.tmdb.org/t/p/original"
    const [movies, setMovies] = useState([])


    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(urlFetch)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [urlFetch])

   
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row-posters'>

                {movies.map(movie => (
                    <img
                       
                        key={movie.id}
                        className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                        src={`${imagePath}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.original_title}
                    />
                ))}
            </div>
       
        </div>
    )
}
