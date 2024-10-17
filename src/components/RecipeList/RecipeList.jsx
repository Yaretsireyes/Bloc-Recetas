import { Card, Container, Navbar } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { RecetasContext } from "../../RecipeContext";
import RecipeForm from "../RecipeForm/RecipeForm";
import { Link } from "react-router-dom";
import './style.css'

const RecipeList = () => {
    const {
        handleShow,
        handleClose,
        show,
        guardarReceta,
        setGuardarReceta,
        handleEliminar,
        handleFavorito,
        handleCrearRecetas,
        setRecetas,
        recetas,
        setRecetaIngrediente,
        recetaIngrediente,
        pasos,
        setPasos,
        categoria,
        setCategoria,
        HandleEditar
    } = useContext(RecetasContext)


    useEffect(() => {
        if (JSON.parse(localStorage.getItem('receta'))) {
            setGuardarReceta(JSON.parse(localStorage.getItem('receta')))
        }
    }, [])



    return (
        <>
            <Container>
                <Card.Title className="text-center fs-1">Recetas</Card.Title>
                <Card>
                    <Navbar>
                        <Link to='/favorito'>
                            <p className="bi bi-star fs-1"></p>
                        </Link>
                        <RecipeForm
                            handleShow={handleShow}
                            handleClose={handleClose}
                            show={show}
                            handleCrearRecetas={handleCrearRecetas}
                            setRecetas={setRecetas}
                            recetas={recetas}
                            setRecetaIngrediente={setRecetaIngrediente}
                            recetaIngrediente={recetaIngrediente}
                            pasos={pasos}
                            setPasos={setPasos}
                            categoria={categoria}
                            setCategoria={setCategoria}
                        />
                    </Navbar>
                    <Card.Body >
                        <Card.Body className="card-body">
                            {
                                guardarReceta.map((item, index) => (
                                    <>
                                        <Card className="card" key={index}>
                                            <div className="d-flex flex column ">
                                                <div className="d-flex gap-5">
                                                    <i className="bi bi-star" onClick={() => handleFavorito(index)}></i>
                                                </div>
                                                <div className="editar">
                                                    <i className="bi bi-pencil-square" onClick={() => HandleEditar(index)}></i>
                                                </div>
                                                <div className="trash">
                                                    <i className="bi bi-trash " onClick={() => handleEliminar(index)}></i>
                                                </div>
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
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default RecipeList;