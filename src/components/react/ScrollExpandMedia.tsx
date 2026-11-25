import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent as ReactTouchEvent,
  type WheelEvent as ReactWheelEvent,
} from 'react';
import { motion } from 'framer-motion';

export interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  mediaAlt?: string;
  posterSrc?: string;
  bgImageSrc: string;
  bgImageAlt?: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  subheadline?: string;
  logoSrc?: string;
  logoAlt?: string;
  ctaHref?: string;
  ctaLabel?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export default function ScrollExpandMedia({
  mediaType = 'image',
  mediaSrc,
  mediaAlt,
  posterSrc,
  bgImageSrc,
  bgImageAlt = 'Parcela y cultivo',
  title,
  date,
  scrollToExpand = 'Desliza para descubrir',
  subheadline,
  logoSrc,
  logoAlt = 'Ecovermis',
  ctaHref,
  ctaLabel,
  textBlend,
  children,
}: ScrollExpandMediaProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener('touchstart', handleTouchStart as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('touchmove', handleTouchMove as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener('wheel', handleWheel as unknown as EventListener);
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';
  const showCta = scrollProgress > 0.55 || showContent;

  // silence unused type imports for exact optional handlers
  void (0 as unknown as ReactTouchEvent);
  void (0 as unknown as ReactWheelEvent);

  return (
    <div
      ref={sectionRef}
      className="overflow-x-hidden bg-eco-bg transition-colors duration-700 ease-in-out"
    >
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-start">
        <div className="relative flex min-h-[100dvh] w-full flex-col items-center">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress * 0.35 }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt={bgImageAlt}
              width={1920}
              height={1080}
              className="h-screen w-screen object-cover object-center"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-eco-primary/20 via-eco-field/15 to-eco-bg/45" />

          </motion.div>

          {logoSrc && (
            <div className="absolute left-4 top-4 z-20 sm:left-8 sm:top-6">
              <img
                src={logoSrc}
                alt={logoAlt}
                width={96}
                height={110}
                className="h-12 w-auto drop-shadow-md sm:h-16"
              />
            </div>
          )}

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-start px-4">
            <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center">
              <div
                className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-2xl transition-none"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(26, 47, 32, 0.35)',
                }}
              >
                {mediaType === 'video' ? (
                  <div className="pointer-events-none relative h-full w-full">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="h-full w-full rounded-xl object-cover"
                      controls={false}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-eco-bg/30"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 0.45 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className="relative h-full w-full">
                    <img
                      src={mediaSrc}
                      alt={mediaAlt || title || 'Producto Ecovermis'}
                      width={1280}
                      height={720}
                      className="h-full w-full rounded-xl object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-eco-primary/25"
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 0.4 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />

                  </div>
                )}

                <div className="relative z-10 mt-4 flex flex-col items-center text-center transition-none">
                  {date && (
                    <p
                      className="font-body text-lg text-eco-glow sm:text-2xl"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-center font-display text-sm font-medium text-eco-secondary sm:text-base"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <h1
                className={`relative z-10 flex w-full flex-col items-center justify-center gap-3 text-center transition-none ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.span
                  className="block font-display text-3xl font-extrabold text-eco-text transition-none sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </motion.span>
                <motion.span
                  className="block max-w-4xl text-center font-display text-3xl font-extrabold text-eco-text transition-none sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </motion.span>
              </h1>

              {showCta && ctaHref && ctaLabel && (
                <motion.div
                  className="absolute bottom-10 left-1/2 z-20 w-[min(100%,22rem)] -translate-x-1/2 px-4 sm:bottom-14"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {subheadline && scrollProgress > 0.7 && (
                    <p className="mb-4 text-center text-sm leading-relaxed text-eco-muted sm:text-base">
                      {subheadline}
                    </p>
                  )}
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full"
                  >
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>{ctaLabel}</span>
                  </a>
                </motion.div>
              )}
            </div>

            <motion.section
              className="flex w-full flex-col px-0 py-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
              style={{ pointerEvents: showContent ? 'auto' : 'none' }}
              aria-hidden={!showContent}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}
