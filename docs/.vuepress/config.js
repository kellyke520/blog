module.exports = {
  // 和仓库名相同
  base: "/blog/",

  title: "Kelly ke's blog",
  description: "A bold attempt is half success",

  head: [
    ['link', { rel: 'icon', href: '/avatar.png' }],
  ],

  theme: "reco",
  themeConfig: {
    author: "Kelly ke",
    logo: "/avatar.jpg",
    authorAvatar: "/avatar.jpg",
    type: "blog",

    logo: '/assets/img/logo.png',

    navbar: true, //所有页面的导航栏是否显示
    nav: [
      { text: "首页", icon: 'reco-home',link: "/" },
      {
        text: "Kelly ke 的站点",
        icon: 'reco-menu',
        items: [
          {
            text: "网易云音乐",
            link: "https://music.163.com/#/user/home?id=494856858",
          },
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
          // 找音乐来这里，https://www.hifini.com/thread-49.htm
          {
            name: "Stay With Me",
            artist: "朴灿烈/Punch",
            url: "https://ws.stream.qqmusic.qq.com/C400004VmT3t1ERZn2.m4a?guid=3240394427&vkey=97A72384ACD52EA632E7B0C722ACBF1D8E598DF2536AC239579DE23BFD901B11EEDD4D4D815DBE64242C6B8113B5F212D00FA9B5BF99C120&uin=626567678&fromtag=103032&src=C400002PBIgA0gKjnA.m4a",
            cover:
              "https://y.gtimg.cn/music/photo_new/T002R300x300M0000046l5AB1E0FwV.jpg",
          },
          {
            name: "Round and round",
            artist: "Heize/韩秀智",
            url: "https://ws.stream.qqmusic.qq.com/C400003teIQ322USnW.m4a?guid=5769733811&vkey=DBB7041A6A07A98E8CDEF977F2F5A6FC70B9CFA977EF945FE9240B5167C64FD6603E08A3C93C8499327ED5BE2796A2DB675EC0ECB3D7FCC3&uin=626567678&fromtag=103032",
            cover:
              "https://y.gtimg.cn/music/photo_new/T002R300x300M0000046l5AB1E0FwV.jpg",
          },
          {
            name: "Everytime",
            artist: "CHEN",
            url: "https://ws.stream.qqmusic.qq.com/C400004OPkaF4aiQSJ.m4a?guid=771313563&vkey=FB114C10D42232BDA5EE413E5FA5E9385F72C6085286B7DF4272DA0F74EFEF0ABD1FFE96F51C2411BA139EE94D63D2C5A3D227D3D18212DF&uin=626567678&fromtag=103032",
            cover:
              "https://y.gtimg.cn/music/photo_new/T002R300x300M0000001iCUt0DzsWg.jpg",
          },
          {
            name: "童话镇",
            artist: "陈一发儿",
            url: "https://m.hifini.com/music/demo.%E7%AB%A5%E8%AF%9D%E9%95%87.m4a",
            cover:
              "https://p3.music.126.net/MMGPtLfk9aDv-UHgEO3J9A==/109951163623079780.jpg?param=133y133",
          },
          {
            name: "青城山下白素贞",
            artist: "鞠婧祎",
            url: "https://ws.stream.qqmusic.qq.com/C400002awsrV0qQqJF.m4a?guid=7079733468&vkey=49B61E13A136BDA11631EC70C76DBF5E50DD6D55192E104BC5D8076B7154A1FBF4CB77B9F320569F861D443A074C25679EA08EF60E3DE3C2&uin=&fromtag=103032",
            cover:
              "https://y.gtimg.cn/music/photo_new/T002R300x300M000000dVMFl132vbz.jpg",
          },
        ],
        // 播放器位置
        position: {
          left: "10px",
          bottom: "20px",
          "z-index": "999999",
        },
        // 是否默认缩小
        autoShrink: false,
        // 缩小时缩为哪种模式
        shrinkMode: "float",
        // 浮窗模式浮动在右侧
        floatPosition: "left",
        // 悬浮窗样式
        floatStyle: { bottom: "20px", "z-index": "999999" },
      },
    ],
    /**看板娘插件 */
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: [
          "koharu",
          "haruto",
          "z16",
          "blackCat",
          "whiteCat",
          "haru1",
          "haru2",
          "izumi",
          "shizuku",
          "wanko",
          "miku",
        ],
        clean: true, //隐藏所有按钮
        messages: {
          welcome: "欢迎来到Kelly ke的博客",
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
    /**动态标题 */
    [
      "dynamic-title",
      {
        showIcon: "/favicon.png",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.png",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000,
      },
    ],
    // 默认主题自带插件
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
};
