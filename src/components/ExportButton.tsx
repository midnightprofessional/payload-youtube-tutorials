'use client'

import React from 'react'
// import '../styles/export-button.css'

export default function ExportButton() {
  const handleExport = () => {
    alert('Exporting data')
  }

  return (
    <button
      style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
      }}
      className="export-button"
      onClick={handleExport}
    >
      Export Data
    </button>
  )
}
