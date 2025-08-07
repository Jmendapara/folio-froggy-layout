export default function Resume() {
  const handleOpenPDF = () => {
    // Open PDF in new tab
    window.open('/lovable-uploads/105d1265-358e-48c5-b357-970420c776b5.png', '_blank');
  };

  return (
    <div className="p-8 max-w-4xl">
      {/* Resume Image */}
      <div className="mb-8">
        <img 
          src="/lovable-uploads/105d1265-358e-48c5-b357-970420c776b5.png"
          alt="Raina Gupta Resume"
          className="w-full"
          style={{ aspectRatio: '8.5/11', maxHeight: '80vh', borderRadius: '0px' }}
        />
      </div>

      {/* Open PDF Button */}
      <div className="flex justify-end">
        <button 
          onClick={handleOpenPDF}
          className="px-6 py-6 text-white text-sm font-medium transition-colors hover:opacity-90"
          style={{ backgroundColor: '#0C5949', borderRadius: '0px' }}
        >
          Open PDF
        </button>
      </div>
    </div>
  );
}