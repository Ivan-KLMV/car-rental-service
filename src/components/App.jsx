import { CatalogPage } from 'pages/CatalogPage';
import { FavoritesPage } from 'pages/FavoritesPage';
import { NavLink, Route, Routes } from 'react-router-dom';
import { SearchForm } from './SearchForm/SearchForm';
import { useState } from 'react';
import styled from 'styled-components';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState({});

  const searchHendler = values => {
    // console.log('search values', values);
    setSearchQuery(values);
  };
  return (
    <>
      <div
        style={{ backgroundColor: 'rgba(52, 112, 255, 1)', marginBottom: 50 }}
      >
        <NavBar>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </NavBar>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '1440px',
          padding: '0 128px 150px 128px',
          margin: '0 auto',
          overflowX: 'unset',
        }}
      >
        <SearchForm onSubmitHandler={searchHendler} />

        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route
            path="/catalog"
            element={<CatalogPage searchQuery={searchQuery} />}
          />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<>Not Found</>} />
        </Routes>
      </div>
    </>
  );
};

const NavBar = styled.nav`
  display: flex;
  font-weight: 600;
  color: white;
  font-size: 38px;
  height: 100px;
  max-width: 1440px;
  margin: 0px auto;
  align-items: center;
  gap: 20px;
`;
