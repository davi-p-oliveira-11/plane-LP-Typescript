"use client";
import React from "react";

import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPLaying] = useState(false);

  return <div>VideoPlayer</div>;
}
