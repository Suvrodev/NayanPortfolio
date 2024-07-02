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
        {/* <div class="cvBtn" data-tooltip="Size: 20Mb">
          <div class="button-wrapper">
            <div class="text font-bold text-xl">Download CV</div>
            <span class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2em"
                height="2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                ></path>
              </svg>
            </span>
          </div>
        </div> */}

        <div className="flex gap-4 justify-center">
          <button
            className="button-63"
            onClick={() => goLink("https://www.fiverr.com/sarkar_nayan")}
          >
            Fiver
          </button>
          <button
            className="button-63"
            onClick={() =>
              goLink("https://www.upwork.com/freelancers/~01f71c2421f00e1d48")
            }
          >
            Upwork
          </button>
          <button className="button-63" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeButton;
