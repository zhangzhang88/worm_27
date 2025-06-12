'use client';

import React from 'react';

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        {children}
        <button onClick={() => onOpenChange(false)}>Close</button>
      </div>
    </div>
  );
}

export function DialogContent({ children }) {
  return <div>{children}</div>;
}

export function DialogHeader({ children }) {
  return <div className="font-bold mb-2">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-lg">{children}</h2>;
}

export function DialogFooter({ children }) {
  return <div className="mt-4">{children}</div>;
}