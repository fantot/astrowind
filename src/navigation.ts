import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: '首页', href: getPermalink('/') },
    { text: 'AI 服务', href: getPermalink('/services') },
    { text: 'AI 知识库', href: getBlogPermalink() },
    { text: '常见问题', href: getPermalink('/#faq') },
    { text: '关于', href: getPermalink('/about') },
    { text: '联系作者', href: '#consult-author' },
  ],
  actions: [{ text: '咨询作者', href: '#consult-author', icon: 'tabler:message-circle' }],
};

export const footerData = {
  links: [
    {
      title: 'AI 服务',
      links: [
        { text: 'ChatGPT', href: getPermalink('/services#chatgpt') },
        { text: 'Claude', href: getPermalink('/services#claude') },
        { text: 'Gemini', href: getPermalink('/services#gemini') },
      ],
    },
    {
      title: '内容',
      links: [
        { text: 'AI 知识库', href: getBlogPermalink() },
        { text: '常见问题', href: getPermalink('/#faq') },
        { text: '关于本站', href: getPermalink('/about') },
      ],
    },
    {
      title: '联系',
      links: [
        { text: '咨询作者', href: '#consult-author' },
        { text: '联系页面', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '使用条款', href: getPermalink('/terms') },
    { text: '隐私说明', href: getPermalink('/privacy') },
  ],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `专注分享真实、实用的 AI 使用经验。`,
};
