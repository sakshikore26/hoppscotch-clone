import React, { useRef, useState } from "react";

const HEADER_HEIGHT = 48;
const FOOTER_HEIGHT = 28;
const MIN_WIDTH = 240;
const MAX_WIDTH = 600;

const sidebarIcons = [
  // Folder
  <svg key="folder" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: 'auto' }}>
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
  </svg>,
  // Stack
  <svg key="stack" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>,
  // Clock
  <svg key="clock" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  // Share
  <svg key="share" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  // Code
  <svg key="code" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
];

export default function RightPanel({ width, setWidth, dragging, setDragging }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Mouse event handlers for drag-to-resize
  const onMouseDown = (e) => {
    dragging.current = true;
    document.body.style.cursor = 'ew-resize';
  };

  React.useEffect(() => {
    const onMouseMove = (e) => {
      if (!dragging.current) return;
      // Calculate new width from right edge
      const windowWidth = window.innerWidth;
      const newWidth = Math.min(
        Math.max(windowWidth - e.clientX, MIN_WIDTH),
        MAX_WIDTH
      );
      setWidth(newWidth);
    };
    const onMouseUp = () => {
      dragging.current = false;
      document.body.style.cursor = '';
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <aside
      style={{
        position: 'fixed',
        top: HEADER_HEIGHT,
        right: 0,
        height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)` ,
        width,
        background: '#fff',
        borderLeft: '1px solid #f3f4f6',
        zIndex: 10, // Always below the footer
        display: 'flex',
        flexDirection: 'row',
        transition: dragging.current ? 'none' : 'width 0.15s',
        minWidth: MIN_WIDTH,
        maxWidth: MAX_WIDTH,
        overflow: 'hidden',
      }}
    >
      {/* Sidebar inside right panel */}
      <div style={{
        width: 48,
        background: '#fff',
        borderRight: '1px solid #f3f4f6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 12,
        gap: 8,
        height: '100%',
        zIndex: 1,
        boxSizing: 'border-box',
        paddingRight: 20,
      }}>
        {sidebarIcons.map((icon, i) => (
          <div
            key={i}
            style={{
              width: '100%',
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: i === activeIndex ? '#f5f7ff' : 'transparent',
              borderLeft: i === activeIndex ? '3px solid #6366f1' : '3px solid transparent',
              borderRadius: i === activeIndex ? '0 8px 8px 0' : 0,
              cursor: 'pointer',
              transition: 'background 0.15s, border-color 0.15s',
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setActiveIndex(i)}
          >
            <span style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
              {icon}
            </span>
          </div>
        ))}
      </div>
      {/* Drag handle */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 8,
          height: '100%',
          cursor: 'ew-resize',
          zIndex: 11,
          background: 'transparent',
        }}
        onMouseDown={() => { setDragging(true); document.body.style.cursor = 'ew-resize'; }}
      >
        <div style={{
          width: 2,
          height: 40,
          background: '#e5e7eb',
          borderRadius: 2,
          margin: 'auto',
          marginTop: 'calc(50% - 20px)',
          opacity: 0.3,
        }} />
      </div>
      {/* Panel content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: 11, color: '#b0b0b0', padding: '0 36px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6, height: 32, minHeight: 32 }}>
          <span style={{ color: '#b0b0b0', fontWeight: 600 }}>Personal Workspace</span>
          <span style={{ color: '#b0b0b0', fontSize: 13, margin: '0 2px' }}>{'>'}</span>
          <span style={{ color: '#b0b0b0', fontWeight: 500 }}>Collections</span>
        </div>
        {/* Divider */}
        <div style={{ height: 1, background: '#f3f4f6', margin: '0 0 0 0', width: '100%' }} />
        {/* Search and actions row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 24px 0 24px' }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              flex: 1,
              background: '#f3f4f6',
              border: '1px solid #e5e7eb',
              borderRadius: 6,
              fontSize: 14,
              padding: '6px 12px',
              color: '#6b7280',
              outline: 'none',
              minWidth: 0,
            }}
          />
          <button style={{
            background: 'none',
            border: 'none',
            color: '#6366f1',
            fontWeight: 500,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: 6,
            transition: 'background 0.15s',
          }}>
            <span style={{ fontSize: 18, lineHeight: 1, marginRight: 2 }}>+</span> New
          </button>
          <span style={{ flex: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#b0b0b0', padding: 4, borderRadius: 6, transition: 'background 0.15s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
          </span>
          <span style={{ flex: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#b0b0b0', padding: 4, borderRadius: 6, transition: 'background 0.15s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12"/><path d="M8 11l4 4 4-4"/><path d="M4 21h16"/></svg>
          </span>
        </div>
        {/* Empty state */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 320 }}>
          {/* Illustration */}
          <div style={{ marginBottom: 12 }}>
            <svg width="80" height="56" viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="20" width="64" height="28" rx="4" fill="#F3F4F6" />
              <rect x="16" y="28" width="48" height="12" rx="2" fill="#E5E7EB" />
              <rect x="24" y="36" width="32" height="4" rx="2" fill="#F3F4F6" />
            </svg>
          </div>
          <div style={{ color: '#b0b0b0', fontWeight: 500, fontSize: 16, marginBottom: 6 }}>Collections are empty</div>
          <div style={{ color: '#b0b0b0', fontWeight: 400, fontSize: 14, marginBottom: 18 }}>Import or create a collection</div>
          <button style={{
            background: '#6366f1',
            color: '#fff',
            fontWeight: 600,
            fontSize: 15,
            border: 'none',
            borderRadius: 8,
            padding: '8px 32px',
            marginBottom: 10,
            cursor: 'pointer',
            boxShadow: '0 1px 2px rgba(99,102,241,0.08)',
            transition: 'background 0.15s',
          }}>Import</button>
          <button style={{
            background: '#fff',
            color: '#6366f1',
            fontWeight: 600,
            fontSize: 15,
            border: '1px solid #e5e7eb',
            borderRadius: 8,
            padding: '8px 32px',
            cursor: 'pointer',
            boxShadow: '0 1px 2px rgba(99,102,241,0.08)',
            transition: 'background 0.15s',
          }}>+ Add new</button>
        </div>
      </div>
    </aside>
  );
} 