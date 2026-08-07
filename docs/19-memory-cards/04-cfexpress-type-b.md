---
title: "19.04 CFexpress Type B 介绍"
description: "深入讲解 CFexpress Type B 存储卡的规格参数、性能特点、适用机型与版本演进，帮助读者理解这一佳能、尼康等品牌旗舰机型广泛采用的高速存储标准。"
---

# 19.04 CFexpress Type B 介绍

## 核心概念概述

CFexpress Type B 是 CompactFlash 协会在 CFexpress 2.0 规范中定义的三种卡型之一，也是目前专业摄影和影视领域**应用最广泛**的高速存储卡标准[reference:0]。其物理尺寸与 XQD 卡完全相同[reference:1]，凭借更高的性能上限和更广泛的设备兼容性，已成为佳能、尼康、松下、富士等品牌旗舰机型的标配存储方案[reference:2]。

与索尼主导的 Type A 不同，Type B 被“几乎所有其他品牌”的相机所采用[reference:3]。Type B 卡采用 **PCIe Gen3 ×2 接口**（2 条 PCIe 通道）[reference:4]，理论最大速度达 **2000 MB/s**[reference:5][reference:6]，是 Type A 的两倍。随着 CFexpress 4.0 标准的推出，新一代 Type B 卡的速度更可突破至接近 **4000 MB/s**[reference:7]。

## 一、物理规格与接口

### 尺寸与外观

CFexpress Type B 的物理尺寸为 **38.5mm × 29.8mm × 3.8mm**[reference:8][reference:9]，与 XQD 卡的尺寸完全一致[reference:10]。这一尺寸大于 Type A（20×28×2.8mm），但远小于 Type C（54×74×4.8mm）[reference:11]。

Type B 卡的尺寸使其在提供更高性能的同时，仍保持了对便携相机机身的良好适配性。与 SD 卡相比，Type B 卡体积更大、更不易丢失，且金属外壳使其手感更为坚固耐用。

### 接口与协议

CFexpress Type B 采用 **PCIe Gen3 接口**，配备 **2 条 PCIe 通道**（即 PCIe 3.0 ×2）[reference:13][reference:14]。在协议层面，它使用 **NVMe 1.3 协议**[reference:15]，与计算机中的高性能固态硬盘采用相同的底层技术标准[reference:16]。

| 规格项 | 参数 |
| :--- | :--- |
| 物理尺寸 | 38.5 × 29.8 × 3.8 mm |
| PCIe 接口 | Gen3，2 条通道 |
| 协议 | NVMe 1.3 |
| 理论最大速度（2.0） | 2000 MB/s |
| 理论最大速度（4.0） | 4000 MB/s |

### 与 XQD 卡的物理兼容性

CFexpress Type B 卡与 XQD 卡在物理尺寸和接口上**完全一致**[reference:17]。许多支持 XQD 的相机（如尼康 Z 系列早期机型）可通过固件更新实现对 CFexpress Type B 卡的兼容。这一兼容性设计使得用户无需更换设备即可升级至性能更强的存储介质。

## 二、性能表现

### CFexpress 2.0 性能

CFexpress 2.0 Type B 卡的理论最大传输速度为 **2000 MB/s**[reference:18][reference:19]。在实际产品中，不同品牌和定位的存储卡性能有所差异：

| 产品系列 | 读取速度 | 写入速度 | 持续写入 | 接口标准 |
| :--- | :--- | :--- | :--- | :--- |
| 雷克沙 GOLD 系列 | 最高 1900 MB/s | 最高 1500 MB/s | 1300 MB/s | PCIe 3.0×2[reference:21] |
| 闪迪专业影视卡 | 1700 MB/s | 1500 MB/s | 1400 MB/s[reference:22] | CFexpress 2.0 |
| 雷克沙 GOLD PRO | 1900 MB/s | 1500 MB/s | — | PCIe 3.0×2[reference:23] |

雷克沙 GOLD 系列 512GB 卡在尼康 Z9 中测试时，可连续录制 8K ProRes 视频而毫无压力，充分证明了其在高码流视频场景下的可靠性。

### CFexpress 4.0 性能飞跃

