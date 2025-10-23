import * as Sentry from '@sentry/nextjs';
Sentry.init({
  dsn: 'https://0259e9f32d8a6ef1896c4c3cf820b9ce@o4506112581894144.ingest.us.sentry.io/4510237530980352',
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  // that it will also get attached to your source maps
});
