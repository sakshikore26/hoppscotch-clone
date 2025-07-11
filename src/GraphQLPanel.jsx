import React, { useState } from 'react';
import { HeaderListTable, AuthorizationBox } from './Body';

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

export default function GraphQLPanel({ rightPanelWidth = 340 }) {
  const [activeTab, setActiveTab] = useState('Query');
  const [query, setQuery] = useState('query Request {\n  method\n  url\n  headers {\n    key\n    value\n  }\n}');
  const [docHover, setDocHover] = useState(false);
  const [method, setMethod] = useState("POST");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [variables, setVariables] = useState(`{
  "id": "1"
}`);
  const [boxHeight, setBoxHeight] = useState(60);

  return (
    <div style={{
      position: 'fixed',
      top: 48,
      left: 48,
      right: rightPanelWidth,
      bottom: 28,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      borderLeft: '1px solid #f3f4f6',
      borderRight: '1px solid #f3f4f6',
      borderBottom: '1px solid #f3f4f6',
      borderRadius: 4,
      minHeight: 120,
      margin: 0,
      boxSizing: 'border-box',
    }}>
      {/* 1st row (from Parameters 2nd row): RequestBar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 24px', height: 54, borderBottom: '1px solid #f3f4f6', background: '#fff' }}>
        <input
          type="text"
          value="https://echo.hoppscotch.io/graphql"
          readOnly
          style={{
            flex: 1,
            background: '#f3f4f6',
            border: '1px solid #e5e7eb',
            borderRadius: 6,
            padding: '8px 16px',
            fontSize: 15,
            color: '#18181b',
            marginRight: 16,
            outline: 'none',
          }}
        />
        <button style={{
          background: '#6366f1',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '8px 26px',
          fontWeight: 600,
          fontSize: 15,
          cursor: 'pointer',
        }}>Connect</button>
      </div>
      {/* 2nd row (from Parameters 1st row): RequestTabsBar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 24px', height: 48, borderBottom: '1px solid #f3f4f6', background: '#fff' }}>
        <div style={{ fontWeight: 600, fontSize: 16, color: '#18181b', marginRight: 16 }}>Untitled</div>
        <span style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#a1a1aa', fontSize: 22, marginRight: 24 }}>+</span>
        {/* Tabs removed as requested */}
      </div>
      {/* 3rd row (from Parameters 3rd row): RequestTabs */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 24px', height: 44, background: '#fff', gap: 32, borderTop: 'none', borderBottom: '1px solid #e5e7eb', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, width: '100%', height: '100%' }}>
          {['Query', 'Variables', 'Headers', 'Authorization'].map(tab => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                fontWeight: activeTab === tab ? 700 : 500,
                color: activeTab === tab ? '#18181b' : '#6b7280',
                fontSize: 13,
                position: 'relative',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                background: 'transparent',
                padding: '0 2px',
              }}
            >
              {tab}
              {tab === 'Query' && <span style={{ color: '#6366f1', fontSize: 10, marginLeft: 6, marginTop: 2, display: 'inline-block' }}>&bull;</span>}
              {activeTab === tab && (
                <span style={{
                  position: 'absolute',
                  left: 0,
                  bottom: -1,
                  width: '100%',
                  height: 2,
                  background: '#6366f1',
                  borderRadius: 2,
                  content: '""',
                  display: 'block',
                }}></span>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Query/Variables editor area (fifth row) */}
      {activeTab === 'Query' && (
        <>
        <div style={{ display: 'flex', background: '#fff', minHeight: 180, borderBottom: '1px solid #f3f4f6', alignItems: 'flex-start' }}>
          <div style={{ background: 'transparent', color: '#6b7280', fontSize: 12, fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace', padding: '8px 4px 8px 8px', userSelect: 'none', minWidth: 32, textAlign: 'right', borderRight: '1px solid #f3f4f6', height: '100%' }}>
            {Array.from({ length: query.split('\n').length }).map((_, i) => (
              <div key={i} style={{ height: 19 }}>{i + 1}</div>
            ))}
          </div>
          <div style={{ position: 'relative', flex: 1, width: '100%', minWidth: 0 }}>
            <textarea
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: 13,
                fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace',
                color: 'transparent',
                padding: '8px 0 8px 0',
                minHeight: 180,
                resize: 'none',
                fontWeight: 500,
                lineHeight: '19px',
                caretColor: '#18181b',
                zIndex: 2,
                position: 'relative',
                textAlign: 'left',
              }}
            />
            <pre
              style={{
                pointerEvents: 'none',
                margin: 0,
                padding: '8px 0 8px 0',
                fontSize: 13,
                fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace',
                color: '#18181b',
                background: 'transparent',
                minHeight: 180,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                whiteSpace: 'pre',
                zIndex: 1,
                textAlign: 'left',
              }}
              dangerouslySetInnerHTML={{
                __html: query
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/(query|headers|key|value|url|method)/g, '<span style="color:#ef4444;">$1</span>')
                  .replace(/(Request)/g, '<span style="color:#10b981;">$1</span>')
              }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '100%', marginTop: 32 }}>
          <div style={{ color: '#a1a1aa', fontSize: 13, fontWeight: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
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
        </>
      )}
      {activeTab === 'Variables' && (
        <>
        <div style={{ display: 'flex', background: '#fff', minHeight: 180, borderBottom: '1px solid #f3f4f6', alignItems: 'flex-start' }}>
          <div style={{ background: 'transparent', color: '#6b7280', fontSize: 12, fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace', padding: '8px 4px 8px 8px', userSelect: 'none', minWidth: 32, textAlign: 'right', borderRight: '1px solid #f3f4f6', height: '100%' }}>
            {Array.from({ length: variables.split('\n').length }).map((_, i) => (
              <div key={i} style={{ height: 19 }}>{i + 1}</div>
            ))}
          </div>
          <div style={{ position: 'relative', flex: 1, width: '100%', minWidth: 0 }}>
            <textarea
              value={variables}
              onChange={e => setVariables(e.target.value)}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: 13,
                fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace',
                color: 'transparent',
                padding: '8px 0 8px 0',
                minHeight: 180,
                resize: 'none',
                fontWeight: 500,
                lineHeight: '19px',
                caretColor: '#18181b',
                zIndex: 2,
                position: 'relative',
                textAlign: 'left',
              }}
            />
            <pre
              style={{
                pointerEvents: 'none',
                margin: 0,
                padding: '8px 0 8px 0',
                fontSize: 13,
                fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace',
                color: '#18181b',
                background: 'transparent',
                minHeight: 180,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                whiteSpace: 'pre',
                zIndex: 1,
                textAlign: 'left',
              }}
              dangerouslySetInnerHTML={{
                __html: variables
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"(.*?)"(?=\s*:)/g, '<span style="color:#ef4444;">"$1"</span>') // key in red
                  .replace(/: "(.*?)"/g, ': <span style="color:#2563eb;">"$1"</span>') // value in blue
              }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '100%', marginTop: 32 }}>
          <div style={{ color: '#a1a1aa', fontSize: 13, fontWeight: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
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
        </>
      )}
      {activeTab === 'Headers' && (
        <>
          <HeaderListTable boxHeight={boxHeight} setBoxHeight={setBoxHeight} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '100%', marginTop: 32 }}>
            <div style={{ color: '#a1a1aa', fontSize: 13, fontWeight: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
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
        </>
      )}
      {activeTab === 'Authorization' && (
        <>
          <AuthorizationBox boxHeight={boxHeight} setBoxHeight={setBoxHeight} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '100%', marginTop: 32 }}>
            <div style={{ color: '#a1a1aa', fontSize: 13, fontWeight: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
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
        </>
      )}
    </div>
  );
} 