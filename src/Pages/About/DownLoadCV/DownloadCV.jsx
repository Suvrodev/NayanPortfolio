import React from "react";
import samplePDF from "../../../assets/CV/sample.pdf";

const DownloadCV = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    // link.href = `${process.env.PUBLIC_URL}/sample.pdf`;
    link.href = samplePDF;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("Download");
  };

  return (
    <div>
      <button onClick={handleDownloadCV} className="btn bg-black text-white">
        Download CV
      </button>
    </div>
  );
};

export default DownloadCV;
