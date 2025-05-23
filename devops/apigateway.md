### ✅ What is an API Gateway?

An **API Gateway** is a **management layer** that sits between clients (frontend/mobile apps) and backend services (APIs). It acts as a **reverse proxy**, handling:

* Request routing
* Authentication/authorization
* Rate limiting
* Logging/analytics
* Caching
* Request transformation
* Security (e.g., throttling, IP filtering)

---

## 🔐 What is 3scale API Gateway?

**Red Hat 3scale** is a **full-featured API management solution** that includes:

| Feature                      | Purpose                                                |
| ---------------------------- | ------------------------------------------------------ |
| ✅ API Gateway                | Routes and secures API requests                        |
| ✅ Admin Portal               | Manage APIs, plans, policies                           |
| ✅ Developer Portal           | Allow app developers to register and consume your APIs |
| ✅ Rate Limiting / Throttling | Protects backend systems from overload                 |
| ✅ Analytics                  | Monitor usage per user, endpoint                       |
| ✅ Billing Integration        | Metered billing support for monetizing APIs            |

---

## 🧱 3scale Architecture Components

1. **API Gateway**: A proxy (e.g., NGINX, Envoy, or APIcast) that routes and secures traffic.
2. **APIcast**: 3scale’s default lightweight API gateway (NGINX-based).
3. **3scale Admin Portal**: Web interface to manage your APIs.
4. **3scale Developer Portal**: Public-facing portal where developers subscribe to your APIs.

---

## 🛠️ Example Use Case

Imagine you're a company exposing services like:

* `/api/orders`
* `/api/products`
* `/api/users`

You want to:

* Control who can access what
* Limit how many requests per minute
* Collect usage data
* Charge heavy users

Instead of building all this manually, you use **3scale**.

---

## 🚀 Workflow Example

1. **Register an API** in the 3scale admin portal.
2. **Define application plans** (free, premium, etc.).
3. **Set rate limits** per plan (e.g., 1000 calls/minute).
4. **Publish the API** via **APIcast gateway** (running as a Docker container or in OpenShift).
5. **Developers** sign up via **developer portal** and receive **API keys**.
6. **Clients call** your API through the 3scale Gateway with their API key.
7. Gateway:

   * Authenticates the key
   * Tracks usage
   * Enforces rate limits
   * Forwards request to your backend

---

## 🔄 Example Flow (Visually)

```plaintext
Client → 3scale Gateway (APIcast) → Your API
               ⬇
        Auth, Rate Limit, Logs
               ⬇
           3scale Admin Backend
```

---

## 🧪 Example Request Flow

```http
GET /api/products
Host: your-api.3scale.net
Authorization: user-api-key
```

Gateway verifies the key → if valid and under rate limit → forwards to backend.

---

## 📦 Deploying APIcast Gateway (simple)

```bash
docker run -p 8080:8080 \
  -e THREESCALE_PORTAL_ENDPOINT="https://your-3scale-admin.3scale.net" \
  quay.io/3scale/apicast:latest
```

---

## 🟢 When to Use 3scale?

| Use Case                         | 3scale Fit?                               |
| -------------------------------- | ----------------------------------------- |
| Monetize APIs                    | ✅ Yes                                     |
| Multi-tenant API management      | ✅ Yes                                     |
| Need developer onboarding portal | ✅ Yes                                     |
| API security + rate limiting     | ✅ Yes                                     |
| Just a lightweight gateway       | ❌ Try NGINX, Kong, or Express middlewares |

---

Would you like a **demo project using 3scale + Node.js API + APIcast** setup with Docker or OpenShift?
<!-- ============================================== -->
**3scale** is an **API Management Platform** developed by **Red Hat** that helps businesses **control, manage, secure, and monetize APIs**. It acts as a **bridge between your backend services and API consumers** by providing features like rate limiting, access control, analytics, and developer portal.

---

## 🔧 **Why Use 3scale?**

When you're exposing APIs to third parties (e.g., mobile apps, partners, or developers), you need:

* ✅ **Authentication & Authorization** (Who can call your APIs)
* ✅ **Rate limiting & Quotas** (How often they can call)
* ✅ **Analytics** (Usage tracking, monitoring)
* ✅ **Security** (IP filtering, key validation)
* ✅ **Developer Portal** (Docs, keys, usage for external devs)
* ✅ **Billing** (Track API usage for pricing/tiers)

**3scale provides all of these out-of-the-box.**

---

## 🏗️ How Does 3scale Work?

### High-level Architecture:

```plaintext
Client App
   |
   |  (API Key)
   v
3scale API Gateway (APIcast)
   |
   |  (Authorization, Rate Limits)
   v
Backend API Services
```

1. Clients call your API through **APIcast**, the 3scale API gateway.
2. APIcast checks:

   * Is the key valid?
   * Has the rate limit been exceeded?
   * What usage plan applies?
3. If all checks pass → request is forwarded to your backend API.
4. 3scale logs usage and applies your rules.

---

## 🌐 3scale Key Components

| Component            | Description                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| **API Gateway**      | Intercepts and routes client requests, usually using **APIcast**          |
| **Admin Portal**     | UI for API owners to configure services, plans, rate limits, etc.         |
| **Developer Portal** | Customizable site for developers to sign up, get API keys, see docs, etc. |
| **Backend Service**  | Your real API (Node.js, Java, etc.) running behind the gateway            |

---

## ✅ Features of 3scale

* 🔐 API Authentication (via API keys, OAuth, or OpenID)
* 📊 Analytics (track usage per endpoint, user, app)
* ⚙️ Rate Limiting & Throttling
* 💰 Billing Integration
* 📚 Developer Portal for onboarding and documentation
* 🔁 Versioning & Service Lifecycle Management
* 📈 High availability and scalable deployment options

---

## 🚀 Example Use Case

You run an e-commerce service with APIs like:

* `GET /products`
* `POST /orders`
* `GET /users/:id`

You want:

* **Free plan**: 1000 calls/day
* **Pro plan**: Unlimited
* **Analytics** on who uses what
* **Portal** where devs can sign up and get API keys

➡️ Use 3scale to **enforce limits**, **monitor usage**, and **support self-service onboarding**.

---

## 📦 Deployment Options

* Run **APIcast Gateway** locally (Docker)
* Deploy on **Red Hat OpenShift** (Kubernetes-based)
* Use **self-managed** or **hosted** 3scale versions

---

Would you like a **sample setup of 3scale + Node.js API with Docker** or a **walkthrough of its Admin & Dev portal**?
