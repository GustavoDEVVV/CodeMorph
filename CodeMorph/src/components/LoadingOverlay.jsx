import "./loading.css";

function LoadingOverlay() {
  return (
    <div className="loading-overlay">
      <div className="loader"></div>
      <p>Convertendo código com IA...</p>
    </div>
  );
}

export default LoadingOverlay;