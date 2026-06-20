export type ProductSpec = { series: string; structure: string; application: string; options: string };

export type Product = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  applications: string[];
  specs: ProductSpec[];
};

export const products: Product[] = [
  {
    slug: "zebra-heat-shrink-tubing",
    title: "PTFE 斑马热缩管",
    shortDescription: "彩色条纹识别，适用于导管加工定位与区分",
    description: "PTFE 斑马热缩管通过纵向彩色条纹提升导管加工、装配与使用过程中的辨识度，同时保留 PTFE 材料的低摩擦、耐化学性和热缩加工特性。",
    image: "/images/zebra-heat-shrink-product.png",
    features: ["纵向彩色条纹识别", "薄壁与精密尺寸控制", "稳定热缩与表面包覆", "颜色、尺寸及收缩要求可定制"],
    applications: ["介入导管工艺包覆", "球囊与导管组件定位", "多规格产品颜色区分", "医疗器械装配保护"],
    specs: [
      { series: "单色条纹系列", structure: "透明基材 + 单色纵向条纹", application: "产品识别与装配定位", options: "条纹颜色、内径、壁厚、长度" },
      { series: "双色条纹系列", structure: "透明基材 + 双色识别条纹", application: "多通道或多型号区分", options: "颜色组合、条纹宽度、收缩要求" },
      { series: "超薄壁系列", structure: "精密薄壁热缩结构", application: "对成品外径敏感的导管组件", options: "最小壁厚可至 0.03mm，最终以工程确认为准" },
      { series: "非标定制系列", structure: "按图纸与样品开发", application: "特殊器械平台与研发项目", options: "材料、尺寸、颜色及性能目标" }
    ]
  },
  {
    slug: "ptfe-precision-tubing",
    title: "PTFE 精密管材",
    shortDescription: "单腔、多腔及异形结构，支持薄壁定制",
    description: "PTFE 精密管材面向医疗器械中的输送、隔离、导向和多通道需求，可围绕内外径、壁厚、同心度、孔腔布局和表面状态进行协同开发。",
    image: "/images/ptfe-precision-tubing-v2.png",
    features: ["单腔、多腔与异形截面", "低摩擦与良好化学稳定性", "精密壁厚及同心度控制", "可按图纸、样品或应用目标开发"],
    applications: ["介入导管内衬", "多通道输送管路", "绝缘与隔离结构", "微创器械精密部件"],
    specs: [
      { series: "单腔精密管", structure: "圆形单孔结构", application: "输送、隔离与导向", options: "内径、外径、壁厚、长度" },
      { series: "多腔精密管", structure: "双腔、三腔及多腔结构", application: "多介质输送与器械通道", options: "孔数、孔径、孔位及外形" },
      { series: "异形截面管", structure: "非圆形或复合孔腔", application: "特殊装配空间与功能集成", options: "截面、尺寸、偏心与公差" },
      { series: "薄壁定制管", structure: "精密薄壁结构", application: "小外径及高通过性器械", options: "尺寸范围与公差需工程确认" }
    ]
  },
  {
    slug: "heat-shrink-tubing",
    title: "热缩管",
    shortDescription: "稳定收缩，适合包覆、固定与工艺保护",
    description: "医疗级热缩管用于导管和精密组件的包覆、固定、成型及加工保护，可根据被包覆部件、工艺温度和表面要求匹配材料与收缩方案。",
    image: "/images/heat-shrink-tubing.png",
    features: ["稳定收缩与尺寸一致性", "表面平整、包覆均匀", "适配不同直径组件", "材料和工艺窗口可协同评估"],
    applications: ["导管编织层成型", "组件固定与保护", "连接部位包覆", "加工过程临时护套"],
    specs: [
      { series: "标准热缩系列", structure: "常规圆管结构", application: "通用包覆与固定", options: "内径、壁厚、长度、收缩倍率" },
      { series: "薄壁热缩系列", structure: "低轮廓薄壁结构", application: "精密导管与小尺寸组件", options: "壁厚、公差及表面要求" },
      { series: "高收缩系列", structure: "面向较大尺寸变化的结构", application: "复杂组件与台阶位置", options: "初始尺寸、目标尺寸、工艺温度" },
      { series: "非标工艺系列", structure: "按装配工艺开发", application: "特殊成型与保护场景", options: "材料、颜色、尺寸及性能" }
    ]
  },
  {
    slug: "peel-away-tubing",
    title: "可撕裂管材",
    shortDescription: "导入保护与释放更顺畅，适配装配流程",
    description: "可撕裂管材在加工或导入阶段为器械提供支撑和保护，并可沿预设方向快速撕开移除，减少对内部组件和后续工序的影响。",
    image: "/images/peel-away-tubing.png",
    features: ["定向撕裂与顺畅释放", "兼顾支撑性和可操作性", "适配不同器械装配流程", "尺寸、颜色和撕裂性能可调整"],
    applications: ["导管组件导入保护", "器械装配临时护套", "线缆与细长部件包覆", "需要快速移除的工艺环节"],
    specs: [
      { series: "单侧撕裂系列", structure: "单方向预设撕裂结构", application: "常规导入与移除", options: "内径、壁厚、长度、撕裂方向" },
      { series: "双侧撕裂系列", structure: "双方向释放结构", application: "快速分离与复杂装配", options: "撕裂线位置、操作力及尺寸" },
      { series: "柔性保护系列", structure: "柔软管体与可撕结构", application: "对内部组件保护要求较高的场景", options: "柔软度、颜色与表面状态" },
      { series: "非标定制系列", structure: "按装配流程设计", application: "专用器械与自动化工艺", options: "结构、尺寸与撕裂性能工程确认" }
    ]
  },
  {
    slug: "custom-tubing-service",
    title: "定制化服务",
    shortDescription: "尺寸、颜色、壁厚、孔腔结构按需开发",
    description: "正载科技面向医疗器械研发和量产阶段提供管材定制服务，从需求澄清、材料与结构评估到样品试制、验证优化和量产导入协同推进。",
    image: "/images/custom-tubing-service.png",
    features: ["按图纸、样品或应用目标开发", "材料、结构、尺寸和颜色协同设计", "支持样品试制与迭代验证", "面向量产一致性持续优化"],
    applications: ["新产品研发验证", "进口管材替代评估", "特殊结构与微尺寸开发", "现有产品工艺优化"],
    specs: [
      { series: "尺寸定制", structure: "内径、外径、壁厚与长度组合", application: "匹配现有器械结构", options: "图纸、公差与检验要求" },
      { series: "结构定制", structure: "单腔、多腔、异形及复合结构", application: "功能集成与空间优化", options: "截面、孔位、同心度与材料" },
      { series: "颜色定制", structure: "本色、单色、双色与条纹", application: "识别、定位及产品区分", options: "颜色、条纹数量与宽度" },
      { series: "性能定制", structure: "围绕使用与加工目标开发", application: "特殊热缩、柔性或撕裂需求", options: "性能指标、工艺窗口与验证方案" }
    ]
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
