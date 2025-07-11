import React, { useState, useEffect, useRef } from "react";
import styles from "./RequestPanel.module.css";

const HTTP_METHODS = [
  { name: "GET", color: "#22c55e" },
  { name: "POST", color: "#f59e42" },
  { name: "PUT", color: "#3b82f6" },
  { name: "PATCH", color: "#a78bfa" },
  { name: "DELETE", color: "#ef4444" },
  { name: "HEAD", color: "#84cc16" },
  { name: "OPTIONS", color: "#ec4899" },
  { name: "CONNECT", color: "#6b7280" },
  { name: "TRACE", color: "#6b7280" },
  { name: "CUSTOM", color: "#6b7280" },
];

function RequestTabsBar({
  tabs,
  activeTabId,
  setActiveTabId,
  addTab,
  removeTab,
  setTabMethod,
  setTabTitle,
  editingTabId,
  setEditingTabId,
  onEnvClick,
  envPopupOpen,
  envBoxRef,
  envPopupRef,
  eyePopupOpen,
  setEyePopupOpen,
  eyeIconRef,
  eyePopupRef,
}) {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    if (editingTabId && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingTabId]);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', borderBottom: '1.5px solid #f3f4f6', background: '#fafbfc', minHeight: 44, marginBottom: 12 }}>
      {tabs.map((tab, idx) => (
        <div
          key={tab.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: activeTabId === tab.id ? '#fff' : '#fafbfc',
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            border: activeTabId === tab.id ? '1.5px solid #e5e7eb' : '1.5px solid transparent',
            borderBottom: activeTabId === tab.id ? '2.5px solid #2563eb' : '1.5px solid transparent',
            marginRight: 2,
            minWidth: 120,
            minHeight: 44,
            padding: '0 18px 0 10px',
            position: 'relative',
            fontWeight: activeTabId === tab.id ? 700 : 500,
            color: activeTabId === tab.id ? '#18181b' : '#6b7280',
            cursor: 'pointer',
            boxShadow: activeTabId === tab.id ? '0 2px 8px rgba(0,0,0,0.03)' : 'none',
          }}
          onClick={() => setActiveTabId(tab.id)}
        >
          <span style={{ color: '#22c55e', fontWeight: 700, fontSize: 13, marginRight: 6 }}>{tab.method}</span>
          {editingTabId === tab.id && activeTabId === tab.id ? (
            <input
              ref={inputRef}
              value={tab.title}
              onChange={e => setTabTitle(tab.id, e.target.value)}
              onBlur={() => setEditingTabId(null)}
              onKeyDown={e => {
                if (e.key === 'Enter') setEditingTabId(null);
              }}
              style={{ fontWeight: 700, fontSize: 15, border: '1px solid #e5e7eb', borderRadius: 4, padding: '2px 6px', minWidth: 60 }}
            />
          ) : (
            <span
              style={{ fontWeight: activeTabId === tab.id ? 700 : 500, fontSize: 15 }}
              onClick={e => {
                e.stopPropagation();
                if (activeTabId === tab.id) setEditingTabId(tab.id);
              }}
            >
              {tab.title}
          </span>
          )}
          {tabs.length > 1 && (
            <span
              style={{ marginLeft: 12, color: '#a1a1aa', fontSize: 18, cursor: 'pointer' }}
              onClick={e => {
                e.stopPropagation();
                removeTab(tab.id);
              }}
            >
              ×
          </span>
          )}
        </div>
      ))}
      {/* Plus icon */}
      <div
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, cursor: 'pointer', background: '#fafbfc', borderRadius: 6, marginLeft: 2, fontSize: 22, color: '#222', border: '1.5px solid #f3f4f6',
        }}
        onClick={addTab}
      >
        +
        </div>
    </div>
  );
}

