/* eslint-disable import/no-anonymous-default-export */
/* Aqui será para todos os tipos de request envolvendo os Filmes */




const API_KEY = "cb2deaf4dd02c75625174dde837ca3be"
const API_URL = "https://api.themoviedb.org/3"


/* Fetch concatenando 

Aqui estou fazendo uma requisição para um site externo, de certa forma estou acessando o site...

A linha a baixo será executada (acessando o site)
    const req = await fetch(`${API_URL}${API_KEY}`)

    o await garante que a resposta seja esperada para depois executar o próximo comando

*/
const basicFetch = async (url) => {

    
    const req = await fetch(`${API_URL}${url}`)

    /* Transformarei minha req em json e depois vou retornar esse json*/
    const json = await req.json();
    return json
}

export default {
    getHomeList: async ()=>{
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedia',
                title: 'Filmes de Comédia',
                itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Filmes de Terror',
                itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'recomendados',
                title: 'Recomendados para você!',
                itens: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'chato',
                title: 'Para morrer de tédio',
                itens: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'doc',
                title: 'Documentarios',
                itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },

        ];
    },
    getMovieInfo: async(movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language-pt-BR&api_key=${API_KEY}`);
                break
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language-pt-BR&api_key=${API_KEY}`);
                break
                default:
                    info = null;
                break
            }
        }

        return info


    }
}