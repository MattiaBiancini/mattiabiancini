"use client";

import { useState } from "react";

interface Developer {
  name: string;
}

interface Props {
  developers: Developer[];
}

export default function OverlappingAvatars({ developers }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', position: 'relative', height: 32 }}>
      {developers.map((developer, index) => {
        const isHovered = hoveredIndex === index;
        const isHidden = hoveredIndex !== null && !isHovered;

        return (
          <a
            key={developer.name}
            href={`https://github.com/${developer.name}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              width: 32,
              height: 32,
              zIndex: isHovered ? 10 : developers.length - index,
              marginLeft: index === 0 ? 0 : -16,
              transition: 'all 0.3s ease',
              transform: isHidden ? 'translateX(100px)' : 'translateX(0)',
              opacity: isHidden ? 0 : 1,
            }}
          >
            <img
              src={`https://github.com/${developer.name}.png`}
              alt={`${developer.name}'s avatar`}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: 'var(--neutral-alpha-strong) solid 1px',
                boxShadow: '0 0 3px rgba(0,0,0,0.2)',
              }}
            />
          </a>
        );
      })}
    </div>
  );
}