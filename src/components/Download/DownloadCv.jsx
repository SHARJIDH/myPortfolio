import React from 'react';
import styles from './Download.module.scss';

const DownloadButton = ({ documentUrl, pdfData, fileName }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        if (pdfData) {
            link.href = pdfData;
        } else if (documentUrl) {
            link.href = documentUrl;
        } else {
            console.error('No PDF data or URL provided.');
            return;
        }
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className={styles.downloadButton} onClick={handleDownload}>
            Download CV
        </button>
    );
};

export default DownloadButton;
