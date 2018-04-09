new Vue({
    el: "#app",
    data: {
      gameNames: ['魔兽世界', '暗黑破坏神Ⅲ', '星际争霸Ⅱ', '炉石传说', '风暴英雄',
        '守望先锋'
      ],
      activeName: ''
    },
    methods: {
      selected: function(gameName) {
        this.activeName = gameName
      }
    }
  })