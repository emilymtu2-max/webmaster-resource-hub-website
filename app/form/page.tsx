export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4">🎉 Thank You!</h1>

        <p className="mb-6 text-gray-600">
          Your suggestion has been successfully submitted. We appreciate you
          helping improve the resource hub!
        </p>

        <a
          href="/"
          className="btn btn-primary"
        >
          Return to Home
        </a>
      </div>
    </div>
  )
}