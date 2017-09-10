
export default [
  {
    name: '页面设置',
    value: [
      {
        name: '标题',
        value: 'title'
      },
      {
        name: '副标题',
        value: 'subtitle'
      },
      {
        name: '描述',
        value: 'description'
      },
      {
        name: '作者',
        value: 'subtitle'
      },
      {
        name: '语言（主题语言）',
        value: 'language'
      },
      {
        name: '时区',
        value: 'timezone'
      }
    ]
  },
  {
    name: '地址设置',
    value: [
      {
        name: '博客地址（预览必须）',
        value: 'url'
      }
    ]
  },
  {
    name: '写作设置',
    value: [
      {
        name: '语法高亮',
        value: 'highlight',
        args: ['enable']
      }
    ]
  },
  {
    name: '扩展设置',
    value: [
      {
        name: '主题',
        value: 'theme'
      },
      {
        name: '部署',
        value: 'deploy',
        args: ['repo']
      }
    ]
  }
]