import { Link, Outlet } from 'react-router-dom';

export const Categories = () => (
  <div>
    <h2>Categories</h2>
    <p>Browse items by category.</p>
    <nav>
      <ul>
        <li>
          <Link to="desktops">Desktops</Link>
        </li>
        <li>
          <Link to="laptops">Laptops</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </div>
);

export const Desktops = () => <h3>Desktop PC Page</h3>;
export const Laptops = () => <h3>Laptops Page</h3>;
