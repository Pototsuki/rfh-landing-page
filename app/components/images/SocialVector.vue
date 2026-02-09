<template>
  <svg
    class="w-full h-full"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- =====================
         BACK PLATE (PLATFORM)
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
         CORE PLATFORM NODE
         ===================== -->
    <circle
      cx="260"
      cy="260"
      r="28"
      class="stroke-current opacity-65"
      stroke-width="4.5"
    />

    <!-- =====================
         SOCIAL CONNECTIONS
         ===================== -->
    <g
      class="stroke-current opacity-45"
      stroke-width="4"
      stroke-linecap="round"
    >
      <line x1="260" y1="232" x2="260" y2="170" />
      <line x1="288" y1="260" x2="350" y2="260" />
      <line x1="240" y1="288" x2="200" y2="340" />
      <line x1="288" y1="288" x2="340" y2="340" />
    </g>

    <!-- =====================
         USER / AUDIENCE NODES
         ===================== -->
    <g fill="currentColor" opacity="0.6">
      <circle cx="260" cy="150" r="10" />
      <circle cx="360" cy="260" r="10" />
      <circle cx="190" cy="350" r="10" />
      <circle cx="360" cy="350" r="10" />
    </g>

    <!-- =====================
         ENGAGEMENT / GROWTH ARC
         ===================== -->
    <g
      class="stroke-current opacity-45"
      stroke-width="5"
      stroke-linecap="round"
    >
      <path d="M420 220 A120 120 0 0 1 420 380" />
    </g>
  </svg>
</template>
