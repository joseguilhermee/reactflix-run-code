/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './FeaturedMovie.css'



export default ({item}) => {
    
    let fristDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }
    let descr = item.overview;
    if (descr.length > 200) {
        descr = descr.substring(0, 200)+'...'
    }
    return (

        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--point">{item.vote_average} pontos</div>
                        <div className="featured--year">{fristDate.getFullYear()}</div>
                        <div className="featured--temp">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--desc">{descr}</div>
                    <div className="featured--buttons">


                        <a className="featured--Assistir" href={`/watch/${item.id}`}>► Assistir</a>
                        <a className="featured--Add" href="">+ Minha lista</a>



                    </div>
                    <div className="featured--genres"><strong>Gêneros: </strong>{ genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}
