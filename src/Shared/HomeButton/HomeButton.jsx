import React from "react";
import "./HomeButton.css";
import samplePDF from "../../assets/CV/sample.pdf";

const HomeButton = () => {
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

  const goLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <div>
        <div className="flex gap-4 justify-center">
          <button
            className="btn  bg-black border-6 border-white text-white"
            onClick={handleDownloadCV}
          >
            Download CV
          </button>
          <button
            className="btn  bg-black border-6 border-white text-white"
            onClick={() => goLink("https://www.fiverr.com/sarkar_nayan")}
          >
            Fiver
          </button>
          <button
            className="btn  bg-black border-6 border-white text-white"
            onClick={() =>
              goLink("https://www.upwork.com/freelancers/~01f71c2421f00e1d48")
            }
          >
            Upwork
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeButton;
