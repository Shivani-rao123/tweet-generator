import { useState } from 'react';

export default function TweetGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedTweet, setGeneratedTweet] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/tweet-generator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setGeneratedTweet(data.tweet);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt for your tweet"
        />
        <button type="submit">Generate Tweet</button>
      </form>
      {generatedTweet && <p>Generated Tweet: {generatedTweet}</p>}
    </div>
  );
}