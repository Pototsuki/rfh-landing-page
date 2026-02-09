<template>
  <svg
    class="w-full h-full"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- =====================
         BACK PLATE (soft presence)
         ===================== -->
    <rect
      x="60"
      y="60"
      width="400"
      height="400"
      rx="36"
      class="stroke-current opacity-20"
      stroke-width="2.5"
    />

    <!-- =====================
         GRID / STRUCTURE
         ===================== -->
    <g
      class="stroke-current opacity-30"
      stroke-width="2"
      stroke-linecap="round"
    >
      <line x1="60" y1="150" x2="460" y2="150" />
      <line x1="60" y1="240" x2="460" y2="240" />
      <line x1="60" y1="330" x2="460" y2="330" />

      <line x1="150" y1="60" x2="150" y2="460" />
      <line x1="240" y1="60" x2="240" y2="460" />
      <line x1="330" y1="60" x2="330" y2="460" />
    </g>

    <!-- =====================
         CHECKLIST ROWS
         ===================== -->
    <g
      class="stroke-current opacity-65"
      stroke-width="3.2"
      stroke-linecap="round"
    >
      <line x1="130" y1="190" x2="300" y2="190" />
      <line x1="130" y1="270" x2="340" y2="270" />
      <line x1="130" y1="350" x2="320" y2="350" />
    </g>

    <!-- CHECKMARKS -->
    <g
      class="stroke-current opacity-85"
      stroke-width="3.2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="100,185 118,203 145,168" />
      <polyline points="100,265 118,283 145,248" />
      <polyline points="100,345 118,363 145,328" />
    </g>

    <!-- =====================
         TIME MANAGEMENT ARC
         ===================== -->
    <g
      class="stroke-current opacity-45"
      stroke-width="5"
      stroke-linecap="round"
    >
      <path d="M500 260 A170 170 0 0 1 340 100" />
      <circle cx="340" cy="100" r="6" fill="currentColor" />
    </g>

    <!-- =====================
         FLOW / WORK MOTION
         ===================== -->
    <g
      class="stroke-current opacity-35"
      stroke-width="4"
      stroke-linecap="round"
    >
      <path d="M220 500 C300 450 380 450 460 500" />
    </g>
  </svg>
</template>
