import { useState } from 'react';

export default function Upload() {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle video upload logic here
  };

  return (
    <div className="max-w-7xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Upload a Video</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none