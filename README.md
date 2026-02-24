# kitahack26
🛡️ AwasBot: Sahabat Digital Ecosystem
AwasBot is an end-to-end cybersecurity solution designed to protect vulnerable users—specifically the elderly and less tech-savvy individuals—from the rising tide of digital fraud in Malaysia.

By combining a real-time Chrome Extension (The Eyes) with a Google Cloud Backend (The Brain), AwasBot intercepts threats before they can cause financial harm.

🌟 Key Features
1. Real-time Threat Scanner (Extension)
* Active Monitoring: Automatically scans every URL a user visits.
* Phishing Interception: Instantly blocks known scam keywords like secure-login, bank-update, and unverified-link.
* Visual Safety Cues: Injects high-visibility alerts directly into the browser (Red for Scams, Yellow for Suspicious).

2. Mock Bank Integration
* Risk-Aware Transactions: A simulated banking interface that triggers warnings when high-risk transfers (e.g., >RM3,000) are attempted.
* Social Verification: Encourages users to "Call your child" before proceeding with suspicious payments.

3. Impact Dashboard (Cloud Analytics)
-Live Metrics: Visualizes the total number of scams blocked across the network.
-Financial Impact: Calculates "Money Saved" based on average loss metrics (RM5,000 per victim).
-Technical Health: Monitors API latency and server uptime in real-time.

i. Cloud Shell > Web Preview > Preview on port 8080 > https://8080-cs-45cd5f05-81e2-4d0e-94b5-dc121fa00c6e.cs-asia-southeast1-palm.cloudshell.dev/stats
ii . after deploy 
link: https://awas-api-636654356275.asia-southeast1.run.app 
SCANNER SCAM DETECTER
-detect scam if key in example link: https://scam.test.com 
-detected safe if example link: google.com
MOCK BANK
> more than RM3000 detected high risk
< RM3000 safe transcation

🛠️ Technical Stack
-Frontend: JavaScript (Manifest V3)	(Chrome Extension Logic)
-Backend: Node.js + Express	API (Engine & Logic)
-Styling: Tailwind CSS	(Dashboard & Alert UI)
-Cloud: Google Cloud Run	(Serverless Hosting)
-Networking: Axios / Fetch API	(Frontend-Backend Communication)

🚀 Installation & Deployment
Backend Setup (Google Cloud Shell)
1. Clone the repository to your Cloud Shell.
2. Install dependencies: npm install.
3. Deploy to Cloud Run: gcloud run deploy awas-api --source . --region asia-southeast1 --allow-unauthenticated

Extension Setup (Local)
1. Download the extension folder.
2. Go to chrome://extensions/ in your browser.
3. Enable Developer Mode.
4. Click Load unpacked and select the extension folder.
5. Ensure the API_URL in background.js matches your Cloud Run endpoint.

📈 Impact Logic
-AwasBot doesn't just block links; it measures success.
Impact Formula: Total Blocks × RM 5,000 = Total Community Wealth Protected
-This tangible metric helps stakeholders understand the direct value of the intervention in the fight against cybercrime.

🚀 Project Status & Technical Validation ✅ DONE
-Backend & UI: Built a modern, responsive "FinTech" dashboard using Tailwind CSS and Express.js.
-Extension Handshake: Implemented secure cross-origin communication (CORS) between Chrome Extension and Cloud API.
-Google Cloud Run: Orchestrated Serverless infrastructure with automated builds via Google Artifact Registry.
-Impact Dashboard: Engineered data-driven metrics to translate security events into Real-world Business Value (RM Saved).
-Cloud Logging: Integrated native Google Cloud Logging for real-time security auditing and threat forensics.
-Architecture Diagram: Documented the full-stack lifecycle through professional System Architecture mapping.

👥 Contributors
Later Eat What Team - Kitahack 2026 Submission 

------------------------

Bank-Security-Key
ID:   6Ld5_3QsAAAAAKrTW44GEYPZlBy6v5r_aNs_o5Xz 

