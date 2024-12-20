
Component({
  data: {
    active: 0,
    list: [
      {
        text: '首页',
        url: 'pages/index/index',
      },
      {
        text: '我的',
        url: 'pages/mine/index',
      }
    ],
  },

  methods: {
    onChange(event:any) {
      this.setData({ active: event.detail.value });
      const url = this.data.list[event.detail.value].url
      wx.switchTab({
        url: url.startsWith('/')
          ? url
          : `/${url}`,
      });
    },

    init() {
      const page = getCurrentPages().pop();
      const route = page ? page.route.split('?')[0] : '';
      const active = this.data.list.findIndex(
        (item) =>
          (item.url.startsWith('/') ? item.url.substr(1) : item.url) ===
          `${route}`,
      );
      this.setData({ active });
    },
  },
});
