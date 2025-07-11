import React, { useState } from "react";

export default function Sidebar({ active, setActive }) {
  const [hovered, setHovered] = useState(null);

  return (
    <aside style={{
      position: 'fixed',
      top: 48, // Start below header
      left: 0,
      width: 48, // Sidebar width
      height: 'calc(100vh - 48px - 28px)', // End above footer
      background: '#fff',
      borderRight: '1px solid #f3f4f6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 6,
      zIndex: 900, // Lower than footer
    }}>
      {/* First icon with tooltip */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          cursor: 'pointer',
          position: 'relative',
          background: hovered === 0 ? '#f3f4f6' : 'transparent',
          borderLeft: active === 0 ? '4px solid #6366f1' : '4px solid transparent',
        }}
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setActive(0)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke={hovered === 0 ? '#23272e' : '#9ca3af'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: 'block', transition: 'stroke 0.15s' }}
        >
          <path d="M9 17H7A5 5 0 0 1 7 7h2"/>
          <path d="M15 7h2a5 5 0 1 1 0 10h-2"/>
          <line x1="8" x2="16" y1="12" y2="12"/>
        </svg>
        {/* Tooltip */}
        {hovered === 0 && (
          <div
            style={{
              position: 'absolute',
              left: 44,
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#23272e',
              color: '#fff',
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 8,
              padding: '4px 14px',
              whiteSpace: 'nowrap',
              zIndex: 2000,
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              pointerEvents: 'none',
            }}
          >
            REST
            {/* Arrow */}
            <div
              style={{
                position: 'absolute',
                left: -8,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderRight: '8px solid #23272e',
              }}
            />
          </div>
        )}
      </div>
      {/* Second icon */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          marginBottom: 11,
          cursor: 'pointer',
          position: 'relative',
          background: hovered === 1 ? '#f3f4f6' : 'transparent',
          borderLeft: active === 1 ? '4px solid #6366f1' : '4px solid transparent',
        }}
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setActive(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke={hovered === 1 ? '#23272e' : '#9ca3af'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: 'block', transition: 'stroke 0.15s' }}
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
        </svg>
        {/* Tooltip for second icon */}
        {hovered === 1 && (
          <div
            style={{
              position: 'absolute',
              left: 44,
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#23272e',
              color: '#fff',
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 8,
              padding: '4px 14px',
              whiteSpace: 'nowrap',
              zIndex: 2000,
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              pointerEvents: 'none',
            }}
          >
            GraphQL
            {/* Arrow */}
            <div
              style={{
                position: 'absolute',
                left: -8,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderRight: '8px solid #23272e',
              }}
            />
          </div>
        )}
      </div>
      {/* Third icon */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          marginBottom: 11,
          cursor: 'pointer',
          position: 'relative',
          background: hovered === 2 ? '#f3f4f6' : 'transparent',
          borderLeft: active === 2 ? '4px solid #6366f1' : '4px solid transparent',
        }}
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setActive(2)}
      >
        <svg
          width="17"
          height="17"
          fill="none"
          stroke={hovered === 2 ? '#23272e' : '#9ca3af'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          style={{ display: 'block', transition: 'stroke 0.15s' }}
        >
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
        </svg>
        {/* Tooltip for third icon */}
        {hovered === 2 && (
          <div
            style={{
              position: 'absolute',
              left: 44,
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#23272e',
              color: '#fff',
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 8,
              padding: '4px 14px',
              whiteSpace: 'nowrap',
              zIndex: 2000,
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              pointerEvents: 'none',
            }}
          >
            Realtime
            {/* Arrow */}
            <div
              style={{
                position: 'absolute',
                left: -8,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderRight: '8px solid #23272e',
              }}
            />
          </div>
        )}
      </div>
      {/* Fourth icon */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          cursor: 'pointer',
          position: 'relative',
          background: hovered === 3 ? '#f3f4f6' : 'transparent',
          borderLeft: active === 3 ? '4px solid #6366f1' : '4px solid transparent',
        }}
        onMouseEnter={() => setHovered(3)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setActive(3)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke={hovered === 3 ? '#23272e' : '#9ca3af'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: 'block', transition: 'stroke 0.15s' }}
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        {/* Tooltip for fourth icon */}
        {hovered === 3 && (
          <div
            style={{
              position: 'absolute',
              left: 44,
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#23272e',
              color: '#fff',
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 8,
              padding: '4px 14px',
              whiteSpace: 'nowrap',
              zIndex: 2000,
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              pointerEvents: 'none',
            }}
          >
            Settings
            {/* Arrow */}
            <div
              style={{
                position: 'absolute',
                left: -8,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderRight: '8px solid #23272e',
              }}
            />
          </div>
        )}
      </div>
    </aside>
  );
} 