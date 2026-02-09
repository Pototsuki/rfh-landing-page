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
         PROCESS NODES
         ===================== -->
    <g
      class="stroke-current opacity-55"
      stroke-width="4"
      stroke-linecap="round"
    >
      <circle cx="200" cy="240" r="26" />
      <circle cx="300" cy="300" r="26" />
      <circle cx="400" cy="240" r="26" />
    </g>

    <!-- =====================
         PROCESS FLOW
         ===================== -->
    <g
      class="stroke-current opacity-45"
      stroke-width="4"
      stroke-linecap="round"
    >
      <path d="M226 250 C260 280 280 290 300 300" />
      <path d="M300 300 C320 290 340 280 374 250" />
    </g>

    <!-- =====================
         BASELINE / SYSTEM
         ===================== -->
    <g
      class="stroke-current opacity-35"
      stroke-width="5"
      stroke-linecap="round"
    >
      <path d="M180 380 H420" />
    </g>

    <!-- =====================
         STABILITY POINT
         ===================== -->
    <circle cx="300" cy="420" r="10" fill="currentColor" opacity="0.6" />
  </svg>
</template>
