import axios from "axios";

const fetchPdf = async (url: string) => {
  const response = await axios(url, {
    method: "GET",
    responseType: "blob",
    headers: {
      "Content-Type": "application/pdf",
    },
  });

  const file = new Blob([response.data], { type: "application/pdf" });
  const fileURL = URL.createObjectURL(file);
  window.open(fileURL);
};

export default fetchPdf;
