module.exports = {
    output: "src/api",
    template: "axios",
    projects: [
      {
        id: "5badddbdf5f80f6dcfa24fd1",
        name: "user", // 生成到 api/user 目录下。
        black: [
          "/query" // 排除 query 接口
        ]
      }
    ]
  };