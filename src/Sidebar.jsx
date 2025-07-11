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
          aria-hidden="true"
          width="16"
          height="18"
          viewBox="0 0 21 24"
          style={{ display: 'block', transition: 'stroke 0.15s', color: hovered === 1 ? '#23272e' : '#9ca3af' }}
        >
          <path fill="currentColor" d="M12.731 2.751 17.666 5.6a2.138 2.138 0 1 1 2.07 3.548l-.015.003v5.7a2.14 2.14 0 1 1-2.098 3.502l-.002-.002-4.905 2.832a2.14 2.14 0 1 1-4.079.054l-.004.015-4.941-2.844a2.14 2.14 0 1 1-2.067-3.556l.015-.003V9.15a2.14 2.14 0 1 1 1.58-3.926l-.01-.005c.184.106.342.231.479.376l.001.001 4.938-2.85a2.14 2.14 0 1 1 4.096.021l.004-.015zm-.515.877a.766.766 0 0 1-.057.057l-.001.001 6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.14 2.14 0 0 1-1.555-2.603l-.003.015.019-.072zm-3.015.059-.06-.06-4.946 2.852A2.137 2.137 0 0 1 2.749 9.12l-.015.004-.076.021v5.708l.084.023 6.461-11.19zm2.076.507a2.164 2.164 0 0 1-1.207-.004l.015.004-6.46 11.189c.286.276.496.629.597 1.026l.003.015h12.911c.102-.413.313-.768.599-1.043l.001-.001L11.28 4.194zm.986 16.227 4.917-2.838a1.748 1.748 0 0 1-.038-.142H4.222l-.021.083 4.939 2.852c.39-.403.936-.653 1.54-.653.626 0 1.189.268 1.581.696l.001.002z"></path>
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