---
title: "17.05 ATEM Mini 导播台应用"
description: "深入讲解 Blackmagic ATEM Mini 系列硬件导播台的功能特性、型号对比、操作方法与实战应用，帮助读者在小型多机位直播制作中高效使用这一核心设备。"
---

# 17.05 ATEM Mini 导播台应用

## 核心概念概述

ATEM Mini 是 Blackmagic Design 推出的紧凑型广播级硬件切换台系列，专为小型多机位现场制作和直播而设计。它将传统广播级切换台的核心功能——多路视频切换、特效转场、音频混音、图文叠加——浓缩于一个便携的机身中，通过 USB 输出即可被计算机识别为网络摄像头信号[reference:0]。

ATEM Mini 解决了“多机位信号如何实时切换并推流”这一核心问题。在多机位直播制作中，导播通过 ATEM Mini 在多个摄像机信号之间实时选择最佳画面，切换后的节目信号通过 USB 输出至电脑（OBS 等软件）或通过以太网直接推流至直播平台[reference:2]。理解 ATEM Mini 的功能特性和操作方法，是高效完成小型多机位直播制作的关键。

## 一、ATEM Mini 系列型号对比

ATEM Mini 系列共有四个主要型号，功能逐级递增[reference:4][reference:5]。

### ATEM Mini（基础款）

ATEM Mini 是该系列的入门型号，搭载 4 个带格式转换功能的 HDMI 输入接口、1 个 HDMI 输出接口、USB 网络摄像头输出，以及用于画中画的 DVE 功能、多种转场特效、绿屏色键（Chroma Key）、拥有 20 个静帧存储量的媒体池[reference:6][reference:7]。机身前面板设有信号源选择按钮（1-4）、CUT（硬切）和 AUTO（自动转场）按钮，以及音频控制按钮[reference:8][reference:9]。

ATEM Mini 适合需要 4 机位切换的基础直播场景，通过 USB 连接电脑使用 OBS 等软件进行推流[reference:10]。

### ATEM Mini Pro

ATEM Mini Pro 在基础款之上添加了硬件推流引擎和 USB 硬盘录制功能[reference:11][reference:12]。它可以通过以太网直接连接直播平台（YouTube、Facebook、Twitch 等）进行推流，无需依赖电脑软件[reference:13]。同时支持将节目画面直接录制到 USB 硬盘[reference:14]。

Pro 型号还增加了多画面分割监看功能——通过 HDMI 输出连接一台监视器，即可同时查看 4 路摄像机输入、预监画面和节目画面，以及录制、直播和音频状态[reference:15]。

ATEM Mini Pro 适合需要在无电脑环境下独立推流、或需要同时直播和录制的场景[reference:17]。

### ATEM Mini Pro ISO

ATEM Mini Pro ISO 在 Pro 型号的基础上增加了 ISO 录制功能——可同时录制多达 5 个独立的 H.264 视频流，包括 4 路 HDMI 输入的干净信号（未经任何处理的原始画面）和 1 路节目直播画面[reference:18]。

该型号还会自动保存 DaVinci Resolve 项目文件[reference:20]。用户在活动结束后打开该项目文件，所有现场的切换、叠化效果和图文都能加载进来，可微调剪辑点、替换镜头，甚至重新链接到 Blackmagic RAW 摄影机文件进行 Ultra HD 精编。

ATEM Mini Pro ISO 适合需要在活动结束后对多机位素材进行重新剪辑和精细调色的场景。

### ATEM Mini Extreme ISO

ATEM Mini Extreme ISO 是该系列的旗舰型号，搭载 8 个 HDMI 输入、2 个独立的 HDMI 输出、2 个 USB 端口和 1 个耳麦接口[reference:23]。此外还具备 4 个色度键控、6 个画中画 DVE、2 个媒体播放器，以及多达 16 个视图的多画面分割功能[reference:24]。

ATEM Mini Extreme ISO 适合需要 8 机位切换、多路画中画叠加、多路图文叠加的复杂直播制作场景。

| 型号 | HDMI 输入 | 硬件推流 | USB 录制 | ISO 录制 | 多画面分割 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ATEM Mini | 4 | 否 | 否 | 否 | 否 |
| ATEM Mini Pro | 4 | 是 | 是 | 否 | 是 |
| ATEM Mini Pro ISO | 4 | 是 | 是 | 5路 | 是 |
| ATEM Mini Extreme ISO | 8 | 是 | 是 | 8+路 | 是（16视图） |

