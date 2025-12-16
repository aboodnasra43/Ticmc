import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AudioPlayerProps {
  src: string;
  initialMuted?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, initialMuted = false }) => {
  const [isMuted, setIsMuted] = useState(initialMuted);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const attemptPlay = async () => {
      try {
        // First try to play with current mute settings
        audio.muted = isMuted;
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay with sound blocked, falling back to muted:", error);
        // If that fails (likely due to browser policy), try muted
        if (!isMuted) {
          setIsMuted(true);
          audio.muted = true;
          try {
            await audio.play();
            setIsPlaying(true);
          } catch (mutedError) {
            console.log("Muted autoplay also failed:", mutedError);
          }
        }
      }
    };

    attemptPlay();

    // Handle visibility change to pause/play
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        if (isPlaying) audio.play();
      }
    };

    // Try to unmute on first user interaction if we had to fallback
    const handleInteraction = () => {
      if (audio.muted && !isMuted) { // If we wanted sound but got forced to mute
         audio.muted = false;
         audio.play().catch(console.error);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('click', handleInteraction, { once: true });
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (!isMuted && !isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    // Ensure it's playing if user interacts
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio 
        ref={audioRef} 
        src={src} 
        loop 
        preload="auto"
      />
      
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMute}
        className="bg-ticmc-gold/90 hover:bg-ticmc-gold text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-colors duration-300 flex items-center justify-center"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="muted"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <VolumeX size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="unmuted"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Volume2 size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default AudioPlayer;
