import React from "react";

function Svg() {
  return (
    <div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-20 w-2 h-2 bg-white rounded-full opacity-80" />
        <div className="absolute top-40 left-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-60" />
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-70" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full opacity-80" />
      </div>

      <div className="absolute top-0 left-0">
        <svg width="200" height="200" className="opacity-40">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="10,10 190,10 100,190"
            fill="none"
            stroke="#ff00ff"
            strokeWidth="2"
            filter="url(#glow)"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0">
        <svg width="150" height="150" className="opacity-30">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle
            cx="75"
            cy="75"
            r="60"
            stroke="#ff00ff"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
          />
        </svg>
      </div>

      <div className="absolute top-1/4 right-10">
        <svg width="100" height="100" className="opacity-30 rotate-45">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect
            width="80"
            height="80"
            x="10"
            y="10"
            stroke="#ff00ff"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
          />
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-10">
        <svg width="120" height="120" className="opacity-20 animate-pulse">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="60,10 90,110 30,110"
            stroke="#ff00ff"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
          />
        </svg>
      </div>

      <div className="absolute top-10 right-20">
        <svg width="180" height="180" className="opacity-25 animate-spin-slow">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <ellipse
            cx="90"
            cy="90"
            rx="80"
            ry="40"
            stroke="#ff00ff"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
          />
        </svg>
      </div>

      <div className="absolute bottom-10 left-20">
        <svg width="140" height="140" className="opacity-30 animate-bounce">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <line
            x1="10"
            y1="10"
            x2="130"
            y2="130"
            stroke="#ff00ff"
            strokeWidth="2"
            filter="url(#glow)"
          />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/4">
        <svg width="160" height="160" className="opacity-20 animate-pulse">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="80,10 150,150 10,150"
            stroke="#ff00ff"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
          />
        </svg>
      </div>

      <div className="absolute bottom-1/4 right-1/3">
        <svg width="120" height="120" className="opacity-30 animate-spin">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect
            width="100"
            height="100"
            x="10"
            y="10"
            stroke="#ff00ff"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
          />
        </svg>
      </div>
    </div>
  );
}

export default Svg;
