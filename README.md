# Dettato — unofficial Pinokio launcher

Independent Pinokio launcher for KobiMusic's [Dettato](https://github.com/kobimusic/dettato) audio-to-MIDI model.

## Install and start

1. Open Pinokio → **Discover / Download from URL**.
2. Paste **https://github.com/ChrisTorng/dettato.pinokio** and download it.
3. Click **Install**, then **Start**, then **Open Web UI**.
4. Upload a WAV, MP3, FLAC or other supported audio file; download the processed outputs from the page, individually or as a ZIP.

This app clones upstream into `app/source`, creates an isolated Python 3.12 environment in `app/.venv`, and keeps uploaded inputs, logs and outputs under `app/runs`. **Update** fast-forwards upstream source (no changes to upstream source) and refreshes dependencies without deleting previous jobs.

## Requirements

- Ubuntu 26.04 x64 / NVIDIA RTX 4090 is the primary target. Windows x64 is supported by the scripts but **has not been tested**.
- Pinokio AI bundle providing **uv**, Git, Python 3.12 provisioning and a working system NVIDIA driver with compatible PyTorch.
- FFmpeg for AAC/M4A and some MP3 formats (Ubuntu: `sudo apt install ffmpeg`); model weights download on first transcription.
- Local web UI at `http://127.0.0.1:50881`; this deliberately binds only to loopback. Pinokio can open the URL through its local app interface.
- The browser interface is a lightweight wrapper around the upstream CLI, not an upstream feature.
- CPU inference is available when PyTorch cannot use CUDA, but much slower.

## Outputs

One multi-track MIDI and JSON transcription summary per audio input, plus a ZIP. The output preserves performance timing, not quantized notation. Instruments/velocities require manual review.

For processing failures choose **View log**. Preserve `app/runs` before manually deleting the application.

## Verification status

- Repository and wrapper created on 2026-11-21; upstream CLI arguments inspected against project source.
- GitHub Actions validates JavaScript and Python syntax. Full installation, weight downloads and GPU inference on the user's Ubuntu 4090 **have not yet been run**.
- Launcher script MIT-style community contribution; upstream repository, weights and dependencies retain their own licenses. No upstream code is redistributed in this repository.

## Sources

- https://github.com/kobimusic/dettato
- https://huggingface.co/collections/kobimusic/dettato
