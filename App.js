// src/App.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const socket = io('http://localhost:4000'); // Use the backend server address if hosted elsewhere

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Listen for page changes from server
    socket.on('pageChange', (newPage) => {
      setPageNumber(newPage);
    });

    // Cleanup on unmount
    return () => socket.off('pageChange');
  }, []);

  const handlePageChange = (newPage) => {
    if (isAdmin) {
      setPageNumber(newPage);
      socket.emit('changePage', newPage); // Emit page change to server
    }
  };

  return (
    <div className="App">
      <h1>PDF Co-Viewer</h1>
      <div>
        <button onClick={() => setIsAdmin(!isAdmin)}>
          Toggle Admin Mode (Currently {isAdmin ? 'Admin' : 'Viewer'})
        </button>
      </div>
      <div>
        {isAdmin && (
          <div>
            <button
              onClick={() => handlePageChange(Math.max(1, pageNumber - 1))}
            >
              Previous
            </button>
            <button onClick={() => handlePageChange(pageNumber + 1)}>
              Next
            </button>
          </div> 
        )}
      </div>
      <div style={{ height: '600px', overflow: 'auto' }}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer  
            fileUrl="/LCM.pdf" 
            onPageChange={(e) => handlePageChange(e.pageIndex + 1)}
            defaultScale={1.5}
          />
        </Worker>
      </div>
    </div>   
  );
};

export default App;
   