CFexpress 4.0 标准将接口升级为 **PCIe Gen4**，在保持相同物理尺寸和 2 条通道的前提下，理论带宽翻倍至 **4000 MB/s**[reference:25]。新一代 Type B 卡的性能实现了质的飞跃：

| 产品系列 | 读取速度 | 写入速度 | 持续写入 | 特殊认证 |
| :--- | :--- | :--- | :--- | :--- |
| 雷克沙 DIAMOND | 3700 MB/s[reference:26] | 3400 MB/s[reference:27] | 3200 MB/s[reference:28] | VPG400[reference:29] |
| 佰维 CB500 | 3750 MB/s[reference:30] | 3500 MB/s[reference:31] | — | VPG800[reference:32][reference:33] |
| Angelbird AV PRO SE | 3700 MB/s[reference:34] | 1100 MB/s[reference:35] | 3150 MB/s[reference:36] | — |
| Nextorage NX-B2 Pro+ | 3700 MB/s[reference:37] | 3600 MB/s[reference:38] | 1600 MB/s（最低）[reference:39] | VPG1600[reference:40][reference:41] |
| ProGrade Iridium | 3500 MB/s[reference:42] | — | — | CFexpress 4.0 |

::: tip 💡 现场经验
CFexpress 4.0 Type B 卡的速度已接近 PCIe Gen4 接口的带宽上限（4.0 GB/s）[reference:43]。对于需要录制 8K 60P RAW 视频的专业制作，选择 CFexpress 4.0 卡可确保持续写入速度满足最严苛的码流要求[reference:44]。
:::

## 三、视频性能保证（VPG 认证）

VPG（Video Performance Guarantee）是一项严格的测试流程与认证标准，确保存储卡在视频录制时能维持最低持续写入速度[reference:45]。CFexpress Type B 卡普遍通过 VPG 认证，不同等级对应不同的持续写入速度保证。

| VPG 等级 | 最低持续写入速度 | 代表产品 |
| :--- | :--- | :--- |
| VPG200 | 200 MB/s | 入门级 CFexpress 卡 |
| VPG400 | 400 MB/s | 雷克沙 DIAMOND[reference:46] |
| VPG800 | 800 MB/s | 佰维 CB500[reference:47][reference:48] |
| VPG1600 | 1600 MB/s | Nextorage NX-B2 Pro+[reference:49][reference:50] |

::: warning ⚠️ 避坑指南
要实现 VPG800 或 VPG1600 的高持续写入速度，存储卡需先通过**低级格式化**进行预处理，将卡恢复至出厂初始状态，获得大容量连续存储空间[reference:51]。仅从卡中删除文件并不会释放出可供高规格 VPG 录制使用的连续空间，必须重新执行预处理操作[reference:52]。
:::

## 四、兼容设备

CFexpress Type B 是目前**兼容设备最广泛**的 CFexpress 卡型[reference:53]。几乎所有支持 CFexpress 的非索尼相机品牌均采用 Type B 标准。

### 主要兼容相机品牌与机型

| 品牌 | 兼容机型（部分） |
| :--- | :--- |
| **佳能** | EOS R1、EOS R3、EOS R5、EOS R5C[reference:54][reference:55]、EOS-1D X Mark III[reference:56]、EOS C300 Mark II/III、EOS C500 Mark II[reference:57][reference:58] |
| **尼康** | Z9、Z8[reference:59]、Z6 II、Z7 II、Z6、Z7[reference:61][reference:62]、D6、D5、D850、D500[reference:63][reference:64] |
| **松下** | GH6[reference:65]、DC-S、DC-SIR[reference:66] |
| **富士** | X-H2S、X-H2[reference:67][reference:68]、GFX 系列[reference:69] |
| **Blackmagic** | Cinema Camera 6K[reference:70]、URSA 12K LF、URSA Cine 12K/17K[reference:71] |
| **RED** | V-Raptor、Komodo[reference:72] |

::: tip 💡 现场经验
在多机位拍摄项目中，若同时使用佳能、尼康等不同品牌的相机，统一采用 CFexpress Type B 卡可简化存储管理——各机位可使用相同型号的存储卡，便于统一采购、统一备份和统一管理[reference:73]。
:::

## 五、版本演进：CFexpress 2.0 与 4.0

### CFexpress 2.0（2019 年）

