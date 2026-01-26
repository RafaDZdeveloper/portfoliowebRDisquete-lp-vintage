import { useEffect, useCallback, useRef } from 'react';

export const useVinyl = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    // Inicializamos el audio una sola vez
    if (!audioRef.current) {
      const audio = new Audio('/sounds/vnyl_intro.mp3');
      audio.loop = false;
      // SUBIMOS EL VOLUMEN para probar (luego puedes bajarlo a 0.3)
      audio.volume = 1; 
      audio.preload = "auto";
      audioRef.current = audio;
    }
  }, []);

  const startAtmosphere = useCallback(() => {
    const audio = audioRef.current;
    
    // Solo actuamos si existe el audio y NO ha sonado con éxito todavía
    if (audio && !hasPlayed.current) {
      // Forzamos el inicio del archivo
      audio.currentTime = 0; 
      
      audio.play()
        .then(() => {
          hasPlayed.current = true;

        })
        .catch((err) => {
          console.warn("Audio bloqueado temporalmente por el navegador:", err);
        });
    }
  }, []);

  const playSfx = useCallback((type: 'needle' | 'switch' | 'slide') => {
    const sfx = new Audio(`/sonidos/${type}.mp3`);
    sfx.volume = 0.4;
    sfx.play().catch(() => {});
  }, []);

  return { startAtmosphere, playSfx };
};