'use client'
import React, { useRef } from 'react';
import './Test'
const HorizontalScroll = () => {
  const scrollRef = useRef(null);

  const handleScroll = (e) => {
    // Prevent default vertical scroll behavior
    e.preventDefault();

    if (scrollRef.current) {
      // Scroll horizontally based on the vertical wheel event delta
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div
      ref={scrollRef}
      onWheel={handleScroll}
      className="flex overflow-x-auto scroll-smooth space-x-4 p-4 w-full h-[300px] no-scrollbar"
    >
      {/* Example items to scroll through */}
      <div className="min-w-[300px] bg-blue-300 flex-shrink-0 flex items-center justify-center">
        <p>Item 1</p>
      </div>
      <div className="min-w-[300px] bg-green-300 flex-shrink-0 flex items-center justify-center">
        <p>Item 2</p>
      </div>
      <div className="min-w-[300px] bg-red-300 flex-shrink-0 flex items-center justify-center">
        <p>Item 3</p>
      </div>
      <div className="min-w-[300px] bg-yellow-300 flex-shrink-0 flex items-center justify-center">
        <p>Item 4</p>
      </div>
      <div className="min-w-[300px] bg-purple-300 flex-shrink-0 flex items-center justify-center">
        <p>Item 5</p>
      </div>
    </div>
  );
};

export default HorizontalScroll;
