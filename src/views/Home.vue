<template>
  <div class="layout">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%'}">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
        </Menu>
      </Header>
      <Content class="content">
        <router-view/>
      </Content>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Home extends Vue {

}
</script>

<style lang="less" scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  //width: 420px;
  height: 100%;
  margin: 0 auto;
  //margin-right: 20px;
}
.content{
  margin: 88px 20px 0;
  background: #fff;
  minHeight: 800px;
  padding: 20px 100px;
}
</style>
