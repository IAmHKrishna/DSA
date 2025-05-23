<!-- running mongo using multiline cmd -->

docker run -it -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin \
  --net mongo-network \
  --name mongodb \
  mongo

 <!-- mongodb with volume -->

 docker run -d \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin \
  -v /path/on/host/mongodb-data:/data/db \
  --name mongodb \
  mongo


<!-- running monogo express using monogo-express -->

docker run -d \
  -p 8081:8081 \
  -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
  -e ME_CONFIG_MONGODB_ADMINPASSWORD=admin \
  -e ME_CONFIG_MONGODB_SERVER=mongodb-demo11 \
  --name mongo-express \
  --network mongo-network \
  mongo-express


  <!-- ubuntu intall volume testing -->
//Use a command like tail -f /dev/null to keep it alive:

  docker run -d \
  -v /home/terotam/Desktop/data/:/data/ \
  --name ubuntu-test \
  ubuntu tail -f /dev/null

  <!-- some other cmd -->
Great! Here's how you can **copy files to/from** a running Docker container:

---

### 📥 To copy a file **from your host to the container**:

```bash
docker cp /path/on/host/file.txt ubuntu-test:/data/
```

📌 Example:

```bash
docker cp ~/Desktop/data/test.csv ubuntu-test:/data/
```

---

### 📤 To copy a file **from the container to your host**:

```bash
docker cp ubuntu-test:/data/file.txt /path/on/host/
```

📌 Example:

```bash
docker cp ubuntu-test:/data/test.csv ~/Desktop/data/
```

> Replace `ubuntu-test` with your container name if different.

---

Would you like to automate this in a script or do it interactively inside the container?
<!-- ============================================ -->