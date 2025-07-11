import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginModal from './LoginModal';
import CommandModal from './CommandModal';
import Footer from './Footer';
import Sidebar from './Sidebar';
import RightPanel from './RightPanel';
import Body from './Body';
import RequestPanel from './Body';
import React from 'react';
import GraphQLPanel from './GraphQLPanel';
import RealtimePanel from './RealtimePanel';
import SettingsPage from './SettingsPage';

function Header({ onLoginClick }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [searchHover, setSearchHover] = useState(false);
  const [saveHover, setSaveHover] = useState(false);
  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 24px",
      borderBottom: "1px solid #eee",
      background: "#fff",
      height: 48,
      minHeight: 48,
      boxSizing: "border-box"
    }}>
      <div style={{ fontWeight: 700, letterSpacing: 1, fontSize: 14 }}>HOPPSCOTCH</div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: 260, display: 'flex', alignItems: 'center' }}>
          {/* Search SVG icon */}
          <span style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: '#888' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search and commands"
            style={{
              width: "100%",
              padding: "6px 36px 6px 32px",
              borderRadius: 6,
              border: "1px solid #e5e7eb",
              background: searchHover ? "#e5e7eb" : "#f3f4f6",
              fontSize: 13,
              color: '#6b7280',
              transition: 'background 0.15s'
            }}
            onMouseEnter={() => setSearchHover(true)}
            onMouseLeave={() => setSearchHover(false)}
          />
          <span style={{
            position: "absolute",
            right: 36,
            top: 6,
            fontSize: 10,
            color: "#888",
            background: "#f3f4f6",
            borderRadius: 4,
            padding: "0 4px"
          }}>Ctrl K</span>
        </div>
        {/* Download and Life Buoy icons beside search bar */}
        <span style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 16 }}>
          {/* Download SVG icon */}
          <span
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onMouseEnter={() => setHoveredIcon('download')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={hoveredIcon === 'download' ? '#000' : '#b0b0b0'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
              <path d="M12 15V3" />
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="m7 10 5 5 5-5" />
            </svg>
          </span>
          {/* Life Buoy SVG icon */}
          <span
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onMouseEnter={() => setHoveredIcon('lifebuoy')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={hoveredIcon === 'lifebuoy' ? '#000' : '#b0b0b0'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
              <circle cx="12" cy="12" r="10" />
              <path d="m4.93 4.93 4.24 4.24" />
              <path d="m14.83 9.17 4.24-4.24" />
              <path d="m14.83 14.83 4.24 4.24" />
              <path d="m9.17 14.83-4.24 4.24" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </span>
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginLeft: 'auto' }}>
        <button
          style={{
            background: saveHover ? "#cceee4" : "#e6f9f0",
            color: saveHover ? "#10b981" : "#16a34a",
            border: "1px solid #bbf7d0",
            borderRadius: 6,
            padding: "4px 10px",
            fontWeight: 500,
            fontSize: 13,
            marginRight: 8,
            cursor: "pointer",
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'background 0.15s, color 0.15s'
          }}
          onMouseEnter={() => setSaveHover(true)}
          onMouseLeave={() => setSaveHover(false)}
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
              <path d="M12 13v8" />
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="m8 17 4-4 4 4" />
            </svg>
          </span>
          Save My Workspace
        </button>
        <button
          style={{
            background: "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "4px 14px",
            fontWeight: 500,
            fontSize: 13,
            cursor: "pointer"
          }}
          onClick={onLoginClick}
        >Login</button>
      </div>
    </header>
  );
}

function App() {
  const [count, setCount] = useState(0)
  const [loginOpen, setLoginOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(0);
  const [rightPanelWidth, setRightPanelWidth] = useState(340);
  const [dragging, setDragging] = useState(false);

  // Drag logic for right panel
  React.useEffect(() => {
    const onMouseMove = (e) => {
      if (!dragging) return;
      const windowWidth = window.innerWidth;
      const MIN_WIDTH = 240;
      const MAX_WIDTH = 600;
      const newWidth = Math.min(
        Math.max(windowWidth - e.clientX, MIN_WIDTH),
        MAX_WIDTH
      );
      setRightPanelWidth(newWidth);
    };
    const onMouseUp = () => {
      setDragging(false);
      document.body.style.cursor = '';
    };
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging]);

  return (
    <>
      <Header onLoginClick={() => setLoginOpen(true)} onSearchClick={() => setCommandOpen(true)} />
      <Sidebar active={sidebarActive} setActive={setSidebarActive} />
      {sidebarActive === 0 && (
        <>
          <RightPanel width={rightPanelWidth} setWidth={setRightPanelWidth} dragging={dragging} setDragging={setDragging} />
          <RequestPanelWrapper rightPanelWidth={rightPanelWidth} />
        </>
      )}
      {sidebarActive === 1 && (
        <>
          {/* Custom GraphQL right panel with drag handle */}
          <aside
            style={{
              position: 'fixed',
              top: 48,
              right: 0,
              height: 'calc(100vh - 48px - 28px)',
              width: rightPanelWidth,
              background: '#fff',
              borderLeft: '1px solid #f3f4f6',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'row',
              minWidth: 240,
              maxWidth: 600,
              overflow: 'hidden',
              transition: dragging ? 'none' : 'width 0.15s',
            }}
          >
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
            {/* GraphQL sidebar */}
            <div style={{ width: 48, background: '#fff', borderRight: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 12, gap: 26, height: '100%', zIndex: 1, boxSizing: 'border-box', paddingRight: 20 }}>
              {/* Book Open Icon (blue) */}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 14 }}><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
              {/* Box Icon (gray) */}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 14 }}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
              {/* Folder Icon (gray) */}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 14 }}><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
              {/* Clock Icon (gray) */}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 14 }}><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
      </div>
            {/* No schema found body */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 32, marginBottom: 0 }}>
              <img src="https://hoppscotch.io/images/states/light/pack.svg" alt="No schema found" width="48" height="48" style={{ marginBottom: 6 }} />
              <div style={{ color: '#a1a1aa', fontWeight: 500, fontSize: 10, textAlign: 'center' }}>No schema found</div>
      </div>
          </aside>
          <GraphQLPanel rightPanelWidth={rightPanelWidth} />
        </>
      )}
      {sidebarActive === 2 && (
        <RealtimePanel />
      )}
      {sidebarActive === 3 && (
        <SettingsPage />
      )}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <CommandModal open={commandOpen} onClose={() => setCommandOpen(false)} />
      <Footer />
    </>
  )
}

// Wrapper to position RequestPanel between header/footer/sidebar/rightpanel
function RequestPanelWrapper({ rightPanelWidth }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 48, // header height
        left: 48, // sidebar width
        right: rightPanelWidth,
        bottom: 28, // footer height
        zIndex: 1,
        background: 'transparent',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <RequestPanel />
    </div>
  );
}

export default App
