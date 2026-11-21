# Dettato — unofficial Pinokio launcher

Independent Pinokio launcher for KobiMusic's [Dettato](https://github.com/kobimusic/dettato) audio-to-MIDI model.

## Install and start

1. Open Pinokio → **Discover / Download from URL**.
2. Paste **https://github.com/ChrisTorng/dettato.pinokio** and download it.
3. Click **Install**, then **Start**, then **Open Web UI**.
4. Upload a WAV, MP3, FLAC or other supported audio file; download the processed outputs from the page, individually or as a ZIP.

This app clones upstream into `app/source`, creates an isolated Python 3.12 environment in `app/.venv`, and keeps uploaded inputs, logs and outputs under `app/runs`. **Update** fast-forwards upstream source (no changes to upstream source) and refreshes dependencies without deleting previous jobs.

## Requirements

- Windows 11 x64 with an NVIDIA CUDA-capable GPU (including the RTX 3070 Laptop GPU), or Ubuntu 26.04 x64.
- Pinokio AI bundle providing **uv**, Git and Python 3.12 provisioning. On Windows, the installer uses uv to select PyTorch based on the installed GPU driver. For NVIDIA, check the Install log for `CUDA True` and your GPU name.
- WAV and FLAC work without FFmpeg. For AAC/M4A and MP3 files unsupported by SoundFile, install FFmpeg on PATH and restart Pinokio. On Windows use `winget install -e --id Gyan.FFmpeg` in PowerShell, or `sudo apt install ffmpeg` on Ubuntu. Model weights download on first transcription.
- Local web UI at `http://127.0.0.1:50881`; this deliberately binds only to loopback. Pinokio can open the URL through its local app interface.
- The browser interface is a lightweight wrapper around the upstream CLI, not an upstream feature.
- CPU inference is available when PyTorch cannot use CUDA, but much slower.

## Outputs

One multi-track MIDI and JSON transcription summary per audio input, plus a ZIP. The output preserves performance timing, not quantized notation. Instruments/velocities require manual review.

For processing failures choose **View log**. Preserve `app/runs` before manually deleting the application.

## Verification status

- Repository and wrapper created on 2026-11-21; upstream CLI arguments inspected against project source.
- GitHub Actions validates JavaScript and Python syntax. Physical GPU inference on a Windows RTX 3070 Laptop GPU or Ubuntu RTX 4090 still needs a hardware test.
- Launcher script MIT-style community contribution; upstream repository, weights and dependencies retain their own licenses. No upstream code is redistributed in this repository.

## Sources

- https://github.com/kobimusic/dettato
- https://huggingface.co/collections/kobimusic/dettato
