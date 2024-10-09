import axios from 'axios';

export const shopLists = async () => {
  try {
    const res = await axios.get('https://linkshop-api.vercel.app/10-4/linkshops');
    const shoplist = res.data.list;
    return shoplist;
  } catch (error) {
    console.log(error);
    return [];
  }
};
