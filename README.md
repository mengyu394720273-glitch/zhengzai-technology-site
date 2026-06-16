# 正载科技官网

面向“正载科技”的医疗耗材官网，包含公开首页、产品与研发品质展示、联系表单、PostgreSQL 线索保存和受保护导出接口。

## 本地运行

1. 安装依赖：

```bash
npm install
```

2. 配置环境变量：

```bash
cp .env.example .env.local
```

然后填写 `DATABASE_URL` 和 `ADMIN_EXPORT_TOKEN`。

3. 启动开发服务器：

```bash
npm run dev
```

访问 `http://localhost:3000`。

## 线索接口

- `POST /api/leads`：保存联系表单。
- `GET /api/leads/export?format=csv`：导出 CSV。
- `GET /api/leads/export?format=json`：导出 JSON。

导出接口需要在请求中携带以下任一方式：

```text
Authorization: Bearer <ADMIN_EXPORT_TOKEN>
x-admin-token: <ADMIN_EXPORT_TOKEN>
```

首次提交或导出时会自动创建 `leads` 表。
