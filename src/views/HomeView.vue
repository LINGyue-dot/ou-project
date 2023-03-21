<template>
  <div class="home">
    <top-bar />
    <div class="container">
      <div class="left-container">
        <el-form label-width="80px">
          <el-form-item label="相关标签">
            <el-input placeholder="请输入合适的标签" v-model="tag" />
          </el-form-item>
        </el-form>
      </div>
      <div class="right-container">
        <h3 class="title">偏好设置</h3>
        <div class="block">
          <span>CPU 权重</span>
          <el-slider v-model="cpuWeight" show-input></el-slider>
        </div>
        <div class="block">
          <span>硬盘权重</span>
          <el-slider v-model="diskWeight" show-input></el-slider>
        </div>
        <div class="block">
          <span>主板权重</span>
          <el-slider v-model="mainWeight" show-input></el-slider>
        </div>
        <div class="block">
          <span>显卡权重</span>
          <el-slider v-model="graphicsWeight" show-input></el-slider>
        </div>
        <div class="block">
          <span>内存权重</span>
          <el-slider v-model="memoryWeight" show-input></el-slider>
        </div>

        <div class="block" style="margin-top: 30px">
          <span style="margin-right: 20px">预算</span>
          <el-input-number v-model="price"></el-input-number>
        </div>
        <el-button type="primary" @click="handleClick">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import { sendEquip } from "../uitls";
export default {
  name: "HomeView",
  components: { TopBar },
  data() {
    return {
      tag: "游戏",
      price: 1000000000,
      cpuWeight: 20,
      diskWeight: 20,
      graphicsWeight: 20, // 显卡
      memoryWeight: 20, // 内存
      mainWeight: 20, // 主板
      list: [],
    };
  },
  methods: {
    handleClick() {
      sendEquip(this.price, this.tag, {
        cpuWeight: this.cpuWeight,
        mainBoardWeight: this.mainWeight,
        diskWeight: this.diskWeight,
        graphicsWeight: this.graphicsWeight,
        memoryWeight: this.memoryWeight,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  padding: 50px 5% 0 5%;
}

.left-container {
  flex: 5;
  display: flex;
  flex-direction: column;
  padding-right: 30%;
}

.right-container {
  flex: 4;
}
.title {
  margin-bottom: 20px;
}

.block {
  margin-bottom: 20px;
}
</style>
