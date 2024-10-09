import { useEffect, useState } from 'react';

export default function useMetaImage(meta) {
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const image = document.querySelector('meta[property="og:image"]').getAttribute('content');
    if (image) setMainImage(image);
  }, [meta]);

  return [mainImage, setMainImage];
}
