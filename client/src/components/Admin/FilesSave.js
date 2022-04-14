import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';
import { Player } from 'video-react';

import { MdSettingsBackupRestore } from '@react-icons/all-files/md/MdSettingsBackupRestore';
import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete';
import { IoMdDownload } from '@react-icons/all-files/io/IoMdDownload';

toast.configure();
export default function FilesSave(props) {
    const tipoArchivo = props.tipoArchivo;
    const url = props.url;
    const urlFiles = props.urlFiles;

    const [listaArchivos, setListaArchivos] = useState([]);

    const urlArchivo = (archivo) => {
        if(tipoArchivo === "portada" || tipoArchivo === "afiche") {
            return `${url}/${tipoArchivo}/save/${archivo}`;
        } else {
            return '';
        }
    }

    useEffect(() => {
        axios.get(`${urlFiles}/${tipoArchivo}/save/listar`)
            .then((res) => {
                setListaArchivos(res.data)
            })
            .catch((err) => {
                if(err !== null) {
                    toast.error('Error al cargar los archivos. Error de servidor. Inténtelo en otro momento.', {
                        position: 'top-center',
                        autoClose: 10000
                    });
                }
            })
    }, [listaArchivos]);

    const saveFile = (archivo) => {
        saveAs(
            `${url}/${tipoArchivo}/save/${archivo}`
        );
    }

    const recuperarArchivo = (archivo) => {
        const data = {
            "archivo": archivo
        };

        Swal.fire({
            title: '¿Estás seguro de recuperar el archivo?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Recuperar archivo',
            cancelButtonText: 'Cancelar',
            imageUrl: urlArchivo(archivo),
            imageWidth: 400,
            imageHeight: 200,
            timer: '7000',
        }).then((result) => {
            if(result.isConfirmed) {
                axios.post(`${urlFiles}/${tipoArchivo}/recuperar`, data)
                    .then(res => {})
                    .catch((err) => {
                        if(err) {
                            toast.error('Error de servidor. Inténtelo más tarde.', {
                                position: 'top-center',
                                autoClose: 10000
                            });
                        }
                    });

                Swal.fire({
                    icon: 'success',
                    title: 'Archivo restaurado',
                    showConfirmButton: false,
                    timer: 3000
                })
                .finally(() => {
                    //window.location.reload();
                });
            }
        });
    }

    const eliminarArchivo = (archivo) => {
        const data = {
            "archivo": archivo
        };

        Swal.fire({
            title: '¿Estás seguro de eliminar el archivo?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar archivo',
            cancelButtonText: 'Cancelar', 
            imageUrl: urlArchivo(archivo),
            imageWidth: 400,
            imageHeight: 200,
            timer: '7000',
        }).then((result) => {
            if(result.isConfirmed) {
                axios.post(`${urlFiles}/${tipoArchivo}/save/eliminar`, data)
                    .then(res => {})
                    .catch(err => {
                        if(err) {
                            toast.error('Error de servidor. Inténtelo más tarde.', {
                                position: 'top-center',
                                autoClose: 10000
                            });
                        }
                    });

                Swal.fire({
                    icon: 'success',
                    title: 'Archivo eliminado',
                    showConfirmButton: false,
                    timer: 3000
                })
                .finally(() => {
                    //window.location.reload();
                })
            }
        });
    }


    return (
        <div className="container p-4">
            <div className="row">
                {listaArchivos.map(archivo => (
                    <div className="col-lg-4 col-m-4 col-12 mt-4" key={archivo}>
                        <div className="card">
                            {tipoArchivo === "portada" || tipoArchivo === "afiche" ? (
                                <img src={`${url}/${tipoArchivo}/save/${archivo}`} alt={archivo} style={{height:"270px"}}/>
                            ) : (
                                <Player>
                                    <source src={`${url}/${tipoArchivo}/save/${archivo}`}/>
                                </Player> 
                            )}
                            <div className="card-body">
                                <div className="d-flex flex-row justify-content-between">
                                    <button onClick={() => recuperarArchivo(archivo)} className="btn btn-info"><i><MdSettingsBackupRestore/></i></button>
                                    <button onClick={() => eliminarArchivo(archivo)} className="btn btn-danger"><i><AiFillDelete/></i></button>
                                    <button className="btn btn-secondary" onClick={() => saveFile(archivo)}><IoMdDownload/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}