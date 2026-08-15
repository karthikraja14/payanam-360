FROM node:22-alpine
WORKDIR /app
COPY package.json ./
COPY app ./app
COPY server ./server
ENV NODE_ENV=production PORT=4173 DATA_DIR=/data
RUN addgroup -S payanam && adduser -S payanam -G payanam && mkdir /data && chown -R payanam:payanam /app /data
USER payanam
EXPOSE 4173
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s CMD wget -qO- http://127.0.0.1:4173/health || exit 1
CMD ["node","server/index.js"]
