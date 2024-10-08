/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { shopLists } from "../api/link-shop-list";
import { useEffect, useState } from "react";
import Logo from '../components/common/Logo';
import CreateButton from '../components/common/CreateButton';
import LinkCard from '../components/LinkCard';
import DetailFilter from '../components/DetailFilter';
import icSearch from '../assets/images/ic-search.svg';

function ShopList() {
  const [shopList, setShopList] = useState([]);
  const [filterMenu, setFilterMenu] = useState("latest");
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedShopList, setSortedShopList] = useState([]);
  
  const filterOptionList = [
    {value:"latest", name:"최신순"},
    {value:"likes", name:"좋아요순"},
    {value:"products", name:"등록된 상품순"},
  ];

  useEffect( () => {
    (async () => {
      const list = await shopLists();
      if(list) setShopList(list);
    })();
  }, []);

  useEffect(() => {
    const sortShopList = () => {
      const sortedList = [...shopList].sort((a, b) => {
        if (filterMenu === 'likes') {
          return b.likes - a.likes;
        }
        if (filterMenu === 'products') {
          return b.productsCount - a.productsCount;
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setSortedShopList(sortedList);
    };

    sortShopList();
  }, [shopList, filterMenu]);

  const searchedShopList = sortedShopList.filter(shop =>
    shop.name.includes(searchTerm)
  );


  return (
    <div css={containerShopList}>
      <div css={containerHeader}>
        <Logo />
        <CreateButton />
      </div>
      <div css={containerSearch}>
        <img css={iconSearch} src={icSearch} />
        <input css={inputSearch} type="search" placeholder="제목으로 검색해 보세요." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
      <div css={containerDetailFilter}>
        <DetailFilter value={filterMenu} onChange={setFilterMenu} filterList={filterOptionList} />
      </div>
      <div css={containerLinkCardList}>
        {searchedShopList.map((shop) => (
          <LinkCard shop={shop} />
        ))}
      </div>
    </div>
  );
}

const containerShopList = css `
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const containerHeader = css `
  position: absolute;
  width: 62.5%;
  top: 40px;
  display: flex;
  justify-content: space-between;
`;

const containerSearch = css `
  position: absolute;
  display: flex;
  top:108px;
  width:62.5%;
`;

const iconSearch = css `
  position: absolute;
  left: 20px;
  top: 30%;
  z-index: 1;
`;

const inputSearch = css `
  position: relative;
  width: 100%;
  border:2px solid #dddcdf;
  border-radius: 49px;
  height:55px;
  line-height: 55px;
  font-size: 18px;
  padding-left: 50px;
  box-sizing: border-box;
`;

const containerDetailFilter = css `
  position: absolute;
  top:203px;
  width: 62.5%;
`;

const containerLinkCardList = css `
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;
  justify-content: space-between;
  width:62.5%;
  top: 256px;
`;

export default ShopList;