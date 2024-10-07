import axios from 'axios';

export const likeData = async (linkId, isLikeClicked) => {
  try {
    if (isLikeClicked) {
      // 좋아요
      await axios.post(`https://linkshop-api.vercel.app/10-4/linkshops/${linkId}/like`);
    } else {
      // 좋아요 취소
      await axios.delete(`https://linkshop-api.vercel.app/10-4/linkshops/${linkId}/like`);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const likeHandler = async (linkId) => {
  try {
    return (await axios.get(`https://linkshop-api.vercel.app/10-4/linkshops/${linkId}`)).data
      .likes;
  } catch (error) {
    console.log(error);
    return false;
  }
};
