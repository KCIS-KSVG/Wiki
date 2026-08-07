---
title: "19.03 CFexpress Type A 介绍"
description: "深入讲解 CFexpress Type A 存储卡的规格参数、性能特点、适用机型与版本演进，帮助读者理解这一索尼高端机型专用存储卡的技术优势与选购逻辑。"
---

# 19.03 CFexpress Type A 介绍

## 核心概念概述

CFexpress Type A 是 CompactFlash 协会于 2019 年在 CFexpress 2.0 规范中定义的一种小型化高速存储卡标准[reference:0][reference:1]。它由索尼公司率先在 2020 年推出的 Alpha 7S III 相机中首次采用[reference:2]，此后成为索尼旗舰微单和专业摄影机系列的核心存储方案。

CFexpress Type A 的设计目标是 **“小尺寸，高速度”**——在比 SD 卡更小巧的物理尺寸内，实现接近固态硬盘级别的读写性能，满足 8K 视频录制和极限高速连拍的苛刻需求[reference:3]。目前，CFexpress Type A 存储卡主要由索尼及其认证的第三方厂商（如至誉科技、雷克沙、Delkin 等）生产[reference:4][reference:5]。

## 一、物理规格与接口

### 尺寸与外观

CFexpress Type A 是三种 CFexpress 卡型中尺寸最小的形态[reference:6]。其物理尺寸为 **20.0mm × 28.0mm × 2.8mm**[reference:7][reference:8]，比标准 SD 卡（32mm × 24mm × 2.1mm）略小[reference:9]。这一紧凑设计使其适用于对体积有严苛要求的精巧型相机机身[reference:10]。

### 接口与协议

CFexpress Type A 采用 **PCIe Gen3 接口**，配备 **1 条 PCIe 通道**（即 PCIe 3.0 ×1）[reference:11][reference:12]。在协议层面，它使用 **NVMe 1.3 协议**[reference:13]，与计算机中的高性能固态硬盘采用相同的底层技术标准[reference:14]。

| 规格项 | 参数 |
| :--- | :--- |
| 物理尺寸 | 20.0 × 28.0 × 2.8 mm |
| PCIe 接口 | Gen3，1 条通道 |
| 协议 | NVMe 1.3 |
| 理论最大速度 | 1000 MB/s |

## 二、性能表现

### 理论性能

CFexpress Type A 的理论最大传输速度为 **1000 MB/s**[reference:15][reference:16]。在实际产品中，不同厂商和不同版本的存储卡性能有所差异：

| 产品系列/标准 | 读取速度 | 写入速度 | 说明 |
| :--- | :--- | :--- | :--- |
| CFexpress 2.0 主流产品 | 最高 800–900 MB/s | 最高 700–800 MB/s | 雷克沙 GOLD、至誉 Essential 等[reference:17][reference:18] |
| CFexpress 4.0 新一代产品 | 最高 1800–1900 MB/s | 最高 1700–1740 MB/s | 索尼 CEA-G 系列、闪迪等[reference:19][reference:20] |
| 理论最大值 | 1000 MB/s | 1000 MB/s | PCIe 3.0 ×1 带宽上限[reference:21] |

### 与 UHS-II SD 卡的速度对比

CFexpress Type A 的性能优势在与传统高速 SD 卡的对比中尤为明显。新一代 CFexpress 4.0 Type A 卡的读写速度可达最快 UHS-II SD 卡的 **6 倍以上**[reference:22]。

这一速度优势在实际拍摄中意味着：连拍时缓存清空更快、视频录制中可支持更高码流、文件传输至电脑的时间大幅缩短[reference:23]。

### 视频性能保证

CFexpress Type A 存储卡普遍通过了 **VPG（Video Performance Guarantee）** 认证，确保在视频录制中维持稳定的持续写入性能[reference:24]。常见认证等级包括 VPG200 和 VPG400[reference:25][reference:26]，分别对应 200 MB/s 和 400 MB/s 的最低持续写入速度保证，足以支持 4K、6K 乃至 8K 的高码流视频录制[reference:27]。

## 三、兼容设备

CFexpress Type A 存储卡目前**主要由索尼的高端 Alpha 系列微单和 Cinema Line 专业摄影机采用**[reference:28]。截至 2025 年，兼容机型已达十余款[reference:29]。

### 主要兼容相机列表

以下为已确认支持 CFexpress Type A 的索尼机型[reference:30][reference:31][reference:32]：

| 系列 | 兼容机型 |
| :--- | :--- |
| Alpha 系列 | α1 / α1 II、α7 IV、α7R V、α7S III、α9 III[reference:33][reference:34] |
| Cinema Line | FX2、FX3、FX6、FX30[reference:35][reference:36] |

索尼 Alpha 7S III 的两个卡槽均兼容 CFexpress Type A 和 UHS-II SDXC 存储卡[reference:37]。

