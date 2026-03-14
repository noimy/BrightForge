import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#1a1208',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 12L7 2L12 12"
            stroke="#faf7f2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 8.5H10"
            stroke="#f4511e"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}
