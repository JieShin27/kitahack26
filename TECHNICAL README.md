# 🛡️ AwasBot: AI-Powered Scam Prevention

A high-performance security extension that leverages **Google Cloud** to detect phishing in real-time and track financial impact.

## 🚀 Key Features
* **Real-time URL Filtering**: Powered by Node.js on **Google Cloud Run**.
* **Impact Dashboard**: Live "Money Saved" metrics aggregated from **Google Cloud Logging**.
* **Community Intelligence**: Real-time scam sync via **Firebase Firestore**.
* **Zero-Trust UI**: Dynamic security banners (Red/Yellow/Green) injected into browser tabs.

## 🏗️ Technical Stack
* **Frontend**: Chrome Extension API (Manifest v3).
* **Backend**: Node.js 18 (Express) on **Cloud Run**.
* **Database/Logs**: Google Cloud Logging (Operations Suite) & Firebase.
* **DevOps**: Google Cloud Build & Artifact Registry.

## 📡 API Endpoints
| Endpoint | Method | Purpose |
| :--- | :--- | :--- |
| `/check-url` | `POST` | Validates URLs and logs SCAM_BLOCKED events. |
| `/impact-metrics` | `GET` | Queries GCP logs to sum `money_saved` metadata. |

## 🛠️ Installation & Deployment
1. Deploy Backend: `gcloud run deploy --source .`
2. Load Extension: Open `chrome://extensions`, enable "Developer Mode", and select "Load unpacked".
