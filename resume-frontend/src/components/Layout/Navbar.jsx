import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FileText, LogOut, UserCircle } from 'lucide-react';
import { useState } from 'react';
import ProfilePicture from '../Profile/ProfilePicture';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleLogout = async () => {
  await logout(); 
  navigate('/login');
};

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <FileText className="h-8 w-8 text-purple-600" />
                <span className="font-bold text-xl text-gray-800">ResumeBuilder</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link to="/create-resume" className="btn-primary">
                    Create Resume
                  </Link>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setShowProfileModal(true)}
                      className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
                    >
                      <UserCircle className="h-6 w-6" />
                      <span className="text-sm font-medium">{user?.name}</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-1 text-red-600 hover:text-red-700"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-gray-900">
                    Login
                  </Link>
                  <Link to="/signup" className="btn-primary">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Profile Settings</h2>
              <button onClick={() => setShowProfileModal(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <ProfilePicture />
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-600">
                <strong>Name:</strong> {user?.name}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Email:</strong> {user?.email}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Username:</strong> {user?.username}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Profession:</strong> {user?.profession}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;