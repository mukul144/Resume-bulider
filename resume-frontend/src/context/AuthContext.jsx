import React, { createContext, useState, useEffect, useContext } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const checkAuth = async () => {
      try {
        const currentUser = authService.getCurrentUser();
        
       
        if (currentUser) {
          setUser(currentUser);
        } else {
          setUser(null);
          localStorage.removeItem('user');
          localStorage.removeItem('token');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    const data = await authService.login(email, password);
    if (data.user) {
      setUser(data.user);
    }
    return data;
  };

  const signup = async (userData) => {
    const data = await authService.verifyOtp(userData);
    if (data.user) {
      setUser(data.user);
    }
    return data;
  };

  const logout = async () => {
    try {
      await authService.signout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  };

  const value = {
    user,
    setUser,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};