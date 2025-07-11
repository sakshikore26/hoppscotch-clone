import React, { useState } from 'react';

export default function Header({ onLoginClick, onSearchClick }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [searchHover, setSearchHover] = useState(false);
  return (
    <header style={{
      // ... existing code ...
    }}>
      {/* ... existing code ... */}
      <input
        type="text"
        placeholder="Search and commands"
        readOnly
        style={{
          width: "100%",
          padding: "6px 36px 6px 32px",
          borderRadius: 6,
          border: "1px solid #e5e7eb",
          background: searchHover ? "#e5e7eb" : "#f3f4f6",
          fontSize: 13,
          color: '#6b7280',
          transition: 'background 0.15s',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setSearchHover(true)}
        onMouseLeave={() => setSearchHover(false)}
        onClick={onSearchClick}
      />
      {/* ... existing code ... */}
    </header>
  );
} 