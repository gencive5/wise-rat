import { useEffect, useRef } from 'react';

const CustomHorizontalScrollbar = ({ targetId, trackColor = "#f2f2f2", thumbColor = "#e980fc" }) => {
  const thumbRef = useRef(null);
  const targetElRef = useRef(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) {
      console.warn(`Element with id "${targetId}" not found`);
      return;
    }
    
    targetElRef.current = targetEl;
    
    // Hide native scrollbar but keep scroll functionality
    targetEl.style.overflowX = "auto";
    targetEl.style.overflowY = "hidden";
    targetEl.style.scrollbarWidth = "none"; // Firefox
    targetEl.style.msOverflowStyle = "none"; // IE/Edge
    
    // Add style to hide webkit scrollbar
    const styleId = `hide-scrollbar-${targetId}`;
    let styleEl = document.getElementById(styleId);
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      styleEl.textContent = `
        #${targetId} {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
          overflow-y: hidden !important;
        }
        #${targetId}::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
        }
      `;
      document.head.appendChild(styleEl);
    }
    
    const updateThumb = () => {
      updateThumbWidth();
      moveThumb();
    };
    
    setTimeout(updateThumb, 100);
    
    const handleScroll = () => {
      if (!isDraggingRef.current) {
        moveThumb();
      }
    };
    
    const handleResize = () => {
      updateThumbWidth();
    };
    
    targetEl.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    const resizeObserver = new ResizeObserver(() => {
      updateThumbWidth();
    });
    resizeObserver.observe(targetEl);
    
    return () => {
      targetEl.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      if (styleEl && styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
    };
  }, [targetId]);
  
  const updateThumbWidth = () => {
    if (!targetElRef.current || !thumbRef.current) return;
    
    const trackWidth = thumbRef.current.parentElement.offsetWidth;
    const targetWidth = targetElRef.current.clientWidth;
    const targetScrollWidth = targetElRef.current.scrollWidth;
    
    if (targetScrollWidth <= targetWidth) {
      thumbRef.current.style.display = 'none';
      return;
    }
    
    thumbRef.current.style.display = 'block';
    
    let thumbWidth = (targetWidth / targetScrollWidth) * trackWidth;
    thumbWidth = Math.max(thumbWidth, 30);
    thumbRef.current.style.width = `${thumbWidth}px`;
  };
  
  const moveThumb = () => {
    if (!targetElRef.current || !thumbRef.current) return;
    
    const track = thumbRef.current.parentElement;
    const trackWidth = track.offsetWidth;
    const thumbWidth = thumbRef.current.offsetWidth;
    const maxScrollLeft = targetElRef.current.scrollWidth - targetElRef.current.clientWidth;
    
    if (maxScrollLeft <= 0) return;
    
    const scrollPercent = targetElRef.current.scrollLeft / maxScrollLeft;
    const maxThumbLeft = trackWidth - thumbWidth;
    const thumbLeft = scrollPercent * maxThumbLeft;
    
    thumbRef.current.style.left = `${thumbLeft}px`;
  };
  
  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!targetElRef.current || !thumbRef.current) return;
    
    isDraggingRef.current = true;
    
    const startX = e.clientX;
    const startScrollLeft = targetElRef.current.scrollLeft;
    const track = thumbRef.current.parentElement;
    const trackWidth = track.offsetWidth;
    const thumbWidth = thumbRef.current.offsetWidth;
    const maxThumbLeft = trackWidth - thumbWidth;
    const maxScrollLeft = targetElRef.current.scrollWidth - targetElRef.current.clientWidth;
    const scrollRatio = maxScrollLeft / maxThumbLeft;
    
    const handleMouseMove = (moveEvent) => {
      if (!isDraggingRef.current) return;
      
      const deltaX = moveEvent.clientX - startX;
      let newScrollLeft = startScrollLeft + (deltaX * scrollRatio);
      
      newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));
      targetElRef.current.scrollLeft = newScrollLeft;
    };
    
    const handleMouseUp = () => {
      isDraggingRef.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  
  const handleTrackClick = (e) => {
    if (!targetElRef.current || !thumbRef.current) return;
    
    // Don't trigger if clicking on thumb
    if (e.target === thumbRef.current) return;
    
    const track = thumbRef.current.parentElement;
    const trackRect = track.getBoundingClientRect();
    const thumbWidth = thumbRef.current.offsetWidth;
    const clickX = e.clientX - trackRect.left;
    const trackWidth = track.offsetWidth;
    const maxScrollLeft = targetElRef.current.scrollWidth - targetElRef.current.clientWidth;
    
    const clickPosition = clickX - (thumbWidth / 2);
    const scrollPercent = Math.max(0, Math.min(1, clickPosition / (trackWidth - thumbWidth)));
    
    targetElRef.current.scrollLeft = scrollPercent * maxScrollLeft;
  };
  
  return (
    <div 
      onClick={handleTrackClick}
      style={{
        width: 'calc(100% - 6rem)',
        margin: '0 auto',
        height: '7px',
        position: 'relative',
        marginTop: '-7px',
        marginBottom: '0',
        borderRadius: '4px',
        backgroundColor: trackColor,
        cursor: 'pointer',
        zIndex: 100
      }}
    >
      <div
        ref={thumbRef}
        onMouseDown={handleMouseDown}
        style={{
          height: '100%',
          backgroundColor: thumbColor,
          borderRadius: '4px',
          position: 'absolute',
          top: 0,
          left: 0,
          cursor: 'grab',
          transition: 'background-color 0.2s, left 0.05s linear',
          minWidth: '30px'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#ff6bff';
          e.target.style.cursor = 'grabbing';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = thumbColor;
          e.target.style.cursor = 'grab';
        }}
      />
    </div>
  );
};

export default CustomHorizontalScrollbar;