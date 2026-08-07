---
title: "19.02 SD 卡标准：SDHC/SDXC/SDUC"
description: "深入讲解 SD 卡的容量分级标准，包括 SDHC、SDXC、SDUC 的容量范围、文件系统、速度规格与设备兼容性，帮助读者根据设备需求选择正确的 SD 卡标准。"
---

# 19.02 SD 卡标准：SDHC/SDXC/SDUC

## 核心概念概述

SD 卡按照容量标准分为四个等级：SD、SDHC、SDXC 和 SDUC[reference:0]。这四个标准代表了 SD 卡发展的不同阶段——越新的标准容量越高、速度越快[reference:1]。

在购买 SD 卡时，首先需要确认设备支持哪种标准。SDHC 和 SDXC 是目前市场上最常见的两个标准[reference:2]，而 SDUC 是 2018 年发布的新一代标准，目前尚未普及[reference:3]。理解各标准之间的差异，是正确选购 SD 卡的第一步。

## 一、SD 标准：传统容量（已淘汰）

### 基本规格

传统 SD 标准是最早的 SD 卡规范，容量范围为 2GB 及以下[reference:4]。它采用 FAT12 或 FAT16 文件系统[reference:5][reference:6]，最大传输速度约为 12.5MB/s。

### 现状

传统 SD 卡在数码相机领域已基本淘汰，目前仅在某些极为老旧或低端的设备中仍有使用。新购买的相机已不再支持或配备此标准。

## 二、SDHC：高容量标准

### 基本规格

SDHC（Secure Digital High Capacity）是 SD 协会于 2006 年 5 月发布的存储卡规范[reference:8]，基于 SD 2.0 系统规范[reference:9][reference:10]。其容量范围为 **4GB 至 32GB**[reference:11][reference:12]。所有大于 2GB 容量的 SD 卡必须符合 SDHC 规范[reference:13]。

SDHC 采用 **FAT32 文件系统**[reference:14][reference:15]，突破了传统 SD 卡 2GB 的容量限制[reference:16]。SDHC 的外形尺寸与传统 SD 卡完全一致[reference:17]。

### 速度等级

SDHC 定义了 Class2、Class4、Class6 三级传输速度标准[reference:18][reference:19]。其中 Class2 的最低写入速度为 2MB/s，Class4 为 4MB/s，Class6 为 6MB/s[reference:20]。SDHC 卡至少需达到 Class2 的速度等级[reference:21]。

### 兼容性

SDHC 卡仅兼容符合 SD 2.0 及以上规范的设备[reference:22]。传统只支持 FAT12/FAT16 格式的 SD 设备无法识别 SDHC 卡[reference:23]。如果 SDHC 卡插入旧版 SD 设备，出于对数据保护的目的，该设备将不会识别此卡[reference:24]。

SDHC 设备可向下兼容传统 SD 卡[reference:25]。

## 三、SDXC：扩展容量标准

### 基本规格

SDXC（SD eXtended Capacity）是 SD 协会于 2009 年发布的下一代 SD 存储卡标准[reference:26]。其容量范围为 **64GB 至 2TB**[reference:27][reference:28]。

SDXC 采用 **exFAT 文件系统**[reference:29][reference:30]。exFAT 支持大于 4GB 的单个文件，而 SDHC 的 FAT32 文件系统单个文件最大只能支持 4GB[reference:31]。这意味着在录制 4K 等高码流视频时，SDXC 卡可以连续录制单个大文件，而 SDHC 卡会在每 4GB 时自动分段[reference:32]。

### 速度演进

SDXC 的传输速度随着标准版本更新而不断提升[reference:33]。早期（SD 3.0）定义了最高 104MB/s 的理论速度[reference:34]；UHS-II 总线将理论速度提升至 312MB/s[reference:35]；最新的 SD 8.0 规范通过 PCIe 接口可将顺序读取速度提升至最高 1.6GB/s[reference:36]。

### 兼容性

SDXC 存储卡只能在支持 SDXC 的设备上使用[reference:37]。SDXC 卡不能在 SD 或 SDHC 设备上使用[reference:38]。

**SDXC 兼容设备可以使用 SDXC、SDHC 和 SD 标准卡**[reference:39][reference:40]。换句话说，支持 SDXC 的设备向下兼容所有旧标准。

## 四、SDUC：超高容量标准

### 基本规格

SDUC（Secure Digital Ultra Capacity）是 SD 协会于 2018 年 6 月在 SD 7.0 规范中推出的新一代 SD 存储卡标准[reference:41][reference:42]。其容量范围为 **2TB 至 128TB**[reference:43][reference:44]。

SDUC 同样采用 **exFAT 文件系统**[reference:45]。

### SD Express 与极速传输

