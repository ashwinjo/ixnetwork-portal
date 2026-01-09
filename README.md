# IxNetwork Automation Portal 🚀

A modern, high-fidelity developer portal designed to simplify the IxNetwork automation journey. Built with the **Obsidian Intelligence** theme for a premium, developer-first experience.

## 🧠 Motivation: Why This Portal?

The IxNetwork Automation Portal was born out of a simple realization: **The "Getting Started" experience matters most.**

1.  **Eliminating "Training Fatigue"**: In every customer training, the same fundamental automation concepts are explained repeatedly. This portal serves as a persistent, self-service resource that covers those foundations once and for all.
2.  **A Curated "Happy Path"**: While extensive documentation exists on [openixia.com](https://openixia.com), its sheer volume can be overwhelming for a new learner. This portal strips away the noise, consolidating the most critical architectural insights and code patterns into a single, intuitive flow.
3.  **The "Automation Story" for SEs**: When a customer asks, *"What is your automation story?"*, this portal is the answer. It provides Sales Engineers with a professional, visually stunning platform to demonstrate that IxNetwork automation is standardized, deterministic, and highly accessible.
4.  **Developer Experience (DX) First**: Our mission is to transform IxNetwork from a complex testing tool into a developer-friendly ecosystem. We believe that **GUI discovery is the blueprint for automation**, and this portal proves it.

---

## 🛠 Features

-   **Dynamic Version Tracking**: Real-time fetching of the latest `ixnetwork-restpy` version from PyPI.
-   **Interactive Test Anatomy**: A 5-phase breakdown of a test lifecycle with production-grade Python snippets.
-   **Unified Architecture Diagrams**: Visual guides for the platform architecture and REST-first migration patterns.
-   **Integrated API Reference**: Embedded access to the full OpenIxia documentation suite.

---

## 💻 Local Development

Get the portal running on your machine in minutes.

### Prerequisites
-   Node.js (v18 or higher)
-   npm

### Quick Start
```bash
# 1. Clone the repository
git clone https://github.com/ashwinjo/ixnetwork-portal.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

### Build for Production
```bash
# Generate a production-ready bundle in the /dist folder
npm run build

# Preview the production build locally
npm run preview
```

---

## ☁️ Deployment: Google Cloud Run

This portal is designed to be deployed as a containerized service on **Google Cloud Run**.

### 1. Build & Push to Artifact Registry
Use Google Cloud Build to containerize the application based on the provided `Dockerfile`.
```bash
gcloud builds submit --tag gcr.io/[PROJECT-ID]/ixnetwork-portal
```

### 2. Deploy to Cloud Run
Deploy the image as a managed service. The provided `nginx.conf` is pre-configured to handle the dynamic `$PORT` environment variable required by Cloud Run.
```bash
gcloud run deploy ixnetwork-portal \
  --image gcr.io/[PROJECT-ID]/ixnetwork-portal \
  --platform managed \
  --region [YOUR-REGION] \
  --allow-unauthenticated
```

---

## 🤝 Contributing: Add Your Stuff!

We want this to be a community-driven resource. Whether you're an SE with a new script example or a developer with a better way to explain a protocol, your input is welcome.

### How to Contribute
1.  **Fork** the repository.
2.  **Create a branch** for your feature or update.
3.  **Submit a Pull Request**.

### Easy Entry Points
You don't need to be a React expert to contribute. Most of the portal's content is metadata-driven:
-   **Add Code Samples**: Modify `src/data/testPhases.js`.
-   **Update Links**: Modify `src/data/links.js`.
-   **Fix Pitfalls**: Add your "lessons learned" to the pitfalls array in `testPhases.js`.

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---
**Built for the community, by the community.**
