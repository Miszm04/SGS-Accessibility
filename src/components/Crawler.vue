<template>
    <div class="container">
      <el-descriptions title="URL统计信息" border>
        <el-descriptions-item label="总页数">{{
          totalPages
        }}</el-descriptions-item>
        <el-descriptions-item label="总唯一URL数">{{
          totalUniqueUrls
        }}</el-descriptions-item>
      </el-descriptions>
  
      <el-table
        :data="allAbsoluteUrls"
        border
        style="width: 100%; margin-top: 20px"
        fit
        highlight-current-row
      >
        <el-table-column label="URL地址" min-width="300" show-overflow-tooltip>
          <template #default="scope">
            <!-- 可跳转的链接，使用a标签包裹 -->
            <a
              :href="scope.row"
              target="_blank"
              rel="noopener noreferrer"
              class="url-link"
            >
              {{ scope.row }}
            </a>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalPages: 25,
        totalUniqueUrls: 63,
        allAbsoluteUrls: [
          "https://vivoonlinestore.com/",
          "https://vivoonlinestore.com/collections/smartphones",
          "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
          "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
          "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
          "https://vivoonlinestore.com/products/v50",
          "https://vivoonlinestore.com/products/x-200-pro",
          "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
          "https://vivoonlinestore.com/products/v50-lite-5g",
          "https://vivoonlinestore.com/collections/accesorios",
          "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
          "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
          "https://vivoonlinestore.com/products/tws-3e",
          "https://vivoonlinestore.com/collections/accesorio",
          "https://vivoonlinestore.com/pages/contact",
          "https://vivoonlinestore.com/blogs/news",
          "https://vivoonlinestore.com/account/login",
          "https://vivoonlinestore.com/cart",
          "https://vivoonlinestore.com/products/y19s",
          "https://vivoonlinestore.com/products/v50-lite-4g",
          "https://vivoonlinestore.com/products/y28",
          "https://vivoonlinestore.com/blogs/news/articulo-3",
          "https://vivoonlinestore.com/blogs/news/articulo-2",
          "https://vivoonlinestore.com/blogs/news/articulo-1",
          "https://vivoonlinestore.com/products/v40-se-80w",
          "https://vivoonlinestore.com/pages/garantias",
          "https://www.vivo.com/es/support/",
          "https://www.vivo.com/es/support/questionList",
          "https://www.vivo.com/es/about-vivo/news",
          "https://twitter.com/vivo_espana",
          "https://www.youtube.com/channel/UCZyFpQ-HJ5Qbw5J4fHEHAYw?view_as=subscribe",
          "https://www.instagram.com/vivo_espana/",
          "https://www.tiktok.com/@vivo_espana?",
          "https://vivoonlinestore.com/pages/politica-de-privacidad",
          "https://vivoonlinestore.com/pages/politica-de-cookies",
          "https://vivoonlinestore.com/pages/politica-de-envios",
          "https://vivoonlinestore.com/pages/condiciones-generales-de-venta",
          "https://vivoonlinestore.com/products/v40",
          "https://vivoonlinestore.com/products/v40-lite",
          "https://vivoonlinestore.com/products/v40-se",
          "https://vivoonlinestore.com/products/y03",
          "https://vivoonlinestore.com/products/y28s-5g",
          "https://vivoonlinestore.com/products/cargador-44w",
          "https://vivoonlinestore.com/products/cargador80w",
          "https://vivoonlinestore.com/collections/smartphone",
          "https://vivoonlinestore.com/collections/vendors?q=vivo",
          "https://vivoonlinestore.com/products/x-200-pro#",
          "https://vivoonlinestore.com/products/cargador-90w",
          "https://vivoonlinestore.com/products/v50#",
          "https://vivoonlinestore.com/products/v50-lite-5g-bundle#",
          "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
          "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
          "https://vivoonlinestore.com/products/v50-lite-5g#",
          "https://vivoonlinestore.com/products/tws-3e#",
          "https://vivoonlinestore.com/cart/clear",
          "https://vivoonlinestore.com/products/v50-lite-4g#",
          "https://vivoonlinestore.com/account/register",
          "https://vivoonlinestore.com/products/v40-lite#",
          "https://vivoonlinestore.com/products/v40-se-80w#",
          "https://vivoonlinestore.com/products/y28#",
          "https://vivoonlinestore.com/products/v40#",
          "https://vivoonlinestore.com/products/y19s#",
          "https://vivoonlinestore.com/products/v40-se#",
        ],
        data: [
          {
            url: "https://vivoonlinestore.com/",
            depth: 1,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/y19s",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//vivoonlinestore.com/cdn/shop/files/vivo_SHOP_Y19S_K',
                absoluteUrl: "https://vivoonlinestore.com/products/y19s",
              },
              {
                href: "/products/x-200-pro",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//vivoonlinestore.com/cdn/shop/files/vivo_Web_Banner_',
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//vivoonlinestore.com/cdn/shop/files/vivo_Web_Banner_',
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50-lite-5g",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//vivoonlinestore.com/cdn/shop/files/vivo_Web_Banner_',
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-4g",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//vivoonlinestore.com/cdn/shop/files/vivo_Web_Banner_',
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/x-200-pro",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/x-200-pro",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/x-200-pro",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/collections/smartphones",
            depth: 2,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/products/x-200-pro",
                text: "¡Nuevo!",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/x-200-pro",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "¡Nuevo!",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50-lite-5g",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-5g",
                text: "¡Nuevo!",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-5g",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-4g",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/v50-lite-4g",
                text: "¡Nuevo!",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
            depth: 2,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/products/x-200-pro",
                text: "¡Nuevo!",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/x-200-pro",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "¡Nuevo!",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50-lite-5g",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-5g",
                text: "¡Nuevo!",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-5g",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-4g",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/v50-lite-4g",
                text: "¡Nuevo!",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
            depth: 2,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/products/x-200-pro",
                text: "¡Nuevo!",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/x-200-pro",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "¡Nuevo!",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50-lite-5g",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-5g",
                text: "¡Nuevo!",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-5g",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/products/v50-lite-4g",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/v50-lite-4g",
                text: "¡Nuevo!",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/products/x-200-pro",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/vendors?q=vivo",
                text: "vivo",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/vendors?q=vivo",
              },
              {
                href: "#",
                text: "Ver más",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro#",
              },
              {
                href: "#",
                text: "Ver menos",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro#",
              },
              {
                href: "",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/files/vivo',
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "#",
                text: "Write a review",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro#",
              },
              {
                href: "/products/v50",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "Comprar ahora",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/cargador-90w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-90w",
              },
              {
                href: "/products/cargador-90w",
                text: "Cargador 90W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-90w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/products/v50",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/vendors?q=vivo",
                text: "vivo",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/vendors?q=vivo",
              },
              {
                href: "#",
                text: "Ver más",
                absoluteUrl: "https://vivoonlinestore.com/products/v50#",
              },
              {
                href: "#",
                text: "Ver menos",
                absoluteUrl: "https://vivoonlinestore.com/products/v50#",
              },
              {
                href: "",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/files/vivo',
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "#",
                text: "Write a review",
                absoluteUrl: "https://vivoonlinestore.com/products/v50#",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "Comprar ahora",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-4g",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/v50-lite-4g",
                text: "V50 Lite",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/v50-lite-4g",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/cargador-90w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-90w",
              },
              {
                href: "/products/cargador-90w",
                text: "Cargador 90W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-90w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/vendors?q=vivo",
                text: "vivo",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/vendors?q=vivo",
              },
              {
                href: "#",
                text: "Ver más",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle#",
              },
              {
                href: "#",
                text: "Ver menos",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle#",
              },
              {
                href: "",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/files/vivo',
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "#",
                text: "Write a review",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle#",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "Comprar ahora",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/y19s",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/y19s",
              },
              {
                href: "/products/y19s",
                text: "Y19s",
                absoluteUrl: "https://vivoonlinestore.com/products/y19s",
              },
              {
                href: "/products/y19s",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/y19s",
              },
              {
                href: "/products/v50",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/products/tws-3e",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/tws-3e",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "Cargador 44W ( exclusivo operador)（2）",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "Comprar ahora",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "Cargador 90W (exclusivo operador)（2）",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "Comprar ahora",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
              {
                href: "/products/cargador-44w",
                text: "Cargador 44W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/collections/accesorios",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/products/tws-3e",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/tws-3e",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "Cargador 44W ( exclusivo operador)（2）",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "Comprar ahora",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "Cargador 90W (exclusivo operador)（2）",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "Comprar ahora",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
              {
                href: "/products/cargador-44w",
                text: "Cargador 44W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/products/tws-3e",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/tws-3e",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "Cargador 44W ( exclusivo operador)（2）",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "Comprar ahora",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "Cargador 90W (exclusivo operador)（2）",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "Comprar ahora",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
              {
                href: "/products/cargador-44w",
                text: "Cargador 44W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/products/v50-lite-5g",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/vendors?q=vivo",
                text: "vivo",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/vendors?q=vivo",
              },
              {
                href: "#",
                text: "Ver más",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g#",
              },
              {
                href: "#",
                text: "Ver menos",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g#",
              },
              {
                href: "",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/files/vivo',
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "#",
                text: "Write a review",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g#",
              },
              {
                href: "/products/v40-se-80w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/v40-se-80w",
                text: "V40 SE 5G 80W",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/v40-se-80w",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/v40-lite",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite",
              },
              {
                href: "/products/v40-lite",
                text: "V40 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite",
              },
              {
                href: "/products/v40-lite",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite",
              },
              {
                href: "/products/cargador80w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador80w",
              },
              {
                href: "/products/cargador80w",
                text: "Cargador 80W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador80w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/products/tws-3e",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/vendors?q=vivo",
                text: "vivo",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/vendors?q=vivo",
              },
              {
                href: "#",
                text: "Ver más",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e#",
              },
              {
                href: "#",
                text: "Ver menos",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e#",
              },
              {
                href: "",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/files/vivo',
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "#",
                text: "Write a review",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e#",
              },
              {
                href: "/products/y28",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "/products/y28",
                text: "Y28",
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "/products/y28",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "/products/y28s-5g",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/y28s-5g",
              },
              {
                href: "/products/y28s-5g",
                text: "Y28s 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/y28s-5g",
              },
              {
                href: "/products/y28s-5g",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/y28s-5g",
              },
              {
                href: "/products/cargador-44w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
              {
                href: "/products/cargador-44w",
                text: "Cargador 44W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/pages/contact",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50-lite-4g",
                text: "V50 Lite 4G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/y19s",
                text: "Y19s",
                absoluteUrl: "https://vivoonlinestore.com/products/y19s",
              },
              {
                href: "/products/v40-se-80w",
                text: "V40 SE 5G 80W",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/y28",
                text: "Y28",
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/pages/garantias",
                text: "Garantías",
                absoluteUrl: "https://vivoonlinestore.com/pages/garantias",
              },
              {
                href: "https://www.vivo.com/es/support/",
                text: "Garantía y reparación",
                absoluteUrl: "https://www.vivo.com/es/support/",
              },
              {
                href: "https://www.vivo.com/es/support/questionList",
                text: "Preguntas Frecuentes",
                absoluteUrl: "https://www.vivo.com/es/support/questionList",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/blogs/news",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/blogs/news/articulo-3",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/articles/2',
                absoluteUrl: "https://vivoonlinestore.com/blogs/news/articulo-3",
              },
              {
                href: "/blogs/news/articulo-3",
                text: "vivo presenta el V40 5G, el primer dispositivo de gama media diseñado conjuntamente con ZEISS",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news/articulo-3",
              },
              {
                href: "/blogs/news/articulo-3",
                text: "Leer más",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news/articulo-3",
              },
              {
                href: "/blogs/news/articulo-2",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/articles/e',
                absoluteUrl: "https://vivoonlinestore.com/blogs/news/articulo-2",
              },
              {
                href: "/blogs/news/articulo-2",
                text: "vivo amplia su compromiso en Europa abriendo una nueva sede en Madrid",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news/articulo-2",
              },
              {
                href: "/blogs/news/articulo-2",
                text: "Leer más",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news/articulo-2",
              },
              {
                href: "/blogs/news/articulo-1",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/articles/4',
                absoluteUrl: "https://vivoonlinestore.com/blogs/news/articulo-1",
              },
              {
                href: "/blogs/news/articulo-1",
                text: "Diseñado para vivir más la vida: vivo anuncia la llegada del V40 SE 5G en España",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news/articulo-1",
              },
              {
                href: "/blogs/news/articulo-1",
                text: "Leer más",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news/articulo-1",
              },
              {
                href: "",
                text: "Anterior",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "",
                text: "Siguiente",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/cart",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart/clear",
                text: "Vaciar carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart/clear",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50-lite-4g",
                text: "V50 Lite 4G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/y19s",
                text: "Y19s",
                absoluteUrl: "https://vivoonlinestore.com/products/y19s",
              },
              {
                href: "/products/v40-se-80w",
                text: "V40 SE 5G 80W",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/y28",
                text: "Y28",
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/pages/garantias",
                text: "Garantías",
                absoluteUrl: "https://vivoonlinestore.com/pages/garantias",
              },
              {
                href: "https://www.vivo.com/es/support/",
                text: "Garantía y reparación",
                absoluteUrl: "https://www.vivo.com/es/support/",
              },
              {
                href: "https://www.vivo.com/es/support/questionList",
                text: "Preguntas Frecuentes",
                absoluteUrl: "https://www.vivo.com/es/support/questionList",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/products/v50-lite-4g",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/vendors?q=vivo",
                text: "vivo",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/vendors?q=vivo",
              },
              {
                href: "#",
                text: "Ver más",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g#",
              },
              {
                href: "#",
                text: "Ver menos",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g#",
              },
              {
                href: "",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/files/vivo',
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "#",
                text: "Write a review",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g#",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "Comprar ahora",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-4g",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/v50-lite-4g",
                text: "V50 Lite",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/v50-lite-4g",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/cargador-90w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-90w",
              },
              {
                href: "/products/cargador-90w",
                text: "Cargador 90W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-90w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/account/login",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "Volver a la tienda",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/account/register",
                text: "Registrarse",
                absoluteUrl: "https://vivoonlinestore.com/account/register",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/v50-lite-4g",
                text: "V50 Lite 4G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-4g",
              },
              {
                href: "/products/y19s",
                text: "Y19s",
                absoluteUrl: "https://vivoonlinestore.com/products/y19s",
              },
              {
                href: "/products/v40-se-80w",
                text: "V40 SE 5G 80W",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/y28",
                text: "Y28",
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/pages/garantias",
                text: "Garantías",
                absoluteUrl: "https://vivoonlinestore.com/pages/garantias",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/collections/accesorio",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/products/tws-3e",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/tws-3e",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "Cargador 44W ( exclusivo operador)（2）",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w-exclusivo-operador-2",
                text: "Comprar ahora",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-44w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "Cargador 90W (exclusivo operador)（2）",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-90w-exclusivo-operador-2",
                text: "Comprar ahora",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/cargador-90w-exclusivo-operador-2",
              },
              {
                href: "/products/cargador-44w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
              {
                href: "/products/cargador-44w",
                text: "Cargador 44W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/products/v40-lite",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/vendors?q=vivo",
                text: "vivo",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/vendors?q=vivo",
              },
              {
                href: "#",
                text: "Ver más",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite#",
              },
              {
                href: "#",
                text: "Ver menos",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite#",
              },
              {
                href: "",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/files/vivo',
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite",
              },
              {
                href: "#",
                text: "Write a review",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite#",
              },
              {
                href: "/products/v40-lite",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite",
              },
              {
                href: "/products/v40-lite",
                text: "V40 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite",
              },
              {
                href: "/products/v40-lite",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite",
              },
              {
                href: "/products/v40-se-80w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/v40-se-80w",
                text: "V40 SE 5G 80W",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/v40-se-80w",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/y28s-5g",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/y28s-5g",
              },
              {
                href: "/products/y28s-5g",
                text: "Y28s 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/y28s-5g",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/products/v40-se-80w",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/vendors?q=vivo",
                text: "vivo",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/vendors?q=vivo",
              },
              {
                href: "#",
                text: "Ver más",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w#",
              },
              {
                href: "#",
                text: "Ver menos",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w#",
              },
              {
                href: "",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/files/vivo',
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "#",
                text: "Write a review",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w#",
              },
              {
                href: "/products/tws-3e",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/tws-3e",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/y28",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "/products/y28",
                text: "Y28",
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "/products/y28",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "/products/cargador-44w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
              {
                href: "/products/cargador-44w",
                text: "Cargador 44W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/products/y28",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/vendors?q=vivo",
                text: "vivo",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/vendors?q=vivo",
              },
              {
                href: "#",
                text: "Ver más",
                absoluteUrl: "https://vivoonlinestore.com/products/y28#",
              },
              {
                href: "#",
                text: "Ver menos",
                absoluteUrl: "https://vivoonlinestore.com/products/y28#",
              },
              {
                href: "",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/files/vivo',
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "#",
                text: "Write a review",
                absoluteUrl: "https://vivoonlinestore.com/products/y28#",
              },
              {
                href: "/products/v40-se-80w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/v40-se-80w",
                text: "V40 SE 5G 80W",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/v40-se-80w",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/y28s-5g",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/y28s-5g",
              },
              {
                href: "/products/y28s-5g",
                text: "Y28s 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/y28s-5g",
              },
              {
                href: "/products/y28s-5g",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/y28s-5g",
              },
              {
                href: "/products/cargador-44w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
              {
                href: "/products/cargador-44w",
                text: "Cargador 44W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/products/v40",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/vendors?q=vivo",
                text: "vivo",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/vendors?q=vivo",
              },
              {
                href: "#",
                text: "Ver más",
                absoluteUrl: "https://vivoonlinestore.com/products/v40#",
              },
              {
                href: "#",
                text: "Ver menos",
                absoluteUrl: "https://vivoonlinestore.com/products/v40#",
              },
              {
                href: "",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/files/vivo',
                absoluteUrl: "https://vivoonlinestore.com/products/v40",
              },
              {
                href: "#",
                text: "Write a review",
                absoluteUrl: "https://vivoonlinestore.com/products/v40#",
              },
              {
                href: "/products/v40-se-80w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/v40-se-80w",
                text: "V40 SE 5G 80W",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/v40-se-80w",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/v40-lite",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite",
              },
              {
                href: "/products/v40-lite",
                text: "V40 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite",
              },
              {
                href: "/products/v40-lite",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-lite",
              },
              {
                href: "/products/cargador80w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador80w",
              },
              {
                href: "/products/cargador80w",
                text: "Cargador 80W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador80w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/products/y19s",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/vendors?q=vivo",
                text: "vivo",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/vendors?q=vivo",
              },
              {
                href: "#",
                text: "Ver más",
                absoluteUrl: "https://vivoonlinestore.com/products/y19s#",
              },
              {
                href: "#",
                text: "Ver menos",
                absoluteUrl: "https://vivoonlinestore.com/products/y19s#",
              },
              {
                href: "",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/files/vivo',
                absoluteUrl: "https://vivoonlinestore.com/products/y19s",
              },
              {
                href: "#",
                text: "Write a review",
                absoluteUrl: "https://vivoonlinestore.com/products/y19s#",
              },
              {
                href: "/products/v40-se-80w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/v40-se-80w",
                text: "V40 SE 5G 80W",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/v40-se-80w",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se-80w",
              },
              {
                href: "/products/y28s-5g",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/y28s-5g",
              },
              {
                href: "/products/y28s-5g",
                text: "Y28s 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/y28s-5g",
              },
              {
                href: "/products/y28s-5g",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/y28s-5g",
              },
              {
                href: "/products/cargador-44w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
              {
                href: "/products/cargador-44w",
                text: "Cargador 44W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
            ],
          },
          {
            url: "https://vivoonlinestore.com/products/v40-se",
            depth: 3,
            aTags: [
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/account/login",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0\n        \n        \n          €0,00",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/",
              },
              {
                href: " /account/login ",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/account/login",
              },
              {
                href: "/cart",
                text: "0",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/smartphones",
                text: "Smartphones",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphones",
              },
              {
                href: "/collections/smartphone#product-highlight-x",
                text: "Serie X",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-x",
              },
              {
                href: "/collections/smartphone#product-highlight-v",
                text: "Serie V",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-v",
              },
              {
                href: "/collections/smartphone#product-highlight-y",
                text: "Serie Y",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/smartphone#product-highlight-y",
              },
              {
                href: "/products/v50",
                text: "V50",
                absoluteUrl: "https://vivoonlinestore.com/products/v50",
              },
              {
                href: "/products/x-200-pro",
                text: "X200 Pro",
                absoluteUrl: "https://vivoonlinestore.com/products/x-200-pro",
              },
              {
                href: "/products/v50-lite-5g-bundle",
                text: "V50 Lite 5G Bundle",
                absoluteUrl:
                  "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
              },
              {
                href: "/products/v50-lite-5g",
                text: "V50 Lite 5G",
                absoluteUrl: "https://vivoonlinestore.com/products/v50-lite-5g",
              },
              {
                href: "/collections/accesorios",
                text: "Accesorios",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorios",
              },
              {
                href: "/collections/accesorios#product-highlight-tws",
                text: "Auriculares",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-tws",
              },
              {
                href: "/collections/accesorios#product-highlight-cargador",
                text: "Cargadores",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/accesorios#product-highlight-cargador",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/collections/accesorio",
                text: "Cargadores",
                absoluteUrl: "https://vivoonlinestore.com/collections/accesorio",
              },
              {
                href: "/pages/contact",
                text: "Contacto",
                absoluteUrl: "https://vivoonlinestore.com/pages/contact",
              },
              {
                href: "/blogs/news",
                text: "Explora vivo",
                absoluteUrl: "https://vivoonlinestore.com/blogs/news",
              },
              {
                href: "/cart",
                text: "Ver carrito",
                absoluteUrl: "https://vivoonlinestore.com/cart",
              },
              {
                href: "/collections/vendors?q=vivo",
                text: "vivo",
                absoluteUrl:
                  "https://vivoonlinestore.com/collections/vendors?q=vivo",
              },
              {
                href: "#",
                text: "Ver más",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se#",
              },
              {
                href: "#",
                text: "Ver menos",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se#",
              },
              {
                href: "",
                text: '\u003Cimg\n\t\t\t\t\tclass="pa w100 h100 l0 t0"\n\t\t\t\t\tsrc="//cdn.shopify.com/s/files/1/0698/0406/4998/files/vivo',
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se",
              },
              {
                href: "#",
                text: "Write a review",
                absoluteUrl: "https://vivoonlinestore.com/products/v40-se#",
              },
              {
                href: "/products/tws-3e",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/tws-3e",
                text: "TWS 3e",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/tws-3e",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/tws-3e",
              },
              {
                href: "/products/y28",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "/products/y28",
                text: "Y28",
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "/products/y28",
                text: "Comprar ahora",
                absoluteUrl: "https://vivoonlinestore.com/products/y28",
              },
              {
                href: "/products/cargador-44w",
                text: "",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
              {
                href: "/products/cargador-44w",
                text: "Cargador 44W",
                absoluteUrl: "https://vivoonlinestore.com/products/cargador-44w",
              },
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .url-link {
    color: #409eff; /* ElementUI主题色 */
    text-decoration: none;
    transition: color 0.2s;
  }
  
  .url-link:hover {
    color: #185bb9; /* 悬停时加深颜色 */
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 10px;
    }
  }
  </style>