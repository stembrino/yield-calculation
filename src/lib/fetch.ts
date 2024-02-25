import axios from "axios";

export async function getApi<Data, PATH>(path: PATH): Promise<unknown> {
  try {
    const response = await axios.get(`api/${path}`);
    if (response.status === 200) return response.data as Data;
  } catch (error) {
    console.error("Error fetching Di:", error);
    return null;
  }
}
