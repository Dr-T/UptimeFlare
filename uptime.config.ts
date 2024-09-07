const pageConfig = {
  // 状态页面的标题
  title: "xandertang的状态页面",
  // 在状态页面头部显示的链接，可以设置 `highlight` 为 `true` 来高亮显示
  links: [
    { link: 'https://github.com/Dr-T', label: 'GitHub' },
    { link: 'https://blog.tx88.eu.org/', label: '博客' },
    { link: 'mailto:xandertang@qq.com', label: '给我发邮件', highlight: true },
  ],
}

const workerConfig = {
  // 除非状态发生变化，否则最多每3分钟写入一次KV
  kvWriteCooldownMinutes: 3,
  // 通过取消注释下面的行来为状态页面和API启用HTTP基本认证，格式为 `<用户名>:<密码>`
  // passwordProtection: 'username:password',
  // 在这里定义所有的监控器
  monitors: [
    {
      id: 'chatx',
      name: 'ChatX',
      method: 'GET',
      target: 'https://chatx.tx88.eu.org',
      statusPageLink: 'https://chatx.tx88.eu.org'
    },
    {
      id: 'lobechat',
      name: 'LobeChat',
      method: 'GET',
      target: 'https://lobechat.tx88.eu.org',
      statusPageLink: 'https://lobechat.tx88.eu.org'
    },
    {
      id: 'newapi',
      name: 'NewApi',
      method: 'GET',
      target: 'https://newapi.tx88.eu.org',
      statusPageLink: 'https://newapi.tx88.eu.org'
    }
  ]
  }



//     // HTTP监控器示例
//     {
//       // `id` 应该是唯一的，如果 `id` 保持不变，历史记录将被保留
//       id: 'foo_monitor',
//       // `name` 用于状态页面和回调消息
//       name: '我的API监控器',
//       // `method` 应该是一个有效的HTTP方法
//       method: 'POST',
//       // `target` 是一个有效的URL
//       target: 'https://example.com',
//       // [可选] `tooltip` 仅用于在状态页面显示工具提示
//       tooltip: '这是此监控器的工具提示',
//       // [可选] `statusPageLink` 仅用于状态页面上的可点击链接
//       statusPageLink: 'https://example.com',
//       // [可选] `expectedCodes` 是可接受的HTTP响应代码数组，如果未指定，默认为2xx
//       expectedCodes: [200],
//       // [可选] 超时时间（毫秒），如果未指定，默认为10000
//       timeout: 10000,
//       // [可选] 要发送的头部
//       headers: {
//         'User-Agent': 'Uptimeflare',
//         Authorization: 'Bearer YOUR_TOKEN_HERE',
//       },
//       // [可选] 要发送的主体
//       body: 'Hello, world!',
//       // [可选] 如果指定，响应必须包含关键词才能被视为正常运行
//       responseKeyword: 'success',
//       // [可选] 如果指定，检查将在您指定的区域运行，
//       // 在设置此值之前，请参考文档 https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup
//       checkLocationWorkerRoute: 'https://xxx.example.com',
//     },
//     // TCP监控器示例
//     {
//       id: 'test_tcp_monitor',
//       name: 'TCP监控器示例',
//       // 对于tcp监控器，`method` 应该是 `TCP_PING`
//       method: 'TCP_PING',
//       // 对于tcp监控器，`target` 应该是 `主机:端口`
//       target: '1.2.3.4:22',
//       tooltip: '我的生产服务器SSH',
//       statusPageLink: 'https://example.com',
//       timeout: 5000,
//     },
//   ],
//   notification: {
//     // [可选] apprise API服务器URL
//     // 如果未指定，将不会发送通知
//     appriseApiServer: "https://apprise.example.com/notify",
//     // [可选] apprise的接收者URL，参考 https://github.com/caronc/apprise
//     // 如果未指定，将不会发送通知
//     recipientUrl: "tgram://bottoken/ChatID",
//     // [可选] 通知消息中使用的时区，默认为 "Etc/GMT"
//     timeZone: "Asia/Shanghai",
//     // [可选] 发送通知前的宽限期（分钟）
//     // 只有当监控器在初始故障后连续N次检查都处于宕机状态时，才会发送通知
//     // 如果未指定，将立即发送通知
//     gracePeriod: 5,
//   },
//   callbacks: {
//     onStatusChange: async (
//       env: any,
//       monitor: any,
//       isUp: boolean,
//       timeIncidentStart: number,
//       timeNow: number,
//       reason: string
//     ) => {
//       // 当任何监控器的状态发生变化时，将调用此回调
//       // 在这里编写任何TypeScript代码
// 
//       // 这不会遵循宽限期设置，将在状态变化时立即调用
//       // 如果您想实现宽限期，需要手动处理
//     },
//     onIncident: async (
//       env: any,
//       monitor: any,
//       timeIncidentStart: number,
//       timeNow: number,
//       reason: string
//     ) => {
//       // 如果任何监控器存在正在进行的事件，此回调将每1分钟调用一次
//       // 在这里编写任何TypeScript代码
//     },
//   },
// }



// 别忘了这个，否则编译会失败。
export { pageConfig, workerConfig }
