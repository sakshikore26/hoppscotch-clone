import React, { useState } from "react";

export default function LoginModal({ open, onClose }) {
  const [hovered, setHovered] = useState(null);
  if (!open) return null;
  const buttonStyle = (id) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '10px 0',
    border: 'none',
    background: 'none',
    fontSize: 14,
    color: hovered === id ? '#111' : '#6b7280',
    cursor: 'pointer',
    borderRadius: 6,
    transition: 'background 0.15s, color 0.15s',
    width: '100%',
    justifyContent: 'flex-start',
    fontWeight: 500,
    paddingLeft: 18
  });
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.15)",
      zIndex: 2000,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
        width: 380,
        maxWidth: '90vw',
        padding: "36px 0 0 0",
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '7vh'
      }}>
        <button onClick={onClose} style={{
          position: "absolute",
          top: 18,
          right: 18,
          background: "none",
          border: "none",
          fontSize: 22,
          color: "#888",
          cursor: "pointer",
          lineHeight: 1
        }}>&times;</button>
        <div style={{ textAlign: "center", fontWeight: 600, fontSize: 24, marginBottom: 28, marginTop: 2 }}>
          Login to Hoppscotch
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, width: '100%', padding: '0 32px' }}>
          <button
            style={buttonStyle('github')}
            onMouseEnter={() => setHovered('github')}
            onMouseLeave={() => setHovered(null)}
          >
            <span style={{ width: 22, display: 'flex', justifyContent: 'center' }}>
              {/* GitHub icon */}
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
            </span>
            Continue with GitHub
          </button>
          <button
            style={buttonStyle('google')}
            onMouseEnter={() => setHovered('google')}
            onMouseLeave={() => setHovered(null)}
          >
            <span style={{ width: 22, display: 'flex', justifyContent: 'center' }}>
              {/* Google icon */}
              <svg width="20" height="20" viewBox="0 0 24 24"><g><path fill="#4285F4" d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.3-1.457 3.822-5.617 3.822-3.38 0-6.135-2.797-6.135-6.25s2.755-6.25 6.135-6.25c1.926 0 3.22.82 3.963 1.527l2.71-2.637C17.09 3.36 14.97 2.25 12.04 2.25 6.615 2.25 2.25 6.615 2.25 12s4.365 9.75 9.79 9.75c5.625 0 9.375-3.945 9.375-9.52 0-.64-.07-1.13-.16-1.607z"/><path fill="#34A853" d="M12.04 21.75c3.825 0 6.99-1.26 9.32-3.43l-4.43-3.62c-1.19.8-2.72 1.28-4.89 1.28-3.76 0-6.93-2.54-8.07-6.02H2.25v3.77A9.75 9.75 0 0 0 12.04 21.75z"/><path fill="#FBBC05" d="M3.97 14.96c-.27-.8-.43-1.65-.43-2.56 0-.89.16-1.74.42-2.56V6.07H2.25A9.75 9.75 0 0 0 2.25 12c0 1.56.37 3.04 1.02 4.36l1.7-1.4z"/><path fill="#EA4335" d="M12.04 4.75c2.13 0 3.57.92 4.39 1.7l3.28-3.2C17.09 3.36 14.97 2.25 12.04 2.25c-3.425 0-6.44 1.36-8.47 3.57l3.38 2.63c.94-1.36 2.47-2.25 5.09-2.25z"/></g></svg>
            </span>
            Continue with Google
          </button>
          <button
            style={buttonStyle('microsoft')}
            onMouseEnter={() => setHovered('microsoft')}
            onMouseLeave={() => setHovered(null)}
          >
            <span style={{ width: 22, display: 'flex', justifyContent: 'center' }}>
              {/* Microsoft icon */}
              <svg width="20" height="20" viewBox="0 0 24 24"><g><rect fill="#F35325" x="2" y="2" width="9" height="9"/><rect fill="#81BC06" x="13" y="2" width="9" height="9"/><rect fill="#05A6F0" x="2" y="13" width="9" height="9"/><rect fill="#FFBA08" x="13" y="13" width="9" height="9"/></g></svg>
            </span>
            Continue with Microsoft
          </button>
          <button
            style={buttonStyle('email')}
            onMouseEnter={() => setHovered('email')}
            onMouseLeave={() => setHovered(null)}
          >
            <span style={{ width: 22, display: 'flex', justifyContent: 'center' }}>
              {/* Email icon */}
              <svg width="20" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 8.29 5.47a2 2 0 0 0 2.42 0L22 7"/></svg>
            </span>
            Continue with Email
          </button>
        </div>
        <div style={{ fontSize: 13, color: '#6b7280', textAlign: 'center', margin: '28px 0 0 0', padding: '0 32px 20px 32px', width: '100%' }}>
          By signing in, you are agreeing to our <a href="#" style={{ color: '#6366f1', textDecoration: 'none' }}>Terms of Service</a> and <a href="#" style={{ color: '#6366f1', textDecoration: 'none' }}>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
} 