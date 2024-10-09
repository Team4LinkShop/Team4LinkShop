import axios from "axios";

export const shopImg = async (shopId) => {
  try {
    const res = await axios.get(`https://linkshop-api.vercel.app/10-4/linkshops/${shopId}`);
    const shopImg = res.data.shop.imageUrl;
    return shopImg;
  } catch (error) {
    console.log(error);
    return [];
  }
};