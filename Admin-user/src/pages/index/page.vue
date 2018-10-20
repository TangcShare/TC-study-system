<template>
  <d2-container class="page">
    <d2-page-cover
      title="后台管理系统"
      sub-title="">
      <!--<d2-icon-svg style="width: 120px;" name="d2-admin"/>-->
      <template slot="footer">
      </template>
    </d2-page-cover>
  </d2-container>
</template>

<script>
import D2HelpBtn from './components/d2-help-btn'
import D2Badge from './components/d2-badge'
export default {
  components: {
    D2HelpBtn,
    D2Badge
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page {
  .page__btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 20px;
    span {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
    }
  }
}
</style>
