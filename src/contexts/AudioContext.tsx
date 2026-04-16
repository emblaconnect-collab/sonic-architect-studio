"use client";

import React, { createContext, useContext, useState, useRef, useEffect, useCallback, ReactNode } from "react";

export interface TrackData {
  id: string;
  title: string;
  artist: string;
  genre?: string;
  url: string;
  cover: string;
}

export type RepeatMode = "off" | "all" | "one";

interface AudioContextType {
  isPlaying: boolean;
  currentTrack: TrackData | null;
  playlist: TrackData[];
  togglePlay: () => void;
  playTrack: (track: TrackData) => void;
  playNext: () => void;
  playPrevious: () => void;
  progress: number;
  seek: (percent: number) => void;
  duration: number;
  currentTime: number;
  volume: number;
  isMuted: boolean;
  setVolume: (v: number) => void;
  toggleMute: () => void;
  repeatMode: RepeatMode;
  cycleRepeat: () => void;
  isShuffled: boolean;
  toggleShuffle: () => void;
}

export const MOCK_PLAYLIST: TrackData[] = [
  {
    id: "1",
    title: "BNP",
    artist: "Caio Ocean",
    genre: "Boombap · Hip Hop Underground",
    url: "/audios/caio-ocaen-bnp.mp3",
    cover: "/caio-ocean-capa.png",
  },
  {
    id: "2",
    title: "Dinheiro não sai de moda ft. MALU",
    artist: "Big Blakk",
    genre: "R&B / Drill · Hip Hop Underground",
    url: "/audios/big-blakk.mp3",
    cover: "/capa-big-blakk.png",
  },
  {
    id: "3",
    title: "DPMO",
    artist: "Digga D",
    genre: "UK Drill · UK Rap",
    url: "/audios/digga-d-dpmo.mp3",
    cover: "/capa-digga-d.png",
  },
  {
    id: "4",
    title: "Primeiro Ato",
    artist: "Gabryyzera",
    genre: "Boombap · Hip Hop Underground",
    url: "/audios/vibe-retro.mp3",
    cover: "/capa-vibe-retro.jpeg",
  },
];




const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<TrackData | null>(MOCK_PLAYLIST[0]);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolumeState] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [repeatMode, setRepeatMode] = useState<RepeatMode>("off");
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledPlaylist, setShuffledPlaylist] = useState<TrackData[]>([...MOCK_PLAYLIST]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playNextRef = useRef(() => {});

  // Init audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.volume = 0.8;
      audioRef.current.preload = "none";
    }
    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTime(audio.currentTime);
      }
    };

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => playNextRef.current();

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Play/pause & track change
  useEffect(() => {
    if (audioRef.current && currentTrack) {
      const targetSrc = window.location.origin + currentTrack.url;
      if (audioRef.current.src !== targetSrc) {
        // Only set src if we are actively playing or if the user clicked play,
        // or just rely on preload="none" to prevent download until .play() is called.
        audioRef.current.src = currentTrack.url;
        if (isPlaying) {
          audioRef.current.play().catch(() => setIsPlaying(false));
        }
      } else {
        if (isPlaying) {
          audioRef.current.play().catch(() => setIsPlaying(false));
        } else {
          audioRef.current.pause();
        }
      }
    }
  }, [isPlaying, currentTrack]);

  const getActivePlaylist = useCallback(() => {
    return isShuffled ? shuffledPlaylist : MOCK_PLAYLIST;
  }, [isShuffled, shuffledPlaylist]);

  const playNext = useCallback(() => {
    if (!currentTrack) return;
    if (repeatMode === "one") {
      // Restart current track
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
      return;
    }
    const list = getActivePlaylist();
    const idx = list.findIndex(t => t.id === currentTrack.id);
    const nextIdx = (idx + 1) % list.length;
    if (nextIdx === 0 && repeatMode === "off") {
      setIsPlaying(false);
      return;
    }
    setCurrentTrack(list[nextIdx]);
    setIsPlaying(true);
  }, [currentTrack, repeatMode, getActivePlaylist]);

  const playPrevious = useCallback(() => {
    if (!currentTrack) return;
    if (audioRef.current && audioRef.current.currentTime > 3) {
      // If past 3s, restart current
      audioRef.current.currentTime = 0;
      return;
    }
    const list = getActivePlaylist();
    const idx = list.findIndex(t => t.id === currentTrack.id);
    const prevIdx = (idx - 1 + list.length) % list.length;
    setCurrentTrack(list[prevIdx]);
    setIsPlaying(true);
  }, [currentTrack, getActivePlaylist]);

  useEffect(() => {
    playNextRef.current = playNext;
  }, [playNext]);

  const togglePlay = () => setIsPlaying(prev => !prev);

  const playTrack = (track: TrackData) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const seek = (percent: number) => {
    if (audioRef.current && audioRef.current.duration) {
      const newTime = (percent / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(percent);
      setCurrentTime(newTime);
    }
  };

  const setVolume = (v: number) => {
    const clamped = Math.max(0, Math.min(1, v));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
      audioRef.current.muted = false;
    }
    setIsMuted(clamped === 0);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    audioRef.current.muted = newMuted;
  };

  const cycleRepeat = () => {
    setRepeatMode(prev => {
      if (prev === "off") return "all";
      if (prev === "all") return "one";
      return "off";
    });
  };

  const toggleShuffle = () => {
    setIsShuffled(prev => {
      if (!prev) {
        // Shuffle the playlist
        const shuffled = [...MOCK_PLAYLIST].sort(() => Math.random() - 0.5);
        setShuffledPlaylist(shuffled);
      }
      return !prev;
    });
  };

  return (
    <AudioContext.Provider value={{
      isPlaying, currentTrack, playlist: MOCK_PLAYLIST,
      togglePlay, playTrack, playNext, playPrevious,
      progress, seek, duration, currentTime,
      volume, isMuted, setVolume, toggleMute,
      repeatMode, cycleRepeat,
      isShuffled, toggleShuffle,
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
