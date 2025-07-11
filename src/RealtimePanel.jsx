import React, { useState } from 'react';

const tabs = [
  { label: 'WebSocket' },
  { label: 'SSE' },
  { label: 'Socket.IO' },
  { label: 'MQTT' },
];

const RealtimePanel = () => {
  const [url, setUrl] = useState('wss://echo-websocket.hoppscotch.io');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [jsonHovered, setJsonHovered] = useState(false);
  const [jsonDropdownOpen, setJsonDropdownOpen] = useState(false);
  const [jsonDropdownValue, setJsonDropdownValue] = useState('JSON');
  const [jsonDropdownHover, setJsonDropdownHover] = useState('');
  const [filePlusHovered, setFilePlusHovered] = useState(false);
  const [wandSparklesHovered, setWandSparklesHovered] = useState(false);

  // Close dropdown on outside click
  React.useEffect(() => {
    if (!jsonDropdownOpen) return;
    function handleClick(e) {
      if (!e.target.closest('.json-dropdown-trigger') && !e.target.closest('.json-dropdown-popup')) {
        setJsonDropdownOpen(false);
      }
    }
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [jsonDropdownOpen]);

  const tabOptions = [
    { label: 'Communication' },
    { label: 'Protocols' },
  ];
  const [activeMainTab, setActiveMainTab] = useState(0);

  return (
    <div style={{
      position: 'fixed',
      top: 48, // header height
      left: 48, // sidebar width
      right: 0,
      bottom: 28, // footer height
      background: '#fff',
      zIndex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      minWidth: 0,
    }}>
      {/* Tabs Row */}
      <div style={{ display: 'flex', alignItems: 'center', height: 40, borderBottom: '1.5px solid #f3f4f6', paddingLeft: 12, gap: 8 }}>
        {tabs.map((tab, idx) => {
          const isHovered = hoveredTab === idx;
          const isActive = activeTab === idx;
          const color = isHovered || isActive ? '#000' : '#6b7280';
          const iconColor = isHovered || isActive ? '#000' : '#9ca3af';
          return (
            <div
              key={tab.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                fontWeight: 500,
                fontSize: 12,
                color,
                borderBottom: isActive ? '2.5px solid #6366f1' : '2.5px solid transparent',
                padding: '0 12px',
                height: 40,
                cursor: 'pointer',
                background: 'none',
                transition: 'color 0.15s, border-bottom 0.15s',
              }}
              onMouseEnter={() => setHoveredTab(idx)}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => setActiveTab(idx)}
            >
              {/* Icon for each tab */}
              {tab.label === 'WebSocket' && (
                <svg style={{ marginRight: 6, marginTop: 1 }} width="14" height="14" viewBox="0 0 16 16" fill={iconColor}><path fill="currentColor" d="M1 2h4.257a2.5 2.5 0 0 1 1.768.732L9.293 5 5 9.293 3.732 8.025A2.5 2.5 0 0 1 3 6.257V4H2v2.257a3.5 3.5 0 0 0 1.025 2.475L5 10.707l1.25-1.25 2.396 2.397.708-.708L6.957 8.75 8.75 6.957l2.396 2.397.708-.708L9.457 6.25 10.707 5 7.732 2.025A3.5 3.5 0 0 0 5.257 1H1v1ZM10.646 2.354l2.622 2.62A2.5 2.5 0 0 1 14 6.744V12h1V6.743a3.5 3.5 0 0 0-1.025-2.475l-2.621-2.622-.707.708ZM4.268 13.975l-2.622-2.621.708-.708 2.62 2.622A2.5 2.5 0 0 0 6.744 14H15v1H6.743a3.5 3.5 0 0 1-2.475-1.025Z"></path></svg>
              )}
              {tab.label === 'SSE' && (
                <svg style={{ marginRight: 6, marginTop: 1 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10a7.31 7.31 0 0 0 10 10Zm5 5l3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3"/></svg>
              )}
              {tab.label === 'Socket.IO' && (
                <svg style={{ marginRight: 6, marginTop: 1 }} width="14" height="14" viewBox="0 0 16 16" fill={iconColor}><path fill="currentColor" fill-rule="evenodd" d="M9.277 2.084a.5.5 0 0 1 .185.607l-2.269 5.5a.5.5 0 0 1-.462.309H3.5a.5.5 0 0 1-.354-.854l5.5-5.5a.5.5 0 0 1 .631-.062ZM4.707 7.5h1.69l1.186-2.875L4.707 7.5Zm2.016 6.416a.5.5 0 0 1-.185-.607l2.269-5.5a.5.5 0 0 1 .462-.309H12.5a.5.5 0 0 1 .354.854l-5.5 5.5a.5.5 0 0 1-.631.062Zm4.57-5.416h-1.69l-1.186 2.875L11.293 8.5Z" clip-rule="evenodd"></path><path fill="currentColor" fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" clip-rule="evenodd"></path></svg>
              )}
              {tab.label === 'MQTT' && (
                <svg style={{ marginRight: 6, marginTop: 1 }} width="14" height="14" viewBox="0 0 16 16" fill={iconColor}><path fill="currentColor" fill-rule="evenodd" d="M10.133 1h4.409a.5.5 0 0 1 .5.5v4.422c0 .026-.035.033-.045.01l-.048-.112a9.095 9.095 0 0 0-4.825-4.776c-.023-.01-.016-.044.01-.044Zm-8.588.275h-.5v1h.5c7.027 0 12.229 5.199 12.229 12.226v.5h1v-.5c0-7.58-5.65-13.226-13.229-13.226Zm.034 4.22h-.5v1h.5c2.361 0 4.348.837 5.744 2.238 1.395 1.401 2.227 3.395 2.227 5.758v.5h1v-.5c0-2.604-.921-4.859-2.52-6.463-1.596-1.605-3.845-2.532-6.45-2.532Zm-.528 8.996v-4.423c0-.041.033-.074.074-.074a4.923 4.923 0 0 1 4.923 4.922.074.074 0 0 1-.074.074H1.551a.5.5 0 0 1-.5-.5Z" clip-rule="evenodd"></path></svg>
              )}
              {tab.label}
            </div>
          );
        })}
      </div>
      {/* URL Input Row */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '18px 0 18px 10px', gap: 16, width: '100%' }}>
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          style={{
            flex: 1,
            fontSize: 17,
            border: 'none',
            outline: 'none',
            background: '#f8fafc',
            borderRadius: 4, // less curved edges
            padding: '5px 16px',
            color: '#18181b',
            fontWeight: 500,
            transition: 'box-shadow 0.15s',
            marginLeft: 8,
          }}
        />
        <button
          style={{
            background: '#6366f1',
            color: '#fff',
            fontWeight: 500,
            fontSize: 17,
            border: 'none',
            borderRadius: 4, // less curved edges
            padding: '5px 32px',
            cursor: 'pointer',
            transition: 'background 0.15s',
            marginRight: 20,
          }}
        >
          Connect
        </button>
      </div>
      {/* New Section: Tab Bar, Message Row, Divider, Table Row, and Action Icons */}
      <div style={{ background: '#fff', display: 'flex', flexDirection: 'column', minHeight: 120 }}>
        {/* Tab Bar */}
        <div style={{ display: 'flex', alignItems: 'center', height: 38, borderBottom: '1.5px solid #f3f4f6', paddingLeft: 24, gap: 32 }}>
          {tabOptions.map((tab, idx) => (
            <div
              key={tab.label}
              onClick={() => setActiveMainTab(idx)}
              style={{
                color: activeMainTab === idx ? '#18181b' : '#a1a1aa',
                borderBottom: activeMainTab === idx ? '2.5px solid #6366f1' : '2.5px solid transparent',
                height: 38,
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: 13,
                transition: 'color 0.15s, border-bottom 0.15s',
              }}
            >
              {tab.label}
            </div>
          ))}
        </div>
        {/* Message Row and Table Row for Communication, Protocols box for Protocols */}
        {activeMainTab === 0 ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', height: 36, paddingLeft: 32, gap: 16, fontSize: 13, color: '#71717a', background: '#fff', borderBottom: '1.5px solid #f3f4f6' }}>
              <div style={{ minWidth: 60, color: '#a1a1aa', fontWeight: 'bold' }}>Message</div>
              <div
                className="json-dropdown-trigger"
                style={{ minWidth: 60, color: jsonHovered ? '#18181b' : '#71717a', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', position: 'relative' }}
                onMouseEnter={() => setJsonHovered(true)}
                onMouseLeave={() => setJsonHovered(false)}
                onClick={() => setJsonDropdownOpen((v) => !v)}
              >
                {jsonDropdownValue}
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke={jsonHovered ? '#18181b' : '#71717a'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {jsonDropdownOpen && (
                  <div className="json-dropdown-popup" style={{
                    position: 'absolute',
                    bottom: 'calc(100% + 10px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#fff',
                    borderRadius: 8,
                    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
                    padding: '10px 0 6px 0',
                    minWidth: 120,
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    fontSize: 16,
                    fontWeight: 500,
                  }}>
                    {/* Arrow */}
                    <div style={{
                      position: 'absolute',
                      left: '50%',
                      bottom: -8,
                      transform: 'translateX(-50%)',
                      width: 22,
                      height: 12,
                      pointerEvents: 'none',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                      <svg width="22" height="12" viewBox="0 0 22 12" fill="none"><path d="M11 12L0 0h22L11 12z" fill="#fff" stroke="#e5e7eb"/></svg>
                    </div>
                    {/* Options */}
                    <div
                      onClick={() => { setJsonDropdownValue('JSON'); setJsonDropdownOpen(false); }}
                      onMouseEnter={() => setJsonDropdownHover('JSON')}
                      onMouseLeave={() => setJsonDropdownHover('')}
                      style={{
                        padding: '8px 24px 6px 24px',
                        color: jsonDropdownHover === 'JSON' ? '#18181b' : '#71717a',
                        fontWeight: jsonDropdownValue === 'JSON' ? 700 : 500,
                        background: 'transparent',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 13,
                      }}
                    >
                      JSON
                      {jsonDropdownValue === 'JSON' && (
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ marginLeft: 8 }}><path d="M5 10.5l4 4 6-7.5" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      )}
                    </div>
                    <div
                      onClick={() => { setJsonDropdownValue('Raw'); setJsonDropdownOpen(false); }}
                      onMouseEnter={() => setJsonDropdownHover('Raw')}
                      onMouseLeave={() => setJsonDropdownHover('')}
                      style={{
                        padding: '6px 24px 8px 24px',
                        color: jsonDropdownHover === 'Raw' ? '#18181b' : '#71717a',
                        fontWeight: jsonDropdownValue === 'Raw' ? 700 : 500,
                        background: 'transparent',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 13,
                      }}
                    >
                      Raw
                      {jsonDropdownValue === 'Raw' && (
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ marginLeft: 8 }}><path d="M5 10.5l4 4 6-7.5" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div style={{ flex: 1 }} />
              {/* Action Icons Row - aligned right */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginRight: 24 }}>
                {/* Send (paper plane) */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ color: '#6366f1', fontWeight: 500, fontSize: 13, cursor: 'pointer' }}>Send</span>
                {/* Clear input (checkbox) */}
                <input type="checkbox" style={{ width: 14, height: 14, accentColor: '#6366f1' }} />
                <span style={{ color: '#71717a', fontWeight: 500, fontSize: 13, cursor: 'pointer' }}>Clear input</span>
                {/* Help (?) */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#a1a1aa" strokeWidth="2"/><path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 3-3 3" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="17" r="1" fill="#a1a1aa"/></svg>
                {/* Delete (trash) */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="14" rx="2" stroke="#a1a1aa" strokeWidth="2"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#a1a1aa" strokeWidth="2"/><path d="M10 11v6M14 11v6" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round"/></svg>
                {/* Wrap Text Icon (blue, small) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16-2 2 2 2"/><path d="M3 12h15a3 3 0 1 1 0 6h-4"/><path d="M3 18h7"/><path d="M3 6h18"/></svg>
                {/* Wand Sparkles Icon (hoverable, left of file-plus) */}
                <span
                  onMouseEnter={() => setWandSparklesHovered(true)}
                  onMouseLeave={() => setWandSparklesHovered(false)}
                  style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={wandSparklesHovered ? '#18181b' : '#a1a1aa'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>
                </span>
                {/* File Plus Icon (last, hoverable) */}
                <span
                  onMouseEnter={() => setFilePlusHovered(true)}
                  onMouseLeave={() => setFilePlusHovered(false)}
                  style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={filePlusHovered ? '#18181b' : '#a1a1aa'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M9 15h6"/><path d="M12 18v-6"/></svg>
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', height: 56, background: '#fff', fontSize: 14, borderBottom: '1.5px solid #f3f4f6' }}>
              <div style={{ width: 48, minWidth: 48, maxWidth: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', borderRight: '1.5px solid #f3f4f6', paddingTop: 12 }}>
                <div style={{ color: '#a1a1aa', fontWeight: 500, userSelect: 'none', fontSize: 13, marginBottom: 2 }}>1</div>
                {/* Red warning triangle removed */}
              </div>
              <div style={{ flex: 1, padding: '8px 12px' }}>
                <div style={{ width: '100%', height: 32, display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 13, color: '#a1a1aa', fontWeight: 'bold' }}>Message</span>
                </div>
              </div>
            </div>
          </>
        ) : activeMainTab === 1 ? (
          <>
            {/* Protocols tab content (existing) */}
            {/* ...existing code... */}
          </>
        ) : activeTab === 1 ? (
          <>
            {/* SSE tab content */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '18px 0 18px 10px', gap: 16, width: '100%' }}>
              <input
                type="text"
                value={url}
                onChange={e => setUrl(e.target.value)}
                style={{
                  flex: 1,
                  fontSize: 17,
                  border: 'none',
                  outline: 'none',
                  background: '#f8fafc',
                  borderRadius: 4,
                  padding: '5px 16px',
                  color: '#18181b',
                  fontWeight: 500,
                  marginLeft: 8,
                }}
              />
              <button
                style={{
                  background: '#6366f1',
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: 17,
                  border: 'none',
                  borderRadius: 4,
                  padding: '5px 32px',
                  cursor: 'pointer',
                  marginRight: 20,
                }}
              >
                Start
              </button>
            </div>
            {/* Table header row */}
            <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', borderRadius: 6, margin: '0 16px', height: 36, fontSize: 15, fontWeight: 500, color: '#a1a1aa', marginBottom: 8 }}>
              <div style={{ flex: 1, padding: '0 16px' }}>Event type</div>
              <div style={{ flex: 1, padding: '0 16px', color: '#18181b' }}>data</div>
            </div>
          </>
        ) : null}
        {/* Help/Shortcuts/Documentation section as in parameter tab */}
        <div style={{ color: '#a1a1aa', fontSize: 13, fontWeight: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginTop: 32 }}>
          <div style={{ textAlign: 'center', color: '#a1a1aa', fontSize: 12, fontWeight: 500, marginBottom: 8 }}>
            <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ display: 'inline-block', width: 170, textAlign: 'right' }}>Send Request</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: 12 }}>
                <kbd style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: 6, padding: '1px 4px', fontSize: 9, color: '#a1a1aa', marginLeft: 0 }}>Ctrl</kbd>
                <kbd style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: 6, padding: '1px 4px', fontSize: 9, color: '#a1a1aa', marginLeft: 4 }}>↵</kbd>
              </span>
            </div>
            <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ display: 'inline-block', width: 170, textAlign: 'right' }}>Keyboard shortcuts</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: 12 }}>
                <kbd style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: 6, padding: '1px 4px', fontSize: 9, color: '#a1a1aa', marginLeft: 0 }}>Ctrl</kbd>
                <kbd style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: 6, padding: '1px 4px', fontSize: 9, color: '#a1a1aa', marginLeft: 4 }}>/</kbd>
              </span>
            </div>
            <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ display: 'inline-block', width: 170, textAlign: 'right' }}>Search & command menu</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: 12 }}>
                <kbd style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: 6, padding: '1px 4px', fontSize: 9, color: '#a1a1aa', marginLeft: 0 }}>Ctrl</kbd>
                <kbd style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: 6, padding: '1px 4px', fontSize: 9, color: '#a1a1aa', marginLeft: 4 }}>K</kbd>
              </span>
            </div>
            <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ display: 'inline-block', width: 170, textAlign: 'right' }}>Help menu</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', width: 38, marginLeft: 12 }}>
                <kbd style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: 6, padding: '1px 4px', fontSize: 9, color: '#a1a1aa', marginLeft: 0, minWidth: 0, textAlign: 'center' }}>?</kbd>
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 0 }}>
              <button
                style={{
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 4,
                  padding: '8px 24px',
                  fontWeight: 400,
                  fontSize: 11,
                  color: '#6b7280',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  cursor: 'pointer',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
                  marginTop: 8,
                  transition: 'color 0.15s, border 0.15s',
                }}
              >
                Documentation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  <path d="m21 3-9 9" />
                  <path d="M15 3h6v6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimePanel; 