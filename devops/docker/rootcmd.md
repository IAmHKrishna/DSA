To run a **Docker container as root**, or **access an existing container as root**, here are all the ways depending on your use case:

---

## ✅ 1. **Start a New Container as Root (default)**

By **default**, Docker containers run as root **unless specified otherwise**:

```bash
docker run -it ubuntu /bin/bash
```

This starts an interactive shell as the `root` user.

---

## ✅ 2. **Explicitly Specify `--user root`**

If you're using a base image that defaults to a non-root user, force it:

```bash
docker run -it --user root ubuntu /bin/bash
```

---

## ✅ 3. **Access a Running Container as Root**

If the container is already running and you want to enter as root:

```bash
docker exec -u root -it <container_name_or_id> /bin/bash
```

Or for sh-based containers:

```bash
docker exec -u root -it <container_name_or_id> /bin/sh
```

---

## ✅ 4. **Set Default User in Dockerfile (Optional)**

If you're building your own image and want to **ensure it runs as root**:

```dockerfile
FROM node:18
USER root
```

But note: Running as root in production containers is a security risk — use it only when needed (e.g., for Jenkins, setup tasks, debugging).

---

## ✅ 5. **Check Current User Inside Container**

To verify inside the container:

```bash
whoami
# or
id
```

You should see `root` or UID `0`.

---

Let me know your specific context (e.g., Jenkins container, custom app, Docker Compose), and I can tailor the setup.