import React from 'react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  description: string;
  youtubeUrl: string;
}

const courses: Course[] = [
  { id: 1, title: 'React for Beginners', description: 'Learn the basics of React.', youtubeUrl: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8' },
  { id: 2, title: 'Advanced JavaScript', description: 'Master JavaScript and ES6+', youtubeUrl: 'https://www.youtube.com/watch?v=PkZNo7MFNFg' },
  { id: 3, title: 'TypeScript Fundamentals', description: 'Understand the basics of TypeScript.', youtubeUrl: 'https://www.youtube.com/watch?v=BwuLxPH8IDs' },
];

const Courses: React.FC = () => {
  return (
    <main>
      <section>
        <h1>Courses</h1>
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <a href={course.youtubeUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Courses;
