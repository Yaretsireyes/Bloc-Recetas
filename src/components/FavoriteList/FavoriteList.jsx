import { useContext, useEffect } from "react";
import { RecetasContext } from "../../RecipeContext";
import { Card, Container } from "react-bootstrap";
import './style.css'
import { NavLink } from "react-router-dom";

const FavoriteList = () => {

    const {
        setGuardarReceta,
        guardarReceta,
        handleEliminarFav
    } = useContext(RecetasContext)


    useEffect(() => {
        if (JSON.parse(localStorage.getItem('favorito'))) {
            setGuardarReceta(JSON.parse(localStorage.getItem('favorito')))
        }
    }, [])

    return (
        <>
            <Container className="card mt-5">
                <NavLink to={'/'} className='pt-5 ms-5'>
                    <i className="bi bi-house-heart-fill fs-1 text-black"></i>
                </NavLink>
                <Card.Title className="fs-1 text-center mt-5">Favoritos</Card.Title>
                <Card.Body >
                    {
                        guardarReceta.map((item, index) => (
                            <>
                                <Card className="mt-3 d-flex me-5 ms-5">
                                    <div className="trash d-flex justify-content-end">
                                        <i className="bi bi-trash " onClick={() => handleEliminarFav(index)}></i>
                                    </div>
                                    <p><h2>Nombre Receta: </h2>{item.nombreReceta}</p>
                                    <p><h2>Ingrediente: </h2>{item.ingredientes}</p>
                                    <p><h2>Pasos: </h2>{item.pasos}</p>
                                    <p><h2>Categoria: </h2>{item.categoria}</p>
                                </Card>
                            </>
                        ))
                    }
                </Card.Body>
            </Container>
        </>
    );
}

export default FavoriteList;