CFexpress 2.0 是 Type B 卡型的初始版本[reference:74]，采用 PCIe Gen3 ×2 接口，理论最大速度 2000 MB/s[reference:75][reference:76]。市面上大多数 Type B 存储卡（如雷克沙 GOLD 系列、闪迪专业影视卡等）均基于此标准[reference:77]。

### CFexpress 4.0（2023 年）

CFexpress 4.0 标准将接口升级为 **PCIe Gen4**，在保持相同物理尺寸和 2 条通道的前提下，理论带宽翻倍至 4000 MB/s[reference:78]。

目前支持 CFexpress 4.0 的相机设备仍有限[reference:79]。若相机仅支持 CFexpress 2.0，购买 4.0 卡不会带来速度提升。要充分发挥 4.0 卡的性能，需搭配支持 CFexpress 4.0 的相机或 USB4 读卡器[reference:80]。

## 六、选购建议

### 确认相机兼容性

购买前务必确认相机支持的卡型。Type B 卡**不兼容** Type A 卡槽。大多数非索尼品牌的专业相机支持 Type B[reference:81]，但部分机型可能需要固件更新才能兼容 CFexpress 4.0 卡[reference:82]。

### 根据拍摄需求选择版本与容量

| 拍摄需求 | 推荐版本 | 推荐容量 | 说明 |
| :--- | :--- | :--- | :--- |
| 日常照片拍摄 | CFexpress 2.0 | 128–256GB | 速度足够，性价比高 |
| 4K/6K 视频录制 | CFexpress 2.0 | 256–512GB | 持续写入 1000MB/s 以上足够 |
| 8K RAW 视频 | CFexpress 4.0 | 512GB–1TB | 需 VPG400 以上认证[reference:84] |
| 8K 60P RAW / 高规格制作 | CFexpress 4.0 | 1TB 以上 | 需 VPG800/VPG1600 认证[reference:85] |

### 关注持续写入速度

对于视频拍摄，**持续写入速度**比峰值速度更重要。选购时应重点关注产品的持续写入速度指标和 VPG 认证等级。

### 考虑发热控制

高速 CFexpress 卡在长时间录制时可能产生显著热量。部分产品（如至誉科技 Element Pro）在发热控制方面表现优异，即使连续录制四十分钟后也仅微热[reference:87]。

## 七、常见误区与避坑指南

::: warning ⚠️ 避坑指南

**误区一：CFexpress Type B 和 Type A 可以通用。**

两者物理尺寸不同，接口不通用[reference:88]。Type B 卡（38.5×29.8mm）远大于 Type A 卡（20×28mm）[reference:89]。购买前务必确认相机支持的卡型[reference:90]。

**误区二：CFexpress 4.0 卡在所有相机上都能发挥最高速度。**

CFexpress 4.0 存储卡的速度优势需要搭配支持 CFexpress 4.0 的相机才能充分发挥[reference:91]。在仅支持 CFexpress 2.0 的相机中使用 4.0 卡，速度会被限制在 2.0 标准的上限。

**误区三：CFexpress 卡和 XQD 卡在所有设备上完全通用。**

虽然两者物理尺寸和接口一致[reference:92]，但并非所有 XQD 卡槽都兼容 CFexpress Type B 卡。需确认相机是否已更新固件以支持 CFexpress[reference:93]。

**误区四：峰值读写速度越高，视频录制越可靠。**

视频录制依赖的是**持续写入速度**，而非峰值速度。选购时应优先关注产品的持续写入速度指标和 VPG 认证等级[reference:95]。
:::

## 总结

CFexpress Type B 是目前专业摄影和影视领域**应用最广泛**的高速存储卡标准。它以 38.5×29.8×3.8mm 的尺寸[reference:96]，通过 PCIe Gen3 ×2 接口和 NVMe 协议[reference:97]实现最高 2000 MB/s（CFexpress 2.0）或 4000 MB/s（CFexpress 4.0）[reference:98]的理论传输性能。Type B 被佳能、尼康、松下、富士、Blackmagic、RED 等几乎所有非索尼品牌的专业相机所采用[reference:99]。在选购时需根据相机支持的版本、拍摄需求的码流和容量，以及 VPG 认证等级综合考量。

下一节将进入《19.05 CF 卡与 XQD 卡》，深入讲解传统 CF 卡与 XQD 卡的定位与现状。