SDUC 标准引入了全新的 **SD Express 总线接口**，基于 **PCIe 3.1 x1 总线和 NVMe 协议**[reference:46][reference:47]，提供最大 **985MB/s 的全双工传输速度**[reference:48]。这一速度远超传统 SD 卡标准，使 SD 卡在传输性能上接近固态硬盘的水平。

### 兼容性

SDUC 存储卡只能在支持 SDUC 的设备上使用[reference:50]。**SDUC 兼容设备可向下兼容 SDXC、SDHC 和 SD 标准卡**[reference:51]。

### 市场现状

SDUC 标准发布于 2018 年，目前仍在逐步推广中[reference:52]。尽管 Linux 等操作系统已开始增加对 SDUC 的支持[reference:53]，但支持 SDUC 的消费级设备和存储卡产品尚未大规模普及[reference:54]。

## 五、SD 各标准核心参数对比

| 标准 | 全称 | 容量范围 | 文件系统 | 典型最大速度 | 发布年份 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| SD | Secure Digital | ≤ 2GB | FAT12/FAT16 | 12.5 MB/s | 2000 年 |
| SDHC | Secure Digital High Capacity | 4GB – 32GB | FAT32 | 25–104 MB/s | 2006 年 |
| SDXC | Secure Digital eXtended Capacity | 64GB – 2TB | exFAT | 104–312 MB/s | 2009 年 |
| SDUC | Secure Digital Ultra Capacity | 2TB – 128TB | exFAT | 985 MB/s | 2018 年 |

## 六、兼容性速查表

| 设备支持的标准 | 可使用的卡 |
| :--- | :--- |
| SD 兼容设备 | 仅 SD 标准卡[reference:55] |
| SDHC 兼容设备 | SDHC 卡 + SD 标准卡[reference:56] |
| SDXC 兼容设备 | SDXC 卡 + SDHC 卡 + SD 标准卡[reference:57] |
| SDUC 兼容设备 | SDUC 卡 + SDXC 卡 + SDHC 卡 + SD 标准卡[reference:58] |

**核心规则**：支持较新标准的设备可以向下兼容较旧标准的卡，但较新标准的卡无法在仅支持较旧标准的设备上使用[reference:59]。

## 七、选购建议

### 确认设备支持的标准

购买 SD 卡前，务必查阅相机说明书或官网规格，确认设备支持的 SD 标准。SDHC 和 SDXC 是目前最常用的两个标准[reference:60]。

### 根据拍摄需求选择容量

**日常照片拍摄**：32GB–64GB 的 SDHC 或 SDXC 卡已足够满足数百甚至数千张照片的存储需求[reference:61]。

**4K 视频录制**：需选择 SDXC 卡（64GB 以上），因为 4K 视频文件通常超过 4GB，SDHC 的 FAT32 文件系统无法支持单文件大于 4GB 的连续录制[reference:62]。

**高码流视频/RAW 连拍**：需选择支持 UHS-II 或更高速度等级的 SDXC 卡，确保写入速度满足相机需求。

## 八、常见误区与避坑指南

::: warning ⚠️ 避坑指南

**误区一：容量越大的 SD 卡速度一定越快。**

容量和速度是两个独立的维度。一张 128GB 的 SDHC 卡可能只有 Class10 的速度，而一张 64GB 的 SDXC 卡可能支持 UHS-II 的高速传输。选购时需同时关注容量标准和速度等级。

**误区二：SDXC 卡可以在任何读卡器上使用。**

SDXC 卡需要支持 SDXC 标准的读卡器才能正常读取。使用仅支持 SDHC 的旧读卡器可能无法识别 SDXC 卡。同样，SDXC 卡也无法在仅支持 SDHC 的相机中使用。

**误区三：SDUC 卡可以替代 SDXC 卡使用。**

SDUC 卡只能在支持 SDUC 的设备上使用，目前绝大多数相机和读卡器尚不支持 SDUC 标准。在 SDUC 设备普及之前，SDXC 仍是绝大多数用户的实际选择。
:::

## 总结

SD 卡的容量标准从 SD 到 SDHC、SDXC 再到 SDUC 逐代演进，每代标准在容量上限、文件系统和传输速度上都有显著提升。SDHC 的 32GB 上限和 FAT32 文件系统适合日常照片拍摄；SDXC 的 2TB 上限和 exFAT 文件系统适合 4K 视频和大文件存储；SDUC 的 128TB 上限和 SD Express 极速传输则是面向未来的技术储备。在选购时，首先确认设备支持的标准，再根据拍摄需求选择合适的容量和速度等级。

下一节将进入《19.03 CFexpress Type A 介绍》，深入讲解索尼高端机型所采用的 CFexpress Type A 存储卡规格。