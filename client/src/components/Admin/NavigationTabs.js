import React from 'react';

import FilesShow from './FilesShow';
import FilesSave from './FilesSave';

export default function NavigationTabs(props) {
    const url = props.url;
    const urlFiles = props.urlFiles;

    return (
        <div className="card card-body">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="portada-show-tab" data-toggle="tab" href="#portada-show" role="tab" aria-controls="portada-show" aria-selected="true">Portada</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="portada-save-tab" data-toggle="tab" href="#portada-save" role="tab" aria-controls="portada-save" aria-selected="false">Imagenes Portada Guardados</a>
                </li>   
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="afiche-show-tab" data-toggle="tab" href="#afiche-show" role="tab" aria-controls="afiche-show" aria-selected="false">Afiches Publicitarios</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="afiche-save-tab" data-toggle="tab" href="#afiche-save" role="tab" aria-controls="afiche-save" aria-selected="false">Afiches Publicitarios Guardados</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="video-show-tab" data-toggle="tab" href="#video-show" role="tab" aria-controls="video-show" aria-selected="false">Videos Publicitarios</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="video-save-tab" data-toggle="tab" href="#video-save" role="tab" aria-controls="video-save" aria-selected="false">Videos Publicitarios Guardados</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="portada-show" role="tabpanel" aria-labelledby="portada-show-tab">
                    <FilesShow tipoArchivo={"portada"} url={url} urlFiles={urlFiles}/>
                </div>
                <div className="tab-pane fade" id="portada-save" role="tabpanel" aria-labelledby="portada-save-tab">
                    <FilesSave tipoArchivo={"portada"} url={url} urlFiles={urlFiles}/>
                </div>
                <div className="tab-pane fade" id="afiche-show" role="tabpanel" aria-labelledby="afiche-show-tab">
                    <FilesShow tipoArchivo={"afiche"} url={url} urlFiles={urlFiles}/>
                </div> 
                <div className="tab-pane fade" id="afiche-save" role="tabpanel" aria-labelledby="afiche-save-tab">
                    <FilesSave tipoArchivo={"afiche"} url={url} urlFiles={urlFiles}/>
                </div>   
                <div className="tab-pane fade" id="video-show" role="tabpanel" aria-labelledby="video-show-tab">
                    <FilesShow tipoArchivo={"video"} url={url} urlFiles={urlFiles}/>
                </div>
                <div className="tab-pane fade" id="video-save" role="tabpanel" aria-labelledby="video-save-tab">
                    <FilesSave tipoArchivo={"video"} url={url} urlFiles={urlFiles}/>
                </div>
            </div>
        </div>
    );
}