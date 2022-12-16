#!/bin/bash

if [ ! -f ".env" ]; then
    cp .env.example .env
fi

npm install
npm run build && npm run docker:dev
npm run typeorm:run
