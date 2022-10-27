import './ItemListContainer.css'
import { useEffect, useState } from "react";
import { ItemList } from '../ItemList/ItemList';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const [resultados, setResultados] = useState([]);
    const {competition} = useParams;     

    const getResults = () =>{
        fetch("https://www.scorebat.com/video-api/v3/feed/?token=MjkxMTRfMTY2NjIyOTA3N181Zjg0NDVmM2U0ODQ1MTIxZWMyNDllY2Q0ZGVkMTZmYjQyN2EzOTEx")
        .then((response) => response.json())
        .then((data) => {
           
            setResultados(data.response)
            console.log(data.response)
            
            
        })
    }
    
    useEffect(() =>{
       if(competition){
        const respuesta = setResultados.filter((respuesta) => respuesta.competition === competition)
        setResultados(respuesta)
       }else{
        getResults()
       }
 },[competition])

    

  return (
    <div>
        <Carousel>
            <Carousel.Item>
                <img
                style={{height:"450px"}}
                className="d-block w-100"
                src="../ligas.jpg"
                alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:"450px"}}
                className="d-block w-100"
                src="../aposta.jpg"
                alt="Second slide"
                />
                
            </Carousel.Item>
            
        </Carousel>
        <ItemList lista={resultados}  />
    </div>
  )
}

export default ItemListContainer