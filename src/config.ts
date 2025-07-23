import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 网站基础配置
export const siteConfig: SiteConfig = {
	title: "Delay社", // 网站标题
	subtitle: "ACGN同人社团", // 网站副标题
	lang: "zh_CN", // 网站语言: 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 200, // 主题色相值(0-360)，例如红色:0，蓝绿色:200，青色:250，粉色:345
		fixed: true, // 是否对访客隐藏主题颜色选择器
	},
	banner: {
		enable: true, // 是否启用横幅
		src: "assets/images/COVER 2024 2.png", // 横幅图片路径(相对于/src目录。如果以'/'开头则相对于/public目录)
		position: "center", // 图片定位(等同于object-position)，仅支持'top','center','bottom'
		credit: {
			enable: true, // 是否显示横幅图片版权信息
			text: "柠檬片儿", // 版权文本
			url: "", // (可选)原作品或艺术家页面的URL链接
		},
	},
	toc: {
		enable: true, // 是否在文章右侧显示目录
		depth: 2, // 目录显示的最大标题层级(1-3)
	},
	favicon: [ // 网站图标配置，留空则使用默认图标
		 {
		   src: '/favicon/logo.png',    // 图标路径(相对于/public目录)
		 }
	],
};

// 导航栏配置
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home, // 首页链接预设
		{
			name: "企划", // 链接名称
			url: "#", // 链接URL(内部链接不应包含基础路径)
		},
		LinkPreset.About, // 关于链接预设
		LinkPreset.Archive, // 归档链接预设
		{
			name: "画廊",
			url: '#'
		},
		{
			name: "联系", // 链接名称
			url: "#", // 链接URL(内部链接不应包含基础路径)
		},
	],
};

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/afb7b48f4e1c11bf4f0b9e8e23ea777e.png", // 头像路径(相对于/src目录。如果以'/'开头则相对于/public目录)
	name: "Delay社", // 显示名称
	bio: "请拯救具足虫社团吧~", // 个人简介
	links: [ // 社交链接

	],
};

// 版权许可配置
export const licenseConfig: LicenseConfig = {
	enable: false, // 是否显示许可协议
	name: "CC BY-NC-SA 4.0", // 许可名称
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/", // 许可协议URL
};

// 代码块样式配置
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式(如背景色)会被覆盖，请查看astro.config.mjs文件
	// 请选择深色主题，因为当前博客主题仅支持深色背景
	theme: "github-dark", // 代码主题
};