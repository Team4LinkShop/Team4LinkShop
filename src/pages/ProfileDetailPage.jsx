/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import bgMarketRoof from '../assets/images/bg-market-roof.svg';
import icLeftArrow from '../assets/images/ic-left-arrow.svg';
import ExtensionMenu from '../components/ExtensionMenu';
import LikeButton from '../components/LikeButton';
import ShareButton from '../components/ShareButton';
import { useEffect, useState } from 'react';
import { getLinkShop } from '../api/link-shop';
import useMetaImage from '../hooks/useMetaImage';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function ProfileDetailPage() {
  const { linkId } = useParams();
  const [linkShopInfo, setLinkShopInfo] = useState();

  const [metaImage] = useMetaImage(linkShopInfo);

  useEffect(() => {
    if (linkId) {
      (async () => setLinkShopInfo(await getLinkShop(linkId)))();
    }
  }, [linkId]);

  return (
    <>
      <Helmet>
        <meta
          property="og:image"
          // NOTE: 백엔드에서 메타데이터 불러올 수 있을 때, content={linkShopInfo?.products[0]?.imageUrl ?? '/src/assets/images/mock-profile-img.jpg'}
          content={'/src/assets/images/mock-profile-img.jpg'}
        />
      </Helmet>
      <div css={marketBg} />
      <div css={layout}>
        <div css={containerBtnBack}>
          <Link to="/list">
            <img src={icLeftArrow} alt="돌아가기 아이콘" />
            <span>돌아가기</span>
          </Link>
        </div>
        <div
          css={css`
            background-color: #fafafb;
            border-radius: 2.4rem;
            width: 100%;
            padding-top: 2.2rem;
            padding-bottom: 4rem;
            margin-top: 2rem;
            margin-bottom: 3.2rem;
          `}>
          <div css={containerIcon}>
            <LikeButton linkId={linkId} />
            <div
              css={css`
                display: flex;
                gap: 1.6rem;
              `}>
              <ShareButton linkId={linkId} />
              <ExtensionMenu />
            </div>
          </div>
          <div css={containerProfile}>
            <figure>
              <img src={metaImage} alt="프로필 이미지" />
              <figcaption>
                <p
                  css={css`
                    font-size: 3.2rem;
                    margin: 1.6rem 0 0.8rem 0;
                    font-weight: 800;
                    color: #14151a;
                  `}>
                  {linkShopInfo?.shop.urlName ?? ''}
                </p>
                <p
                  css={css`
                    font-size: 1.6rem;
                    color: #888790;
                  `}>
                  {linkShopInfo?.userId}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div
          css={css`
            margin-bottom: 10.2rem;
          `}>
          <p css={titleText}>대표 샵</p>
          <button css={linkButton}>{linkShopInfo?.shop.urlName} 공식 스토어</button>
        </div>
        <div>
          <p css={titleText}>대표 상품</p>
          <div css={ContainerProductCard}>
            {linkShopInfo &&
              linkShopInfo.products.map((product, i) => {
                return (
                  <figure key={i} css={ProductCard}>
                    <img
                      src={product.imageUrl ?? ''}
                      alt={product.name}
                      css={css`
                        width: 9.5rem;
                        height: 9.5rem;
                        background-color: #eceef0;
                        display: block;
                        margin: 0 2rem;
                        border-radius: 1.5rem;
                      `}
                    />
                    <div
                      css={css`
                        color: #14151a;
                      `}>
                      <figcaption css={CardProductName}>{product.name}</figcaption>
                      <span
                        css={css`
                          font-size: 2rem;
                          font-weight: 700;
                        `}>
                        {product.price}
                      </span>
                    </div>
                  </figure>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

const layout = css`
  max-width: 1200px;
  width: 62.5%;
  margin: 0 auto;
  margin-top: 2.5rem;

  @media only screen and (max-width: 1024px) {
    width: 93.5%;
    margin: 2rem 2.4rem;
  }

  @media only screen and (max-width: 768px) {
    width: 87.9%;
  }
`;

const marketBg = css`
  background-image: url(${bgMarketRoof});
  width: calc(100% - 6rem);
  height: 64px;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    width: calc(100% - 7.2rem);
  }
  @media only screen and (max-width: 768px) {
    width: calc(100% - 2rem);
  }
`;

const containerBtnBack = css`
  font-size: 1.6rem;
  height: 1.9rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: #888790;
    text-decoration: none;
  }
  img {
    padding: 0.3rem 0.1rem 0.2rem 0.5rem;
  }
`;

const containerIcon = css`
  display: flex;
  justify-content: space-between;
  margin: 0 2.2rem 0 2rem;
`;

const containerProfile = css`
  width: 100%;
  text-align: center;
`;

const titleText = css`
  font-size: 1.6rem;
  font-weight: 600;
  color: #14151a;
  margin-bottom: 1.6rem;
`;

const linkButton = css`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
  background-color: #3e45ec;
  color: #fff;
  padding: 1.5rem 0;
  width: 100%;
  border-radius: 3.7rem;
  font-size: 1.7rem;
`;

const ContainerProductCard = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1.2rem;

  @media only screen and (max-width: 1024px) {
    row-gap: 1rem;
  }
`;

const ProductCard = css`
  margin: 0;
  width: 49%;
  align-items: center;
  padding: 1.6rem 0;
  border-radius: 2.4rem;
  background: #fafafb;
  display: flex;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const CardProductName = css`
  font-size: 1.7rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

export default ProfileDetailPage;
