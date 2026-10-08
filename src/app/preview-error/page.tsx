'use client';

// Separating the layout from the global wrapper allows you to preview it cleanly
export function GlobalErrorContent({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-center">
      <h1 className="text-3xl font-bold text-red-600">Something went wrong!</h1>
      <p className="mt-2 text-gray-600">{error.message || "A critical system error occurred."}</p>
      <button 
        onClick={reset}
        className="mt-6 rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
}

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <GlobalErrorContent error={error} reset={reset} />
      </body>
    </html>
  );
}