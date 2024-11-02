// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Anirudh_Arkery (1).pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function ResumeNew() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>

//         <Row className="resume">
//           <Document file={pdf} className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // PDF file path - make sure this path is correct relative to your project structure
  const pdfPath = "/Anirudh_Arkery (1).pdf"; // Move PDF to public folder

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle PDF load success
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  // Handle PDF load error
  const onDocumentLoadError = (error) => {
    setError("Error loading PDF. Please try again later.");
    setLoading(false);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            download="Anirudh_Arkery (1).pdf"
            style={{ 
              maxWidth: "250px",
              padding: "10px 20px",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            <AiOutlineDownload size={20} />
            Download CV
          </Button>
        </Row>

        <Row className="resume">
          {loading && <div className="text-center">Loading PDF...</div>}
          {error && <div className="text-center text-danger">{error}</div>}
          
          <Document
            file={pdfPath}
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div>Loading PDF...</div>}
          >
            <Page 
              pageNumber={pageNumber} 
              scale={width > 786 ? 1.7 : 0.6}
              loading={<div>Loading page...</div>}
              error={<div>Error loading page!</div>}
            />
          </Document>
        </Row>

        {/* Page navigation if you have multiple pages */}
        {numPages > 1 && (
          <Row style={{ justifyContent: "center", marginTop: "20px" }}>
            <div className="d-flex gap-3">
              <Button 
                variant="outline-primary"
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber(pageNumber - 1)}
              >
                Previous
              </Button>
              <span className="align-self-center">
                Page {pageNumber} of {numPages}
              </span>
              <Button 
                variant="outline-primary"
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber(pageNumber + 1)}
              >
                Next
              </Button>
            </div>
          </Row>
        )}

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            download="Anirudh_Arkery (1).pdf"
            style={{ 
              maxWidth: "250px",
              padding: "10px 20px",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            <AiOutlineDownload size={20} />
            Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
