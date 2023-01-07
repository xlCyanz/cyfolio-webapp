import axios from "axios";

const fetchPdf = async (url: string) => {
  try {
    const response = await axios(url, {
      method: "GET",
      responseType: "blob",
      headers: {
        "Content-Type": "application/pdf",
      },
    });

    const file = new Blob([response.data], { type: "application/pdf" });
    window.open(URL.createObjectURL(file));
  } catch (e) {
    // eslint-disable-next-line no-alert
    window.alert((e as Error).message);
  }
};

export default fetchPdf;
