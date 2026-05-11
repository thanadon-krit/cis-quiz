#!/bin/bash
# Start a local server for the CIS Quiz PWA
PORT=8080
echo "🚀 Starting CIS Quiz server at http://localhost:$PORT"
echo "📱 To use on mobile: connect phone to same WiFi, open http://$(ipconfig getifaddr en0):$PORT"
echo ""
echo "Press Ctrl+C to stop"
cd "$(dirname "$0")"
python3 -m http.server $PORT
