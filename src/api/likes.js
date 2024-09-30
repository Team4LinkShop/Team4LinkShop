import axios from "axios";

export const likeData = async (linkShopId, isLikeClicked) => {
  try {
    if (isLikeClicked) {
      // 좋아요
      await axios.post(`https://linkshop-api.vercel.app/10-4/linkshops/${linkShopId}/like`);
    } else {
      // 좋아요 취소
      await axios.delete(`https://linkshop-api.vercel.app/10-4/linkshops/${linkShopId}/like`);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
