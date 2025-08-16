export default function Resume() {
  const handleOpenPDF = () => {
    // Open PDF in new tab
    window.open('/profile/resume.png', '_blank');
  };

  return (
    <div className="p-8 max-w-full">
      <div className="w-full max-w-full md:w-3/4 md:mx-auto">
        {/* Resume Image */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/105d1265-358e-48c5-b357-970420c776b5.png"
            alt="Raina Gupta Resume"
            className="w-full h-auto object-contain"
            style={{ borderRadius: '0px', border: '1px solid #E5E5E5' }}
          />
        </div>

        {/* Open PDF Button */}
        <div className="flex justify-end">
          <button 
            onClick={handleOpenPDF}
            className="px-6 py-4 text-white text-sm font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#0C5949', borderRadius: '0px', paddingTop: '16px', paddingBottom: '16px' }}
          >
            Open PDF
          </button>
        </div>
      </div>
    </div>
  );
}