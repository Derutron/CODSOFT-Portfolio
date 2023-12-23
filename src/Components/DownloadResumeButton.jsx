
// import { jsPDF } from 'jspdf';

// const DownloadResumeButton = () => {
//   const handleDownload = () => {
//     // Create a new jsPDF instance
//     const pdf = new jsPDF();

//     // Add content to the PDF (replace with your resume content)
//     pdf.text('Your Resume Content Goes Here', 10, 10);

//     // Save the PDF as a Blob
//     const blob = pdf.output('blob');

//     // Create a download link
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);

//     // Set the desired file name with '.pdf' extension
//     link.download = 'your_resume.pdf';

//     // Trigger the click event on the link
//     link.click();
//   };

//   return (
//     <button onClick={handleDownload}>
//       Download Resume
//     </button>
//   );
// };

// export default DownloadResumeButton;







import resumePDF from '../resources/DEREK_FIDORO_RESUME.pdf'; // Assuming the file has a '.pdf' extension

function DownloadResume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'DEREK_FIDORO_RESUME.pdf'; // Set the desired file name
    link.click();
  };

  return (
    <div className="flex justify-center items-center absolute top-[3880px] left-[850px]">
      <button
        className="w-[300px] h-[50px] bg-blue-500 hover:bg-blue-700 text-white text-[20px] font-bold py-2 px-4 rounded"
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </div>
  );
}

export default DownloadResume;
