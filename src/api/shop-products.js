import axios from 'axios';

export const shopProducts = async (shopId) => {
  try {
    const res = await axios.get(`https://linkshop-api.vercel.app/10-4/linkshops/${shopId}`);
    const shopProducts = res.data.products;
    return shopProducts;
  } catch (error) {
    console.log(error);
    return [];
  }
};
