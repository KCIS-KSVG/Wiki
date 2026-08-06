---
title: "17.03 HDMI、SDI 与 NDI 传输协议"
description: "深入讲解 HDMI、SDI、NDI 三种视频传输协议的技术原理、性能差异与适用场景，帮助读者在多机位制作中根据设备、距离和延迟要求选择最优的信号传输方案。"
---

# 17.03 HDMI、SDI 与 NDI 传输协议

## 核心概念概述

在多机位现场制作中，视频信号从摄像机传输到导播台或录制设备的方式，直接影响系统的稳定性、画质和延迟表现。目前主流的三类传输方案是 HDMI、SDI 和 NDI。

HDMI 是消费级设备的标准接口，广泛存在于相机、监视器和笔记本电脑上。SDI 是广播级制作的专业标准，以长距离稳定传输著称。NDI 是基于 IP 网络的软件定义传输协议，利用现有的以太网基础设施传输视频[reference:0][reference:1]。

三种方案各有优劣，没有绝对的“最好”，只有“最适合当前场景”。[reference:2]理解三者的技术差异和适用边界，是在多机位项目中设计可靠信号链路的基础[reference:3]。

## 一、HDMI：消费级通用接口

### 核心特点

HDMI 是目前最普及的数字音视频接口，存在于绝大多数消费级设备上[reference:4]。它传输未压缩的数字视频和音频信号，延迟极低（仅几毫秒，肉眼不可察觉）[reference:5][reference:6]。HDMI 接口支持双向通讯，设备之间可自动交换信息（如分辨率识别），简化了连接设置[reference:7]。

### 版本与带宽

HDMI 2.0 的带宽为 18Gbps，最高支持 4K@60Hz[reference:8][reference:9]。HDMI 2.1 的带宽提升至 48Gbps，支持 8K@60Hz 和 4K@120Hz[reference:10][reference:11]。

在多机位制作中，4K@60Hz 是常见需求，HDMI 2.0 即可满足。但若需更高帧率或 8K 传输，需使用 HDMI 2.1 或更高版本。

### 主要限制

HDMI 在专业现场制作中的主要限制有两个。一是传输距离短——通常超过 15 米信号就开始衰减，超过 20-30 米后稳定传输难以保证[reference:12][reference:13]。二是接口无锁扣设计，插头依靠摩擦力固定，在现场人多线杂的环境中容易被踢松或脱落[reference:14][reference:15]。

### 适用场景

HDMI 适合短距离设备连接：摄像机连接机旁小监看屏幕、笔记本电脑接入小型导播台（如 ATEM Mini）、舞台讲者的返看屏幕等[reference:16]。在传输距离不超过 10-15 米且设备移动较少的场景中，HDMI 是性价比最高的选择。

## 二、SDI：广播级专业标准

### 核心特点

SDI（串行数字接口）自 1986 年诞生以来，一直是广播电视、影视制作和现场制作领域最可靠的视频传输标准[reference:17]。它使用同轴电缆传输未压缩的数字视音频信号，信号损耗极低[reference:18]。

SDI 的核心优势在于三点。首先，延迟极低——仅几毫秒，肉眼不可察觉，适合现场导播实时切换和舞台大屏投影[reference:19][reference:20]。其次，传输距离远——使用高质量同轴电缆可实现百米以上的无中继传输[reference:21]。第三，连接可靠——采用 BNC 锁扣式连接器，拧紧后不会意外脱落[reference:22][reference:23]。

### 常见规格

SDI 系列标准按传输速率和分辨率划分[reference:24][reference:25]。HD-SDI 约为 1.5Gbps，支持 1080i 或 720p；3G-SDI 约为 3Gbps，支持 1080p@60fps；6G-SDI 约为 6Gbps，支持 4K@30fps；12G-SDI 约为 12Gbps，支持 4K@60fps[reference:26]。

| SDI 规格 | 速率 | 最大分辨率 | 典型传输距离 |
| :--- | :--- | :--- | :--- |
| HD-SDI | 1.5 Gbps | 1080i / 720p | 约 260 米[reference:27] |
| 3G-SDI | 3 Gbps | 1080p@60fps | 约 100-200 米[reference:28][reference:29] |
| 6G-SDI | 6 Gbps | 4K@30fps | 约 100 米[reference:30][reference:31] |
| 12G-SDI | 12 Gbps | 4K@60fps | 约 75-80 米[reference:32][reference:33] |

### 适用场景

SDI 是大型现场活动的首选——演唱会、体育赛事、礼堂演出等需要长距离传输和极高可靠性的场景[reference:34]。导播台与摄像机之间距离超过 15 米时，SDI 比 HDMI 更可靠[reference:35]。当现场有大屏幕投影或导播需要实时切换时，SDI 几乎是唯一选择[reference:36][reference:37]。

## 三、NDI：网络化 IP 视频协议

### 核心特点

NDI（Network Device Interface）是由 NewTek 开发的 IP 视频传输协议[reference:38][reference:39]。它将视频和音频信号编码后通过标准 IP 网络（以太网）传输[reference:40][reference:41]，使音视频信号能够像网络数据一样在局域网内路由和分发[reference:42]。

### Full NDI 与 NDI|HX

NDI 提供两种主要版本[reference:43][reference:44]。Full NDI 使用高带宽（1080p60 约 100-150Mbps），延迟极低（约 16ms，接近 SDI/HDMI 的实时性）[reference:45][reference:46][reference:47]。NDI|HX 使用 H.264/H.265 压缩，带宽大幅降低（1080p60 约 10-50Mbps），适合 Wi-Fi 或带宽有限的网络环境[reference:48][reference:49]。NDI|HX3 是最新版本，比 HX2 具有更高的压缩效率和更低的延迟[reference:50][reference:51]。

