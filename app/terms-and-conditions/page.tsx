export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 md:p-10">
        {/* Header */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 mt-1">
            Last updated: <span className="font-medium">DD/MM/YYYY</span>
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700">
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
            <p>{/* Add your content here */}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. User Responsibilities</h2>
            <p>{/* Add your content here */}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Services</h2>
            <p>{/* Add your content here */}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Limitation of Liability</h2>
            <p>{/* Add your content here */}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Contact Information</h2>
            <p>{/* Add your content here */}</p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </div>
  );
}
