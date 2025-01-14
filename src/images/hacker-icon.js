import React from 'react'

function HackerIcon(props) {
  const { size } = props
  const hairWidth = String(Number(size) + Number(size) * 0.1)
  return (
    <div>
      <svg
        width={hairWidth}
        height={size}
        viewBox="0 0 334 303"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="10"
          y="0"
          width="324"
          height="293"
        >
          <rect x="10" width="324" height="293" rx="20" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M201.271 13L220.236 90.9688L279.421 30.7167L251.269 118.164L290 113.651V135.658L259.075 154.729L290 173.799V195.807L240.987 190.096C232.177 200.38 220.071 208.016 206.197 211.553V222.223C217.825 225.064 226.417 235.086 226.417 247.014V293H30C18.9543 293 10 284.046 10 273V306H152.277V349.403C152.277 363.54 164.348 375 179.237 375H199.457C214.347 375 226.417 363.54 226.417 349.403V293H270C281.046 293 290 284.046 290 273V195.807L334 200.933L290 173.799V135.658L334 108.525L290 113.651V33C290 21.9543 281.046 13 270 13H201.271ZM194.947 13L177.02 86.7039C176.346 86.8154 175.675 86.9365 175.008 87.0669L109 19.8683L137.428 108.175C127.356 119.358 121.274 133.876 121.274 149.744C121.274 179.792 143.086 205.003 172.497 211.882V222.223C160.869 225.064 152.277 235.086 152.277 247.014V271.875H139.5C143.642 271.875 147 267.783 147 262.734C147 257.686 143.642 253.594 139.5 253.594H136V249.938H66V253.594H37V120.141C37 115.092 33.6421 111 29.5 111C25.3579 111 22 115.092 22 120.141V254.203C22 255.744 22.3127 257.195 22.865 258.469C22.3127 259.742 22 261.194 22 262.734C22 267.783 25.3579 271.875 29.5 271.875H10V33C10 21.9543 18.9543 13 30 13H194.947ZM194.947 13L198.109 0L201.271 13H194.947Z"
            fill="currentColor"
          />
        </g>
        <mask
          id="mask1"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="3"
          width="330"
          height="300"
        >
          <path
            d="M0 23C0 11.9543 8.95431 3 20 3H310C321.046 3 330 11.9543 330 23V283C330 294.046 321.046 303 310 303H20C8.95431 303 0 294.046 0 283V23Z"
            fill="currentColor"
          />
        </mask>
        <g mask="url(#mask1)"></g>
      </svg>
    </div>
  )
}

export default HackerIcon
