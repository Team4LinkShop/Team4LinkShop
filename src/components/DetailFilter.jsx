import { css } from '@emotion/react';

function DetailFilter({ value, onChange, filterList }) {
  return (
    <select css={detailFilterMenu} value={value} onChange={(e) => onChange(e.target.value)}>
      {filterList.map((item, id) => (
        <option key={id} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

const detailFilterMenu = css`
  border: 0;
  font-size: 18px;
  font-weight: 500;
  color: #14151a;
  outline: 0;
  cursor: pointer;
`;
export default DetailFilter;
