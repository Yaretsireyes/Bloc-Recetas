import { useContext } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { RecetasContext } from "../../RecipeContext";

const RecipeForm = (
    { handleShow,
        handleClose,
        show,
        handleCrearRecetas,
        setRecetas,
        recetas,
        setRecetaIngrediente,
        recetaIngrediente,
        pasos,
        setPasos,
        categoria,
        setCategoria,
    }) => {


    return (
        <>
            <Container className="d-flex justify-content-end">
                <Button onClick={handleShow} variant="outline-primary">Crear Recetas</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crea tu Receta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>nombre:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="nombre receta"
                                    onChange={(e) => setRecetas(e.target.value)}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Ingredientes:</Form.Label>
                                <Form.Control
                                    as="textarea" rows={3}
                                    onChange={(e) => setRecetaIngrediente(e.target.value)}

                                />

                                <Form.Label>Pasos para Cocinar:</Form.Label>
                                <Form.Control
                                    as="textarea" rows={3}
                                    onChange={(e) => setPasos(e.target.value)}


                                />

                                <Form.Label>Categoria:</Form.Label>
                                <Form.Control
                                    type="text" rows={3}
                                    onChange={(e) => setCategoria(e.target.value)}


                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancele
                        </Button>
                        <Button variant="primary" onClick={() => handleCrearRecetas(recetas, recetaIngrediente, pasos, categoria)}>
                            Guardar Recetas
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}

export default RecipeForm;