token generated: 0cAFcWeA5TKPWVsmYIiva9D1cT-DSSfhswWElclCtDF_yzF2BwctHcHkyD--K5dfLg3C3zF7i1QBEJTDE6HBAArTFI6I7qT768Oc0aPLUaCxhKyoC8ARhCm4gXT-wYGjCm3o3fG_pL3rjZ7VfWyeoA4lJ_JaUUo8zZLC4Gw6KgXDQyMZEg3Xax8afIZ8K_Se7dB_Kokd-cAh_KMixPWmV7V-9PMMLEJNFTt_Fmsy2W2IFhwtL4k5ZwVUtuG87opByTvGO5t5s5ASCyI-IldbkjWgdYqFfjwAgCIo_uU9UVDAdL1hX_E9E8DClSD3U20iLdVOga8icuSUGslVISSADbrT3LBYb0LjgM-S8NJtEMy6PLwAcKinWY6Vu-53Z487yzPmaRzi48ouFfFsLfuCnHxwrdsnEfv5tfZjk2WOjgce399olVeiyNMbNCb5O-0puuBaDZWB1uA1VhYpHB5c2d5DzvB4ca7nexGyvyKRrIBh4CqYOSMKSP_6QQ5sDHZYXm6nRM9-xHfXGU9Xv7C2FPupC4w1jokhU9OjHIoVZNOw6_ZdxVhAvWV4L6xg-buU-AJ1IXzWOKJdiDIQwuZJJXg8Vr6iCzYKfSO1YD15gzbta6vlduy5JHTTrrv11vSYatGBH1Oxg3yD10-L1vj7B_YlLw67cw6zlQUSL0zZWSVLYQj4JIh3nMmtXIhBL8WVfVGabORzn6JUt6LHhCmSQM40uBs5-Qv0lzjmISKR3DJl05mZ2jAOlZOfKHDZHk9pAIqThyWlxs8sakmBAnq4SBcK4gjXypq0c2bXrhUlnwkQP76SISTTeePl-4pwEMsYTwhslsnYpDh9b5MlhUuiJjbaQr6pFAt2r61WSJ1QtJ9OBGlAka04AmLjRyQR3ywu_1XXuBuQ0_fZRr9BCB03Uli6ub-gmfUpq-9AGVBWOisuD4afa9vbVLVQRNOeD8_fAv5_Trk002aos_Oyoceqcd7ZGCgB3fw5I68i8ld...QSGd6RlAVMnIUcyintw2rZKJ6LUVNRmiNpowflpjwgWBxlCCtNrjyIYz449wwkrgcq0u3cuhOJHpusBrkbWx5C5bvd_RxUlyFG48S5j_MYMP1V6OzBoI_7yYg2mmYtZ9gl4W_WGNSeMsbVMLFCMEtPlh2fsq_JFevKJ3mbQcQ3vnHi-AJqetjgEor0DOELO5ZYqWiYI8IJ9offyhjmHMvdZIe2Jam4EsgVvjJh3l2pKE5s9V9tIwc6v0ALzWvulKUdrwmN5Rpoq_stHjajzHSy9qEiotgdFtGOoZhO-_c5Fmz-Flb82-PhnoAtGptbnc53D7BZTdfqvpi2-pu5kG84mXRc4TCCMktRKSMGvgQ4C7p4kadIEAvoZKbENCp3Cv8FS29j77l6D6L1-WpcaEfs9G2MNf6N7oBwnu-Ob8mMTLV1fZv0_NMB4lUSq7UVu6TfbF-dUF5kDvwmM2HBEeUZ1s7M1nAiTiD7cgx3wce2tG6qd27-bRCRxkJDH0lOozmtOSZCrPCWddQpeUxqhKuUCC393tNpEb_m0d3aqwRDTyLjWYoBZEQQOz97ijMtvxDXdYZ8S26iCn7muVX6UIRokJCLYZH1rqxJGQIXUcNp9uL_BOlr6IP4tbKNUmKOZVtWEopjt1SNo6AQtZuGkbnlbMxxnmc9kce_b7anuoT9MHqpc4uhvrP43jIgrkndOWeyduC9fN5xGKaP3Z7eLDUSHsOXhB5awYx6KuEfC7zDvSCFJLTuSmgF80_JBA_3j5z7-yITcRcJuEqFSunEARtFGKa7IZpIsiVu2JykM17qRgdJNXSrlj0UEo5eNNXxA_W1S8WLiXGNtX9fknfzjbZChoS18sz9HVJhWtL92C4hMwnNZDX3YjT9Z2Kbfll00hVbmu4mCdTzbV71HEprTNWc1tnRDNRkipmNNptg68bvVdOTkmbwvdqI0Bs61rvJLDgRxUWy3iWMH3jXxlggUWD073MZbG-IN_pJvZsw

reCAPTCHA adminsite: https://www.google.com/recaptcha/admin/site/745865081
reCAPTCHA google console: https://console.cloud.google.com/security/recaptcha/6Ld5_3QsAAAAAKrTW44GEYPZlBy6v5r_aNs_o5Xz/overview?project=project-edc2f58a-6665-4ab8-a3e&authuser=0
# 🏦 Mock Banking App - Frontend Fraud Detector (reCAPTCHA v3)

This part of the project focuses on the frontend security integration for our mock banking application. As **Member 4 (Jie Shin)**, I integrated **reCAPTCHA Enterprise** to detect fraudulent activity during transactions.

## 🚀 Features
* **Silent Risk Detection**: Uses reCAPTCHA v3 to monitor user behavior without annoying puzzles.
* **Token Generation**: Automatically requests a "Permission Slip" (Assessment Token) from Google when a user attempts a transfer.
* **Live Testing**: Configured to run on `localhost` and `127.0.0.1` for team development.

## 🛠️ Setup Instructions
1. **App Required**: Visual Studio Code.
2. **Extension Required**: "Live Server" by Ritwick Dey.
3. **How to Run**:
   - Open the project folder in VS Code.
   - Right-click `index.html` and select **"Open with Live Server"**.
   - Navigate to `http://127.0.0.1:5500`.

## 🔑 Frontend Integration Details
* **Site Key Used**: `6LfSAnMsAAAAALlMJK7isJWbC1VaINF8jLGHg93C`
* **Action Type**: `submit` (used for the "Send Money" button).

## 📋 How to Verify
1. Click the **"Send Money"** button on the home page.
2. A browser prompt will appear with a long string of text (the **Token**).
3. Copy this token and provide it to the **Backend Team** for server-side verification.

> **Note**: Tokens expire every 2 minutes. Always generate a fresh one right before testing the backend API.
