"use client";

import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat, Repeat1, Shuffle, ListMusic, X, ChevronUp } from "lucide-react";
import { useAudio, MOCK_PLAYLIST } from "@/contexts/AudioContext";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export function GlassPlayer() {
  const {
    isPlaying,
    currentTrack,
    togglePlay,
    playNext,
    playPrevious,
    playTrack,
    progress,
    seek,
    currentTime,
    duration,
    volume,
    isMuted,
    setVolume,
    toggleMute,
    repeatMode,
    cycleRepeat,
    isShuffled,
    toggleShuffle,
  } = useAudio();

  const progressRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isDraggingProgress, setIsDraggingProgress] = useState(false);
  const [isDraggingVolume, setIsDraggingVolume] = useState(false);

  if (!currentTrack) return null;

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const getSeekPercent = (e: React.MouseEvent | React.TouchEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    seek(getSeekPercent(e, progressRef));
  };

  const handleProgressTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    seek(getSeekPercent(e, progressRef));
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setVolume(getSeekPercent(e, volumeRef) / 100);
  };

  const handleVolumeTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setVolume(getSeekPercent(e, volumeRef) / 100);
  };

  const RepeatIcon = repeatMode === "one" ? Repeat1 : Repeat;
  const volumePercent = isMuted ? 0 : volume * 100;

  return (
    <>
      {/* Playlist Panel */}
      {showPlaylist && (
        <div className="fixed bottom-[72px] md:bottom-24 inset-x-0 md:right-0 md:left-auto md:w-96 z-40 bg-background/95 backdrop-blur-3xl border-t md:border-l border-white/10 shadow-2xl max-h-[60vh] flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <ListMusic className="w-4 h-4 text-primary" />
              <span className="text-white font-headline font-black text-sm uppercase tracking-widest">Playlist</span>
              <span className="text-on-surface-variant text-xs ml-1">({MOCK_PLAYLIST.length} faixas)</span>
            </div>
            <button onClick={() => setShowPlaylist(false)} className="text-on-surface-variant hover:text-white transition-colors p-1">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-y-auto flex-1 scrollbar-thin">
            {MOCK_PLAYLIST.map((track, i) => {
              const isActive = currentTrack?.id === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => playTrack(track)}
                  className={`w-full flex items-center gap-4 px-5 py-3 hover:bg-white/5 transition-colors text-left group ${isActive ? "bg-primary/10" : ""}`}
                >
                  <div className="relative w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                    <Image src={track.cover} alt={track.title} fill className="object-cover" />
                    {isActive && (
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <div className="flex gap-0.5 items-end h-4">
                          <span className={`w-0.5 bg-primary rounded-full ${isPlaying ? "animate-bounce h-full" : "h-2"}`} style={{ animationDelay: "0ms" }} />
                          <span className={`w-0.5 bg-primary rounded-full ${isPlaying ? "animate-bounce h-3/4" : "h-2"}`} style={{ animationDelay: "150ms" }} />
                          <span className={`w-0.5 bg-primary rounded-full ${isPlaying ? "animate-bounce h-full" : "h-2"}`} style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-sm truncate uppercase tracking-tight transition-colors ${isActive ? "text-primary" : "text-white group-hover:text-primary"}`}>
                      {track.title}
                    </p>
                    <p className="text-on-surface-variant text-xs truncate mt-0.5">{track.artist}</p>
                  </div>
                  <span className="text-on-surface-variant/40 text-xs font-mono flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Player Bar */}
      <div className="fixed bottom-[72px] md:bottom-0 inset-x-0 z-50 border-t border-white/5 bg-background/90 backdrop-blur-3xl">
        {/* Interactive Progress Bar */}
        <div
          ref={progressRef}
          onClick={handleProgressClick}
          onTouchMove={handleProgressTouch}
          className="h-1 md:h-1.5 bg-white/5 cursor-pointer group relative"
        >
          <div
            className="h-full bg-gradient-to-r from-primary/80 to-primary transition-none relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_white]" />
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 w-full h-16 md:h-20 flex items-center gap-3 md:gap-6">

          {/* Track Info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-highest rounded-lg flex-shrink-0 relative overflow-hidden border border-white/5 shadow-lg">
              <Image src={currentTrack.cover} alt={currentTrack.title} fill className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-headline font-bold text-xs md:text-sm truncate text-white uppercase tracking-tight">{currentTrack.title}</p>
              <p className="text-[10px] md:text-xs text-primary/80 truncate uppercase tracking-widest font-medium mt-0.5">{currentTrack.artist}</p>
              {currentTrack.genre && (
                <p className="text-[9px] text-on-surface-variant/50 truncate uppercase tracking-widest font-medium hidden md:block">{currentTrack.genre}</p>
              )}
            </div>
          </div>

          {/* Center Controls */}
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className="flex items-center gap-2 md:gap-4">
              {/* Shuffle - hidden on mobile to save space */}
              <button
                onClick={toggleShuffle}
                title="Aleatório"
                className={`hidden md:flex p-1.5 rounded transition-colors ${isShuffled ? "text-primary" : "text-on-surface-variant hover:text-white"}`}
              >
                <Shuffle className="w-4 h-4" />
              </button>

              <button onClick={playPrevious} className="p-1.5 text-on-surface-variant hover:text-white transition-colors">
                <SkipBack className="w-5 h-5 md:w-5 md:h-5 fill-current" />
              </button>

              <button
                onClick={togglePlay}
                className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-primary text-background flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_16px_rgba(35,218,237,0.5)]"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                ) : (
                  <Play className="w-4 h-4 md:w-5 md:h-5 fill-current ml-0.5" />
                )}
              </button>

              <button onClick={playNext} className="p-1.5 text-on-surface-variant hover:text-white transition-colors">
                <SkipForward className="w-5 h-5 fill-current" />
              </button>

              {/* Repeat */}
              <button
                onClick={cycleRepeat}
                title={repeatMode === "off" ? "Repetir" : repeatMode === "all" ? "Repetir todas" : "Repetir uma"}
                className={`p-1.5 rounded transition-colors ${repeatMode !== "off" ? "text-primary" : "text-on-surface-variant hover:text-white"}`}
              >
                <RepeatIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Time display - desktop only */}
            <div className="hidden md:flex gap-3 text-[10px] font-mono text-on-surface-variant/50 tracking-tighter">
              <span>{formatTime(currentTime)}</span>
              <span className="opacity-30">/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center justify-end gap-1 md:gap-3 flex-1">
            {/* Time on mobile */}
            <span className="md:hidden text-[10px] font-mono text-on-surface-variant/50 tracking-tighter">
              {formatTime(currentTime)}
            </span>

            {/* Volume Control */}
            <div className="relative flex items-center">
              <button
                onClick={toggleMute}
                onMouseEnter={() => setShowVolumeSlider(true)}
                className="p-2 text-on-surface-variant hover:text-white transition-colors"
              >
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* Volume Slider — hover desktop / tap mobile */}
              <div
                onMouseLeave={() => setShowVolumeSlider(false)}
                className={`
                  absolute bottom-full right-0 md:bottom-auto md:top-auto md:right-auto md:relative 
                  transition-all duration-200 origin-bottom-right
                  ${showVolumeSlider ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto"}
                `}
              >
                {/* Mobile vertical popup */}
                <div className="md:hidden absolute bottom-12 right-0 bg-background/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                  <div className="flex flex-col items-center gap-2">
                    <Volume2 className="w-4 h-4 text-primary" />
                    <div
                      ref={volumeRef}
                      onClick={handleVolumeClick}
                      onTouchMove={handleVolumeTouchMove}
                      className="w-2 h-28 bg-white/10 rounded-full cursor-pointer relative overflow-hidden"
                    >
                      <div
                        className="absolute bottom-0 w-full bg-primary rounded-full"
                        style={{ height: `${volumePercent}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-on-surface-variant font-mono">{Math.round(volumePercent)}%</span>
                  </div>
                </div>

                {/* Desktop horizontal slider */}
                <div
                  ref={volumeRef}
                  onClick={handleVolumeClick}
                  className="hidden md:flex w-20 lg:w-28 h-1.5 bg-white/10 rounded-full cursor-pointer relative items-center"
                >
                  <div
                    className="absolute left-0 h-full bg-primary rounded-full pointer-events-none"
                    style={{ width: `${volumePercent}%` }}
                  />
                  <div
                    className="absolute h-3 w-3 bg-white rounded-full shadow pointer-events-none"
                    style={{ left: `calc(${volumePercent}% - 6px)` }}
                  />
                </div>
              </div>
            </div>

            {/* Playlist Toggle */}
            <button
              onClick={() => setShowPlaylist(p => !p)}
              title="Ver playlist"
              className={`p-2 transition-colors ${showPlaylist ? "text-primary" : "text-on-surface-variant hover:text-white"}`}
            >
              <ListMusic className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
