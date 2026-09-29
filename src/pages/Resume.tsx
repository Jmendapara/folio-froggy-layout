export default function Resume() {
  const handleOpenPDF = () => {
    // Open PDF in new tab
    window.open('/profile/Raina Gupta Sept 2026 Resume (Public).pdf', '_blank');
  };

  return (
    <div className="p-8 md:p-0 max-w-full">
      <div className="w-full max-w-full">
        {/* Resume Image */}
        <div className="mb-6">
          <img 
            src="/profile/Raina Gupta Sept 2026 Resume (Public)_page-0001.jpg"
            alt="Raina Gupta Resume"
            className="w-full h-auto object-contain"
            style={{ borderRadius: '0px', border: '1px solid #E5E5E5' }}
          />
        </div>

        {/* Open PDF Button */}
        <div className="flex justify-end">
          <button 
            onClick={handleOpenPDF}
            className="w-[142px] h-[47px] text-white text-sm font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#0C5949', borderRadius: '0px' }}
          >
            Open PDF
          </button>
        </div>
      </div>
    </div>
  );
}