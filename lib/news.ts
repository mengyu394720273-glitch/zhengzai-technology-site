export const news = [
  {
    slug: "fda-qmsr-2026",
    title: "FDA 医疗器械质量管理体系法规 QMSR 已生效",
    category: "法规动态",
    date: "2026-02-02",
    dateLabel: "生效日期：2026-02-02",
    image: "/images/cleanroom-research-banner.png",
    summary:
      "QMSR 于 2026 年 2 月 2 日生效，通过引用 ISO 13485:2016，推动美国医疗器械质量管理体系要求与国际标准协调。",
    source: "美国食品药品监督管理局（FDA）",
    url: "https://www.fda.gov/medical-devices/postmarket-requirements-devices/quality-management-system-regulation-qmsr",
    paragraphs: [
      "据 FDA 官方资料，质量管理体系法规（QMSR）于 2026 年 2 月 2 日生效，修订了美国联邦法规 21 CFR Part 820 中的医疗器械现行良好生产规范要求。",
      "该法规通过引用 ISO 13485:2016 医疗器械质量管理体系标准，促进不同监管体系间质量管理要求的协调。FDA 同时更新了相应的医疗器械制造商检查流程。",
      "本文为官方信息摘要，不构成合规建议，也不代表正载科技已取得相关认证。具体适用要求请以 FDA 官方法规及最新说明为准。",
    ],
  },
  {
    slug: "medtec-china-2026",
    title: "Medtec China 2026：聚焦医疗器械设计与制造供应链",
    category: "展会资讯",
    date: "2026-09-01",
    dateLabel: "展期：2026-09-01 至 09-03",
    image: "/images/ptfe-custom-engineering-ultrathin-v3.png",
    summary:
      "主办方公布的第 20 届 Medtec China 展期为 2026 年 9 月 1—3 日，地点为上海新国际博览中心 N1—N4 馆。",
    source: "Medtec China 主办方",
    url: "https://en.medtecchina.com/landinghome/",
    paragraphs: [
      "根据主办方公布的信息，第 20 届国际医疗器械设计与制造技术展览会 Medtec China 2026 的展期为 2026 年 9 月 1 日至 3 日，地点为上海新国际博览中心。",
      "展会面向医疗器械从研发到商业化制造的供应链，提供了解设计、材料、零部件及制造服务的行业交流窗口。",
      "本条为主办方公开展会信息整理，不表示正载科技参展。展会详情和后续信息请查看主办方原文；页面配图为管材结构示意，非展会现场照片。",
    ],
  },
];

export function getNews(slug: string) {
  return news.find((item) => item.slug === slug);
}
