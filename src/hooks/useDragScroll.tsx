import { useState, useEffect, useCallback } from 'react';
import throttle from 'lodash/throttle';

const timing = (1 / 60) * 1000;
const decay = (v: number) => -0.1 * ((1 / timing) ^ 4) + v;

function useDragScroll(scrollRef: React.RefObject<HTMLElement>) {
  const [clickStartX, setClickStartX] = useState<number | undefined>();
  const [scrollStartX, setScrollStartX] = useState<number | undefined>();
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(0);
  const [momentum, setMomentum] = useState(0);
  const [lastScrollX, setLastScrollX] = useState(0);
  const [speed, setSpeed] = useState(0);

  const scrollWrapperCurrent = scrollRef.current;

  const handleLastScrollX = useCallback(
    (screenX) =>
      throttle(() => {
        setLastScrollX(screenX);
      }, timing),
    [],
  );

  const handleMomentum = useCallback(
    (nextMomentum) =>
      throttle(() => {
        setMomentum(nextMomentum);
        scrollRef.current!.scrollLeft =
          scrollRef.current!.scrollLeft + nextMomentum * timing * direction;
      }, timing),
    [scrollRef, direction],
  );

  useEffect(() => {
    if (direction !== 0) {
      if (momentum > 0.1 && !isDragging) {
        handleMomentum(decay(momentum));
      } else if (isDragging) {
        setMomentum(speed);
      } else {
        setDirection(0);
      }
    }
  }, [momentum, isDragging, speed, direction, handleMomentum]);

  useEffect(() => {
    if (scrollRef.current) {
      const handleDragStart = (e: MouseEvent) => {
        setClickStartX(e.screenX);
        setScrollStartX(scrollRef.current!.scrollLeft);
        setDirection(0);
        setIsDragging(true);
      };

      const handleDragMove = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (clickStartX !== undefined && scrollStartX !== undefined) {
          const touchDelta = clickStartX - e.screenX;
          scrollRef.current!.scrollLeft = scrollStartX + touchDelta;
          
          if (Math.abs(touchDelta) > 1) {
            setIsDragging(true);
            setDirection(touchDelta / Math.abs(touchDelta));
            setSpeed(Math.abs((lastScrollX - e.screenX) / timing));
            handleLastScrollX(e.screenX);
          }
        }
      };

      const handleDragEnd = () => {
        // if (isDragging && clickStartX !== undefined) {
          setClickStartX(undefined);
          setScrollStartX(undefined);
          setIsDragging(false);
        // }
      };

      if (scrollRef.current.ontouchstart === undefined) {
        scrollRef.current.onmousedown = handleDragStart;
        scrollRef.current.onmousemove = handleDragMove;
        scrollRef.current.onmouseup = handleDragEnd;
        scrollRef.current.onmouseleave = handleDragEnd;
      }
    }
  }, [
    scrollWrapperCurrent,
    clickStartX,
    isDragging,
    scrollStartX,
    handleLastScrollX,
    lastScrollX,
    scrollRef,
  ]);

  return {
    clickStartX,
    scrollStartX,
    isDragging,
    direction,
    momentum,
    lastScrollX,
    speed,
  };
}

export default useDragScroll;