## 二、硬件接口与连接

### 后面板接口

ATEM Mini 的后面板集成了各类视音频和控制接口[reference:25]。HDMI 输入接口数量取决于型号（4 路或 8 路），用于连接摄像机、电脑、游戏机等 HDMI 信号源[reference:26]。HDMI 输出接口用于连接监看显示器或投影仪[reference:27]。USB-C 接口用于连接电脑，输出被识别为网络摄像头信号[reference:28]。以太网接口仅 Pro 及以上型号配备，用于直接推流。3.5mm 麦克风输入接口用于连接外置麦克风[reference:30]。

### 前面板控制

ATEM Mini 的前面板设有简单易用的按钮，用于选择信号源、视频特效和各类转场[reference:31]。信号源按钮采用大尺寸设计，仅凭手感即可确认操控，操作者的目光无需离开监视器[reference:32]。CUT 按钮执行硬切（瞬时切换）；AUTO 按钮执行带特效的自动转场[reference:33]。音频控制按钮用于调节各路音频的开关和音量[reference:34]。

## 三、基本操作

### 切换操作

连接好摄像机和电源后即可开始节目切换[reference:35]。通过按前面板上标有 1 到 4（或 8）的输入按钮即可在不同视频源之间切换[reference:37]。硬切（CUT）是最常用的转场方式——按下 CUT 按钮后，画面会瞬时切换到目标信号源，流畅且专业。如果使用自动转场（AUTO），按下输入按钮时画面会使用预设的特效（如叠化、划像、DVE 推移等）完成过渡。

### 转场效果

ATEM Mini 提供多种转场效果。混合转场从一个视频源逐渐过渡到下一个，缓慢的混合可营造梦幻般的柔和氛围。划像转场以一条直线划过画面，显示出下一个视频源。DVE 转场在转场时移动整个画面，视觉效果更生动。

转场时长可通过前面板的时长按钮设置（0.5 秒、1 秒、1.5 秒等）[reference:44]。使用 ATEM Software Control 软件还可获得更多转场类型和精细参数调整。

### 多画面分割监看

ATEM Mini Pro 及以上型号支持多画面分割监看。通过 HDMI 输出连接一台监视器，按下前面板的 M/V 按钮，即可在同一屏幕上同时查看所有输入信号、预监画面和节目画面[reference:47]。这一功能让导播在不借助外部设备的情况下，即可实时监控所有机位的画面状态。

## 四、ATEM Software Control 软件控制

ATEM Mini 可以通过免费的 ATEM Software Control 软件（支持 Mac 和 Windows）进行更精细的控制[reference:50]。软件界面分为多个页面。Switcher（切换台）页面可进行实时画面切换、调整转场参数、管理键控等操作。Media（媒体）页面可上传和管理多达 20 个带 Alpha 通道的 RGBA 静帧图像，用于标题、台标和下横栏图文。Audio（音频）页面可控制内置的多通道 Fairlight 调音台。Camera Control（摄像机控制）页面可通过 HDMI 连接控制 Blackmagic Pocket Cinema Camera。

软件还提供预监总线功能——在将信号切到节目输出之前，先在预监窗口预览下一个信号源，确认无误后再按下 CUT 或 AUTO 按钮将其切出。这大幅降低了误切的风险。

## 五、音频功能

ATEM Mini 系列内置了多声道 Fairlight 调音台，可对 4 路 HDMI 内嵌音频和 2 路 3.5mm 模拟音频输入进行调节和混音[reference:57][reference:58]。

### 硬件音频控制

前面板提供了每路 HDMI 视频内嵌音频的硬件控制按钮[reference:59]。AFV（音频跟随视频）功能——点亮某一路的 AFV 按钮后，当切换到该路视频信号时，该路的音频会自动跟随播出[reference:60]。ON 按钮可将某一路音频强制打开，无论当前切换的是哪一路视频画面[reference:61]。

### 软件调音台

在 ATEM Software Control 的 Audio 页面中，可访问完整的 Fairlight 调音台功能[reference:62]。每路音频通道都提供了 6 频段参量均衡器（Parametric EQ）、压缩器、限制器、扩展器和门限器，以及声相控制[reference:63][reference:64]。用户可对每个输入进行增益归一化，确保所有音频源的电平一致[reference:65]。

## 六、直播推流设置

### USB 网络摄像头模式（所有型号）

