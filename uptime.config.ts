// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // 状态页面的标题
  title: "xandertang的状态页面",
  // 在状态页面头部显示的链接，可以设置 `highlight` 为 `true` 来高亮显示
  links: [
    { link: 'https://github.com/Dr-T', label: 'GitHub' },
    { link: 'https://tx88.eu.org/', label: 'Home' },
    { link: 'mailto:xandertang@qq.com', label: 'Email Me', highlight: true },
  ],
  group: {
    'AI 应用': ['chatx', 'lobechat', 'newapi']
  },
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    {
      id: 'chatx',
      name: 'ChatX',
      method: 'GET',
      target: 'https://chatx.tx88.eu.org',
      statusPageLink: 'https://chatx.tx88.eu.org',
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'lobechat',
      name: 'LobeChat',
      method: 'GET',
      target: 'https://lobechat.tx88.eu.org',
      statusPageLink: 'https://lobechat.tx88.eu.org',
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'newapi',
      name: 'NewApi',
      method: 'GET',
      target: 'https://newapi.tx88.eu.org',
      statusPageLink: 'https://newapi.tx88.eu.org',
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
  ],
}

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
