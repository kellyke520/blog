module.exports = {
  // 和仓库名相同
  base: "/blog/",

  title: "Jame lin的博客",
  description: "记录一下那平凡的生活code",
  theme: "reco",
  themeConfig: {
    author: "Jame lin",
    logo: "/avatar.jpg",
    authorAvatar: "/avatar.jpg",
    type: "blog",

    nav: [
      { text: "首页", link: "/" },
      {
        text: "Jame lin 的站点",
        items: [
          { text: "网易云音乐", link: "https://music.163.com/#/user/home?id=494856858" },
          { text: "Github", link: "https://github.com/kelin96" },
        ],
      },
    ],

    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客", // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
    },
    // sidebar: [
    //   {
    //     title: "欢迎学习",
    //     path: "/",
    //     collapsable: false, // 是否折叠
    //     children: [{ title: "博客简介", path: "/" }],
    //   },
    //   {
    //     title: "基础篇",
    //     path: "/blogs/1",
    //     collapsable: true,
    //     children: [
    //       { title: "第一篇", path: "/blogs/1" },
    //       { title: "第二篇", path: "/blogs/2" },
    //     ],
    //   },
    // ],
  },

  plugins: [
    /**樱花飘落插件 */
    [
      "sakura",
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        },
      },
    ],
    /**点击出星星插件 */
    [
      "cursor-effects",
      {
        size: 4, // size of the particle, default: 2
        shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
    /**背景音乐插件 */
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: "山鬼(coverwinky诗)",
            artist: "黄钰棕",
            url: "https://www.ytmp3.cn/down/43598.mp3",
            cover: "https://assets.smallsunnyfox.com/music/3.jpg",
          },
          {
            name: "告白の夜 (Live)_Ayasa绚沙",
            artist: "Ayasa绚沙",
            url: "https://www.ytmp3.cn/down/78128.mp3",
            cover:
              "https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200",
          },
          {
            name: "강남역 4번 출구",
            artist: "Plastic / Fallin` Dild",
            url: "https://assets.smallsunnyfox.com/music/2.mp3",
            cover: "https://assets.smallsunnyfox.com/music/3.jpg",
          },
          {
            name: "팔베개",
            artist: "최낙타",
            url: "https://assets.smallsunnyfox.com/music/3.mp3",
            cover:
              "https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200",
          },
        ],
        // 播放器位置
        position: {
          right: "10px",
          bottom: "220px",
          "z-index": "999999",
        },
        // 是否默认缩小
        autoShrink: false,
        // 缩小时缩为哪种模式
        shrinkMode: "float",
        // 浮窗模式浮动在右侧
        floatPosition: "right",
        // 悬浮窗样式
        floatStyle: { bottom: "240px", "z-index": "999999" },
      },
    ],
    /**看板娘插件 */
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: [
          "z16",
          "blackCat",
          "whiteCat",
          "haru1",
          "haru2",
          "haruto",
          "koharu",
          "izumi",
          "shizuku",
          "wanko",
          "miku",
        ],
        clean: true, //隐藏所有按钮
        messages: {
          welcome: "欢迎来到 " + "Jame lin的博客",
          home: "心里的花，我想要带你回家。",
          theme: "好吧，希望你能喜欢我的其他小伙伴。",
          close: "你知道我喜欢吃什么吗？痴痴地望着你。",
        },
        modelStyle: {
          right: "85px",
          bottom: "0px",
          opacity: "0.9",
        },
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
};
