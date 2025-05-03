export default function Products() {
  return (
    <div>
      <h3>Our Products</h3>

      <div className="product">
        <img src="/images/arduino.jpg" alt="Arduino Uno" />
        <h4>Arduino Uno</h4>
        <p>A microcontroller board based on the ATmega328P. Ideal for beginners and pros alike.</p>
        <p>Price: $25.00</p>
      </div>

      <div className="product">
        <img src="/images/resistor.jpg" alt="Resistor" />
        <h4>Resistor Pack (50 pcs)</h4>
        <p>Standard resistors for your electronic projects, assorted values.</p>
        <p>Price: $1.00</p>
      </div>

      <div className="product">
        <img src="/images/capacitor.jpg" alt="Capacitor" />
        <h4>Capacitor Pack (20 pcs)</h4>
        <p>Electrolytic and ceramic capacitors for all applications.</p>
        <p>Price: $2.00</p>
      </div>

      <div className="product">
        <img src="/images/flowsensor.jpg" alt="Flow Sensor" />
        <h4>Flow Sensor YF-S201</h4>
        <p>For measuring water flow in automation systems.</p>
        <p>Price: $8.00</p>
      </div>

      <div className="product">
        <img src="/images/plc.jpg" alt="PLC S7-1200" />
        <h4>PLC S7-1200</h4>
        <p>Advanced Siemens PLC for industrial automation. Contact us for pricing.</p>
        <p>Price: Request Quote</p>
      </div>
    </div>
  );
}
