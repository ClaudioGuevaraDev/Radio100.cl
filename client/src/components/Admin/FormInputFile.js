import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

toast.configure();
export default function FormInputFile(props) {
    const tipoArchivo = props.tipoArchivo;
    const urlFiles = props.urlFiles;

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("Buscar...");
    const [isLoading, setIsLoading] = useState(false);

    const handleFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(file === null) {
            toast.error('Debe subir un archivo primero!', {
                position: 'top-center',
                autoClose: 10000
            });
            document.getElementById('inputGroupFile01').value = null;
            setFile(null);
            setFileName("Buscar...");
            return false;
        }

        if(tipoArchivo === "portada" || tipoArchivo === "afiche") {
            if(file.type !== "image/jpg" && file.type !== "image/png" && file.type !== "image/jpeg"){
                toast.error('Debe subir un archivo .png, .jpg o .jpeg!', {
                    position: 'top-center',
                    autoClose: 10000
                });
                document.getElementById('inputGroupFile01').value = null;
                setFile(null);
                setFileName("Buscar...");
                return false;
            }
        } else if(tipoArchivo === "video") {
            if(file.type !== "video/mp4") {
                toast.error('Debe subir un archivo mp4!', {
                    position: 'top-center',
                    autoClose: 10000
                });
                document.getElementById('inputGroupFile01').value = null;
                setFile(null);
                setFileName("Buscar...");
                return false;
            }
        }

        const formdata = new FormData();
        formdata.append('file', file);
        
        setIsLoading(true);
        axios.post(`${urlFiles}/${tipoArchivo}/subir`, formdata)
            .then((res) => {
                if(res.data === "ok") {
                    toast.success('El archivo se subió con éxito.', {
                        position: 'top-center',
                        autoClose: 5000
                    });
                }
            })
            .catch((err) => {
                if(err !== null) {
                    toast.error('No se pudo subir el archivo. Error de servidor. Inténtelo en otro momento.', {
                        position: 'top-center',
                        autoClose: 10000
                    });
                }
            })
            .finally(() => {
                setIsLoading(false);
                if(tipoArchivo === "video") {
                    window.location.reload();
                }
            })
        document.getElementById('inputGroupFile01').value = null;
        setFile(null);
        setFileName("Buscar...");
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupFileAddon01">Subir</span>
                </div>
                <div className="custom-file">
                    <input onChange={handleFile} type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"></input>
                    <label className="custom-file-label" htmlFor="inputGroupFile01">{fileName}</label>
                </div>
            </div>
            {
                !isLoading ? (
                    <button type="submit" className="btn btn-primary">Subir Archivo</button>
                ) : (
                    <button type="submit" className="btn btn-primary">
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button>
                )
            }
        </form>
    )
}