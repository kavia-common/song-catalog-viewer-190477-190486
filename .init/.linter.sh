#!/bin/bash
cd /home/kavia/workspace/code-generation/song-catalog-viewer-190477-190486/frontend_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

