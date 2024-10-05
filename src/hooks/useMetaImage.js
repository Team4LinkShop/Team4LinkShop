import { useEffect, useState } from 'react';

export default function useMetaImage() {
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const image = document.querySelector('meta[property="og:image"]').getAttribute('content');
    if (image) setMainImage(image);
  }, []);

  return [mainImage, setMainImage];
}
