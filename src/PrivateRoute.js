import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fakeAuth } from './Login';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!fakeAuth.isAuthenticated) {
      navigate('/login', {
        state: { from: location },
        replace: true
      });
    }
  }, [navigate, location]);

  return fakeAuth.isAuthenticated ? children : null;
};

export default PrivateRoute;
