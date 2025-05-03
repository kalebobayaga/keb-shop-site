// pages/index.js

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to KEB Shop</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your one-stop shop for electrical components, industrial instruments, and automation systems.
        </p>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-4">
            <img src="/images/arduino.jpg" alt="Arduino Uno" className="rounded mb-4" />
            <h3 className="text-xl font-semibold">Arduino Uno</h3>
            <p className="text-sm">Microcontroller board with ATmega328P.</p>
            <p className="font-bold mt-2">$25.00</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <img src="/images/resistor.jpg" alt="Resistor" className="rounded mb-4" />
            <h3 className="text-xl font-semibold">Resistors Pack</h3>
            <p className="text-sm">Standard resistor kit (various values).</p>
            <p className="font-bold mt-2">$5.00</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <img src="/images/capacitor.jpg" alt="Capacitor" className="rounded mb-4" />
            <h3 className="text-xl font-semibold">Capacitors</h3>
            <p className="text-sm">Electrolytic & ceramic, mixed sizes.</p>
            <p className="font-bold mt-2">$7.00</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About KEB International Engineers</h2>
          <p>
            We specialize in high-quality electrical installation, industrial automation, instrumentation, panel design, and PCB design. Our mission is to provide innovative, sustainable solutions that empower industries.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 shadow rounded text-center">
            <h3 className="text-xl font-semibold mb-2">Electrical Installation</h3>
            <p>Design and setup of reliable electrical systems.</p>
          </div>
          <div className="bg-white p-6 shadow rounded text-center">
            <h3 className="text-xl font-semibold mb-2">Industrial Automation</h3>
            <p>PLC, HMI, and SCADA solutions for process optimization.</p>
          </div>
          <div className="bg-white p-6 shadow rounded text-center">
            <h3 className="text-xl font-semibold mb-2">Panel & PCB Design</h3>
            <p>Custom electronic panels and printed circuit boards.</p>
          </div>
        </div>
      </section>

      {/* Contact Prompt */}
      <section className="bg-blue-800 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
        <p>Email us at <a href="mailto:kalebobayag@gmail.com" className="underline">kalebobayag@gmail.com</a></p>
        <p>Call: +255762176379 / +255687442829</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-4">
        <p>&copy; {new Date().getFullYear()} KEB International Engineers. All rights reserved.</p>
      </footer>
    </main>
  );
}
