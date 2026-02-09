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
      x="90"
      y="90"
      width="360"
      height="360"
      rx="36"
      class="stroke-current opacity-20"
      stroke-width="2.5"
    />

    <!-- =====================
         PEOPLE NODES
         ===================== -->
    <g
      class="stroke-current opacity-55"
      stroke-width="4"
      stroke-linecap="round"
    >
      <circle cx="220" cy="200" r="26" />
      <circle cx="340" cy="240" r="26" />
    </g>

    <!-- =====================
         CONNECTION / SCREENING
         ===================== -->
    <g
      class="stroke-current opacity-45"
      stroke-width="4"
      stroke-linecap="round"
    >
      <path d="M246 210 C280 200 300 220 330 240" />
    </g>

    <!-- =====================
         FUNNEL (SELECTION)
         ===================== -->
    <g
      class="stroke-current opacity-35"
      stroke-width="5"
      stroke-linejoin="round"
    >
      <path d="M200 340 H400 L330 420 H270 Z" />
    </g>

    <!-- =====================
         FINAL CANDIDATE
         ===================== -->
    <circle cx="300" cy="460" r="10" fill="currentColor" opacity="0.6" />
  </svg>
</template>
