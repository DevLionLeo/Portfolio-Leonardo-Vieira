import { useCallback } from 'react';

const useDownload = () => {
  const downloadFromUrl = useCallback((url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const downloadFromBlob = useCallback((blob, filename) => {
    const url = URL.createObjectURL(blob);
    downloadFromUrl(url, filename);
    URL.revokeObjectURL(url);
  }, [downloadFromUrl]);

  const downloadFromData = useCallback((data, filename, type = 'application/json') => {
    let blob;
    
    if (typeof data === 'object') {
      // Para objetos, converte para JSON
      blob = new Blob([JSON.stringify(data, null, 2)], { type });
    } else {
      // Para strings
      blob = new Blob([data], { type });
    }
    
    downloadFromBlob(blob, filename);
  }, [downloadFromBlob]);

  return { downloadFromUrl, downloadFromBlob, downloadFromData };
};

export default useDownload;