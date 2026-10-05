import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FileText, Zap, Shield } from 'lucide-react';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Create Professional Resumes in Minutes
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Build stunning resumes that get you noticed. Easy to use, professionally designed templates.
            </p>
            {isAuthenticated ? (
              <Link to="/create-resume" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Create Your Resume Now
              </Link>
            ) : (
              <Link to="/signup" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started Free
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
            <p className="text-gray-600">Choose from multiple professionally designed templates</p>
          </div>
          <div className="text-center p-6">
            <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick & Easy</h3>
            <p className="text-gray-600">Fill in your details and get your resume instantly</p>
          </div>
          <div className="text-center p-6">
            <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your data is safe with us. Download and delete anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;