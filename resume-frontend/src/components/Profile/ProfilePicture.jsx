import { useState } from 'react';
import { profileService } from '../../services/profileService';
// import { useAuth } from '../../context/AuthContext';
import { Upload, Trash2, User } from 'lucide-react';

const ProfilePicture = () => {
  // const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const profilePicUrl = profileService.getProfilePictureUrl();

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      return;
    }

    setLoading(true);
    try {
      await profileService.uploadProfilePicture(file);
      setRefresh(prev => prev + 1);
      alert('Profile picture uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload profile picture');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete your profile picture?')) return;

    setLoading(true);
    try {
      await profileService.deleteProfilePicture();
      setRefresh(prev => prev + 1);
      alert('Profile picture deleted successfully!');
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete profile picture');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden border-4 border-purple-500">
          <img
            key={refresh}
            src={`${profilePicUrl}?t=${Date.now()}`}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/128?text=No+Image';
            }}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <label className={`cursor-pointer btn-secondary ${loading ? 'opacity-50' : ''}`}>
          <Upload className="h-4 w-4" />
          <span>{loading ? 'Uploading...' : 'Upload'}</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={loading}
            className="hidden"
          />
        </label>
        
        <button 
          onClick={handleDelete} 
          disabled={loading}
          className="btn-secondary bg-red-50 text-red-600 hover:bg-red-100"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </div>

      <p className="text-sm text-gray-500">
        Upload a profile picture (JPG, PNG - max 5MB)
      </p>
    </div>
  );
};

export default ProfilePicture;