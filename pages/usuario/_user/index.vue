<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="bg-white">
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="flex flex-wrap">
          <div
            class="w-full space-y-5 md:w-1/2 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
          >
            <h1
              class="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl"
            >
              {{ usuario.username }}
            </h1>
            <pre>Total localizaciones: {{ loc.length }}</pre>
            <ul class="flex space-x-5">
              <li v-if="usuario.web">
                <a
                  :href="getUrlWeb(usuario.web)"
                  target="_blank"
                  class="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500"
                >
                  <span class="sr-only">Web</span>
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M469.333 0H42.667C19.114.028.028 19.114 0 42.667v426.667C.028 492.886 19.114 511.972 42.667 512h426.667c23.552-.028 42.638-19.114 42.667-42.667V42.667C511.972 19.114 492.886.028 469.333 0zm25.6 469.333c0 14.138-11.461 25.6-25.6 25.6H42.667c-14.138 0-25.6-11.461-25.6-25.6v-384h477.867v384zm0-401.066H17.067v-25.6c0-14.138 11.462-25.6 25.6-25.6h426.667c14.138 0 25.6 11.462 25.6 25.6v25.6z"
                    />
                    <path
                      d="M59.733 34.133H51.2c-4.713 0-8.533 3.82-8.533 8.533S46.487 51.2 51.2 51.2h8.533c4.713 0 8.533-3.82 8.533-8.533s-3.82-8.534-8.533-8.534zM97.109 34.816a7.817 7.817 0 00-6.485 0 9.857 9.857 0 00-2.816 1.792 8.653 8.653 0 000 12.117 9.857 9.857 0 002.816 1.792c2.066.91 4.419.91 6.485 0a9.857 9.857 0 002.816-1.792 8.653 8.653 0 000-12.117 9.857 9.857 0 00-2.816-1.792zM131.272 34.736a8.533 8.533 0 00-9.331 1.872 9.857 9.857 0 00-1.792 2.816 8.036 8.036 0 000 6.485 9.857 9.857 0 001.792 2.816 8.653 8.653 0 0012.117 0 9.857 9.857 0 001.792-2.816 7.163 7.163 0 00.683-3.243 8.531 8.531 0 00-5.261-7.93zM460.8 34.133H170.667c-4.713 0-8.533 3.82-8.533 8.533s3.82 8.533 8.533 8.533H460.8c4.713 0 8.533-3.82 8.533-8.533s-3.82-8.533-8.533-8.533zM131.012 406.357c.388.357.811.675 1.263.947a169.899 169.899 0 00247.586-.077 7.982 7.982 0 001.195-.853c.28-.393.526-.81.734-1.246 59.882-64.957 59.882-164.999 0-229.956l-.034-.017a8.328 8.328 0 00-.734-1.246 7.644 7.644 0 00-1.271-.956 169.896 169.896 0 00-247.466 0 7.59 7.59 0 00-1.271.956c-.28.393-.526.81-.734 1.246-59.882 64.957-59.882 164.999 0 229.956.207.436.452.853.732 1.246zm171.537 30.097a156.811 156.811 0 0029.056-53.76v-.026a156.234 156.234 0 0130.148 18.551 153.588 153.588 0 01-59.204 35.235zm70.981-47.633a173.058 173.058 0 00-37.086-22.741 304.21 304.21 0 008.934-67.413h63.787a152.749 152.749 0 01-35.635 90.154zM409.165 281.6h-63.787a304.32 304.32 0 00-8.934-67.413 173.076 173.076 0 0037.086-22.724 152.745 152.745 0 0135.635 90.137zm-47.411-102.579a156.184 156.184 0 01-30.148 18.551 156.817 156.817 0 00-29.056-53.786 153.627 153.627 0 0159.204 35.235zm-97.221-41.293c20.915 5.478 39.415 30.626 51.072 66.227a181.188 181.188 0 01-51.072 9.719v-75.946zm0 93.022a197.344 197.344 0 0055.774-10.24 288.912 288.912 0 018.013 61.09h-63.787v-50.85zm0 67.917h63.787a288.892 288.892 0 01-8.013 61.073 197.33 197.33 0 00-55.774-10.223v-50.85zm0 67.925a181.2 181.2 0 0151.072 9.728c-11.657 35.601-30.157 60.749-51.072 66.227v-75.955zm-114.287 34.603a156.23 156.23 0 0130.148-18.5v-.026a156.811 156.811 0 0029.056 53.76 153.613 153.613 0 01-59.204-35.234zm97.221 41.344c-20.915-5.478-39.415-30.626-51.072-66.227a181.188 181.188 0 0151.072-9.719v75.946zm0-93.022a197.35 197.35 0 00-55.774 10.24 288.92 288.92 0 01-8.013-61.09h63.787v50.85zm0-67.917H183.68a288.892 288.892 0 018.013-61.073 197.33 197.33 0 0055.774 10.223v50.85zm0-143.881v75.955a181.2 181.2 0 01-51.072-9.728c11.656-35.6 30.156-60.748 51.072-66.227zm-38.016 6.042a156.81 156.81 0 00-29.056 53.811v-.026a156.189 156.189 0 01-30.148-18.552 153.608 153.608 0 0159.204-35.233zm-70.981 47.684a173.058 173.058 0 0037.086 22.741 304.21 304.21 0 00-8.934 67.413h-63.787a152.749 152.749 0 0135.635-90.154zm28.152 107.222a304.32 304.32 0 008.934 67.413 173.076 173.076 0 00-37.086 22.724 152.748 152.748 0 01-35.635-90.138h63.787z"
                    />
                  </svg>
                </a>
              </li>
              <li v-if="usuario.urlFacebook">
                <a
                  :href="usuario.urlFacebook"
                  rel="nofollow"
                  class="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500"
                >
                  <span class="sr-only">Facebook</span>
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M414 10H98c-48.601 0-88 39.399-88 88v316c0 48.601 39.399 88 88 88h158V305.5h-59v-71.006h59v-52.008c0-33.259 15.455-84.938 84.206-84.938h74.517v69.66h-56.742c-7.639 0-17.982 3.59-17.982 19.316v47.521h75.172L407.98 305.5H340V502h74c48.601 0 88-39.399 88-88V98c0-48.601-39.399-88-88-88z"
                      fill="#6e87f5"
                    />
                    <path
                      d="M256 395.493c-5.523 0-10-4.477-10-10v-.08-.04-.04c0-5.523 4.477-10 10-10s10 4.477 10 10v.16c0 5.523-4.477 10-10 10z"
                    />
                    <path
                      d="M414 512h-74c-5.523 0-10-4.477-10-10V305.5c0-5.523 4.477-10 10-10h58.937l5.178-51.455H340c-5.523 0-10-4.477-10-10v-47.521c0-21.638 15.073-29.316 27.981-29.316h46.742v-49.66h-64.517c-66.976 0-74.207 52.406-74.207 74.938v52.007c0 5.523-4.477 10-10 10h-49V295.5h49c5.523 0 10 4.477 10 10V344c0 5.523-4.477 10-10 10s-10-4.477-10-10v-28.5h-49c-5.523 0-10-4.477-10-10v-71.006c0-5.523 4.477-10 10-10h49v-42.007c0-13.38 2.37-39.076 18.243-60.834 11.349-15.558 33.741-34.104 75.964-34.104h74.517c5.523 0 10 4.477 10 10v69.66c0 5.523-4.477 10-10 10h-56.742c-5.818 0-7.981 2.525-7.981 9.316v37.521h65.172a10.002 10.002 0 019.95 11.001l-7.191 71.455a10 10 0 01-9.95 8.999H350V492h64c43.009 0 78-34.991 78-78V98c0-43.009-34.991-78-78-78H98c-43.009 0-78 34.991-78 78v316c0 43.009 34.991 78 78 78h148v-67.5c0-5.523 4.477-10 10-10s10 4.477 10 10V502c0 5.523-4.477 10-10 10H98c-54.038 0-98-43.962-98-98V98C0 43.962 43.962 0 98 0h316c54.038 0 98 43.962 98 98v316c0 54.038-43.962 98-98 98z"
                    />
                    <path
                      d="M58 206c-5.523 0-10-4.477-10-10v-83.5c0-5.523 4.477-10 10-10s10 4.477 10 10V196c0 5.523-4.477 10-10 10zM58 249.5c-5.523 0-10-4.477-10-10v-.118c0-5.523 4.477-10 10-10s10 4.477 10 10v.118c0 5.523-4.477 10-10 10z"
                    />
                  </svg>
                </a>
              </li>
              <li v-if="usuario.urlTwitter">
                <a
                  :href="usuario.urlTwitter"
                  rel="nofollow"
                  class="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500"
                >
                  <span class="sr-only">Twitter</span>
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512.001 512.001"
                  >
                    <path
                      d="M502.001 103.455c-18.027 7.995-37.55 13.529-57.959 15.951 20.87-12.492 36.781-32.285 44.431-55.884-19.526 11.569-41.126 19.986-64.264 24.483a100.748 100.748 0 00-73.563-31.824c-55.692 0-100.891 45.199-100.891 100.891 0 7.956.922 15.605 2.575 22.985-83.942-4.228-158.235-44.316-208.085-105.426-8.724 14.874-13.683 32.285-13.683 50.771 0 34.977 17.872 65.915 44.891 83.903-16.525-.422-31.978-5.073-45.621-12.607v1.23c0 48.928 34.822 89.744 80.904 99.084-8.417 2.23-17.41 3.42-26.557 3.42-6.457 0-12.76-.576-19.064-1.768 12.914 40.087 50.118 69.182 94.28 70.105-34.553 27.018-78.099 43.084-125.374 43.084-8.11 0-16.064-.46-24.02-1.344 44.737 28.671 97.739 45.314 154.775 45.314 185.563 0 287.068-153.738 287.068-287.028l-.307-13.068a203.319 203.319 0 0050.464-52.272z"
                      fill="#78d2fa"
                    />
                    <path
                      d="M164.776 465.823c-56.916 0-112.302-16.216-160.171-46.895a9.999 9.999 0 016.502-18.358 205.34 205.34 0 0022.915 1.283c35.28 0 68.932-9.222 98.619-26.864-35.884-9.631-65.309-36.835-77.042-73.258a10 10 0 0111.556-12.859c-28.857-20.339-47.32-53.948-47.32-90.945v-1.23a10 10 0 0114.834-8.754 96.474 96.474 0 008.003 3.951C28.496 172.996 20.564 149.78 20.564 125.4c0-19.73 5.207-39.036 15.058-55.831a10 10 0 017.857-4.911 10.016 10.016 0 018.517 3.65 278.533 278.533 0 0060.635 55.259c4.585 3.078 5.808 9.291 2.729 13.876-3.078 4.585-9.29 5.808-13.876 2.729a298.317 298.317 0 01-54.879-47.465c-3.976 10.333-6.042 21.423-6.042 32.692 0 30.47 15.115 58.724 40.433 75.579a10.002 10.002 0 013.993 11.341 10.011 10.011 0 01-9.79 6.98c-11.69-.299-23.117-2.482-34.142-6.512 6.096 36.688 34.365 66.863 71.666 74.423a10 10 0 01.574 19.467c-9.402 2.491-19.199 3.754-29.119 3.754-1.105 0-2.204-.015-3.295-.045 15.299 28.801 45.247 47.685 78.721 48.384a10 10 0 015.951 17.875c-33.449 26.156-72.895 41.406-114.929 44.583 35.707 16.17 74.528 24.594 114.149 24.594 173.378 0 277.005-140.774 277.068-276.911l-.304-12.951a10.001 10.001 0 014.159-8.354 193.235 193.235 0 0026.917-23.389 209.763 209.763 0 01-27.396 5.117 10 10 0 01-6.314-18.511 91.32 91.32 0 0027.193-24.987 210.32 210.32 0 01-39.982 11.982 9.994 9.994 0 01-9.205-2.979c-17.068-18.215-41.221-28.662-66.266-28.662-50.117 0-90.891 40.773-90.891 90.891 0 6.888.785 13.887 2.333 20.8a9.998 9.998 0 01-2.113 8.63 9.984 9.984 0 01-8.149 3.542c-21.363-1.076-42.585-4.445-63.077-10.012-5.33-1.448-8.477-6.942-7.029-12.272s6.943-8.477 12.272-7.029a277.605 277.605 0 0046.416 8.434c-.434-4.04-.653-8.08-.653-12.093 0-61.146 49.745-110.891 110.891-110.891 28.64 0 56.332 11.207 76.848 30.923 19.641-4.386 38.415-11.837 55.881-22.186a10 10 0 0114.61 11.687 111.908 111.908 0 01-18.604 34.83 193.884 193.884 0 0018.566-7.121 10 10 0 0112.375 14.688 212.402 212.402 0 01-48.666 51.684l.185 7.874c.002.078.003.157.003.235 0 72.064-27.864 145.002-76.447 200.111-26.378 29.921-57.762 53.435-93.28 69.887-38.719 17.94-81.563 27.034-127.34 27.034zm-17.453-301.394a9.968 9.968 0 01-4.159-.911l-.463-.213c-5.015-2.314-7.204-8.256-4.889-13.27 2.314-5.015 8.255-7.205 13.27-4.889l.414.189c5.021 2.301 7.226 8.236 4.926 13.257a10.005 10.005 0 01-9.099 5.837z"
                    />
                    <path
                      d="M371.522 307.61a9.923 9.923 0 01-5.125-1.423c-4.736-2.841-6.28-8.969-3.438-13.705l.018-.029c2.841-4.736 8.985-6.271 13.72-3.43 4.736 2.841 6.271 8.984 3.43 13.72a10.027 10.027 0 01-8.605 4.867zM286.565 391.241a9.995 9.995 0 01-8.691-5.04c-2.74-4.795-1.075-10.903 3.72-13.644 23.311-13.323 44.007-30.847 61.512-52.085 3.513-4.262 9.816-4.868 14.077-1.356 4.262 3.513 4.869 9.815 1.356 14.077-19.052 23.114-41.601 42.2-67.021 56.729a9.96 9.96 0 01-4.953 1.319z"
                    />
                  </svg>
                </a>
              </li>
              <li v-if="usuario.urlInstagram">
                <a
                  :href="getUrlInstagram(usuario.urlInstagram)"
                  rel="nofollow"
                  class="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500"
                >
                  <span class="sr-only">Instagram</span>
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 551.034 551.034"
                  >
                    <linearGradient
                      id="a"
                      gradientUnits="userSpaceOnUse"
                      x1="275.517"
                      y1="4.57"
                      x2="275.517"
                      y2="549.72"
                      gradientTransform="matrix(1 0 0 -1 0 554)"
                    >
                      <stop offset="0" stop-color="#e09b3d" />
                      <stop offset=".3" stop-color="#c74c4d" />
                      <stop offset=".6" stop-color="#c21975" />
                      <stop offset="1" stop-color="#7024c4" />
                    </linearGradient>
                    <path
                      d="M386.878 0H164.156C73.64 0 0 73.64 0 164.156v222.722c0 90.516 73.64 164.156 164.156 164.156h222.722c90.516 0 164.156-73.64 164.156-164.156V164.156C551.033 73.64 477.393 0 386.878 0zM495.6 386.878c0 60.045-48.677 108.722-108.722 108.722H164.156c-60.045 0-108.722-48.677-108.722-108.722V164.156c0-60.046 48.677-108.722 108.722-108.722h222.722c60.045 0 108.722 48.676 108.722 108.722v222.722z"
                      fill="url(#a)"
                    />
                    <linearGradient
                      id="b"
                      gradientUnits="userSpaceOnUse"
                      x1="275.517"
                      y1="4.57"
                      x2="275.517"
                      y2="549.72"
                      gradientTransform="matrix(1 0 0 -1 0 554)"
                    >
                      <stop offset="0" stop-color="#e09b3d" />
                      <stop offset=".3" stop-color="#c74c4d" />
                      <stop offset=".6" stop-color="#c21975" />
                      <stop offset="1" stop-color="#7024c4" />
                    </linearGradient>
                    <path
                      d="M275.517 133C196.933 133 133 196.933 133 275.516s63.933 142.517 142.517 142.517S418.034 354.1 418.034 275.516 354.101 133 275.517 133zm0 229.6c-48.095 0-87.083-38.988-87.083-87.083s38.989-87.083 87.083-87.083c48.095 0 87.083 38.988 87.083 87.083 0 48.094-38.989 87.083-87.083 87.083z"
                      fill="url(#b)"
                    />
                    <linearGradient
                      id="c"
                      gradientUnits="userSpaceOnUse"
                      x1="418.31"
                      y1="4.57"
                      x2="418.31"
                      y2="549.72"
                      gradientTransform="matrix(1 0 0 -1 0 554)"
                    >
                      <stop offset="0" stop-color="#e09b3d" />
                      <stop offset=".3" stop-color="#c74c4d" />
                      <stop offset=".6" stop-color="#c21975" />
                      <stop offset="1" stop-color="#7024c4" />
                    </linearGradient>
                    <circle cx="418.31" cy="134.07" r="34.15" fill="url(#c)" />
                  </svg>
                </a>
              </li>
              <li v-if="usuario.url500px">
                <a
                  :href="usuario.url500px"
                  rel="nofollow"
                  class="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500"
                >
                  <span class="sr-only">500px</span>
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 216.391 216.391"
                  >
                    <path
                      d="M66.564 85.692c-12.164 0-22.061 9.896-22.061 22.06s9.896 22.061 22.061 22.061 22.061-9.896 22.061-22.061-9.897-22.06-22.061-22.06zM125.091 85.692c-12.164 0-22.061 9.896-22.061 22.06s9.896 22.061 22.061 22.061 22.061-9.896 22.061-22.061-9.897-22.06-22.061-22.06z"
                      fill="none"
                    />
                    <path
                      d="M17.948 97.66a18.513 18.513 0 00-12.756 5.058V86.692h25.621a2 2 0 000-4H3.192a2 2 0 00-2 2v23.984a2 2 0 003.779.914 14.533 14.533 0 0112.977-7.93c8.037 0 14.576 6.539 14.576 14.577 0 8.037-6.539 14.576-14.576 14.576-6.487 0-12.254-4.353-14.024-10.584a1.999 1.999 0 10-3.847 1.093c2.256 7.944 9.605 13.492 17.872 13.492 10.243 0 18.576-8.333 18.576-18.576S28.191 97.66 17.948 97.66zM66.564 81.692c-14.37 0-26.061 11.69-26.061 26.06s11.691 26.061 26.061 26.061 26.061-11.691 26.061-26.061-11.691-26.06-26.061-26.06zm0 48.121c-12.164 0-22.061-9.896-22.061-22.061s9.896-22.06 22.061-22.06 22.061 9.896 22.061 22.06-9.897 22.061-22.061 22.061zM125.091 81.692c-14.37 0-26.061 11.69-26.061 26.06s11.691 26.061 26.061 26.061 26.061-11.691 26.061-26.061-11.692-26.06-26.061-26.06zm0 48.121c-12.164 0-22.061-9.896-22.061-22.061s9.896-22.06 22.061-22.06 22.061 9.896 22.061 22.06-9.897 22.061-22.061 22.061zM171.218 81.641c-7.475 0-13.556 6.081-13.556 13.556v25.741a2 2 0 004 0V95.197c0-5.269 4.287-9.556 9.556-9.556s9.556 4.287 9.556 9.556-4.287 9.556-9.556 9.556c-.311 0-.618-.015-.921-.043a2.005 2.005 0 00-2.182 1.8 2 2 0 001.8 2.182c.429.042.863.062 1.303.062 7.475 0 13.556-6.081 13.556-13.556-.001-7.476-6.082-13.557-13.556-13.557zM215.797 106.331l-10.73-10.616 10.616-10.73a2 2 0 00-2.844-2.814l-10.616 10.73-10.796-10.682a2 2 0 00-2.814 2.844l10.796 10.682-10.682 10.797a2 2 0 002.844 2.814l10.682-10.797 10.73 10.616c.39.386.898.578 1.407.578a2 2 0 001.407-3.422z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <p class="text-xl leading-7 text-gray-500">
              {{ usuario.description }}
            </p>
          </div>
          <div class="w-full mt-4 md:w-1/2 md:mt-0">
            <div id="map-wrap" class="z-10" style="height: 287px">
              <client-only>
                <l-map :zoom="zoom" :center="center">
                  <l-tile-layer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  ></l-tile-layer>
                  <!-- <l-marker
                    :lat-lng="[log[0].latitud, loc[0].longitud]"
                  ></l-marker> -->
                  <v-marker-cluster>
                    <l-marker
                      v-for="(loc, index) in locations"
                      :key="index"
                      :lat-lng="loc"
                      @click="showLocation(index)"
                    >
                    </l-marker>
                  </v-marker-cluster>
                </l-map>
              </client-only>
            </div>
          </div>
        </div>

        <ul
          class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
        >
          <li v-for="(item, index) in loc" :key="index">
            <nuxt-link :to="getSeoUrl(item._id.$oid, item.titulo)">
              <div class="space-y-4">
                <div class="relative pb-2/3">
                  <!-- <img
                  class="absolute object-cover w-full h-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                  alt=""
                /> -->
                  <picture>
                    <source
                      media="(min-width:730px)"
                      :srcset="getResponsiveImage(item.cloudinaryId, '730')"
                    />
                    <source
                      media="(min-width:706px)"
                      :srcset="getResponsiveImage(item.cloudinaryId, '706')"
                    />
                    <source
                      media="(min-width:560px)"
                      :srcset="getResponsiveImage(item.cloudinaryId, '560')"
                    />
                    <source
                      media="(min-width:411px)"
                      :srcset="getResponsiveImage(item.cloudinaryId, '411')"
                    />
                    <img
                      class="absolute object-cover w-full h-full rounded-lg shadow-lg"
                      :srcset="getResponsiveImage(item.cloudinaryId, '360')"
                      :alt="item.titulo"
                      :title="item.titulo"
                      loading="lazy"
                    />
                  </picture>
                </div>

                <div class="space-y-2">
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <h2>{{ item.titulo }}</h2>
                    <!-- <p class="text-indigo-600">Front-end Developer</p> -->
                  </div>
                </div>
              </div>
            </nuxt-link>
          </li>

          <!-- More people... -->
        </ul>
      </div>
    </div>
    <div v-if="modalIsOpen" class="fixed inset-0 overflow-y-auto z-1001">
      <div
        class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
        >&#8203;
        <div
          class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-gray-900 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
            <button
              type="button"
              class="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:text-gray-500"
              aria-label="Close"
              @click="modalIsOpen = false"
            >
              <!-- Heroicon name: x -->
              <svg
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                id="modal-headline"
                class="text-lg font-medium leading-6 text-gray-300"
              >
                {{ activeLocation.titulo }}
              </h3>
              <div class="mt-2">
                <div v-show="!isLoaded">
                  <img
                    class="object-contain w-full h-52"
                    src="~/assets/img/Eclipse-1s-200px.gif"
                  />
                </div>
                <transition name="fade">
                  <img
                    v-show="isLoaded"
                    name="fade"
                    class="w-full object-fit"
                    :src="activeImage"
                    @load="onImgLoad"
                  />
                </transition>
              </div>
              <div class="mt-2">
                <p class="text-sm leading-5 text-gray-500">
                  {{ activeLocation.acceso }}
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span class="flex w-full rounded-md shadow-sm sm:w-auto">
              <nuxt-link
                :to="getSeoUrl(activeLocation._id.$oid, activeLocation.titulo)"
              >
                <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-teal-700 border border-transparent rounded-md shadow-sm hover:bg-teal-500 focus:outline-none focus:border-teal-500 focus:shadow-outline-teal sm:text-sm sm:leading-5 md:ml-4"
                >
                  Ver localización
                </button>
              </nuxt-link>
            </span>

            <span
              class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                type="button"
                class="inline-flex justify-center px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                @click="modalIsOpen = false"
              >
                Cerrar
              </button>
            </span>
          </div>
          <div>
            <span class="flex w-full rounded-md shadow-sm sm:w-auto md:ml-4">
              <nuxt-link
                class="text-sm text-right text-teal-500 underline"
                :to="getSeoUrl(activeLocation._id.$oid, activeLocation.titulo)"
                target="_blank"
              >
                Abrir en pestaña nueva
              </nuxt-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usuariosdata from '@/assets/data/usuarios.json'

