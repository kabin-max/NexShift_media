const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'video.mp4');
const outputPath = path.join(__dirname, 'public', 'video-cut.mp4');

console.log("Using ffmpeg at:", ffmpeg);
console.log("Cutting video...");

try {
  // -t 12 cuts the video to exactly 12 seconds
  // -c copy just copies the streams without re-encoding (very fast, but might not be keyframe accurate)
  // To ensure it's exactly 12 seconds even if keyframes don't align, we can just let it re-encode or use -c copy first. Let's re-encode to be safe.
  execSync(`"${ffmpeg}" -y -i "${inputPath}" -t 12 "${outputPath}"`);
  console.log("Successfully cut video to 12 seconds!");
} catch (e) {
  console.error("Error during cut:");
  if (e.stdout) console.error(e.stdout.toString());
  if (e.stderr) console.error(e.stderr.toString());
}
