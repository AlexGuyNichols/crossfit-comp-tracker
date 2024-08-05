import { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  const fetchProfile = async () => {
    const res = await fetch('http://localhost:5002/api/users/current', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setUser(data);
  };

  return (
    <div>
      <h1>Profile</h1>
      <input
        type="text"
        placeholder="JWT Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button onClick={fetchProfile}>Fetch Profile</button>
      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
