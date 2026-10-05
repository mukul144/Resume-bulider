const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">ResumeBuilder</h3>
            <p className="text-gray-400 text-sm">
              Create professional resumes that get you noticed by employers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/create-resume" className="hover:text-white">Create Resume</a></li>
              <li><a href="/login" className="hover:text-white">Login</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">Email: support@resumebuilder.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 ResumeBuilder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;