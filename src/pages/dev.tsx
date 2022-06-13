import axios from "axios";

const Dev = () => {
  const cv = `http://localhost:1337/uploads/Johan_Curriculum_5e840ef2fe.pdf`;

  const fetchPdf = async () => {
    const response = await axios(cv, {
      method: "GET",
      responseType: "blob",
    });

    const file = new Blob([response.data], { type: "application/pdf" });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  };

  return (
    <div>
      <button type="button" onClick={fetchPdf}>
        Download CV
      </button>
    </div>
  );
};

export default Dev;
