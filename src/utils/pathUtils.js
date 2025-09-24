/**
 * 处理静态资源路径，使其根据 Vite 的 base 配置正确加载
 * @param {string} path - 静态资源的相对路径，如 '/static/assets/images/xxx.png'
 * @returns {string} - 根据 base 配置调整后的完整路径
 */
export const getStaticPath = (path) => {
  // 如果路径已经以 http:// 或 https:// 开头，则直接返回
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // 获取 Vite 的 base 配置
  const baseUrl = import.meta.env.BASE_URL;
  
  // 确保路径格式正确
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // 组合 baseUrl 和 cleanPath
  return `${baseUrl}${cleanPath}`;
};