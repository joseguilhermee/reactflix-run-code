
import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './requestFilm';
import MovieRow from './components/movieRow'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';



 
export default () => {
/*padrão comum para salvar o state*/
  const [movieList, setMovieList] = useState([])
  const [featuredData, setfeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)


  
  useEffect(()=>{

    
    
    const loadAll = async () =>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      //pegando o Filme em Destaque
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length -1));
      let chosen = originals[0].itens.results[randomChosen]
      // await fará uma requisição, então espere o resultado
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setfeaturedData(chosenInfo)
      console.log(chosenInfo)
    }



    loadAll();
  }, []);



  useEffect(()=> {
    const scrollListener = () => {
      if(window.scrollY > 40) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }


  })






  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        
        {movieList.map((iten, key)=>(
        /*O map serve para ajudar a setar as caracteristicas, e é importante sempre ter a "key = {key}*/
          <MovieRow key={key} title={iten.title} itens={iten.itens} />

        ))}
      </section>
      <footer>
        Feito por José Guilherme Neto para um trabalho da Faculdade! <br></br>
        Todos os direitos de imagem reservados para Netflix
        <div className='linksRede'>

        API usada <a href='https://www.themoviedb.org'>https://www.themoviedb.org</a><br></br>
        link do <a href='https://github.com/joseguilhermee'>GitHub</a><br></br>
        link do <a href='https://www.linkedin.com/in/jose-guilherme-neto/'>Linkedin</a>
        </div>
      </footer>



      {movieList.length <= 0 &&
      <div className='loading'>
        <img src="https://c.tenor.com/Rfyx9OkRI38AAAAC/netflix-netflix-startup.gif" alt="carregando"></img>
      </div>
      }
    </div>
  )
}
