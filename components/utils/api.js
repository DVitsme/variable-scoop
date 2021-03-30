import axios from "axios";

export async function fetchAPI(route) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/${route}`
    );
    let data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
