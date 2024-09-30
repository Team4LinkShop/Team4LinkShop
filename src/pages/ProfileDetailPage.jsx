/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import bgMarketRoof from '../assets/bg-market-roof.svg';
import icLeftArrow from '../assets/ic-left-arrow.svg';
import icHeartBlank from '../assets/ic-blank-heart.svg';
import icShare from '../assets/ic-share.svg';
import icMeatBall from '../assets/ic-meatball.svg';
import mockProfileImg from '../assets/mock-profile-img.jpg';

function ProfileDetailPage() {
  return (
    <div>
      <div css={marketBg} />
      <div css={layout}>
        <div css={containerBtnBack}>
          <a href="/list">
            <img src={icLeftArrow} alt="돌아가기 아이콘" />
            <span>돌아가기</span>
          </a>
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
            <div css={icContainerHeart}>
              <img src={icHeartBlank} alt="좋아요 아이콘" />
              <span>65</span>
            </div>
            <div css={icContainerShareMore}>
              <img src={icShare} alt="공유하기 아이콘" />
              <img src={icMeatBall} alt="더보기 아이콘" />
            </div>
          </div>
          <div css={containerProfile}>
            <figure>
              <img src={mockProfileImg} alt="프로필 이미지" />
              <figcaption>
                <p
                  css={css`
                    font-size: 3.2rem;
                    margin: 1.6rem 0 0.8rem 0;
                    font-weight: 800;
                    color: #14151a;
                  `}>
                  너구리 직구상점
                </p>
                <p
                  css={css`
                    font-size: 1.6rem;
                    color: #888790;
                  `}>
                  @pumpkinraccoon
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
          <button css={linkButton}>너구리 직구상점 공식 스토어</button>
        </div>
        <div>
          <p css={titleText}>대표 상품</p>
          <div css={ContainerProductCard}>
            <figure
              css={css`
                margin: 0;
                width: 49%;
                height: 9.5rem;
                align-items: center;
                padding: 1.6rem 0;
                border-radius: 24px;
                background: #fafafb;
                display: flex;
              `}>
              <img
                src=""
                alt="상품 이미지"
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
                <figcaption
                  css={css`
                    font-size: 1.7rem;
                    margin-bottom: 1rem;
                  `}>
                  아디다스 가젤 HP5379
                </figcaption>
                <span
                  css={css`
                    font-size: 2rem;
                    font-weight: 700;
                  `}>
                  ₩134,000
                </span>
              </div>
            </figure>
            <figure
              css={css`
                margin: 0;
                width: 49%;
                height: 9.5rem;
                align-items: center;
                padding: 1.6rem 0;
                border-radius: 24px;
                background: #fafafb;
                display: flex;
              `}>
              <img
                src=""
                alt="상품 이미지"
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
                <figcaption
                  css={css`
                    font-size: 1.7rem;
                    margin-bottom: 1rem;
                  `}>
                  아디다스 가젤 HP5379
                </figcaption>
                <span
                  css={css`
                    font-size: 2rem;
                    font-weight: 700;
                  `}>
                  ₩134,000
                </span>
              </div>
            </figure>
            <figure
              css={css`
                margin: 0;
                width: 49%;
                height: 9.5rem;
                align-items: center;
                padding: 1.6rem 0;
                border-radius: 24px;
                background: #fafafb;
                display: flex;
              `}>
              <img
                src=""
                alt="상품 이미지"
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
                <figcaption
                  css={css`
                    font-size: 1.7rem;
                    margin-bottom: 1rem;
                  `}>
                  아디다스 가젤 HP5379
                </figcaption>
                <span
                  css={css`
                    font-size: 2rem;
                    font-weight: 700;
                  `}>
                  ₩134,000
                </span>
              </div>
            </figure>
            <figure
              css={css`
                margin: 0;
                width: 49%;
                height: 9.5rem;
                align-items: center;
                padding: 1.6rem 0;
                border-radius: 24px;
                background: #fafafb;
                display: flex;
              `}>
              <img
                src=""
                alt="상품 이미지"
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
                <figcaption
                  css={css`
                    font-size: 1.7rem;
                    margin-bottom: 1rem;
                  `}>
                  아디다스 가젤 HP5379
                </figcaption>
                <span
                  css={css`
                    font-size: 2rem;
                    font-weight: 700;
                  `}>
                  ₩134,000
                </span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

const layout = css`
  margin: 2.5rem 36rem;
`;

const marketBg = css`
  background-image: url(${bgMarketRoof});
  width: calc(100% - 6rem);
  height: 64px;
  margin: 0 auto;
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

const icContainerHeart = css`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  > img {
    width: 1.9rem;
  }

  > span {
    font-size: 1.6rem;
    font-weight: 500;
    color: #14151a;
  }
`;

const icContainerShareMore = css`
  display: flex;
  gap: 1.6rem;

  > img {
    width: 2.3rem;
    height: 2.3rem;
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
`;

export default ProfileDetailPage;
