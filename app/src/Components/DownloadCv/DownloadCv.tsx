import { FaFileDownload } from "react-icons/fa";
import './DownloadCv.css';
import cvPdf from '../../assets/WebsterManyanga_Resume.pdf'


const DownloadCv = () => {
  return (
    <div className="download-cv">
      <button className="download-cv__icon" onClick={() => generateDownload()}>
        <FaFileDownload/>
        <p>CV</p>
      </button>
    </div>
  );
}

function generateDownload() {
  const link = document.createElement('a');
  link.href = cvPdf;
  link.download = 'WebsterManyangaResume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default DownloadCv;