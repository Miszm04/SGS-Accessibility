<template>
  <div class="container">
    <el-descriptions title="URL统计信息" border>
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
      totalPages: 27,
      totalUniqueUrls: 57,
      allAbsoluteUrls: [
        "https://vivoonlinestore.com/",
        "https://vivoonlinestore.com/collections/smartphones",
        "https://vivoonlinestore.com/products/x-200-fe",
        "https://vivoonlinestore.com/products/x-200-pro",
        "https://vivoonlinestore.com/products/v50-lite-5g-bundle",
        "https://vivoonlinestore.com/products/v50-lite-5g",
        "https://vivoonlinestore.com/collections/accesorios",
        "https://vivoonlinestore.com/products/tws-3e",
        "https://vivoonlinestore.com/collections/accesorio",
        "https://vivoonlinestore.com/pages/contact",
        "https://vivoonlinestore.com/pages/buscar",
        "https://vivoonlinestore.com/account/login",
        "https://vivoonlinestore.com/cart",
        "https://vivoonlinestore.com/products/v50",
        "https://vivoonlinestore.com/products/v50-lite-4g",
        "https://vivoonlinestore.com/products/y19s",
        "https://vivoonlinestore.com/products/v40-se-80w",
        "https://vivoonlinestore.com/products/y28",
        "https://vivoonlinestore.com/pages/garantias",
        "https://www.vivo.com/es/support/",
        "https://www.vivo.com/es/support/questionList",
        "https://vivoonlinestore.com/blogs/news",
        "https://www.vivo.com/es/about-vivo/news",
        "https://www.descuentoestudiante.com/vivo-descuento-estudiante-iframe",
        "https://twitter.com/vivo_espana",
        "https://www.youtube.com/channel/UCZyFpQ-HJ5Qbw5J4fHEHAYw?view_as=subscribe",
        "https://www.instagram.com/vivo_espana/",
        "https://www.tiktok.com/@vivo_espana?",
        "https://vivoonlinestore.com/pages/politica-de-privacidad",
        "https://vivoonlinestore.com/pages/politica-de-cookies",
        "https://vivoonlinestore.com/pages/politica-de-envios",
        "https://vivoonlinestore.com/pages/condiciones-generales-de-venta",
        "https://vivoonlinestore.com/buscar",
        "https://vivoonlinestore.com/products/y29s",
        "https://vivoonlinestore.com/collections/buscar",
        "https://vivoonlinestore.com/products/v40",
        "https://vivoonlinestore.com/products/v40-lite",
        "https://vivoonlinestore.com/products/v40-se",
        "https://vivoonlinestore.com/products/y03",
        "https://vivoonlinestore.com/products/y28s-5g",
        "https://vivoonlinestore.com/products/cargador-44w",
        "https://vivoonlinestore.com/products/cargador80w",
        "https://vivoonlinestore.com/products/cargador-90w",
        "https://vivoonlinestore.com/products/buscar",
        "https://vivoonlinestore.com/collections/vendors?q=vivo",
        "https://cdn.shopify.com/s/files/1/0698/0406/4998/files/Fiche_2217850_es.pdf?v=1750842316",
        "https://cdn.shopify.com/s/files/1/0698/0406/4998/files/Fiche__X200_FE.pdf?v=1750932055",
        "https://vivoonlinestore.com/account/buscar",
        "https://vivoonlinestore.com/account/register",
        "https://vivoonlinestore.com/cart/clear",
        "https://cdn.shopify.com/s/files/1/0698/0406/4998/files/Fiche_2220119_es.pdf?v=1751017021",
        "https://judgeme.imgix.net/vivoonlinestore/1751407600__1751407577160-1000141087__original.jpg?auto=format",
        "https://judgeme.imgix.net/vivoonlinestore/1751407605__1751407580727-1000141086__original.jpg?auto=format",
        "https://judgeme.imgix.net/vivoonlinestore/1751407611__1751407594886-1000141086__original.jpg?auto=format",
        "https://cdn.shopify.com/s/files/1/0698/0406/4998/files/Fiche_2217839_es.pdf?v=1750842159",
        "https://cdn.shopify.com/s/files/1/0698/0406/4998/files/Fiche_2217906_es.pdf?v=1750842448",
        "https://cdn.shopify.com/s/files/1/0698/0406/4998/files/Fiche_2202854_es.pdf?v=1750842643",
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
  color: #409eff;
  /* ElementUI主题色 */
  text-decoration: none;
  transition: color 0.2s;
}

.url-link:hover {
  color: #185bb9;
  /* 悬停时加深颜色 */
  text-decoration: underline;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
</style>