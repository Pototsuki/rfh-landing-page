<template>
  <svg
    class="w-full h-full"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- =====================
         BACK PLATE
         ===================== -->
    <rect
      x="80"
      y="80"
      width="380"
      height="380"
      rx="36"
      class="stroke-current opacity-20"
      stroke-width="2.5"
    />

    <!-- =====================
         DATA GRID
         ===================== -->
    <g
      class="stroke-current opacity-45"
      stroke-width="3"
      stroke-linecap="round"
    >
      <line x1="80" y1="180" x2="460" y2="180" />
      <line x1="80" y1="260" x2="460" y2="260" />
      <line x1="80" y1="340" x2="460" y2="340" />

      <line x1="180" y1="80" x2="180" y2="460" />
      <line x1="260" y1="80" x2="260" y2="460" />
      <line x1="340" y1="80" x2="340" y2="460" />
    </g>

    <!-- =====================
         ANNOTATION TARGET
         ===================== -->
    <g class="stroke-current opacity-6" stroke-width="4" stroke-linecap="round">
      <rect x="220" y="220" width="120" height="120" rx="16" />
    </g>

    <!-- =====================
         VERIFIED LABEL
         ===================== -->
    <g
      class="stroke-current opacity-75"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    >
      <polyline points="240,290 280,330 360,250" />
    </g>

    <!-- =====================
         ACCURACY DOT
         ===================== -->
    <circle cx="300" cy="430" r="10" fill="currentColor" opacity="0.6" />
  </svg>
</template>
