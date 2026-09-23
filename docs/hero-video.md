# Hero background video

The hero renders `/videos/videobg.png` in the initial HTML. It remains underneath
the video, which stays transparent until the `playing` event. Video errors or
rejected autoplay leave the poster visible. Navigation and page content never
depend on video readiness.

Video loading starts after the window `load` event and an idle callback (or a
short timeout in browsers without that API). Mobile and desktop both use the
720p version to preserve detail in the full-height hero. Reduced-motion preferences, Data Saver,
and reported 2G connections use the poster without requesting video. Browsers
without network-information support still get deferred loading and the poster.

The encode retains the original 43.4-second sequence, uses H.264/yuv420p, omits the
unused audio track, and places MP4 metadata before the media data (`faststart`).
The original `/videos/new-bg.mp4` is retained as the source asset.

## Regenerating the assets

Run from the repository root with FFmpeg installed:

```sh
ffmpeg -i public/videos/new-bg.mp4 -map 0:v:0 -an -c:v libx264 -preset slow -crf 28 -profile:v main -pix_fmt yuv420p -movflags +faststart public/videos/hero-bg.mp4
```

## Verification

Use Node 22 for the existing Next.js 12 build. The machine's newer default Node
version is incompatible with Next.js 12's bundled JWT dependency.

- Build with `npm run build` under Node 22.
- With cache disabled, confirm no MP4 is requested before the window loads.
- Confirm both phone-sized and desktop viewports request `hero-bg.mp4`.
- Delay or block the MP4 request: the poster should stay visible, and the page
  should load and scroll normally.
- Block autoplay: the poster should remain with no unhandled promise rejection.
- Enable reduced motion or supported Data Saver/2G emulation: no MP4 should load.
- Disable JavaScript: the poster and server-rendered content should still show.
- Verify playback on a physical iPhone as well as browser emulation before
  considering device-specific failures resolved.
