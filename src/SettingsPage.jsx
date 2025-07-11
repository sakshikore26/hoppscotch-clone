import React from 'react';

const settingsSections = [
  {
    title: 'General',
    description: 'General settings used in the application',
    content: (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 'fit-content', marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 12 }}>Language</div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, border: '1px solid #e5e7eb', borderRadius: 4, padding: '4px 11px', background: '#fff', fontWeight: 500, fontSize: 13, color: '#18181b' }}>
            <svg viewBox="0 0 24 24" width="1.3em" height="1.3em" style={{ marginRight: 8, color: '#52525b' }}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"></path></svg>
            <span style={{ color: '#52525b' }}>English</span>
            <svg width="13" height="13" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 1 }}>Query Parameters Encoding</div>
          <div style={{ color: '#a1a1aa', fontSize: 12, marginBottom: 0 }}>Configure encoding for query parameters in requests</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 0 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="radio" name="encoding" defaultChecked style={{ accentColor: '#6366f1' }} /> Enable
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="radio" name="encoding" style={{ accentColor: '#6366f1' }} /> Disable
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="radio" name="encoding" style={{ accentColor: '#6366f1' }} /> Auto
            </label>
          </div>
        </div>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 12 }}>Experiments</div>
        <div style={{ color: '#a1a1aa', fontSize: 14, marginBottom: 8 }}>This is a collection of experiments we're working on that might turn out to be useful, fun, both, or neither. They're not final and may not be stable, so if something overly weird happens, don't panic. Just turn the dang thing off. Jokes aside, <a href="#" style={{ color: '#6366f1', textDecoration: 'underline' }}>Contact us</a>.</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" defaultChecked style={{ accentColor: '#6366f1' }} /> Telemetry
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" style={{ accentColor: '#6366f1' }} /> Expand navigation
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" style={{ accentColor: '#6366f1' }} /> Sidebar on left
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" defaultChecked style={{ accentColor: '#6366f1' }} /> AI Experiments
          </label>
        </div>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 12 }}>Request Naming Style</div>
        <select style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 12px', fontSize: 15, color: '#18181b', marginBottom: 24 }}>
          <option>Descriptive With Spaces</option>
          <option>snake_case</option>
          <option>camelCase</option>
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <input type="checkbox" defaultChecked style={{ accentColor: '#6366f1' }} /> Experimental scripting sandbox
        </label>
      </>
    )
  },
  {
    title: 'Theme',
    description: 'Customize your application theme.',
    content: (
      <>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 12 }}>Background</div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <button style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 16px', background: '#fff', fontWeight: 500, fontSize: 15, color: '#6366f1', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            System (Light)
          </button>
          <button style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 16px', background: '#fff', fontWeight: 500, fontSize: 15, color: '#6366f1', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
            Light
          </button>
          <button style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 16px', background: '#fff', fontWeight: 500, fontSize: 15, color: '#6366f1', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
            Dark
          </button>
        </div>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 12 }}>Accent color</div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          {["#22d3ee", "#4ade80", "#fde047", "#6366f1", "#a78bfa", "#f472b6", "#fb7185", "#fbbf24", "#f59e42"].map((color, idx) => (
            <span key={color} style={{ width: 24, height: 24, borderRadius: '50%', background: color, border: color === '#6366f1' ? '2px solid #6366f1' : '2px solid #e5e7eb', display: 'inline-block', cursor: 'pointer' }} />
          ))}
        </div>
      </>
    )
  },
  {
    title: 'Interceptor',
    description: 'Middleware between application and APIs.',
    content: (
      <>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 12 }}>Interceptor</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="radio" name="interceptor" defaultChecked style={{ accentColor: '#6366f1' }} /> Browser
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="radio" name="interceptor" style={{ accentColor: '#6366f1' }} /> Proxy
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="radio" name="interceptor" style={{ accentColor: '#6366f1' }} /> Agent
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="radio" name="interceptor" style={{ accentColor: '#6366f1' }} /> Browser extension
          </label>
        </div>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 12 }}>Proxy</div>
        <div style={{ color: '#a1a1aa', fontSize: 14, marginBottom: 8 }}>Official Proxy is hosted by Hoppscotch. Read the <a href="#" style={{ color: '#6366f1', textDecoration: 'underline' }}>Proxy privacy policy</a>.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <input type="text" value="https://proxy.hoppscotch.io/" readOnly style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 12px', fontSize: 15, color: '#18181b', width: 320 }} />
          <button style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 12px', background: '#fff', fontWeight: 500, fontSize: 15, color: '#6366f1' }}>
            <svg width="16" height="16" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
          </button>
        </div>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 12 }}>Agent</div>
        <div style={{ color: '#a1a1aa', fontSize: 14, marginBottom: 8 }}>Global Defaults</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" style={{ accentColor: '#6366f1' }} /> Verify Host
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" style={{ accentColor: '#6366f1' }} /> Verify Peer
          </label>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          <button style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 12px', background: '#fff', fontWeight: 500, fontSize: 15, color: '#6366f1' }}>CA Certificates</button>
          <button style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 12px', background: '#fff', fontWeight: 500, fontSize: 15, color: '#6366f1' }}>Client Certificates</button>
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <input type="checkbox" style={{ accentColor: '#6366f1' }} /> Proxy
        </label>
        <div style={{ color: '#a1a1aa', fontSize: 14, marginBottom: 24 }}>Hoppscotch Agent and Desktop App supports HTTP/HTTPS/SOCKS proxies with NTLM and Basic Auth support.</div>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 12 }}>Browser extension</div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <button style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 16px', background: '#fff', fontWeight: 500, fontSize: 15, color: '#6366f1', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
            Chrome
          </button>
          <button style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 16px', background: '#fff', fontWeight: 500, fontSize: 15, color: '#6366f1', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
            Firefox
          </button>
        </div>
      </>
    )
  }
];

export default function SettingsPage() {
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
      flexDirection: 'row',
      minHeight: 0,
      minWidth: 0,
      padding: '40px 0 40px 0',
    }}>
      {/* Leftmost section: Section headers and descriptions */}
      <div style={{ width: 320, minWidth: 220, maxWidth: 360, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingRight: 32, gap: 64 }}>
        {settingsSections.map((section, idx) => (
          <div key={section.title} style={{ textAlign: 'left', marginTop: section.title === 'General' ? 0 : 0, marginLeft: section.title === 'General' ? 40 : 0 }}>
            <div style={{ fontWeight: 700, fontSize: section.title === 'General' ? 18 : 28, color: '#18181b', marginBottom: section.title === 'General' ? 4 : 8 }}>{section.title}</div>
            <div style={{ color: '#a1a1aa', fontSize: section.title === 'General' ? 12 : 16, fontWeight: 500 }}>{section.description}</div>
          </div>
        ))}
      </div>
      {/* Centered section: Section content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
        {settingsSections.map((section, idx) => (
          <div key={section.title} style={{ width: 520, marginBottom: 64 }}>
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
} 