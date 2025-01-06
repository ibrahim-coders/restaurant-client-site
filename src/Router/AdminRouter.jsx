import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';

const AdminRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <span className="loader"></span>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRouter;
