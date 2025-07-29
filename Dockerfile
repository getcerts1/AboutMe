FROM nginx:alpine
COPY index.html /usr/share/nginx/html
COPY styles.css /usr/share/nginx/html
COPY script.js /usr/share/nginx/html
COPY IMG_7254.jpg /usr/share/nginx/html