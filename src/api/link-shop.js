import axios from 'axios';

export const getLinkShop = async (linkShopId) => {
  try {
    return (await axios.get(`https://linkshop-api.vercel.app/10-4/linkshops/${linkShopId}`)).data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const patchLinkShop = async (linkShopId, info) => {
  try {
    await axios.patch(`https://linkshop-api.vercel.app/10-4/linkshops/${linkShopId}`, info);
  } catch (error) {
    console.log(error);
    return false;
  }
};
