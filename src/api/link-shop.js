import axios from 'axios';

export const getLinkShop = async (linkId) => {
  try {
    return (await axios.get(`https://linkshop-api.vercel.app/10-4/linkshops/${linkId}`)).data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const patchLinkShop = async (linkId, info) => {
  try {
    await axios.patch(`https://linkshop-api.vercel.app/10-4/linkshops/${linkId}`, info);
  } catch (error) {
    console.log(error);
    return false;
  }
};
