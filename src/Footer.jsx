import React, { useState } from "react";

export default function Footer() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null); // For right-side icon hover
  const [showShortcutsTooltip, setShowShortcutsTooltip] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null); // For help menu item hover
  const [showHorizontalTooltip, setShowHorizontalTooltip] = useState(false);
  const [showCollapseTooltip, setShowCollapseTooltip] = useState(false);

  // Menu items for the Help & feedback dropdown
  const helpMenuItems = [
    { key: 'doc', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
    ), label: "Documentation", shortcut: "D" },
    { key: 'shortcuts', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
    ), label: "Keyboard shortcuts", shortcut: "S" },
    { key: 'chat', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
    ), label: "Chat with us" },
    { key: 'whatsnew', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
    ), label: "What's new?" },
    { key: 'status', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
    ), label: "Status" },
    'divider',
    { key: 'github', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    ), label: "GitHub" },
    { key: 'twitter', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
    ), label: "Twitter" },
    { key: 'invite', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
    ), label: "Invite" },
    { key: 'terms', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ), label: "Terms and privacy" },
  ];

  return (
    <footer style={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100vw',
      background: '#fff',
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 13,
      color: '#6b7280',
      zIndex: 1000,
      padding: '0 8px',
      boxSizing: 'border-box',
    }}>
      {/* Border line 3px above the footer */}
      <div style={{
        position: 'absolute',
        top: -3,
        left: 0,
        width: '100%',
        height: 0,
        borderTop: '1px solid #e5e7eb',
        pointerEvents: 'none',
        zIndex: 2001 // Ensure border is above sidebars and control panel
      }} />
      {/* Left icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, position: 'relative' }}>
        {/* Sidebar icon 1 - replaced with panel-right icon */}
        <span
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative' }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Tooltip for first icon */}
          {showTooltip && (
            <div style={{
              position: 'absolute',
              bottom: '120%',
              left: -8,
              marginLeft: 0,
              background: '#23272e',
              color: '#fff',
              padding: '4px 12px',
              borderRadius: 6,
              fontSize: 13,
              whiteSpace: 'nowrap',
              zIndex: 3001, // Ensure tooltip is above sidebars and control panel
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
            }}>
              Expand sidebar
              {/* Arrow */}
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 13,
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #23272e',
              }} />
            </div>
          )}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>
        </span>
        {/* Sidebar icon 2 - replaced with shield-check icon */}
        <span
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative' }}
          onMouseEnter={() => setShowTooltip2(true)}
          onMouseLeave={() => setShowTooltip2(false)}
        >
          {/* Tooltip for second icon */}
          {showTooltip2 && (
            <div style={{
              position: 'absolute',
              bottom: '120%',
              left: -28,
              background: '#23272e',
              color: '#fff',
              padding: '4px 12px',
              borderRadius: 6,
              fontSize: 13,
              whiteSpace: 'nowrap',
              zIndex: 3001, // Ensure tooltip is above sidebars and control panel
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
            }}>
              Interceptor
              {/* Arrow */}
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 41,
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #23272e',
              }} />
            </div>
          )}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
        </span>
      </div>
      {/* Right icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        {/* Help & feedback */}
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: 13,
            color: showHelpMenu || hoveredIcon === 'help' ? '#23272e' : '#6b7280',
            fontWeight: 500,
            position: 'relative',
            transition: 'color 0.15s',
          }}
          onMouseEnter={() => setHoveredIcon('help')}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => setShowHelpMenu((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={showHelpMenu || hoveredIcon === 'help' ? '#23272e' : '#6b7280'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
          <span style={{ marginLeft: 5, fontWeight: 500, fontSize: 12, color: showHelpMenu || hoveredIcon === 'help' ? '#23272e' : '#6b7280', transition: 'color 0.15s' }}>Help & feedback</span>
          {/* Dropdown menu */}
          {showHelpMenu && (
            <div style={{
              position: 'absolute',
              bottom: 32,
              left: -12,
              minWidth: 250,
              background: '#fff',
              borderRadius: 8,
              boxShadow: '0 4px 24px 0 rgba(0,0,0,0.13)',
              padding: '8px 0 0 0',
              zIndex: 3001, // Ensure dropdown is above sidebars and control panel
              fontWeight: 400,
              fontSize: 14,
              color: '#23272e',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
            }}>
              {helpMenuItems.map((item, idx) =>
                item === 'divider' ? (
                  <div key={idx} style={{ borderTop: '1px solid #e5e7eb', margin: '8px 0' }} />
                ) : (
                  <div
                    key={item.key}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '5px 14px',
                      cursor: 'pointer',
                      transition: 'background 0.13s',
                      gap: 7,
                      color: hoveredMenuItem === item.key ? '#23272e' : '#6b7280',
                    }}
                    onMouseDown={e => e.preventDefault()} // Prevent focus loss
                    onClick={() => setShowHelpMenu(false)}
                    onMouseEnter={() => setHoveredMenuItem(item.key)}
                    onMouseLeave={() => setHoveredMenuItem(null)}
                  >
                    {React.cloneElement(item.icon, { stroke: hoveredMenuItem === item.key ? '#23272e' : '#6b7280' })}
                    <span style={{ flex: 1, color: hoveredMenuItem === item.key ? '#23272e' : '#6b7280' }}>{item.label}</span>
                    {item.shortcut && (
                      item.key === 'doc' || item.key === 'shortcuts' ? (
                        <span style={{
                          display: 'inline-block',
                          minWidth: 18,
                          height: 18,
                          lineHeight: '18px',
                          background: '#f3f4f6',
                          color: '#6b7280',
                          borderRadius: 4,
                          border: '1px solid #e5e7eb',
                          fontSize: 12,
                          fontWeight: 500,
                          textAlign: 'center',
                          marginLeft: 8,
                          boxSizing: 'border-box',
                          verticalAlign: 'middle',
                          userSelect: 'none',
                        }}>{item.shortcut}</span>
                      ) : (
                        <span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500, marginLeft: 8 }}>{item.shortcut}</span>
                      )
                    )}
                  </div>
                )
              )}
              <div style={{
                padding: '10px 16px 8px 16px',
                fontSize: 12,
                color: '#9ca3af',
                borderTop: '1px solid #e5e7eb',
                marginTop: 8,
              }}>
                Hoppscotch v2025.6.0
              </div>
            </div>
          )}
        </span>
        {/* Lightning bolt icon */}
        <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative' }}
          onMouseEnter={() => { setHoveredIcon('zap'); setShowShortcutsTooltip(true); }}
          onMouseLeave={() => { setHoveredIcon(null); setShowShortcutsTooltip(false); }}>
          {/* Shortcuts tooltip */}
          {showShortcutsTooltip && (
            <div style={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#23272e',
              color: '#fff',
              borderRadius: 6,
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.13)',
              padding: '5px 8px 3px 8px',
              zIndex: 3001, // Ensure tooltip is above sidebars and control panel
              minWidth: 56,
              textAlign: 'center',
              fontWeight: 500,
            }}>
              <div style={{ fontWeight: 700, fontSize: 11, marginBottom: 3 }}>Shortcuts</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <span style={{ background: '#444950', color: '#fff', borderRadius: 3, fontSize: 9, padding: '0 4px', fontWeight: 600, boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}>Ctrl</span>
                <span style={{ background: '#444950', color: '#fff', borderRadius: 3, fontSize: 9, padding: '0 4px', fontWeight: 600, boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}>/</span>
              </div>
              {/* Arrow */}
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #23272e',
              }} />
            </div>
          )}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={hoveredIcon === 'zap' ? '#23272e' : '#6b7280'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
        </span>
        {/* Share icon */}
        <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative' }}
          onMouseEnter={() => { setHoveredIcon('share'); setShowShareTooltip(true); }}
          onMouseLeave={() => { setHoveredIcon(null); setShowShareTooltip(false); }}>
          {/* Share tooltip */}
          {showShareTooltip && (
            <div style={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#23272e',
              color: '#fff',
              borderRadius: 6,
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.13)',
              padding: '5px 12px 3px 12px',
              zIndex: 3001, // Ensure tooltip is above sidebars and control panel
              minWidth: 40,
              textAlign: 'center',
              fontWeight: 700,
              fontSize: 13,
            }}>
              Share
              {/* Arrow */}
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #23272e',
              }} />
            </div>
          )}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={hoveredIcon === 'share' ? '#23272e' : '#6b7280'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
        </span>
        {/* Panel right icon */}
        <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative' }}
           onMouseEnter={() => setShowHorizontalTooltip(true)}
           onMouseLeave={() => setShowHorizontalTooltip(false)}>
           {/* Horizontal layout tooltip */}
           {showHorizontalTooltip && (
             <div style={{
               position: 'absolute',
               bottom: 20,
               left: '50%',
               transform: 'translateX(-50%)',
               background: '#23272e',
               color: '#fff',
               borderRadius: 6,
               boxShadow: '0 2px 8px 0 rgba(0,0,0,0.13)',
               padding: '5px 8px 3px 8px',
               zIndex: 3001, // Ensure tooltip is above sidebars and control panel
               minWidth: 56,
               textAlign: 'center',
               fontWeight: 700,
               fontSize: 11,
             }}>
               Horizontal layout
               {/* Arrow */}
               <div style={{
                 position: 'absolute',
                 top: '100%',
                 left: '50%',
                 transform: 'translateX(-50%)',
                 width: 0,
                 height: 0,
                 borderLeft: '6px solid transparent',
                 borderRight: '6px solid transparent',
                 borderTop: '6px solid #23272e',
               }} />
             </div>
           )}
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={showHorizontalTooltip ? '#23272e' : '#6b7280'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/></svg>
        </span>
        {/* Code icon */}
        <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative' }}
           onMouseEnter={() => { setHoveredIcon('panel-close'); setShowCollapseTooltip(true); }}
           onMouseLeave={() => { setHoveredIcon(null); setShowCollapseTooltip(false); }}>
           {/* Collapse sidebar tooltip */}
           {showCollapseTooltip && (
             <div style={{
               position: 'absolute',
               bottom: 20,
               left: 'auto',
               right: 0,
               background: '#23272e',
               color: '#fff',
               borderRadius: 6,
               boxShadow: '0 2px 8px 0 rgba(0,0,0,0.13)',
               padding: '5px 12px 3px 12px',
               zIndex: 3001, // Ensure tooltip is above sidebars and control panel
               minWidth: 56,
               textAlign: 'center',
               fontWeight: 700,
               fontSize: 11,
             }}>
               Collapse sidebar
               {/* Arrow */}
               <div style={{
                 position: 'absolute',
                 top: '100%',
                 left: 'calc(100% - 20px)',
                 transform: 'translateX(-50%)',
                 width: 0,
                 height: 0,
                 borderLeft: '6px solid transparent',
                 borderRight: '6px solid transparent',
                 borderTop: '6px solid #23272e',
               }} />
             </div>
           )}
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={hoveredIcon === 'panel-close' ? '#23272e' : '#6b7280'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg>
        </span>
      </div>
    </footer>
  );
} 