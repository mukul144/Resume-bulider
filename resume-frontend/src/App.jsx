// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Layout/Navbar';
// import ProtectedRoute from './components/Layout/ProtectedRoute';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import CreateResume from './pages/CreateResume';
// import SelectTemplate from './pages/SelectTemplate';
// import ResumeView from './pages/ResumeView';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/create-resume" element={
//           <ProtectedRoute>
//             <CreateResume />
//           </ProtectedRoute>
//         } />
//         <Route path="/select-template/:id" element={
//           <ProtectedRoute>
//             <SelectTemplate />
//           </ProtectedRoute>
//         } />
//         <Route path="/resume/:id" element={
//           <ProtectedRoute>
//             <ResumeView />
//           </ProtectedRoute>
//         } />
//       </Routes>
//     </div>
//   );
// }

// export default App;




import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import ProtectedRoute from './components/Layout/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateResume from './pages/CreateResume';
import SelectTemplate from './pages/SelectTemplate';
import Preview from './pages/Preview';  // Changed from ResumeView
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-resume" element={
          <ProtectedRoute>
            <CreateResume />
          </ProtectedRoute>
        } />
        <Route path="/select-template/:id" element={
          <ProtectedRoute>
            <SelectTemplate />
          </ProtectedRoute>
        } />
        <Route path="/preview/:id" element={
          <ProtectedRoute>
            <Preview />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;