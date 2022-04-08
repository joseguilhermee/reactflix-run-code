import React, {useState} from "react";
import "./styleRow.css"
import { MdOutlineNavigateNext } from 'react-icons/md';
import { MdOutlineNavigateBefore } from 'react-icons/md';


export default ({title, itens}) => {

    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = itens.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x)
    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
               <MdOutlineNavigateBefore style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <MdOutlineNavigateNext style={{fontSize: 50}} />
            </div>
            <div className="movieRow--listArea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: itens.results.length * 150
                }}>
                    
                        {itens.results.length > 0 && itens.results.map((iten, key)=>(
                            <div key={key} className="itenImg">
                                    <img src={`http://image.tmdb.org/t/p/w300${iten.poster_path}`} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}