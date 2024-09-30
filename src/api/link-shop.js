import axios from 'axios';

export const LikeHandler = async (linkShopId) => {
  try {
    return (await axios.get(`https://linkshop-api.vercel.app/10-4/linkshops/${linkShopId}`)).data
      .likes;
  } catch (error) {
    console.log(error);
    return false;
  }
};