::: tip 💡 现场经验
在多机位拍摄项目中，若同时使用 CFexpress Type A 和 SD 卡两种介质，需注意两者的写入速度差异。CFexpress Type A 卡槽通常支持更高的视频码流和连拍速度，建议将主机位或需要高码流录制的机位优先配置 CFexpress Type A 卡，其他机位可使用 SD 卡作为补充。
:::

## 四、版本演进：CFexpress 2.0 与 4.0

CFexpress Type A 标准自发布以来经历了两个主要版本。

### CFexpress 2.0（2019 年）

CFexpress 2.0 是 Type A 卡型的初始版本，采用 PCIe Gen3 ×1 接口[reference:38]，理论最大速度 1000 MB/s[reference:39]。市面上大多数 Type A 存储卡（包括索尼 CEA-M 系列、至誉 Essential 系列、雷克沙 SILVER 系列等）均基于此标准[reference:40][reference:41]。

### CFexpress 4.0（2023 年）

CFexpress 4.0 标准将接口升级为 **PCIe Gen4**，在保持相同物理尺寸和 1 条通道的前提下，理论带宽翻倍[reference:42]。新一代 Type A 卡的理论最大速度可达 **2000 MB/s**[reference:43]。

索尼于 2025 年 7 月发布了支持 CFexpress 4.0 标准的 CEA-G1920T 和 CEA-G960T 存储卡，读取速度高达约 1800 MB/s[reference:44]。闪迪也于 2025 年 4 月推出了读取速度达 1800 MB/s、写入速度 1650 MB/s 的 Type A 卡[reference:45]。

::: warning ⚠️ 避坑指南
CFexpress 4.0 存储卡向下兼容支持 CFexpress 2.0 的相机，但速度将受限于相机的接口规格，无法发挥 4.0 版本的全部性能。若相机仅支持 CFexpress 2.0，购买 4.0 卡不会带来速度提升。
:::

## 五、选购建议

### 确认相机兼容性

购买前务必确认相机是否支持 CFexpress Type A。部分索尼机型同时兼容 CFexpress Type A 和 UHS-II SD 卡，但卡槽性能可能存在差异[reference:46]。

### 根据拍摄需求选择容量

| 容量 | 适用场景 |
| :--- | :--- |
| 80GB–160GB | 日常照片拍摄、4K 视频录制[reference:47] |
| 320GB–640GB | 高码流 4K/8K 视频、长时间连拍[reference:48] |
| 960GB–1920GB | 专业电影制作、长时间高规格录制[reference:49] |

### 根据版本选择速度

若相机支持 CFexpress 4.0 且需要录制 8K 高码流视频，建议选择支持 4.0 标准的高速卡（读取 1800 MB/s 以上）[reference:50]。若相机仅支持 CFexpress 2.0 或主要拍摄静态照片，CFexpress 2.0 卡（800–900 MB/s）已足够[reference:51]。

### 注意第三方卡的固件兼容性

第三方厂商的 CFexpress Type A 存储卡在新型号相机发布后可能需要固件更新以确保兼容性[reference:52]。购买第三方卡时，建议关注厂商的固件更新支持情况[reference:53]。

## 六、常见误区与避坑指南

::: warning ⚠️ 避坑指南

**误区一：CFexpress Type A 和 Type B 可以通用。**

两者物理尺寸不同[reference:54]，接口不通用。Type A 卡仅适用于索尼 Alpha 和 Cinema Line 系列等特定机型[reference:55]，Type B 卡适用于佳能、尼康等品牌的旗舰机型。购买前务必确认相机支持的卡型。

**误区二：CFexpress 4.0 卡在所有相机上都能发挥最高速度。**

CFexpress 4.0 存储卡的速度优势需要搭配支持 CFexpress 4.0 的相机才能充分发挥[reference:56]。在仅支持 CFexpress 2.0 的老款相机中使用 4.0 卡，速度会被限制在 2.0 标准的上限。

**误区三：CFexpress Type A 卡的价格过高，不值得购买。**

CFexpress Type A 卡的价格确实高于 SD 卡[reference:57]，但其速度优势在 8K 视频录制和极限连拍场景中是不可替代的。若拍摄需求未达到这一级别，UHS-II SD 卡可能是更具性价比的选择[reference:58]。
:::

## 总结

CFexpress Type A 是索尼高端微单和专业摄影机专用的高速存储卡标准。它以 20×28×2.8mm 的紧凑尺寸[reference:59]，通过 PCIe Gen3 ×1 接口和 NVMe 协议实现最高 1000 MB/s（CFexpress 2.0）或 1800 MB/s（CFexpress 4.0）的传输性能[reference:60][reference:61]。兼容机型涵盖索尼 α1、α7 IV、α7S III、α9 III 等 Alpha 系列及 FX3、FX6 等 Cinema Line 摄影机[reference:62][reference:63]。在选购时需根据相机支持的版本、拍摄需求的码流和容量，以及第三方卡的固件兼容性综合考量。

下一节将进入《19.04 CFexpress Type B 介绍》，深入讲解佳能、尼康旗舰机型所采用的 CFexpress Type B 存储卡规格。