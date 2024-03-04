# Use the Nginx image from Docker Hub
FROM nginx:alpine

# Copy the static site files to the Nginx server
COPY dist/ /usr/share/nginx/html

# Overwrite the default Nginx configuration file with the custom one
COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port 9510 to the outside
EXPOSE 9510

# Start Nginx when the container has provisioned.
CMD ["nginx", "-g", "daemon off;"]
