import { createContext, useEffect, useState } from "react";

export const RecetasContext = createContext()

export const RecetaProvider = ({ children }) => {

    /*Estados*/
    const [show, setShow] = useState(false);
    const [recetas, setRecetas] = useState('')
    const [recetaIngrediente, setRecetaIngrediente] = useState('')
    const [pasos, setPasos] = useState('')
    const [categoria, setCategoria] = useState('')
    const [guardarReceta, setGuardarReceta] = useState([])
    const [value, setValue] = useState([])

    /*Funciones*/
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleCrearRecetas = (name, ingredientes, pasos, categoria) => {

        const agregarRecetas = { nombreReceta: name, ingredientes: ingredientes, pasos: pasos, categoria: categoria }

        if (name === '' || ingredientes === '' || pasos === '' || categoria === '') {
            alert('este campo esta vacio')
        } else {
            const localReceta = JSON.parse(localStorage.getItem('receta'))
            if (localReceta) {
                localReceta.push(agregarRecetas)
                localStorage.setItem('receta', JSON.stringify(localReceta))
            } else {
                localStorage.setItem('receta', JSON.stringify([agregarRecetas]))
            }
            setGuardarReceta([...guardarReceta, agregarRecetas])
            handleClose(true)
        }
        setRecetas('')
        setRecetaIngrediente('')
        setCategoria('')
        setPasos('')
    }


    const handleEliminar = (index) => {
        const eliminar = guardarReceta.filter((item, ind) => (
            ind !== index
        ))
        localStorage.setItem('receta', JSON.stringify(eliminar))
        setGuardarReceta(eliminar)
    }



    const handleFavorito = (index) => {
        const favorite = guardarReceta.filter((item, ind) => (
            ind === index
        ))
        const localFavorito = JSON.parse(localStorage.getItem('favorito'))

        if (localFavorito) {
            localFavorito.push(...favorite)
            localStorage.setItem('favorito', JSON.stringify(localFavorito))
        } else {
            localStorage.setItem('favorito', JSON.stringify(favorite))
        }
        useEffect(() => {
            setGuardarReceta(favorite)
        }, [])
    }



    const handleEliminarFav = (index) => {
        const eliminarFav = guardarReceta.filter((item, ind) => (
            ind !== index
        ))
        setGuardarReceta(eliminarFav)
        localStorage.setItem('favorito', JSON.stringify(eliminarFav))
    }



    const HandleEditar = (index) => {
        const copiaEdit = [...guardarReceta]

        const editar = copiaEdit.filter((item, ind) => (
            ind === index
        ))
        setValue(editar.nombreReceta)
    }




    return (
        <RecetasContext.Provider value={{
            handleShow,
            handleClose,
            show,
            setRecetas,
            recetas,
            handleCrearRecetas,
            guardarReceta,
            recetaIngrediente,
            setRecetaIngrediente,
            pasos,
            setPasos,
            categoria,
            setCategoria,
            setGuardarReceta,
            handleEliminar,
            handleFavorito,
            guardarReceta,
            handleEliminarFav,
            HandleEditar
        }}>
            {children}
        </RecetasContext.Provider>
    )
}