import React from "react";

export default function CommandModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.10)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
        width: 480,
        maxWidth: '90vw',
        marginTop: '12vh',
        padding: '0',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{ width: '100%', padding: '32px 32px 18px 32px', fontSize: 20, color: '#6b7280', fontWeight: 400 }}>
          Type a command or search...
        </div>
        <div style={{ width: '100%', borderTop: '1px solid #f3f4f6', padding: '12px 32px 18px 32px', display: 'flex', alignItems: 'center', gap: 18, fontSize: 14, color: '#6b7280' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ border: '1px solid #e5e7eb', borderRadius: 4, padding: '2px 8px', fontSize: 13, background: '#f9fafb' }}>↑</span>
            <span style={{ border: '1px solid #e5e7eb', borderRadius: 4, padding: '2px 8px', fontSize: 13, background: '#f9fafb' }}>↓</span>
            to navigate
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ border: '1px solid #e5e7eb', borderRadius: 4, padding: '2px 8px', fontSize: 13, background: '#f9fafb' }}>↵</span>
            to select
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }}>
            <span style={{ border: '1px solid #e5e7eb', borderRadius: 4, padding: '2px 8px', fontSize: 13, background: '#f9fafb' }}>ESC</span>
            to close
          </span>
        </div>
      </div>
    </div>
  );
} 