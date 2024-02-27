// Viewport.js
import React, { useState, useEffect, useMemo } from 'react';

function Viewport({ savedLyrics, currentLyric, currentColor }) {
  return (
    <div className="viewport-container">
      {savedLyrics.map((lyric, index) => (
        <div key={index} className="lyric" style={{ backgroundColor: lyric.color }}>
          {lyric.text}
        </div>
      ))}
      {currentLyric && (
        <div className="lyric" style={{ backgroundColor: currentColor }}>
          {currentLyric}
        </div>
      )}
    </div>
  );
}

export default Viewport;
