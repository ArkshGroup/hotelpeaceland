'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isRegistrationPage = pathname?.includes('/admin/collections/registration')

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      style={{
        background: 'linear-gradient(to right,rgb(255, 255, 255), #002DB2)',

        display: 'flex',
        alignItems: 'center',
        padding: '10px 100px',
        color: 'white',
        fontWeight: '700',
        gap: '10px',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      {/* Left side: logo + title */}

      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <Link href="/admin">
          <Image
            src="/hpc.jpeg"
            alt="Hotel Peaceeland Logo"
            width={100}
            height={50}
            style={{ height: '50px', width: 'auto' }}
            priority
          />
        </Link>
        <span
          style={{
            color: '#002DB2',
            letterSpacing: '0.12em',
            fontWeight: '900',
            position: 'relative',
            paddingLeft: '5px',
            textDecoration: 'none',
            fontSize: '2rem',
          }}
        >
          Hotel Peaceland <br />
          <small style={{ fontSize: '0.9rem', fontWeight: 400 }}>
            A comfortable and welcoming experience for guests
          </small>{' '}
        </span>{' '}
      </div>

      {/* Right side: Export button (if on registration page) + user icon + dropdown */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {isRegistrationPage && (
          <button
            onClick={async () => {
              try {
                const response = await fetch('/api/export-registrations', {
                  method: 'GET',
                })

                if (!response.ok) {
                  throw new Error('Failed to export registrations')
                }

                const csvContent = await response.text()
                const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
                const link = document.createElement('a')
                const url = URL.createObjectURL(blob)

                const timestamp = new Date().toISOString().split('T')[0]
                const filename = `registrations_${timestamp}.csv`

                link.setAttribute('href', url)
                link.setAttribute('download', filename)
                link.style.visibility = 'hidden'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                URL.revokeObjectURL(url)
              } catch (error) {
                console.error('Error exporting registrations:', error)
                alert('Failed to export registrations. Please try again.')
              }
            }}
            style={{
              padding: '8px 16px',
              backgroundColor: '#D4AF37',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
             Regegistrations
          </button>
        )}

        <div
          ref={dropdownRef}
          style={{ position: 'relative', cursor: 'pointer' }}
          onClick={() => setDropdownOpen((open) => !open)}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            userSelect: 'none',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'white' }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <span style={{ color: 'white', fontWeight: 600 }}>Account ▼</span>
        </div>

        {/* Dropdown menu */}
        {dropdownOpen && (
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 'calc(100% + 8px)',
              backgroundColor: 'white',
              color: '#333',
              boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
              borderRadius: '6px',
              minWidth: '150px',
              fontWeight: '500',
              zIndex: 1000,
            }}
          >
            <Link
              href="/admin/account"
              style={{
                display: 'block',
                padding: '10px 16px',
                color: ' #174943',
                textDecoration: 'none',
                borderBottom: '1px solid #eee',
              }}
              onClick={() => setDropdownOpen(false)}
            >
              Account Settings
            </Link>
            <Link
              href="/admin/logout"
              style={{
                display: 'block',
                padding: '10px 16px',
                color: ' #174943',
                textDecoration: 'none',
              }}
              onClick={() => setDropdownOpen(false)}
            >
              Logout
            </Link>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default Header
