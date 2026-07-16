import React from "react";

const QRPayment = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20">
      <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">

        {/* QR */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-2xl bg-white border-2 border-dashed border-gray-300 flex items-center justify-center shadow-sm">
            <p className="text-gray-500 text-center">
              QR Code
              <br />
              (Coming Soon)
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-orange-600 font-semibold uppercase tracking-wider">
            Easy Payment
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Scan & Pay Securely
          </h2>

          <p className="text-gray-600 mt-5 leading-7">
            Complete your order quickly by scanning our QR code using your
            preferred digital wallet or mobile banking app.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-green-600">✓</span>
              <p>eSewa</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-600">✓</span>
              <p>Khalti</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-600">✓</span>
              <p>Mobile Banking</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-600">✓</span>
              <p>Bank QR</p>
            </div>
          </div>

          <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl transition">
            Contact for Payment
          </button>
        </div>

      </div>
    </section>
  );
};

export default QRPayment;