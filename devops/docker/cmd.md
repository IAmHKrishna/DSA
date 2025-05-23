<!-- Image -->

<!-- Container -->

docker exec -it <container_id/container_name> bash //Check path from inside the container 

docker run -it ubuntu tail -f /dev/null  // keep live 
<!-- network -->
docker network ls // show the list of network

docker network create <network_name>  // to create new network

docker network rm <network_name> // to remove network

docker network inspect <network_name> // to inspect network

docker network prune // to remove unused network

docker network connect <network_name> <container_name> // to connect container to network

docker network disconnect <network_name> <container_name> // to disconnect container from network


docker container restart <container_name> // to restart container


<!-- dirver -->

- bridge
- host
- null
- overlay

docker network create <network_name> // to create new network with bridge driver

docker network create --driver overlay <network_name> // to create new network with overlay driver


<!-- volume========================================= -->

docker run -it -v <host_path>:<container_path/test/data> ubuntu

docker volume ls // show list of volume

docker volume create <volume_name> // to create new volume

docker volume inspect <volume_name> // to inspect volume

docker volume rm <volume_name> // to remove volume

docker volume prune // to remove unused volume

<!-- Named Volume -->

docker run -v <VOL_NAME>:<CONT_DIR> 

Windows: C:\ProgramData\docker\volumes

Mac/Linux: /var/lib/docker/volumes

<!-- Anonymous Volume  -->

docker run -v :<MOUNT_PATH>


<!-- Bind Mount -->

docker run -v <HOST_DIR>:<CONTAINER_DIR>


<!-- contrazation -->
<!-- dockerization -->

<!-- container start atomic when system start -->

docker run --restart=always -d your-image-name // start container   


docker run --restart=unless-stopped -d your-image-name // start container when system start





<!----=========================Docker Compose ================================================-->