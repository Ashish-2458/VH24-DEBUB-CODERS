import React, { useState } from 'react';

// Mock Data (replace with API call or real data)
const mockProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  profilePicture: "https://via.placeholder.com/150"
};

const mockRecordings = [
  { id: 1, title: "Session 1 - Math", date: "2023-09-21", link: "/recordings/session1" },
  { id: 2, title: "Session 2 - Science", date: "2023-10-01", link: "/recordings/session2" },
  { id: 3, title: "Session 3 - History", date: "2023-10-10", link: "/recordings/session3" }
];

const mockFavoriteTutors = [
  { id: 1, name: "Tutor A", profilePicture: "https://via.placeholder.com/100", link: "/tutors/tutorA" },
  { id: 2, name: "Tutor B", profilePicture: "https://via.placeholder.com/100", link: "/tutors/tutorB" },
  { id: 3, name: "Tutor C", profilePicture: "https://via.placeholder.com/100", link: "/tutors/tutorC" }
];

// Dashboard Component
const StudentDashboard = () => {
  const [profile, setProfile] = useState(mockProfile);
  const [recordings, setRecordings] = useState(mockRecordings);
  const [favoriteTutors, setFavoriteTutors] = useState(mockFavoriteTutors);

  return (
    <div style={styles.container}>
      {/* Profile Section */}
      <div style={styles.section}>
        <h2>Profile Details</h2>
        <div style={styles.profile}>
          <img src={profile.profilePicture} alt="Profile" style={styles.profilePicture} />
          <div>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
          </div>
        </div>
      </div>

      {/* Session Recordings Section */}
      <div style={styles.section}>
        <h2>Recordings of Sessions</h2>
        <ul>
          {recordings.map((recording) => (
            <li key={recording.id} style={styles.listItem}>
              <a href={recording.link}>
                {recording.title} - {recording.date}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Favorite Tutors Section */}
      <div style={styles.section}>
        <h2>Favorite Tutors</h2>
        <div style={styles.tutorList}>
          {favoriteTutors.map((tutor) => (
            <div key={tutor.id} style={styles.tutorCard}>
              <img src={tutor.profilePicture} alt={tutor.name} style={styles.tutorPicture} />
              <a href={tutor.link} style={styles.tutorLink}>{tutor.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Basic Styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    marginBottom: '40px',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
  },
  profilePicture: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  listItem: {
    marginBottom: '10px',
  },
  tutorList: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  tutorCard: {
    textAlign: 'center',
    padding: '10px',
  },
  tutorPicture: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  },
  tutorLink: {
    textDecoration: 'none',
    color: 'blue',
  }
};

export default StudentDashboard;