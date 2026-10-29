# 正载科技官网

面向“正载科技”的医疗耗材官网，包含公开首页、产品与研发品质展示、联系表单、PostgreSQL 线索保存和受保护导出接口。

## 页面与内容

- `/`：主页，公司介绍、研发品质、产品入口与行业动态。
- `/products`：产品中心，默认展示 PTFE 斑马热缩管。
- `/products/[slug]`：五类产品共用左侧分类，右侧展示用途、优势及定制系列。各产品支持独立链接。
- `/contact`：联系方式与需求表单；产品页带入对应的关注产品。
- `/news` 和 `/news/[slug]`：行业资讯列表与详情，保留来源原文链接与事件日期。

公司介绍、斑马管用途和优势、联系方式参考 `https://www.ptfezhengzai.com/`；参考站其余产品暂无完整详情，沿用本地目录中的介绍。未确认的具体尺寸不作为承诺规格。新闻为官方公开信息摘要，不代表公司认证或参展声明。

参考站素材另存为 `public/images/reference-*`，不覆盖原有图片。生成的研发场景、结构配图仅作示意。

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
