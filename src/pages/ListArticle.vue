<template>
  <div>
    <el-table :data="articles">
      <!-- :data="用于存放请求数据回来的数组" -->
      <el-table-column prop="title" label="标题" width="140"> </el-table-column>
      <el-table-column prop="body" label="内容" width="620"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template slot-scope="scope">
          <!-- {{scope.row}} -->
          <!-- scope.row 直接取到该单元格对象，就是数组里的元素对象
        ._id 是对象里面的title属性的值 -->
          <el-button @click="edit(scope.row._id)" type="text" size="small"
            >编辑</el-button
          >
          <el-button @click="remove(scope.row._id)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "ListArticle",
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    fetch() {
      this.$http.get("articles").then((res) => {
        this.articles = res.data;
      });
    },
    edit(id) {
      this.$router.push(`/articles/${id}/edit`)
    },
    remove(id) {
      this.$http.delete(`articles/${id}`).then(() => {
        this.$message({
          message: "文章删除成功",
          type: "success",
        });
        this.fetch()
      });
    },
  },
  created() {
    this.fetch()
  },
};
</script>

<style>
</style>