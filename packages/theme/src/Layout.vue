<script setup lang='ts'>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CustomHead from './components/CustomHead.vue'
import ArticleInfo from './components/ArticleInfo.vue'
import Comment from './components/Comment.vue'
import { useRoute } from 'vitepress';
import{ ref, onBeforeMount, onBeforeUpdate } from 'vue';

const route = useRoute();
const isLongTitle = ref(false);

const checkLongTitle = () => {
  if (route.data.title.length >= 15) {
    isLongTitle.value = true;
  } else {
    isLongTitle.value = false;
  }
}
onBeforeMount(() => {
  checkLongTitle();
})

onBeforeUpdate(() => {
  checkLongTitle();
})
</script>

<template>
  <CustomHead />
  <Header />
  <div class="main">
    <ArticleInfo />
    <!-- In the style we check if we are in mobile and in the index.md to reduce the top margin and make it better on mobile devices -->
    <div class="group" :style="route.data.title === 'José María Ruiz Laguna' ? 'margin-top: 0px' : ''">
      <div v-if="route.data.title != 'José María Ruiz Laguna'" :class="isLongTitle ? 'long-title background' : 'background'">
        {{ route.data.title }}
      </div>
      
      <Content class="article" />
    </div>
    <Footer />
    <Comment />
  </div>
</template>

<style scoped>
.main{
  max-width: var(--max-width);
  margin: 0 auto 5rem;
}

.group {
  position: relative;
  margin: 10rem 0;
}

.background {
  position: absolute;
  font-size: 7rem;
  z-index: -1;
  opacity: 1;
  color: transparent;
  left: -3rem;
  top: -3rem;
  -webkit-text-stroke: 2px var(--border);
}

@media (max-width: 768px) {
  
  /** In mobile devices we need to set the titles at the start and with reduced font size */
  .background {
    font-size: 5rem;
    left: 0rem;
    text-align: start !important;
  }

  /** With longer titles, we need line-height and more top space to show it correctly in mobile devices */
  .long-title {
    line-height: 1;
    top: -8rem;
  }
  
}

</style>
