# Mobile loading and navigation

Mobile navigation (below 768px) is visible in the server-rendered page and does
not depend on hydration, scrolling, or video playback. Its links have 44px-high
tap targets, with room for the logo at 320px. Anchor scrolling reserves 88px for
the fixed header. Desktop navigation retains its scroll-triggered reveal.

Content images use `ContentImage`, a wrapper around the Next.js 12 image
component. Explicit `sizes` select appropriate responsive variants; lazy loading
defers offscreen sections. Widths and heights reserve layout space. Next.js
serves optimized images through `/_next/image`, with Sharp available for local
production servers and deployments. The original image files remain unchanged.

After adding or replacing a content image, run:

```sh
node scripts/image-dimensions.cjs
```

This refreshes `data/image-dimensions.json`. Set an appropriate `sizes` value at
the call site. Decorative backgrounds and the hero video cannot intercept taps.
Mobile uses the existing radial gradients without the 200px blur filter.
The 720p video and poster fallback are retained.

## Regression checks

Build with Node 22, then run the production server. Verify in Chromium and
WebKit with a mobile viewport, as well as on the affected physical iPhone:

- At the top of the page, all navigation links and the logo are visible before
  scrolling; the layout fits a 320px-wide viewport.
- On initial arrival, no content-gallery `/_next/image` requests are made.
- Tapping Contact immediately scrolls to the form below the fixed header.
  Switching to Brand and entering a name works. Do not submit the form in tests.
- Scrolling to Talent loads optimized images with correct crops and labels.
- Scrolling through the page reveals the creator owners, brand logos, founders,
  and Impact images without collapsing their reserved layout space.
- Navigation works with JavaScript disabled and with video requests blocked.
- The mobile `.gradient-bg` has no blur filter; desktop retains its blur and
  scroll-triggered navigation.
- The hero still plays the 1280×720 video when playback is allowed.

Local production checks on a 390px viewport at 3× pixel density fetched about
1.24 MB of optimized content images while scrolling the page, versus about
18.95 MB of image downloads in the live baseline. Initial non-video resources
were about 1.12 MB, mostly the existing poster. With 1.6 Mbps throughput, 150ms
latency, and 6× CPU throttling, Contact accepted a tap at about 1.6 seconds in the
local test. These are browser measurements, not physical-iPhone load-time guarantees.
