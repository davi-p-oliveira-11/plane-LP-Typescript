"use client";
import React from "react";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPLaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPLaying(true);
    } else {
      video.pause();
      setIsPLaying(false);
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-8">
      <video
        ref={videoRef}
        src="/images/assets/mockvideo.mp4"
        className="rounded-xl shadow-lg w-full"
        controls={false}
      />
      <button
        onClick={togglePlayPause}
        className="absolute bottom-42 left-1/2 -translate-x-1/2 bg-black/50 hover:bg-black/60 p-3 rounded-full transition duration-200"
      >
        {isPlaying ? (
          <Pause className="text-white w-14 h-14" />
        ) : (
          <Play className="text-white w-14 h-14" />
        )}
      </button>
    </div>
  );
}
