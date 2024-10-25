import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const accessKey: string = "FDEYRg6xgn5MmQgdSdY-cM-itl1HCatQXzC_4Y5Ipow";

interface Response {
  results: Image[];
}

export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
  description: string;
}

async function fetchImages(
  searchQuery: string,
  page: number
): Promise<Image[]> {
  const response = await axios.get<Response>("/search/photos", {
    params: {
      client_id: accessKey,
      query: searchQuery,
      page,
    },
  });
  return response.data.results;
}
export default fetchImages;