export default {
  async asyncData({ $content, params }) {
    const loc = await $content('localizaciones')
      .where({ autor: params.user })
      .fetch()

    const usuario = usuariosdata.find(function (item) {
      return item.username === params.user
    })
    // let fullCloudinary = loc.cloudinaryId
    // // if (!fullCloudinary.includes('subexpuesta')) {
    // //   fullCloudinary = 'subexpuesta/' + fullCloudinary
    // // }
    // fullCloudinary = `https://res.cloudinary.com/djhqderty/image/upload/c_scale,f_auto,q_60,w_1024/${fullCloudinary}.jpg`
    // const fullQuote = `Contaminación Lumínica: ${loc.contaminacionLuminica}/10 Peligrosidad de la zona: ${loc.peligrosidad}/10`
    // let fullTags = 'subexpuesta.com, localizaciones'
    // if (loc.tags.length > 0) fullTags += loc.tags

    return { loc, usuario }
  },
  data() {
    return {
      center: null,
      zoom: 1,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      showMap: true,

      locations: [],
      modalIsOpen: false,
      activeLocation: null,
      activeImage:
        'https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif',
      isLoaded: false,
    }
  },
  mounted() {
    this.center = this.$L.latLng(54.2274799, -4.8529992)
    this.loc.forEach((item) => {
      this.locations.push(this.$L.latLng(item.latitud, item.longitud))
    })
    // this.fullUrl = this.$nuxt.$route.fullPath
  },
  methods: {
    onImgLoad() {
      this.isLoaded = true
    },
    getSeoUrl(id, url) {
      return `/localizaciones/${id}/${this.$convertSEO(url)}`
    },
    showLocation(index) {
      this.isLoaded = false
      this.modalIsOpen = true
      this.activeLocation = this.loc[index]
      let imagenCloud = this.loc[index].cloudinaryId
      if (!imagenCloud.includes('subexpuesta')) {
        imagenCloud = 'subexpuesta/' + imagenCloud
      }

      this.activeImage = this.$cloudinary().url(imagenCloud, {
        crop: 'scale',
        width: 500,
        fetchFormat: 'auto',
        quality: 'auto',
      })
    },
    getUrlInstagram(usuario) {
      usuario = usuario.replace('@', '')
      if (!usuario.includes('http')) {
        return `https://www.instagram.com/${usuario}`
      }
      return usuario
    },
    getUrlWeb(url) {
      if (!url.includes('http')) {
        return `https://${url}`
      }
    },
    getResponsiveImage(cloudinaryId, size) {
      return `https://res.cloudinary.com/djhqderty/image/upload/f_auto,q_50,w_${size}/v1/${cloudinaryId}`
    },
  },
  head() {
    return {
      title: `${this.usuario.username} - Subexpuesta.com`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `📷 ${this.loc.length} localizaciones de fotografía. ${this.usuario.description}`,
        },
        // OG Meta Tags
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '1508658239428785',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.usuario.username} - Subexpuesta.com`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `📷 ${this.loc.length} localizaciones de fotografía. ${this.usuario.description}`,
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'es_ES',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Subexpuesta.com',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://www.subexpuesta.com${this.$route.path}`,
        },

        // Twitter Meta Tags, if they are missing then these are replaced by OG tags
        {
          hide: 'twitter:card',
          name: 'twitter:card',
          content: `📷 ${this.loc.length} localizaciones de fotografía. ${this.usuario.description}`,
        },
        {
          hide: 'twitter:site',
          name: 'twitter:site',
          content: '@subexpuesta_com',
        },
        {
          hide: 'twitter:title',
          name: 'twitter:title',
          content: `${this.usuario.username} - Subexpuesta.com`,
        },
        {
          hide: 'twitter:description',
          name: 'twitter:description',
          content: `📷 ${this.loc.length} localizaciones de fotografía. ${this.usuario.description}`,
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.css',
        },
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.Default.css',
        },
        {
          rel: 'canonical',
          href: `https://www.subexpuesta.com${this.$route.path}`,
        },
      ],
    }
  },
}
</script>
