import React from 'react';
import { MessageSquare, ThumbsUp, User } from 'lucide-react';

const Community = () => {
  const discussions = [
    {
      id: 1,
      title: "Quantum AI Ethics",
      author: "Alice",
      replies: 23,
      likes: 45,
    },
    {
      id: 2,
      title: "Spiritual Insights in Machine Learning",
      author: "Bob",
      replies: 17,
      likes: 32,
    },
    {
      id: 3,
      title: "Self-Improving AI: Risks and Benefits",
      author: "Charlie",
      replies: 31,
      likes: 56,
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Community</h2>
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Discussions</h3>
        <div className="space-y-4">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-lg font-medium mb-2">{discussion.title}</h4>
              <div className="flex items-center text-sm text-gray-400">
                <User className="w-4 h-4 mr-1" />
                <span className="mr-4">{discussion.author}</span>
                <MessageSquare className="w-4 h-4 mr-1" />
                <span className="mr-4">{discussion.replies} replies</span>
                <ThumbsUp className="w-4 h-4 mr-1" />
                <span>{discussion.likes} likes</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          Start New Discussion
        </button>
      </div>
      <div className="mt-8 bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
        <ul className="space-y-2">
          <li>• AI Ethics Webinar - Next Tuesday, 2 PM EST</li>
          <li>• Quantum Computing in AI Workshop - March 15th</li>
          <li>• Community Hackathon: AI for Good - April 1-3</li>
        </ul>
      </div>
    </div>
  );
};

export default Community;