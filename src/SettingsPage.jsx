import React, { useState } from 'react';
import './App.css';

const languages = [
  "English", "Afrikaans", "Arabic", "Catalan", "Simplified Chinese",
  "Czech", "Danish", "German", "Greek", "Spanish",
  "Finnish", "French", "Hebrew", "Hungarian", "Indonesian",
  "Italian", "Japanese", "Korean", "Dutch", "Norwegian",
  "Polish", "Brazilian Portuguese", "Portuguese",
  "Romanian", "Russian", "Serbian", "Swedish", "Turkish",
  "Traditional Chinese", "Ukrainian", "Vietnamese",
  "Hindi", "Marathi"
];

const namingOptions = [
  'Descriptive With Spaces',
  'snake_case',
  'camelCase',
];

const encodingOptions = ['Enable', 'Disable', 'Auto'];

const themeOptions = [
  { key: 'system', label: 'System (Light)' },
  { key: 'light', label: 'Light' },
  { key: 'dark', label: 'Dark' },
];

const accentColors = [
  "#22d3ee", "#4ade80", "#6366f1", "#a78bfa", "#fde047", "#f472b6", "#fb7185", "#fbbf24", "#f59e42"
];

const interceptorOptions = [
  'Browser',
  'Proxy',
  'Agent',
  'Browser extension',
];

