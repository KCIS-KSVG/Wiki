// docs/.vitepress/config/sidebar.ts

// 使用全局数组 (Array) 模式，让全部 24 章同时在左侧侧边栏展示并支持折叠
export const sidebar = [
  // 01 摄影基础与成像原理
  {
    text: '01 摄影基础与成像原理',
    collapsed: false, // 默认展开第一章
    items: [
      { text: '概述', link: '/01-photography-fundamentals/' },
      { text: '01.01 摄影是什么？完整成像过程', link: '/01-photography-fundamentals/01-what-is-photography' },
      { text: '01.02 数码相机内部结构详解', link: '/01-photography-fundamentals/02-camera-internal-structure' },
      { text: '01.03 图像传感器：全画幅/APS-C/M43', link: '/01-photography-fundamentals/03-image-sensors' },
      { text: '01.04 像素与照片画质的关系', link: '/01-photography-fundamentals/04-pixels-and-resolution' },
      { text: '01.05 什么是 RAW 照片', link: '/01-photography-fundamentals/05-raw-files' },
      { text: '01.06 JPEG、RAW、HEIF 格式区别', link: '/01-photography-fundamentals/06-image-formats' },
    ]
  },

  // 02 摄影曝光系统
  {
    text: '02 摄影曝光系统：快门、光圈与 ISO',
    collapsed: true, // 默认折叠，点开即展现
    items: [
      { text: '概述', link: '/02-exposure-shutter-aperture-iso/' },
      { text: '02.01 曝光三角与曝光控制逻辑', link: '/02-exposure-shutter-aperture-iso/01-exposure-triangle' },
      { text: '02.02 快门速度：控制运动与光线', link: '/02-exposure-shutter-aperture-iso/02-shutter-speed' },
      { text: '02.03 高速快门摄影：冻结瞬间', link: '/02-exposure-shutter-aperture-iso/03-high-speed-shutter' },
      { text: '02.04 慢速快门摄影：动态模糊与长曝光', link: '/02-exposure-shutter-aperture-iso/04-slow-shutter' },
      { text: '02.05 机械快门、电子快门与全局快门', link: '/02-exposure-shutter-aperture-iso/05-shutter-types' },
      { text: '02.06 光圈与 F 值控制', link: '/02-exposure-shutter-aperture-iso/06-aperture' },
      { text: '02.07 景深与背景虚化', link: '/02-exposure-shutter-aperture-iso/07-depth-of-field' },
      { text: '02.08 什么是散景 Bokeh', link: '/02-exposure-shutter-aperture-iso/08-bokeh' },
      { text: '02.09 ISO 感光度与噪点原理', link: '/02-exposure-shutter-aperture-iso/09-iso' },
      { text: '02.10 原生 ISO 与双原生 ISO', link: '/02-exposure-shutter-aperture-iso/10-native-iso' },
    ]
  },

  // 03 相机对焦系统
  {
    text: '03 相机对焦系统与拍摄控制',
    collapsed: true,
    items: [
      { text: '概述', link: '/03-autofocus-systems/' },
      { text: '03.01 自动对焦 AF 原理解析', link: '/03-autofocus-systems/01-af-basics' },
      { text: '03.02 AF-S、AF-C、MF 模式选择', link: '/03-autofocus-systems/02-af-modes' },
      { text: '03.03 人眼识别 Eye AF 与 AI 对焦', link: '/03-autofocus-systems/03-eye-af' },
      { text: '03.04 相位检测 vs 对比度检测', link: '/03-autofocus-systems/04-phase-vs-contrast-detect' },
      { text: '03.05 焦点追踪 Tracking AF', link: '/03-autofocus-systems/05-tracking-af' },
      { text: '03.06 峰值对焦与放大对焦', link: '/03-autofocus-systems/06-focus-assist-tools' },
      { text: '03.07 最近对焦距离与微距', link: '/03-autofocus-systems/07-minimum-focus-distance' },
    ]
  },

  // 04 摄影构图与视觉表达
  {
    text: '04 摄影构图与视觉表达',
    collapsed: true,
    items: [
      { text: '概述', link: '/04-composition-visual-language/' },
      { text: '04.01 摄影构图与视觉逻辑', link: '/04-composition-visual-language/01-composition-basics' },
      { text: '04.02 三分法构图原则', link: '/04-composition-visual-language/02-rule-of-thirds' },
      { text: '04.03 引导线构图技巧', link: '/04-composition-visual-language/03-leading-lines' },
      { text: '04.04 框架构图与环境主体', link: '/04-composition-visual-language/04-framing' },
      { text: '04.05 负空间构图与留白艺术', link: '/04-composition-visual-language/05-negative-space' },
      { text: '04.06 对称与平衡构图', link: '/04-composition-visual-language/06-symmetry-and-balance' },
    ]
  },

  // 05 摄影光线基础
  {
    text: '05 摄影光线基础与灯光控制',
    collapsed: true,
    items: [
      { text: '概述', link: '/05-lighting-fundamentals/' },
      { text: '05.01 光线方向、强度与色彩', link: '/05-lighting-fundamentals/01-light-basics' },
      { text: '05.02 顺光、侧光、逆光区别', link: '/05-lighting-fundamentals/02-front-side-back-lighting' },
      { text: '05.03 硬光与柔光控制', link: '/05-lighting-fundamentals/03-hard-vs-soft-light' },
      { text: '05.04 色温与白平衡调整', link: '/05-lighting-fundamentals/04-color-temperature-white-balance' },
      { text: '05.05 经典三点布光法', link: '/05-lighting-fundamentals/05-three-point-lighting' },
    ]
  },

  // 06 镜头系统与光学
  {
    text: '06 镜头系统与光学知识',
    collapsed: true,
    items: [
      { text: '概述', link: '/06-lenses-optics/' },
      { text: '06.01 镜头结构与成像原理', link: '/06-lenses-optics/01-lens-basics' },
      { text: '06.02 焦距与视角变化', link: '/06-lenses-optics/02-focal-length' },
      { text: '06.03 定焦镜头 vs 变焦镜头', link: '/06-lenses-optics/03-prime-vs-zoom' },
      { text: '06.04 广角镜头应用 (14-35mm)', link: '/06-lenses-optics/04-wide-angle' },
      { text: '06.05 标准镜头与 50mm 经典焦段', link: '/06-lenses-optics/05-standard-lens' },
      { text: '06.06 长焦镜头应用 (70-200mm)', link: '/06-lenses-optics/06-telephoto' },
      { text: '06.07 微距镜头与微观世界', link: '/06-lenses-optics/07-macro' },
    ]
  },

  // 07 相机设备与器材
  {
    text: '07 相机设备与摄影器材',
    collapsed: true,
    items: [
      { text: '概述', link: '/07-cameras-and-equipment/' },
      { text: '07.01 单反 DSLR vs 微单 Mirrorless', link: '/07-cameras-and-equipment/01-dslr-vs-mirrorless' },
      { text: '07.02 电影摄影机 Cinema Camera', link: '/07-cameras-and-equipment/02-cinema-cameras' },
      { text: '07.03 运动相机 Action Camera 原理', link: '/07-cameras-and-equipment/03-action-cameras' },
      { text: '07.04 相机防抖系统 IBIS', link: '/07-cameras-and-equipment/04-ibis' },
      { text: '07.05 Log 视频技术解析', link: '/07-cameras-and-equipment/05-log-video' },
    ]
  },

  // 08 视频制作基础
  {
    text: '08 视频制作与电影摄影基础',
    collapsed: true,
    items: [
      { text: '概述', link: '/08-video-production-basics/' },
      { text: '08.01 动态影像原理', link: '/08-video-production-basics/01-what-is-video' },
      { text: '08.02 视频分辨率：1080p 到 8K', link: '/08-video-production-basics/02-resolution' },
      { text: '08.03 帧率选择：24/30/60/120 fps', link: '/08-video-production-basics/03-frame-rate' },
      { text: '08.04 快门角度与 180 度快门原则', link: '/08-video-production-basics/04-shutter-angle' },
      { text: '08.05 视频码率 Bitrate', link: '/08-video-production-basics/05-bitrate' },
      { text: '08.06 编码格式：H.264/H.265/ProRes', link: '/08-video-production-basics/06-video-codecs' },
      { text: '08.07 封装格式：MP4/MOV/MXF', link: '/08-video-production-basics/07-container-formats' },
      { text: '08.08 视频色深：8bit/10bit/12bit', link: '/08-video-production-basics/08-bit-depth' },
      { text: '08.09 色彩采样：4:2:0/4:2:2/4:4:4', link: '/08-video-production-basics/09-color-sampling' },
      { text: '08.10 RAW 视频：BRAW 与 ProRes RAW', link: '/08-video-production-basics/10-raw-video-formats' },
      { text: '08.11 Log 视频：S-Log/C-Log/V-Log', link: '/08-video-production-basics/11-log-video' },
      { text: '08.12 LUT 预设的使用', link: '/08-video-production-basics/12-luts' },
      { text: '08.13 视频动态范围', link: '/08-video-production-basics/13-video-dynamic-range' },
      { text: '08.14 视频曝光设置方法', link: '/08-video-production-basics/14-video-exposure' },
      { text: '08.15 视频白平衡与色温控制', link: '/08-video-production-basics/15-video-white-balance' },
    ]
  },

  // 09 摄影机运动与语言
  {
    text: '09 摄影机运动与影视拍摄语言',
    collapsed: true,
    items: [
      { text: '概述', link: '/09-camera-motion-cinematic-language/' },
      { text: '09.01 景别：远景/中景/近景/特写', link: '/09-camera-motion-cinematic-language/01-shot-types' },
      { text: '09.02 运镜大全：推拉摇移跟升降', link: '/09-camera-motion-cinematic-language/02-camera-movements' },
      { text: '09.03 手持摄影运镜技巧', link: '/09-camera-motion-cinematic-language/03-handheld-techniques' },
      { text: '09.04 三轴手持稳定器原理', link: '/09-camera-motion-cinematic-language/04-gimbals' },
      { text: '09.05 DJI、智云稳定器调平与使用', link: '/09-camera-motion-cinematic-language/05-dji-zhiyun' },
      { text: '09.06 无人机航拍设备与安全规范', link: '/09-camera-motion-cinematic-language/06-drone-photography' },
    ]
  },

  // 10 后期制作工作流
  {
    text: '10 后期制作基础与数字影像工作流',
    collapsed: true,
    items: [
      { text: '概述', link: '/10-post-production-workflow/' },
      { text: '10.01 视频后期制作完整流程', link: '/10-post-production-workflow/01-what-is-post-production' },
      { text: '10.02 视频剪辑软件生态选择', link: '/10-post-production-workflow/02-software-selection' },
      { text: '10.03 素材管理与剪辑文件结构', link: '/10-post-production-workflow/03-media-management' },
      { text: '10.04 Proxy 代理文件工作流', link: '/10-post-production-workflow/04-proxy-files' },
      { text: '10.05 时间线 Timeline 核心概念', link: '/10-post-production-workflow/05-timeline' },
    ]
  },

  // 11 Adobe Lightroom
  {
    text: '11 Adobe Lightroom 照片管理与调色',
    collapsed: true,
    items: [
      { text: '概述', link: '/11-lightroom/' },
      { text: '11.01 Lightroom Classic 功能定位', link: '/11-lightroom/01-what-is-lightroom' },
      { text: '11.02 照片导入与 Catalog 数据库', link: '/11-lightroom/02-import-and-catalog' },
      { text: '11.03 评分、筛选与照片整理流程', link: '/11-lightroom/03-rating-and-selection' },
      { text: '11.04 Develop 调色模块解析', link: '/11-lightroom/04-develop-module' },
      { text: '11.05 基础调色流程：RAW 到成片', link: '/11-lightroom/05-basic-color-grading' },
      { text: '11.06 预设 Preset 使用与制作', link: '/11-lightroom/06-presets' },
      { text: '11.07 照片导出参数设置详解', link: '/11-lightroom/07-export-settings' },
    ]
  },

  // 12 Adobe Photoshop
  {
    text: '12 Adobe Photoshop 摄影后期',
    collapsed: true,
    items: [
      { text: '概述', link: '/12-photoshop/' },
      { text: '12.01 Photoshop 在摄影中的作用', link: '/12-photoshop/01-photoshop-for-photographers' },
      { text: '12.02 图层 Layer 核心原理', link: '/12-photoshop/02-layers' },
      { text: '12.03 图层蒙版 Mask 精准控制', link: '/12-photoshop/03-layer-masks' },
      { text: '12.04 调整图层应用详解', link: '/12-photoshop/04-adjustment-layers' },
      { text: '12.05 摄影精修：曝光与细节优化', link: '/12-photoshop/05-basic-retouching' },
      { text: '12.06 人像精修：皮肤与质感处理', link: '/12-photoshop/06-portrait-retouching' },
      { text: '12.07 多素材合成与创意摄影', link: '/12-photoshop/07-compositing' },
    ]
  },

  // 13 DaVinci Resolve
  {
    text: '13 DaVinci Resolve 专业视频后期',
    collapsed: true,
    items: [
      { text: '概述', link: '/13-davinci-resolve/' },
      { text: '13.01 达芬奇软件定位与优势', link: '/13-davinci-resolve/01-what-is-davinci-resolve' },
      { text: '13.02 项目管理与媒体整理', link: '/13-davinci-resolve/02-project-management' },
      { text: '13.03 Media 页面：素材组织', link: '/13-davinci-resolve/03-media-page' },
      { text: '13.04 Cut 页面：快速剪辑工作流', link: '/13-davinci-resolve/04-cut-page' },
      { text: '13.05 Edit 页面：精细剪辑流程', link: '/13-davinci-resolve/05-edit-page' },
      { text: '13.06 Fusion 页面：特效与动态图形', link: '/13-davinci-resolve/06-fusion' },
      { text: '13.07 Color 页面：专业节点调色', link: '/13-davinci-resolve/07-color-page' },
      { text: '13.08 Fairlight 页面：音频处理', link: '/13-davinci-resolve/08-fairlight' },
      { text: '13.09 Deliver 页面：视频渲染输出', link: '/13-davinci-resolve/09-deliver-page' },
    ]
  },

  // 14 Final Cut Pro
  {
    text: '14 Final Cut Pro 专业剪辑',
    collapsed: true,
    items: [
      { text: '概述', link: '/14-final-cut-pro/' },
      { text: '14.01 FCPX 软件定位与适用场景', link: '/14-final-cut-pro/01-what-is-fcpx' },
      { text: '14.02 Library 资料库与 Event 管理', link: '/14-final-cut-pro/02-library-and-event' },
      { text: '14.03 Magnetic Timeline 磁性时间线', link: '/14-final-cut-pro/03-magnetic-timeline' },
      { text: '14.04 FCPX 调色工具使用', link: '/14-final-cut-pro/04-color-tools' },
      { text: '14.05 FCPX 插件与扩展生态', link: '/14-final-cut-pro/05-plugins' },
    ]
  },

  // 15 CapCut
  {
    text: '15 CapCut 剪映视频创作流程',
    collapsed: true,
    items: [
      { text: '概述', link: '/15-capcut/' },
      { text: '15.01 CapCut/剪映 定位与适用创作者', link: '/15-capcut/01-what-is-capcut' },
      { text: '15.02 剪映基础剪辑流程', link: '/15-capcut/02-basic-editing' },
      { text: '15.03 AI 字幕与自动识别功能', link: '/15-capcut/03-subtitles' },
      { text: '15.04 特效、转场与包装模板', link: '/15-capcut/04-effects-and-transitions' },
      { text: '15.05 短视频平台导出参数设置', link: '/15-capcut/05-export-settings' },
    ]
  },

  // 16 OBS Studio
  {
    text: '16 OBS Studio 与网络直播系统',
    collapsed: true,
    items: [
      { text: '概述', link: '/16-obs-studio/' },
      { text: '16.01 直播信号传输完整原理', link: '/16-obs-studio/01-what-is-live-streaming' },
      { text: '16.02 直播架构：采集/编码/推流', link: '/16-obs-studio/02-streaming-architecture' },
      { text: '16.03 OBS Studio 功能定位', link: '/16-obs-studio/03-what-is-obs' },
      { text: '16.04 OBS 安装与初始化配置', link: '/16-obs-studio/04-installation-setup' },
      { text: '16.05 场景 Scene 与来源 Source 详解', link: '/16-obs-studio/05-scenes-and-sources' },
      { text: '16.06 转场 Transition 视觉切换', link: '/16-obs-studio/06-transitions' },
      { text: '16.07 音频混音、麦克风与监听', link: '/16-obs-studio/07-audio-system' },
      { text: '16.08 编码设置与 CPU/GPU 性能优化', link: '/16-obs-studio/08-encoding-settings' },
      { text: '16.09 直播码率、分辨率与帧率控制', link: '/16-obs-studio/09-stream-settings' },
      { text: '16.10 NDI 插件与高级扩展', link: '/16-obs-studio/10-plugins' },
    ]
  },

  // 17 导播与多机位
  {
    text: '17 专业导播系统与多机位直播制作',
    collapsed: true,
    items: [
      { text: '概述', link: '/17-switching-multi-camera/' },
      { text: '17.01 导播与团队岗位职责', link: '/17-switching-multi-camera/01-what-is-switching' },
      { text: '17.02 多机位拍摄方案设计', link: '/17-switching-multi-camera/02-multi-camera-setup' },
      { text: '17.03 HDMI、SDI 与 NDI 传输协议', link: '/17-switching-multi-camera/03-hdmi-sdi-ndi' },
      { text: '17.04 采集卡工作原理', link: '/17-switching-multi-camera/04-capture-cards' },
      { text: '17.05 ATEM Mini 导播台应用', link: '/17-switching-multi-camera/05-atem-mini' },
      { text: '17.06 软件导播 vs 硬件导播切换台', link: '/17-switching-multi-camera/06-software-vs-hardware' },
      { text: '17.07 校园活动直播搭建实战', link: '/17-switching-multi-camera/07-campus-live-production' },
      { text: '17.08 直播延迟优化方法', link: '/17-switching-multi-camera/08-latency-optimization' },
    ]
  },

  // 18 照片即时交付
  {
    text: '18 活动摄影即时交付系统',
    collapsed: true,
    items: [
      { text: '概述', link: '/18-photo-delivery-systems/' },
      { text: '18.01 Photo Live Stream 照片直播', link: '/18-photo-delivery-systems/01-what-is-photo-live-stream' },
      { text: '18.02 活动摄影完整工作流', link: '/18-photo-delivery-systems/02-event-workflow' },
      { text: '18.03 像素芝士类云端同步原理', link: '/18-photo-delivery-systems/03-pixel-cheese' },
      { text: '18.04 PiuPhoto 照片直播平台使用', link: '/18-photo-delivery-systems/04-piuphoto' },
      { text: '18.05 二维码领图系统搭建', link: '/18-photo-delivery-systems/05-qr-code-delivery' },
      { text: '18.06 边拍边传无线传输设置', link: '/18-photo-delivery-systems/06-shoot-and-transfer' },
      { text: '18.07 照片筛选与修图审核机制', link: '/18-photo-delivery-systems/07-selection-and-review' },
      { text: '18.08 校园赛事摄影发布流程', link: '/18-photo-delivery-systems/08-sports-event-systems' },
    ]
  },

  // 19 存储卡
  {
    text: '19 摄影存储卡与数据记录设备',
    collapsed: true,
    items: [
      { text: '概述', link: '/19-memory-cards/' },
      { text: '19.01 存储卡类型总览', link: '/19-memory-cards/01-card-types' },
      { text: '19.02 SD 卡标准：SDHC/SDXC/SDUC', link: '/19-memory-cards/02-sd-card-standards' },
      { text: '19.03 CFexpress Type A 介绍', link: '/19-memory-cards/03-cfexpress-type-a' },
      { text: '19.04 CFexpress Type B 介绍', link: '/19-memory-cards/04-cfexpress-type-b' },
      { text: '19.05 CompactFlash 与 XQD', link: '/19-memory-cards/05-cf-vs-xqd' },
      { text: '19.06 TF 卡 / MicroSD 区别', link: '/19-memory-cards/06-microsd' },
      { text: '19.07 存储卡速度等级 (Class/UHS)', link: '/19-memory-cards/07-speed-classes' },
      { text: '19.08 V30/V60/V90 视频速度等级', link: '/19-memory-cards/08-v30-v60-v90' },
      { text: '19.09 摄影存储卡选购指南', link: '/19-memory-cards/09-card-selection' },
      { text: '19.10 存储卡格式化与维护', link: '/19-memory-cards/10-card-formatting' },
    ]
  },

  // 20 存储与数据管理
  {
    text: '20 外部存储与摄影数据管理',
    collapsed: true,
    items: [
      { text: '概述', link: '/20-storage-data-management/' },
      { text: '20.01 摄影数据管理的重要性', link: '/20-storage-data-management/01-data-management-basics' },
      { text: '20.02 SSD 固态 vs HDD 机械硬盘', link: '/20-storage-data-management/02-ssd-vs-hdd' },
      { text: '20.03 外置 SSD 剪辑与存储方案', link: '/20-storage-data-management/03-external-ssd-workflow' },
      { text: '20.04 RAID 阵列与数据保护', link: '/20-storage-data-management/04-raid-systems' },
      { text: '20.05 NAS 私有云摄影服务器', link: '/20-storage-data-management/05-nas' },
      { text: '20.06 3-2-1 备份黄金法则', link: '/20-storage-data-management/06-3-2-1-backup' },
      { text: '20.07 摄影项目文件夹规范', link: '/20-storage-data-management/07-folder-structure' },
      { text: '20.08 摄影文件统一命名规范', link: '/20-storage-data-management/08-file-naming' },
      { text: '20.09 Lightroom 数据库安全备份', link: '/20-storage-data-management/09-lightroom-backup' },
      { text: '20.10 视频素材长期归档方案', link: '/20-storage-data-management/10-video-archiving' },
    ]
  },

  // 21 线缆与接口
  {
    text: '21 摄影连接线缆与接口知识',
    collapsed: true,
    items: [
      { text: '概述', link: '/21-cables-interfaces/' },
      { text: '21.01 摄影常见接口大全', link: '/21-cables-interfaces/01-interface-overview' },
      { text: '21.02 HDMI 2.0 与 2.1 版本区别', link: '/21-cables-interfaces/02-hdmi' },
      { text: '21.03 USB-C 传输与供电功能', link: '/21-cables-interfaces/03-usb-c' },
      { text: '21.04 Thunderbolt 雷电接口方案', link: '/21-cables-interfaces/04-thunderbolt' },
      { text: '21.05 SDI 广播级视频接口', link: '/21-cables-interfaces/05-sdi' },
      { text: '21.06 XLR 卡侬平衡音频接口', link: '/21-cables-interfaces/06-xlr' },
      { text: '21.07 摄影设备供电：V口/假电池', link: '/21-cables-interfaces/07-power-solutions' },
      { text: '21.08 线缆规格与信号稳定性', link: '/21-cables-interfaces/08-cable-selection' },
    ]
  },

  // 22 项目管理与团队
  {
    text: '22 摄影项目管理与团队工作流',
    collapsed: true,
    items: [
      { text: '概述', link: '/22-project-management-team-workflow/' },
      { text: '22.01 摄影项目完整生命周期', link: '/22-project-management-team-workflow/01-project-lifecycle' },
      { text: '22.02 任务需求分析与对接', link: '/22-project-management-team-workflow/02-needs-analysis' },
      { text: '22.03 拍摄计划 Shot List 制定', link: '/22-project-management-team-workflow/03-shot-list' },
      { text: '22.04 设备清单 Checklist 设计', link: '/22-project-management-team-workflow/04-equipment-checklist' },
      { text: '22.05 活动摄影现场执行标准', link: '/22-project-management-team-workflow/05-event-execution' },
      { text: '22.06 团队岗位：摄影/导播/后期', link: '/22-project-management-team-workflow/06-team-roles' },
      { text: '22.07 摄影素材交接规范', link: '/22-project-management-team-workflow/07-material-handover' },
      { text: '22.08 摄影质量审核标准 (QC)', link: '/22-project-management-team-workflow/08-quality-control' },
      { text: '22.09 作品审核发布与归档', link: '/22-project-management-team-workflow/09-delivery-process' },
      { text: '22.10 摄影团队 Wiki 知识库建设', link: '/22-project-management-team-workflow/10-knowledge-base' },
    ]
  },

  // 23 行业规范与实践
  {
    text: '23 摄影行业规范与专业实践',
    collapsed: true,
    items: [
      { text: '概述', link: '/23-industry-standards-practices/' },
      { text: '23.01 摄影著作权与版权基础', link: '/23-industry-standards-practices/01-copyright-basics' },
      { text: '23.02 图片授权 License 规则', link: '/23-industry-standards-practices/02-image-licensing' },
      { text: '23.03 模特肖像授权 Model Release', link: '/23-industry-standards-practices/03-model-release' },
      { text: '23.04 商业摄影服务报价逻辑', link: '/23-industry-standards-practices/04-commercial-pricing' },
      { text: '23.05 摄影作品署名规范', link: '/23-industry-standards-practices/05-crediting' },
      { text: '23.06 新闻摄影 vs 活动摄影', link: '/23-industry-standards-practices/06-news-vs-event' },
      { text: '23.07 摄影师职业发展路径', link: '/23-industry-standards-practices/07-career-path' },
    ]
  },

  // 24 附录与参考资料
  {
    text: '24 摄影知识库附录与参考资料',
    collapsed: true,
    items: [
      { text: '概述', link: '/24-appendix-references/' },
      { text: '24.01 摄影专业术语词典', link: '/24-appendix-references/01-glossary' },
      { text: '24.02 相机参数查询指南', link: '/24-appendix-references/02-camera-specs' },
      { text: '24.03 镜头参数查询指南', link: '/24-appendix-references/03-lens-specs' },
      { text: '24.04 摄影设备兼容性查询', link: '/24-appendix-references/04-compatibility' },
      { text: '24.05 常见摄影问题 FAQ', link: '/24-appendix-references/05-faq' },
      { text: '24.06 KSVG 摄影标准操作手册', link: '/24-appendix-references/06-ksvg-sop' },
    ]
  }
]