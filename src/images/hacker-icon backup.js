import React from 'react'

function HackerIcon(props) {
  const { size, color } = props
  const hairWidth = Number(size) + Number(size) * 0.1
  return (
    <div>
      <svg
        width={String(hairWidth)}
        height={size}
        viewBox="0 0 330 300"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="300"
          height="300"
        >
          <path
            d="M0 20C0 8.9543 8.95431 0 20 0H280C291.046 0 300 8.95431 300 20V280C300 291.046 291.046 300 280 300H20C8.9543 300 0 291.046 0 280V20Z"
            fill={color}
          />
        </mask>
        <g mask="url(#mask0)">
          <rect y="272" width="150" height="28" fill={color} />
          <path
            d="M188 226C188 214.954 196.954 206 208 206H223C234.046 206 243 214.954 243 226V306C243 317.046 234.046 326 223 326H208C196.954 326 188 317.046 188 306V226Z"
            fill={color}
          />
          <rect x="12" y="140" width="15" height="125" rx="7.5" fill={color} />
          <rect x="56" y="254" width="70" height="3" fill={color} />
          <rect width="300" height="5" fill={color} />
          <rect y="295" width="300" height="5" fill={color} />
          <rect x="203" y="184" width="25" height="43" fill={color} />
          <circle cx="215" cy="150" r="50" fill={color} />
          <rect y="4" width="5" height="300" fill={color} />
          <rect x="295" width="5" height="300" fill={color} />
          <rect x="12" y="257" width="125" height="15" rx="7.5" fill={color} />
        </g>
        <path
          d="M155.895 48.5238L208.395 104.815L178.395 122.136L155.895 48.5238Z"
          fill={color}
        />
        <path d="M222 33L239.321 108H204.679L222 33Z" fill={color} />
        <path
          d="M282.321 57L259.821 130.612L229.821 113.292L282.321 57Z"
          fill={color}
        />
        <path
          d="M322.81 117.794L258.257 159.721L246.409 127.169L322.81 117.794Z"
          fill={color}
        />
        <path
          d="M322.81 189.996L246.409 180.62L258.257 148.068L322.81 189.996Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default HackerIcon