所有 ATEM Mini 型号都搭载 USB 接口，可被计算机识别为网络摄像头信号[reference:66][reference:67]。连接电脑后，在 OBS、Zoom、Skype 等软件的摄像头列表中选择“Blackmagic Design”即可使用[reference:68]。

### 硬件推流模式（Pro 及以上型号）

ATEM Mini Pro 及以上型号内置硬件推流引擎，可通过以太网直接连接直播平台进行推流[reference:70][reference:71]。在 ATEM Software Control 的输出设置中选择直播平台（YouTube、Facebook、Twitch 等），输入直播服务器地址和推流密钥，即可开始推流[reference:72]。硬件推流不依赖电脑性能，画面稳定不丢帧[reference:73]。

### USB 硬盘录制（Pro 及以上型号）

ATEM Mini Pro 及以上型号支持将节目画面直接录制到 USB 硬盘[reference:74]。插入 USB 硬盘后，通过前面板的录制按钮即可开始/停止录制[reference:75]。文件以 H.264 格式保存，可直接用于后期剪辑[reference:76]。

## 七、典型应用场景

**校园活动多机位直播：** 在礼堂演出或会议中，将 3-4 台摄像机通过 HDMI 连接至 ATEM Mini Pro，导播在观众席后方通过多画面分割监看所有机位画面，实时切换全景、特写和观众反应镜头，通过以太网直接推流至校内直播平台或 YouTube。

**访谈/脱口秀节目：** 将主持人和嘉宾的两台特写摄像机分别接入 ATEM Mini，使用 DVE 画中画功能在单人画面中叠加另一人的反应镜头。使用下游键控叠加节目名称和嘉宾姓名下横栏。USB 输出至电脑作为虚拟摄像头用于 Zoom 或 Teams 会议。

**游戏直播：** 将游戏主机和玩家摄像头分别接入 ATEM Mini，使用 DVE 画中画在游戏画面上叠加玩家画面。使用绿屏色键功能移除绿幕背景，将玩家嵌入游戏画面。麦克风输入接入评论员话筒进行实时解说。

**商务演示：** 将演讲人摄像机、产品特写摄像机和 PPT 电脑分别接入 ATEM Mini，在演讲人画面和 PPT 画面之间实时切换。使用 DVE 将演讲人画面叠加到 PPT 上，实现“画中画”效果。USB 输出至 Zoom 进行远程会议演示。

## 八、注意事项与常见误区

### 信号格式统一

虽然 ATEM Mini 的所有 HDMI 输入都设有格式转换功能，但在多机位项目中，建议将所有摄像机的输出格式（分辨率、帧率）统一设置为相同的参数。格式转换虽能工作，但统一格式可避免潜在的同步问题和延迟。

### 音频电平管理

在连接麦克风时，需注意 ATEM Mini 的 3.5mm 音频接口可在 Mic Level 和 Line Level 之间切换[reference:90]。将话筒接入 Line Level 接口可能导致信号太弱听不到声音；将 Line Level 音频源接入 Mic Level 接口则会导致声音过大失真[reference:91]。在 ATEM Software Control 的音频设置中正确配置输入类型[reference:92]。

### 热切换与预监

直接按输入按钮执行的是“热切换”（Cut Bus 模式），画面会立即切换[reference:93]。若想先预览再切换，建议在 ATEM Software Control 中使用预监总线——先在预监窗口确认下一个信号源的构图和曝光，再通过 CUT 或 AUTO 按钮切换。

### 散热与稳定性

ATEM Mini 在长时间直播中会产生一定热量，建议放置在通风良好的位置，避免堆叠其他发热设备。使用锁定式 DC 电源接口的型号需确保电源线连接牢固。

## 总结

ATEM Mini 系列将广播级切换台的核心功能浓缩于紧凑的机身中，通过 HDMI 输入、USB 网络摄像头输出和硬件推流引擎，为小型多机位直播制作提供了完整的解决方案。从基础款 ATEM Mini 的 4 路切换，到 Pro 型号的硬件推流和录制，再到 ISO 型号的 5 路同时录制和 DaVinci Resolve 项目文件保存，不同型号适配不同规模和需求的制作场景。理解各型号的功能差异和操作方法，可帮助导播在各类直播项目中高效完成多机位切换和信号管理。

下一节将进入《17.06 软件导播 vs 硬件导播》，深入讲解两类导播方案的优缺点对比与选择逻辑。