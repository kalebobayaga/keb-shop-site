export default function Gallery() {
  return (
    <div className="gallery-page">
      <h2>Project Gallery</h2>
      <div className="gallery-grid">
        <img src="/images/panel1.jpg" alt="Control Panel A" />
        <img src="/images/panel2.jpg" alt="Panel with PLC wiring" />
        <img src="/images/project1.jpg" alt="Field instrumentation setup" />
      </div>
    </div>
  );
}