export default function SettingsPage() {
  // General
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [encoding, setEncoding] = useState('Enable');
  const [namingStyle, setNamingStyle] = useState(namingOptions[0]);
  const [telemetry, setTelemetry] = useState(true);
  const [expandNav, setExpandNav] = useState(false);
  const [sidebarLeft, setSidebarLeft] = useState(false);
  const [aiExperiments, setAiExperiments] = useState(true);
  const [experimentalSandbox, setExperimentalSandbox] = useState(true);

  // Theme
  const [theme, setTheme] = useState('system');
  const [accent, setAccent] = useState(accentColors[2]);

  // Interceptor
  const [interceptor, setInterceptor] = useState('Browser');
  const [proxyUrl] = useState('https://proxy.hoppscotch.io/');
  const [verifyHost, setVerifyHost] = useState(false);
  const [verifyPeer, setVerifyPeer] = useState(false);

  return (
    <div className="settings-page">
      {/* General Section */}
      <div className="settings-section">
        <div className="settings-section-left">
          <div className="settings-section-title">General</div>
          <div className="settings-section-desc">General settings used in the application</div>
        </div>
        <div className="settings-section-right">
          <div className="settings-label">Language</div>
          <select
            className="settings-select"
            value={selectedLanguage}
            onChange={e => setSelectedLanguage(e.target.value)}
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>

          <div className="settings-label">Query Parameters Encoding</div>
          <div className="settings-desc">Configure encoding for query parameters in requests</div>
          <div className="settings-radio-group">
            {encodingOptions.map(option => (
              <label key={option} className="settings-radio-label">
                <input
                  type="radio"
                  name="encoding"
                  checked={encoding === option}
                  onChange={() => setEncoding(option)}
                />
                {option}
              </label>
            ))}
          </div>

          <div className="settings-label">Experiments</div>
          <div className="settings-experiment-desc">
            This is a collection of experiments we're working on that might turn out to be useful, fun, both, or neither. They're not final and may not be stable, so if something overly weird happens, don't panic. Just turn the dang thing off. Jokes aside, <a href="#" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Contact us</a>.
          </div>
          <div className="settings-checkbox-group">
            <label className="settings-checkbox-label">
              <input type="checkbox" checked={telemetry} onChange={() => setTelemetry(v => !v)} />
              Telemetry
            </label>
            <label className="settings-checkbox-label">
              <input type="checkbox" checked={expandNav} onChange={() => setExpandNav(v => !v)} />
              Expand navigation
          </label>
            <label className="settings-checkbox-label">
              <input type="checkbox" checked={sidebarLeft} onChange={() => setSidebarLeft(v => !v)} />
              Sidebar on left
          </label>
            <label className="settings-checkbox-label">
              <input type="checkbox" checked={aiExperiments} onChange={() => setAiExperiments(v => !v)} />
              AI Experiments
          </label>
          </div>

          <div className="settings-label">Request Naming Style</div>
          <select
            className="settings-select"
            value={namingStyle}
            onChange={e => setNamingStyle(e.target.value)}
          >
            {namingOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <label className="settings-checkbox-label">
            <input type="checkbox" checked={experimentalSandbox} onChange={() => setExperimentalSandbox(v => !v)} />
            Experimental scripting sandbox
          </label>
        </div>
      </div>

      <hr className="settings-divider" />

      {/* Theme Section */}
      <div className="settings-section">
        <div className="settings-section-left">
          <div className="settings-section-title">Theme</div>
          <div className="settings-section-desc">Customize your application theme.</div>
        </div>
        <div className="settings-section-right">
          <div className="settings-label">Background</div>
          <div className="settings-desc">{themeOptions.find(t => t.key === theme)?.label}</div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            {themeOptions.map(opt => (
              <button
                key={opt.key}
                className="settings-btn"
                style={{
                  borderColor: theme === opt.key ? accent : '#e5e7eb',
                  color: theme === opt.key ? accent : '#6366f1',
                  background: theme === opt.key ? '#f0f4ff' : '#fff'
                }}
                onClick={() => setTheme(opt.key)}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="settings-label">Accent color</div>
          <div className="settings-desc">{accent === "#6366f1" ? "Blue" : ""}</div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            {accentColors.map(color => (
              <span
                key={color}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: color,
                  border: color === accent ? `2px solid ${color}` : '2px solid #e5e7eb',
                  display: 'inline-block',
                  cursor: 'pointer'
                }}
                onClick={() => setAccent(color)}
              />
          ))}
        </div>
        </div>
      </div>

      <hr className="settings-divider" />

      {/* Interceptor Section */}
      <div className="settings-section">
        <div className="settings-section-left">
          <div className="settings-section-title">Interceptor</div>
          <div className="settings-section-desc">Middleware between application and APIs.</div>
        </div>
        <div className="settings-section-right">
          <div className="settings-label">Interceptor</div>
          <div className="settings-radio-group">
            {interceptorOptions.map(option => (
              <label key={option} className="settings-radio-label">
                <input
                  type="radio"
                  name="interceptor"
                  checked={interceptor === option}
                  onChange={() => setInterceptor(option)}
                />
                {option}
              </label>
            ))}
          </div>
          <div className="settings-label">Proxy</div>
          <div className="settings-desc">
            Official Proxy is hosted by Hoppscotch. Read the <a href="https://docs.hoppscotch.io/support/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Proxy privacy policy</a>.
          </div>
          <input
            type="text"
            value={proxyUrl}
            readOnly
            className="settings-select"
            style={{ width: 320, marginBottom: 24 }}
          />
          <div className="settings-label">Agent</div>
          <div className="settings-desc">Global Defaults</div>
          <div className="settings-checkbox-group">
            <label className="settings-checkbox-label">
              <input type="checkbox" checked={verifyHost} onChange={() => setVerifyHost(v => !v)} />
              Verify Host
          </label>
            <label className="settings-checkbox-label">
              <input type="checkbox" checked={verifyPeer} onChange={() => setVerifyPeer(v => !v)} />
              Verify Peer
          </label>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
            <button className="settings-btn">CA Certificates</button>
            <button className="settings-btn">Client Certificates</button>
        </div>
          <label className="settings-checkbox-label">
            <input type="checkbox" />
            Proxy
        </label>
          <div className="settings-desc" style={{ marginBottom: 24 }}>
            Hoppscotch Agent and Desktop App supports HTTP/HTTPS/SOCKS proxies with NTLM and Basic Auth support.
          </div>
          <div className="settings-label">Browser extension</div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            <button className="settings-btn">Chrome</button>
            <button className="settings-btn">Firefox</button>
          </div>
        </div>
      </div>
    </div>
  );
} 