import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import MANAOutline from "../public/svgs/mana";
import Navigation from "./Navigation";

const Hero = () => {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const connection = navigator.connection;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      connection?.saveData ||
      ["slow-2g", "2g"].includes(connection?.effectiveType)
    ) {
      return;
    }

    let idleCallback;
    let timeout;
    const loadVideo = () => {
      setVideoSrc("/videos/hero-bg.mp4");
    };
    const scheduleVideo = () => {
      // Keep the video out of the initial document and critical loading path.
      if (window.requestIdleCallback) {
        idleCallback = window.requestIdleCallback(loadVideo, {
          timeout: 1500,
        });
      } else {
        timeout = window.setTimeout(loadVideo, 200);
      }
    };

    if (document.readyState === "complete") {
      scheduleVideo();
    } else {
      window.addEventListener("load", scheduleVideo, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleVideo);
      if (idleCallback !== undefined) window.cancelIdleCallback(idleCallback);
      window.clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!videoSrc) return;

    const video = videoRef.current;
    let cancelled = false;
    // Set the DOM property explicitly for muted inline playback on iOS.
    video.muted = true;
    video.play().catch(() => {
      if (!cancelled) {
        setIsPlaying(false);
        setVideoSrc(null);
      }
    });

    return () => {
      cancelled = true;
      video.pause();
    };
  }, [videoSrc]);

  return (
    <div className="relative w-auto h-screen">
      <Head>
        <link rel="preload" as="image" href="/videos/videobg.png" />
      </Head>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover pointer-events-none"
        style={{ backgroundImage: "url('/videos/videobg.png')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 z-20 bg-dark bg-opacity-40 pointer-events-none"></div>
      {videoSrc && (
        <video
          ref={videoRef}
          aria-hidden="true"
          className={`absolute inset-0 z-10 object-cover object-center w-full h-screen pointer-events-none transition-opacity duration-500 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="none"
          poster="/videos/videobg.png"
          src={videoSrc}
          onPlaying={() => setIsPlaying(true)}
          onError={() => {
            setIsPlaying(false);
            setVideoSrc(null);
          }}
        />
      )}
      <Navigation />
      <div
        id="mana-large"
        aria-hidden="true"
        className="absolute z-30 flex justify-center w-full px-20 mx-auto transition-transform duration-700 pointer-events-none -bottom-28">
        <MANAOutline />
      </div>
    </div>
  );
};

export default Hero;
