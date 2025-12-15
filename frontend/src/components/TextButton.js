import React from "react";
import bio from "../content/A Brief Bibliography of Charles Lyell.pdf";

export default function TextButton() {
    const handleDownload = () => {
        const downloadUrl = bio;
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = '../content/A Brief Bibliography of Charles Lyell.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
      <div>
          <p>For a list of further references, please see Stuart Baldwin’s comprehensive bibliography. <span onClick={handleDownload} style={{ textDecoration: 'underline', cursor: 'pointer', color: "blue" }}> Download here </span></p>
      </div>
  )
}