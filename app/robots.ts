export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://aialok.vercel.app/sitemap.xml',
    host: 'https://aialok.vercel.app',
  };
}
