export default function Resume() {
  const handleDownloadPDF = () => {
    // This would typically download a PDF file
    // For now, we'll just log to console
    console.log("Downloading PDF...");
  };

  return (
    <div className="p-8 max-w-4xl">
      {/* Resume Image */}
      <div className="mb-8">
        <div className="w-full bg-placeholder" style={{ aspectRatio: '8.5/11', maxHeight: '80vh', borderRadius: '0px' }}>
          {/* Resume image placeholder */}
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-end">
        <button 
          onClick={handleDownloadPDF}
          className="px-6 py-4 text-white text-sm font-medium transition-colors hover:opacity-90"
          style={{ backgroundColor: '#0C5949', borderRadius: '0px' }}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}