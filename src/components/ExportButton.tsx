'use client'

import React from 'react'
// import '../styles/export-button.css'

export default function ExportButton() {
  const handleExport = () => {
    alert('Exporting data')
  }

  return (
    <button
      className="py-3 px-5 text-[#fff] bg-[#007bff] rounded-md border-none cursor-pointer hover:bg-[#007bff]/90"
      onClick={handleExport}
    >
      Export Data
    </button>
  )
}
