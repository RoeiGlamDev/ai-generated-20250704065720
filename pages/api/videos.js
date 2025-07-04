import { NextApiRequest, NextApiResponse } from 'next';

const videos = [
  {
    id: 1,
    title: 'Video 1',
    thumbnail: 'https://images.pexels.com/videos/1943483/free-video-1943483.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    video: 'https://videos.pexels.com/video-files/1943483/1943483-hd_1280_720_25fps.mp4',
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(videos);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}