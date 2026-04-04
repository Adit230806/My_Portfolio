import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Configuration from the project data
  const FRAME_COUNT = 96;
  const images = useRef<HTMLImageElement[]>([]);

  // Pad function: 1 -> "001"
  const padIndex = (index: number) => String(index).padStart(3, '0');

  // STEP 1 — IMAGE LOADING SYSTEM
  useEffect(() => {
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = `/images/ezgif-frame-${padIndex(i)}.jpg`;

      // Use addEventListener instead of .onload to prevent conflicts with Chrome Extensions
      img.addEventListener('load', () => {
        loadedCount++;
        setLoadProgress((loadedCount / FRAME_COUNT) * 100);

        if (loadedCount === FRAME_COUNT) {
          setIsLoaded(true);
        }
      });

      images.current.push(img);
    }
  }, []);

  // STEP 2, 3, 4 & 5 — CANVAS SETUP, RENDERING & GSAP
  useEffect(() => {
    if (!isLoaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    if (!ctx) return;

    // STEP 3 — FRAME RENDER ENGINE (Cover Scaling)
    const renderFrame = (index: number) => {
      // Bounds check
      const safeIndex = Math.max(0, Math.min(index, FRAME_COUNT - 1));
      if (!images.current[safeIndex]) return;

      const img = images.current[safeIndex];

      // Clear previous canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Math for aspect ratio 'cover' behavior
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        // Image is incredibly wide - bind to height
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      } else {
        // Image is incredibly tall - bind to width
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      // Sync drawing to screen refresh
      requestAnimationFrame(() => {
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      });
    };

    // STEP 4 & 5 — GSAP IMPLEMENTATION & SCROLL MAPPING
    const frameState = { current: 1 };

    // Responsive scaling
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Re-trigger render for the current frame
      renderFrame(Math.floor(frameState.current) - 1);
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Initial render of Frame 1
    renderFrame(0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,                        // Full Screen sticky pin
        start: 'top top',
        end: '+=4000',                    // Mapping height - longer means specifically slower scrub
        scrub: true,                      // Smooth scrub mapping
      }
    });

    tl.to(frameState, {
      current: FRAME_COUNT,
      ease: 'none',
      onUpdate: () => renderFrame(Math.floor(frameState.current) - 1),
    });

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden m-0 p-0"
    >
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-t-white border-white/20 rounded-full animate-spin mb-4" />
            <span className="text-white text-sm tracking-widest uppercase font-mono">
              Loading Sequences [{Math.floor(loadProgress)}%]
            </span>
          </div>
        </div>
      )}

      {/* Canvas Element */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

    </div>
  );
}
