import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
      <button
        className="btn btn-primary btn-lg fw-bold fs-3"
        onClick={() => setShowInfo(true)}
      >
        Click me!
      </button>

      {showInfo && (
        <div className="mt-4 p-4 border rounded text-center bg-secondary text-white">
          <p className="fw-bold fs-4"><strong>Nombre:</strong> Christopher Alexander Cobar Asturias</p>
          <p className="fw-bold fs-4"><strong>Carnet:</strong> 201709272</p>
          <p className="fw-bold fs-4"><strong>Curso:</strong> Análisis y Diseño de Sistemas 1</p>
        </div>
      )}
    </div>
  );
}
