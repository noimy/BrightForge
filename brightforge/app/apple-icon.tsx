import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#1a1208',
          borderRadius: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="90" height="90" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 12L7 2L12 12"
            stroke="#faf7f2"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 8.5H10"
            stroke="#f4511e"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}