function RequestBar({ method, setMethod }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className={styles.requestBarRow}>
      <div className={styles.requestBarInputGroup}>
        <div style={{ position: 'relative' }}>
          <button
            className={styles.methodDropdown}
            style={{ color: HTTP_METHODS.find(m => m.name === method)?.color }}
            onClick={() => setDropdownOpen(v => !v)}
          >
            <span>{method}</span>
            <span className={styles.methodDropdownArrow}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </button>
          {dropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: 40,
                left: 0,
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 10,
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                zIndex: 10,
                minWidth: 140,
                padding: '8px 0',
                marginTop: 2,
              }}
            >
              {HTTP_METHODS.map((m) => (
                <div
                  key={m.name}
                  style={{
                    color: m.color,
                    fontWeight: 700,
                    fontSize: 15,
                    padding: '8px 24px',
                    cursor: 'pointer',
                    background: m.name === method ? '#f3f4f6' : 'transparent',
                    fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace',
                  }}
                  onClick={() => {
                    setMethod(m.name);
                    setDropdownOpen(false);
                  }}
                >
                  {m.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <input
          className={styles.urlInput}
          defaultValue="https://echo.hoppscotch.io"
        />
      </div>
      <div className={styles.requestBarActions}>
        <button className={styles.sendBtn}>
          Send
          <span className={styles.sendChevron}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
          </span>
        </button>
        <button className={styles.saveBtn}>
          <span className={styles.saveIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-save-icon lucide-save"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
          </span>
          <span className={styles.saveText}>Save</span>
          <span className={styles.saveChevron}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
          </span>
        </button>
      </div>
    </div>
  );
}

function RequestTabs() {
  return (
    <div className={styles.requestTabs}>
      <div style={{ display: 'flex', flex: 1 }}>
        <div className={styles.requestTabActive}>Parameters</div>
        <div className={styles.requestTab}>Body</div>
        <div className={styles.requestTab}>Headers</div>
        <div className={styles.requestTab}>Authorization</div>
        <div className={styles.requestTab}>Pre-request Script</div>
        <div className={styles.requestTab}>Post-request Script</div>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <div className={styles.requestTab}>Variables</div>
      </div>
    </div>
  );
}

function QueryParamsTable({ boxHeight, setBoxHeight }) {
  const [isDragging, setIsDragging] = useState(false);
  const resizerRef = React.useRef(null);

  React.useEffect(() => {
    function onMouseMove(e) {
      if (!isDragging) return;
      const box = resizerRef.current.parentElement;
      const boxRect = box.getBoundingClientRect();
      const newHeight = Math.max(40, e.clientY - boxRect.top);
      setBoxHeight(newHeight);
    }
    function onMouseUp() {
      setIsDragging(false);
    }
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, setBoxHeight]);

  return (
    <div className={styles.queryParamsOuterBox}>
      <div className={styles.queryParamsHeaderRow}>
        <span className={styles.queryParamsTitle}>Query Parameters</span>
        <span className={styles.queryParamsIcons}>
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></span>
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></span>
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg></span>
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></span>
        </span>
      </div>
      <div className={styles.queryParamsDivider} />
      <div className={styles.queryParamsRowExact}>
        <div className={styles.qpExactCellEmpty}></div>
        <div className={styles.qpExactCellKey}>Key</div>
        <div className={styles.qpExactCellValue}>Value</div>
        <div className={styles.qpExactCellDesc}>Description</div>
        <div className={styles.qpExactCellIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
        </div>
        <div className={styles.qpExactCellIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </div>
      </div>
      <div
        className={styles.queryParamsWhiteBox}
        style={{ height: boxHeight }}
      >
        <div
          ref={resizerRef}
          className={isDragging ? styles.resizerActive : styles.resizer}
          onMouseDown={() => setIsDragging(true)}
        />
      </div>
    </div>
  );
}

export function HeaderListTable({ boxHeight, setBoxHeight }) {
  const [isDragging, setIsDragging] = useState(false);
  const resizerRef = React.useRef(null);

  React.useEffect(() => {
    function onMouseMove(e) {
      if (!isDragging) return;
      const box = resizerRef.current.parentElement;
      const boxRect = box.getBoundingClientRect();
      const newHeight = Math.max(40, e.clientY - boxRect.top);
      setBoxHeight(newHeight);
    }
    function onMouseUp() {
      setIsDragging(false);
    }
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, setBoxHeight]);

  return (
    <div className={styles.queryParamsOuterBox}>
      <div className={styles.queryParamsHeaderRow}>
        <span className={styles.queryParamsTitle}>Header List</span>
        <span className={styles.queryParamsIcons}>
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></span>
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></span>
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg></span>
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></span>
        </span>
      </div>
      <div className={styles.queryParamsDivider} />
      <div className={styles.queryParamsRowExact}>
        <div className={styles.qpExactCellEmpty}></div>
        <div className={styles.qpExactCellKey}>Key</div>
        <div className={styles.qpExactCellValue}>Value</div>
        <div className={styles.qpExactCellDesc}>Description</div>
        <div className={styles.qpExactCellIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
        </div>
        <div className={styles.qpExactCellIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </div>
      </div>
      <div
        className={styles.queryParamsWhiteBox}
        style={{ height: boxHeight }}
      >
        <div
          ref={resizerRef}
          className={isDragging ? styles.resizerActive : styles.resizer}
          onMouseDown={() => setIsDragging(true)}
        />
      </div>
    </div>
  );
}

export function AuthorizationBox({ boxHeight, setBoxHeight }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragY, setDragY] = useState(null);
  const containerRef = React.useRef(null);
  const [authType, setAuthType] = useState('Inherit');
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    function onMouseUp() {
      setIsDragging(false);
      setDragY(null);
    }
    function onMouseMove(e) {
      if (isDragging && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDragY(e.clientY - rect.top);
      }
    }
    if (isDragging) {
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('mousemove', onMouseMove);
    }
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDragging]);

  return (
    <div ref={containerRef} style={{
      width: '100%',
      background: '#fff',
      borderLeft: '1px solid #f3f4f6',
      borderRight: '1px solid #f3f4f6',
      borderBottom: '1px solid #f3f4f6',
      borderRadius: 4,
      minHeight: 120,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      marginTop: 12,
      marginBottom: 12,
      padding: 0,
      position: 'relative',
    }}>
      {/* Top row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        height: 44,
        borderBottom: '1px solid #f3f4f6',
        fontSize: 13,
        color: '#a1a1aa',
        fontWeight: 600,
        background: '#fff',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      }}>
        <span style={{ marginRight: 16 }}>Authorization Type</span>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginRight: 16 }}>
          <select
            value={authType}
            onChange={e => setAuthType(e.target.value)}
            style={{
              background: 'none',
              border: 'none',
              color: '#a1a1aa',
              fontWeight: 600,
              fontSize: 13,
              outline: 'none',
              cursor: 'pointer',
              minWidth: 60,
              appearance: 'none',
              paddingRight: 18,
              transition: 'color 0.15s',
            }}
            onMouseOver={e => e.target.style.color = '#18181b'}
            onMouseOut={e => e.target.style.color = '#a1a1aa'}
          >
            <option value="Inherit">Inherit</option>
            <option value="Bearer">Bearer</option>
            <option value="Basic">Basic</option>
          </select>
          <span style={{
            position: 'absolute',
            right: 4,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            top: '50%',
            transform: 'translateY(-50%)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 500, fontSize: 11, color: '#a1a1aa', cursor: 'pointer', transition: 'color 0.15s' }}
            onMouseOver={e => e.currentTarget.style.color = '#18181b'}
            onMouseOut={e => e.currentTarget.style.color = '#a1a1aa'}
          >
            <input type="checkbox" checked={enabled} onChange={e => setEnabled(e.target.checked)} style={{ accentColor: '#6366f1', width: 13, height: 13, marginRight: 4 }} />
            Enabled
          </label>
          <span style={{ color: '#a1a1aa', cursor: 'pointer' }} title="Help">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
          </span>
          <span style={{ color: '#a1a1aa', cursor: 'pointer' }} title="Delete">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </span>
        </div>
      </div>
      {/* Info row */}
      <div style={{ display: 'flex', borderBottom: '1px solid #f3f4f6', background: '#fff' }}>
        <div style={{ flex: 1, padding: '16px 16px 16px 16px', color: '#a1a1aa', fontSize: 13, fontWeight: 500 }}>
          Please save this request in any collection to inherit the authorization
        </div>
        <div style={{ flex: 1, padding: '16px 16px 16px 0', color: '#a1a1aa', fontSize: 13, fontWeight: 500, borderLeft: '1px solid #f3f4f6' }}>
          The authorization header will be automatically generated when you send the request.<br />
          <a href="#" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 600, fontSize: 13, marginTop: 4, display: 'inline-block' }}>
            Learn how <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2, verticalAlign: 'middle' }}><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
          </a>
        </div>
      </div>
      {/* Draggable divider line */}
      <div
        style={{
          width: '100%',
          height: 1,
          background: isDragging ? '#6366f1' : '#f3f4f6',
          margin: 0,
          cursor: 'row-resize',
          position: 'relative',
          zIndex: 1,
        }}
        onMouseDown={e => {
          setIsDragging(true);
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setDragY(e.clientY - rect.top);
          }
        }}
      />
      {/* Show the blue line only while dragging */}
      {isDragging && dragY !== null && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: 2,
            background: '#6366f1',
            top: dragY,
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
}

function PreRequestScriptTable({ boxHeight, setBoxHeight }) {
  const [isDragging, setIsDragging] = useState(false);
  const resizerRef = React.useRef(null);
  const [code, setCode] = useState('');

  useEffect(() => {
    function onMouseMove(e) {
      if (!isDragging) return;
      const box = resizerRef.current.parentElement;
      const boxRect = box.getBoundingClientRect();
      const newHeight = Math.max(40, e.clientY - boxRect.top);
      setBoxHeight(newHeight);
    }
    function onMouseUp() {
      setIsDragging(false);
    }
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, setBoxHeight]);

  return (
    <div className={styles.queryParamsOuterBox}>
      {/* First row: header with title and icons */}
      <div className={styles.queryParamsHeaderRow}>
        <span className={styles.queryParamsTitle}>JavaScript Code</span>
        <span className={styles.queryParamsIcons}>
          {/* Help icon */}
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></span>
          {/* Trash icon */}
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></span>
          {/* Settings icon */}
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 8 4.6V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09c.31.05.62.15.91.33a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c.18.29.28.6.33.91H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></span>
          {/* Fourth icon (custom, e.g. filter) */}
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/></svg></span>
        </span>
      </div>
      <div style={{ width: '100%', height: 1, background: '#f3f4f6', margin: 0, padding: 0 }} />
      {/* Second row: code editor and info box */}
      <div style={{ display: 'flex', borderBottom: '1px solid #f3f4f6', background: '#fff' }}>
        <div style={{ flex: 2, display: 'flex', alignItems: 'stretch', minHeight: 80, position: 'relative' }}>
          <div style={{ background: 'transparent', color: '#d1d5db', fontSize: 12, fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace', padding: '8px 4px 8px 8px', userSelect: 'none', minWidth: 24, textAlign: 'right', borderRight: '1px solid #f3f4f6', height: '100%' }}>1</div>
          <div style={{ position: 'relative', flex: 1 }}>
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: 12,
                fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace',
                color: '#18181b',
                padding: '8px',
                minHeight: 80,
                resize: 'none',
                fontWeight: 400,
              }}
            />
            {code === '' && (
              <span style={{
                position: 'absolute',
                left: 8,
                top: 8,
                color: '#a1a1aa',
                fontWeight: 700,
                fontSize: 12,
                pointerEvents: 'none',
                fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace',
              }}>
                JavaScript Code
              </span>
            )}
          </div>
        </div>
        <div style={{ flex: 1, borderLeft: '1px solid #f3f4f6', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', minWidth: 220 }}>
          <div style={{ color: '#a1a1aa', fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
            Pre-request scripts are written in JavaScript, and are run before the request is sent.
          </div>
          <a href="#" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 600, fontSize: 13, marginTop: 4, display: 'inline-block' }}>
            Read documentation <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2, verticalAlign: 'middle' }}><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
          </a>
        </div>
      </div>
      {/* Draggable divider line */}
      <div
        ref={resizerRef}
        className={isDragging ? styles.resizerActive : styles.resizer}
        onMouseDown={() => setIsDragging(true)}
      />
    </div>
  );
}

function PostRequestScriptTable({ boxHeight, setBoxHeight }) {
  const [isDragging, setIsDragging] = useState(false);
  const resizerRef = useRef(null);
  const [code, setCode] = useState('');

  useEffect(() => {
    function onMouseMove(e) {
      if (!isDragging) return;
      const box = resizerRef.current.parentElement;
      const boxRect = box.getBoundingClientRect();
      const newHeight = Math.max(40, e.clientY - boxRect.top);
      setBoxHeight(newHeight);
    }
    function onMouseUp() {
      setIsDragging(false);
    }
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, setBoxHeight]);

  return (
    <div className={styles.queryParamsOuterBox}>
      {/* First row: header with title and icons */}
      <div className={styles.queryParamsHeaderRow}>
        <span className={styles.queryParamsTitle}>JavaScript Code</span>
        <span className={styles.queryParamsIcons}>
          {/* Help icon */}
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></span>
          {/* Trash icon */}
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></span>
          {/* Settings icon */}
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 8 4.6V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09c.31.05.62.15.91.33a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c.18.29.28.6.33.91H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></span>
          {/* Fourth icon (custom, e.g. filter) */}
          <span className={styles.qpIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/></svg></span>
        </span>
      </div>
      <div style={{ width: '100%', height: 1, background: '#f3f4f6', margin: 0, padding: 0 }} />
      {/* Second row: code editor and info box */}
      <div style={{ display: 'flex', borderBottom: '1px solid #f3f4f6', background: '#fff' }}>
        <div style={{ flex: 2, display: 'flex', alignItems: 'stretch', minHeight: 80, position: 'relative' }}>
          <div style={{ background: 'transparent', color: '#d1d5db', fontSize: 12, fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace', padding: '8px 4px 8px 8px', userSelect: 'none', minWidth: 24, textAlign: 'right', borderRight: '1px solid #f3f4f6', height: '100%' }}>1</div>
          <div style={{ position: 'relative', flex: 1 }}>
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: 12,
                fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace',
                color: '#a1a1aa',
                padding: '8px',
                minHeight: 80,
                resize: 'none',
              }}
            />
            {code === '' && (
              <span style={{
                position: 'absolute',
                left: 8,
                top: 8,
                color: '#a1a1aa',
                fontWeight: 700,
                fontSize: 12,
                pointerEvents: 'none',
                fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace',
              }}>
                JavaScript Code
              </span>
            )}
          </div>
        </div>
        <div style={{ flex: 1, borderLeft: '1px solid #f3f4f6', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', minWidth: 220 }}>
          <div style={{ color: '#a1a1aa', fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
            Post-request scripts are written in JavaScript, and are run after the response is received.
          </div>
          <a href="#" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 600, fontSize: 13, marginTop: 4, display: 'inline-block' }}>
            Read documentation <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2, verticalAlign: 'middle' }}><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
          </a>
        </div>
      </div>
      {/* Draggable divider line */}
      <div
        ref={resizerRef}
        className={isDragging ? styles.resizerActive : styles.resizer}
        onMouseDown={() => setIsDragging(true)}
      />
    </div>
  );
}

function BodyContent() {
  return (
    <div style={{
      width: '100%',
      background: '#fff',
      borderLeft: '1px solid #f3f4f6',
      borderRight: '1px solid #f3f4f6',
      borderBottom: '1px solid #f3f4f6',
      borderRadius: 4,
      minHeight: 120,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 12,
      marginBottom: 12,
      padding: 32,
    }}>
      <img src="https://hoppscotch.io/images/states/light/upload_single_file.svg" width={59} height={59} alt="Upload file icon" style={{ marginBottom: 8 }} />
      <div style={{ color: '#a1a1aa', fontSize: 11, fontWeight: 700, marginTop: 2, marginBottom: 16 }}>This request does not have a body</div>
      <button
        style={{
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: 6,
          padding: '8px 24px',
          fontWeight: 600,
          fontSize: 13,
          color: '#6b7280',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          cursor: 'pointer',
          boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
          marginTop: 0,
          transition: 'color 0.15s, border-color 0.15s',
        }}
        onMouseOver={e => {
          e.currentTarget.style.color = '#18181b';
          e.currentTarget.style.borderColor = '#a1a1aa';
          const svg = e.currentTarget.querySelector('svg');
          if (svg) svg.style.stroke = '#18181b';
        }}
        onMouseOut={e => {
          e.currentTarget.style.color = '#6b7280';
          e.currentTarget.style.borderColor = '#e5e7eb';
          const svg = e.currentTarget.querySelector('svg');
          if (svg) svg.style.stroke = 'currentColor';
        }}
      >
        Documentation
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
      </button>
    </div>
  );
}

export default function RequestPanel() {
  const [method, setMethod] = useState("GET");
  const [boxHeight, setBoxHeight] = useState(60); // Sync with QueryParamsTable
  const [docHover, setDocHover] = React.useState(false);
  const [activeTab, setActiveTab] = useState('Parameters');
  const [contentType, setContentType] = useState('None');
  const [override, setOverride] = useState(false);
  const [envPopupOpen, setEnvPopupOpen] = useState(false);
  const envBoxRef = React.useRef(null);
  const envPopupRef = React.useRef(null);
  // Eye popup state and refs
  const [eyePopupOpen, setEyePopupOpen] = useState(false);
  const eyeIconRef = React.useRef(null);
  const eyePopupRef = React.useRef(null);
  // Tab system state
  const [tabs, setTabs] = useState([
    { id: 1, method: 'GET', title: 'Untitled' },
  ]);
  const [activeTabId, setActiveTabId] = useState(1);
  const [editingTabId, setEditingTabId] = useState(null);
  const [envHover, setEnvHover] = useState(false);

  // Close popups when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        envBoxRef.current &&
        !envBoxRef.current.contains(event.target) &&
        envPopupRef.current &&
        !envPopupRef.current.contains(event.target)
      ) {
        setEnvPopupOpen(false);
      }
      if (
        eyeIconRef.current &&
        !eyeIconRef.current.contains(event.target) &&
        eyePopupRef.current &&
        !eyePopupRef.current.contains(event.target)
      ) {
        setEyePopupOpen(false);
      }
    }
    if (envPopupOpen || eyePopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [envPopupOpen, eyePopupOpen]);

  // Position the eye popup below the eye icon
  React.useLayoutEffect(() => {
    if (eyePopupOpen && eyeIconRef.current && eyePopupRef.current) {
      const popup = eyePopupRef.current;
      const iconBox = eyeIconRef.current.getBoundingClientRect();
      const popupWidth = 370;
      let left = 0;
      // Try to align right edge of popup with right edge of icon, but keep in viewport
      left = iconBox.right - popupWidth;
      if (left < 8) left = 8;
      popup.style.left = `${left}px`;
      popup.style.top = `${iconBox.bottom + 8}px`;
    }
  }, [eyePopupOpen]);

  // Add tab
  const addTab = () => {
    const newId = tabs.length ? Math.max(...tabs.map(t => t.id)) + 1 : 1;
    setTabs([...tabs, { id: newId, method: 'GET', title: 'Untitled' }]);
    setActiveTabId(newId);
  };
  // Remove tab
  const removeTab = (id) => {
    let idx = tabs.findIndex(t => t.id === id);
    let newTabs = tabs.filter(t => t.id !== id);
    if (newTabs.length === 0) {
      newTabs = [{ id: 1, method: 'GET', title: 'Untitled' }];
      setActiveTabId(1);
    } else if (activeTabId === id) {
      setActiveTabId(newTabs[Math.max(0, idx - 1)].id);
    }
    setTabs(newTabs);
  };
  // Set method for active tab
  const setTabMethod = (method) => {
    setTabs(tabs => tabs.map(tab => tab.id === activeTabId ? { ...tab, method } : tab));
  };
  // Set title for a tab
  const setTabTitle = (id, title) => {
    setTabs(tabs => tabs.map(tab => tab.id === id ? { ...tab, title } : tab));
  };

  return (
    <div className={styles.panel}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fafbfc', minHeight: 44, borderBottom: '1.5px solid #f3f4f6', padding: '0 16px', position: 'relative' }}>
        {/* Left: Tabs, etc. (existing content) */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RequestTabsBar
            tabs={tabs}
            activeTabId={activeTabId}
            setActiveTabId={setActiveTabId}
            addTab={addTab}
            removeTab={removeTab}
            setTabMethod={setTabMethod}
            setTabTitle={setTabTitle}
            editingTabId={editingTabId}
            setEditingTabId={setEditingTabId}
            onEnvClick={() => setEnvPopupOpen(v => !v)}
            envPopupOpen={envPopupOpen}
            envBoxRef={envBoxRef}
            envPopupRef={envPopupRef}
            eyePopupOpen={eyePopupOpen}
            setEyePopupOpen={setEyePopupOpen}
            eyeIconRef={eyeIconRef}
            eyePopupRef={eyePopupRef}
          />
        </div>
        {/* Right: Environment selector and eye icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Layers icon (small, left of Select environment) */}
          <span style={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={envHover ? '#23272e' : '#a1a1aa'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>
          </span>
          {/* Select environment tab (no box) */}
          <div
            ref={envBoxRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: 13,
              color: envHover ? '#23272e' : '#a1a1aa',
              background: 'none',
              border: 'none',
              borderRadius: 0,
              padding: '0 4px',
              marginRight: 2,
              position: 'relative',
              boxShadow: 'none',
              zIndex: envPopupOpen ? 3002 : 'auto',
              transition: 'color 0.15s',
            }}
            onClick={() => setEnvPopupOpen(v => !v)}
            onMouseEnter={() => setEnvHover(true)}
            onMouseLeave={() => setEnvHover(false)}
          >
            <span style={{ marginRight: 6 }}>Select environment</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
          {/* Environment popup */}
          {envPopupOpen && (
            <div
              ref={envPopupRef}
              style={{
                position: 'absolute',
                top: 44,
                right: 60,
                minWidth: 370,
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 10,
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.13)',
                zIndex: 3002,
                padding: '0',
              }}
            >
              {/* Search bar */}
              <div style={{ padding: '16px 16px 0 16px', borderBottom: '1px solid #f3f4f6' }}>
                <input type="text" placeholder="Search" style={{ width: '100%', padding: '7px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 14, color: '#6b7280', background: '#fff', boxSizing: 'border-box' }} />
              </div>
              {/* No environment row */}
              <div style={{ display: 'flex', alignItems: 'center', fontSize: 15, color: '#6b7280', fontWeight: 500, padding: '14px 16px 0 16px', cursor: 'pointer', justifyContent: 'space-between' }}>
                <span>No environment</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              {/* Tabs */}
              <div style={{ display: 'flex', borderBottom: '1.5px solid #f3f4f6', marginTop: 16 }}>
                <div style={{ flex: 1, textAlign: 'center', fontWeight: 700, fontSize: 12, padding: '10px 0', borderBottom: '2.5px solid #23272e', color: '#23272e', background: '#f8fafc', cursor: 'pointer', borderTopLeftRadius: 8 }}>Personal Environments</div>
                <div style={{ flex: 1, textAlign: 'center', fontWeight: 700, fontSize: 12, padding: '10px 0', borderBottom: '2.5px solid transparent', color: '#6b7280', background: '#fff', cursor: 'pointer', borderTopRightRadius: 8 }}>Workspace Environments</div>
              </div>
              {/* Empty state */}
              <div style={{ padding: '32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src="https://hoppscotch.io/images/states/light/blockchain.svg" alt="Environments empty" width="56" height="56" style={{ display: 'block' }} />
                <div style={{ color: '#a1a1aa', fontWeight: 500, fontSize: 12, marginTop: 16 }}>Environments are empty</div>
              </div>
            </div>
          )}
          {/* Eye icon (replace with new SVG) */}
          <span
            ref={eyeIconRef}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#a1a1aa', fontSize: 18, padding: 4, borderRadius: 6, transition: 'background 0.15s' }}
            onClick={() => setEyePopupOpen(v => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
          </span>
          {/* Eye popup */}
          {eyePopupOpen && (
            <div
              ref={eyePopupRef}
              style={{
                position: 'absolute',
                top: 44,
                right: 40,
                minWidth: 320,
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 10,
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.13)',
                zIndex: 3002,
                padding: '0',
              }}
            >
              {/* Global variables section */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px 8px 18px', borderBottom: '1px solid #f3f4f6', background: '#f8fafc', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <span style={{ fontWeight: 700, fontSize: 13, color: '#23272e' }}>Global variables</span>
                <span style={{ cursor: 'pointer', color: '#a1a1aa', fontSize: 18 }} title="Edit"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg></span>
              </div>
              {/* Table header for variables */}
              <div style={{ display: 'flex', alignItems: 'center', fontSize: 13, color: '#a1a1aa', fontWeight: 600, padding: '8px 18px 0 18px' }}>
                <div style={{ flex: 2 }}>Name</div>
                <div style={{ flex: 2 }}>Initial value</div>
                <div style={{ flex: 2 }}>Current value</div>
              </div>
              {/* No variables row */}
              <div style={{ fontSize: 13, color: '#b0b0b0', fontWeight: 500, padding: '12px 18px 16px 18px' }}>No variables</div>
              {/* Environment variables section */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px 8px 18px', borderBottom: '1px solid #f3f4f6', background: '#f8fafc' }}>
                <span style={{ fontWeight: 700, fontSize: 13, color: '#23272e' }}>Environment variables</span>
                <span style={{ cursor: 'pointer', color: '#a1a1aa', fontSize: 18 }} title="Edit"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg></span>
              </div>
              {/* No active environment row */}
              <div style={{ fontSize: 13, color: '#b0b0b0', fontWeight: 500, padding: '12px 18px 16px 18px' }}>No active environment</div>
            </div>
          )}
        </div>
      </div>
      {/* Add white space between first and second row */}
      <div style={{ height: 18, background: '#fff' }} />
      {/* Pass setTabMethod to RequestBar so it can update the active tab's method */}
      <RequestBar method={tabs.find(t => t.id === activeTabId)?.method || 'GET'} setMethod={setTabMethod} />
      <div className={styles.requestTabs}>
        <div style={{ display: 'flex', flex: 1 }}>
          {['Parameters', 'Body', 'Headers', 'Authorization', 'Pre-request Script', 'Post-request Script'].map(tab => (
            <div
              key={tab}
              className={activeTab === tab ? styles.requestTabActive : styles.requestTab}
              onClick={() => setActiveTab(tab)}
              style={{ cursor: 'pointer' }}
            >
              {tab}
            </div>
          ))}
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <div className={styles.requestTab}>Variables</div>
        </div>
      </div>
      {/* Secondary row for Body tab */}
      {activeTab === 'Body' && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 0 0 16px',
          height: 38,
          borderBottom: '1px solid #f3f4f6',
          background: '#fff',
          fontSize: 14,
          color: '#6b7280',
          gap: 0,
        }}>
          <span style={{ fontWeight: 600, fontSize: 12, marginRight: 18, color: '#a1a1aa' }}>Content Type</span>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginRight: 8 }}>
            <select
              value={contentType}
              onChange={e => setContentType(e.target.value)}
              style={{
                background: 'none',
                border: 'none',
                color: '#18181b',
                fontWeight: 600,
                fontSize: 12,
                outline: 'none',
                cursor: 'pointer',
                minWidth: 60,
                appearance: 'none',
                paddingRight: 18,
                transition: 'color 0.15s',
              }}
              onMouseOver={e => e.target.style.color = '#18181b'}
              onMouseOut={e => e.target.style.color = '#6b7280'}
            >
              <option value="None" style={{ fontSize: 12 }}>None</option>
              <option value="JSON" style={{ fontSize: 12 }}>JSON</option>
              <option value="Form" style={{ fontSize: 12 }}>Form</option>
              <option value="Text" style={{ fontSize: 12 }}>Text</option>
              <option value="XML" style={{ fontSize: 12 }}>XML</option>
            </select>
            <span style={{
              position: 'absolute',
              right: 4,
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              top: '50%',
              transform: 'translateY(-50%)',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </div>
          <button
            onClick={() => setOverride(v => !v)}
            style={{
              background: '#f3f4f6',
              border: '1px solid #e5e7eb',
              color: '#6b7280',
              fontWeight: 600,
              fontSize: 11,
              borderRadius: 6,
              padding: '0 8px 0 4px',
              marginLeft: 2,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              height: 22,
              minHeight: 22,
              maxHeight: 22,
              lineHeight: 1,
              transition: 'background 0.15s',
              gap: 4,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-7.36L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 7.36L3 16"/></svg>
            <span style={{ fontSize: 11, lineHeight: 1 }}>Override</span>
          </button>
        </div>
      )}
      {activeTab === 'Parameters' && (
        <QueryParamsTable boxHeight={boxHeight} setBoxHeight={setBoxHeight} />
      )}
      {activeTab === 'Headers' && (
        <HeaderListTable boxHeight={boxHeight} setBoxHeight={setBoxHeight} />
      )}
      {activeTab === 'Authorization' && (
        <AuthorizationBox boxHeight={boxHeight} setBoxHeight={setBoxHeight} />
      )}
      {activeTab === 'Pre-request Script' && (
        <PreRequestScriptTable boxHeight={boxHeight} setBoxHeight={setBoxHeight} />
      )}
      {activeTab === 'Post-request Script' && (
        <PostRequestScriptTable boxHeight={boxHeight} setBoxHeight={setBoxHeight} />
      )}
      {activeTab === 'Body' && (
        <BodyContent />
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: `calc(100% - ${boxHeight + 200}px)`, // 200px is an estimate for the rest of the UI
          position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#a1a1aa',
          fontSize: 13,
          fontWeight: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
        }}>
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
                  border: `1px solid ${docHover ? '#6b7280' : '#e5e7eb'}`,
                  borderRadius: 4,
                  padding: '8px 24px',
                  fontWeight: 400,
                  fontSize: 11,
                  color: docHover ? '#18181b' : '#6b7280',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  cursor: 'pointer',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
                  marginTop: 8,
                  transition: 'color 0.15s, border 0.15s',
                }}
                onMouseEnter={() => setDocHover(true)}
                onMouseLeave={() => setDocHover(false)}
              >
                Documentation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={docHover ? '#18181b' : 'currentColor'}
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
      {/* Shortcuts block now below the QueryParamsTable */}
      {/* <div className={styles.shortcutsFooter}>
        <div className={styles.shortcutRow}><span>Send Request</span><kbd>Ctrl</kbd> <kbd>Enter</kbd></div>
        <div className={styles.shortcutRow}><span>Keyboard shortcuts</span><kbd>Ctrl</kbd> <kbd>/</kbd></div>
        <div className={styles.shortcutRow}><span>Search & command menu</span><kbd>Ctrl</kbd> <kbd>K</kbd></div>
        <div className={styles.shortcutRow}><span>Help menu</span><kbd>?</kbd></div>
      </div> */}
    </div>
  );
} 