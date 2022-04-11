import React, { FC } from 'react';

interface SearchProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  search: () => void;
}

const Search: FC<SearchProps> = ({ setQuery, search }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px'
      }}>
      <div>
        <form>
          <input
            placeholder="Search..."
            style={{
              borderRadius: '8px',
              lineHeight: 'normal',
              outline: 'none',
              backgroundColor: 'transparent',
              borderWidth: '1px',
              borderStyle: 'solid',
              padding: '5px 5px',
              margin: '0px 5px'
            }}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="button"
            onClick={() => search()}
            style={{
              cursor: 'pointer',
              outline: 'none',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 700,
              boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.12)',
              width: 'fit-content',
              height: 'fit-content',
              lineHeight: 'normal',
              padding: '5px 5px'
            }}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