| NDI 版本 | 1080p60 带宽 | 延迟 | 适用场景 |
| :--- | :--- | :--- | :--- |
| Full NDI | 100-150 Mbps[reference:52] | 约 16ms[reference:53] | 高质量、低延迟要求 |
| NDI|HX | 10-50 Mbps[reference:54] | 80-200ms[reference:55] | 带宽有限的环境 |
| NDI|HX3 | 约 50 Mbps[reference:56] | <100ms[reference:57] | 高效压缩与画质平衡 |

### 核心优势

NDI 的最大优势是“一线搞定”——一条网线即可同时传输视频、音频、PoE 供电、PTZ 控制、Tally 信号等[reference:58][reference:59]。它不需要专用的视频线缆，利用现有以太网基础设施即可工作[reference:60]。设备可自动发现和识别，系统扩展灵活[reference:61]。

### 主要限制

NDI 依赖网络质量——在千兆网络中 Full NDI 表现优异，但在 Wi-Fi 或百兆网络中可能不稳定[reference:62]。压缩引入的延迟（尤其是 HX 版本）使其不适合需要极致实时性的场景（如舞台大屏同步）[reference:63][reference:64]。

### 适用场景

NDI 适合需要长距离传输但布线成本受限的场景——校园内不同建筑之间的信号传输、多机位信号汇总至远端副控室[reference:65]。远程制作和副控室监看使用 NDI 可大幅简化布线[reference:66]。PTZ 摄像机的远程控制场景中，NDI 的“一线搞定”特性优势明显[reference:67]。对于直接推流至直播平台的应用，NDI 的中低延迟完全可以接受[reference:68]。

## 四、三种协议对比总览

| 对比维度 | HDMI | SDI | NDI |
| :--- | :--- | :--- | :--- |
| 传输介质 | HDMI 线缆 | 同轴电缆（BNC） | 以太网线（Cat5e/Cat6） |
| 信号类型 | 未压缩 | 未压缩 | 压缩（IP 编码） |
| 延迟 | 极低（几毫秒）[reference:69] | 极低（几毫秒）[reference:70] | 16-200ms（取决于版本）[reference:71] |
| 最大传输距离 | 约 15 米[reference:72] | 75-260 米（取决于规格）[reference:73] | 取决于网络（可达数百米） |
| 连接器 | 无锁扣[reference:74] | BNC 锁扣[reference:75] | RJ45（标准网线） |
| 接口可靠性 | 低（易脱落） | 高（锁扣固定） | 中（依赖网络质量） |
| 适用定位 | 消费级/短距离 | 广播级/长距离 | 网络化/IP 传输 |

## 五、场景速查：如何选择传输方案

**摄像机到机旁监视器（<5米）：** HDMI 是最直接、成本最低的选择[reference:76]。

**摄像机到导播台（15-50米）：** SDI 是标准方案，BNC 锁扣确保连接可靠，长距离传输信号稳定[reference:77]。

**摄像机到导播台（>50米或跨建筑）：** NDI 通过以太网传输，无需铺设昂贵的 SDI 长线[reference:78]。Full NDI 延迟接近实时[reference:79]，NDI|HX 在带宽有限时使用[reference:80]。

**舞台大屏实时投影：** SDI 是唯一可靠选择——极低延迟确保音画同步，BNC 锁扣防止意外脱落[reference:81]。

**远程副控室监看：** NDI 是理想选择，一条网线搞定视频、控制和供电[reference:82]。

**现场导播实时切换：** SDI 是行业标准，极低延迟确保切换瞬间无感知延迟[reference:83]。小型制作可使用 HDMI 配合小型导播台。

## 六、常见误区与避坑指南

::: warning ⚠️ 避坑指南

**误区一：HDMI 可以像 SDI 一样拉长线使用。**

HDMI 超过 15 米后信号衰减明显[reference:84][reference:85]。长距离传输应使用 SDI 或 NDI，而非盲目加长 HDMI 线缆。

**误区二：NDI 的延迟完全等同于 SDI/HDMI。**

Full NDI 的延迟约 16ms，接近实时[reference:86][reference:87]。NDI|HX 的延迟在 80-200ms 之间[reference:88][reference:89]。在需要极致实时性的场景中，应选择 SDI 或 Full NDI。

**误区三：NDI 不需要专用网络设备，任何网络都可以跑。**

NDI 对网络质量敏感。Full NDI 单路 1080p60 需 100-150Mbps 带宽[reference:90][reference:91]，千兆网络可稳定运行，但百兆网络或 Wi-Fi 可能出现卡顿[reference:92]。建议使用千兆交换机并优先有线连接。

**误区四：SDI 接口只能传输视频信号。**

SDI 同时支持嵌入音频传输，无需单独拉音频线[reference:93]。在专业现场制作中，摄像机的音频信号可通过同一根 SDI 线缆传输至导播台。
:::

## 总结

HDMI、SDI 和 NDI 三种传输协议各有定位。HDMI 是消费级设备的通用接口，适合短距离连接；SDI 是广播级制作的专业标准，以长距离、高可靠性和极低延迟见长；NDI 是基于 IP 网络的现代化方案，以布线简便和灵活扩展为核心优势。在多机位现场制作中，三种协议常常混合使用——摄像机到机旁监看用 HDMI，长距离主干传输用 SDI，跨建筑或远程监看用 NDI。理解各自特点，合理搭配使用，才能构建最稳定高效的信号传输系统。

下一节将进入《17.04 采集卡工作原理》，深入讲解采集卡的信号转换与传输逻辑。