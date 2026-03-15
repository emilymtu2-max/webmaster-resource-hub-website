import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6983438/pexels-photo-6983438.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="card bg-white/90 shadow-2xl max-w-xl w-full backdrop-blur-md">

        {/* Image */}
        <figure>
          <img
            src="https://images.pexels.com/photos/1660891/pexels-photo-1660891.jpeg"
            alt="Thank you"
            className="w-full h-60 object-cover"
          />
        </figure>

        <div className="card-body">

          {/* centered title */}
          <h1 className="text-3xl font-bold text-center">
            Thank You!
          </h1>

          {/* left aligned text */}
          <p className="text-gray-600 text-left">
            Your suggestion is submitted
          </p>

          <p className="text-gray-600 text-left">
            Your contributions fuel the Pulse Asia powerhouse. 
            Here's to you helping us keep immigrant dreams alive🥂!
            Our team will shortly review this resource.
          </p>

          {/* left aligned button */}
          <div className="card-actions justify-start mt-4">
            <Link href="/">
              <button className="btn btn-primary form-page-button">
                Return to Home
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
