import { pdfjs, Document, Page } from 'react-pdf';
import React, { Component } from 'react';
import fall2018 from './resumefile.pdf';
import './resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
    render() {
        return(
            <div className="resume">
                <Document file={fall2018}>
                    <Page pageNumber={1} />
                </Document>
            </div>
        )
    }
}

export default Resume;