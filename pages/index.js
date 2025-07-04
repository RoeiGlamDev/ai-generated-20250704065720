import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('/api/videos');
      const data = await response.json();
      setVideos(data);
    };
    fetchVideos();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12">
      <Head>
        <title>GoldTube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Welcome to GoldTube</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id}>
            <VideoPlayer video={video} />
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Image
          src="https://images.pexels.com/photos/1330645/pexels-photo-1330645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="A single purple doughnut with white stripes on a bright yellow backdrop, creating a striking color contrast."
          width={4000}
          height={2667}
          className="object-cover h-96 w-full"
        />
      </div>
      <div className="mt-12">
        <Image
          src="https://images.pexels.com/photos/7761188/pexels-photo-7761188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Hand holding a classic vintage camera against a vibrant yellow background."
          width={6000}
          height={3368}
          className="object-cover h-96 w-full"
        />
      </div>
      <div className="mt-12">
        <Image
          src="https://images.pexels.com/photos/1260612/pexels-photo-1260612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="A hand holding a purple painted apple against a bright yellow backdrop, creating a bold contrast."
          width={3717}
          height={3264}
          className="object-cover h-96 w-full"
        />
      </div>
    </div>
  );
}