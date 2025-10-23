import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig: NextConfig = {
  /* config options here */
};

export default withSentryConfig(nextConfig, {
  org: 'nomii-llc',
  project: 'next-dash',
  // Only print logs for uploading source maps in CI
  // Set to `true` to suppress logs
  silent: !process.env.CI,
  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
  reactComponentAnnotation: {
    enabled: true,
  },
});
