import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { adminStorage } from '../services/adminStorage';

export const useAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    adminStorage.logVisitor(location.pathname);
  }, [location.pathname]);
};
