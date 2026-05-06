# Prediction Tools Directory

The definitive open-source index of tools, platforms, and analytics for the prediction market ecosystem.

![License](https://img.shields.io/github/license/tgel0/prediction-tools-directory)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)

## 🚀 About

**PredictionTools.directory** aims to be the central hub for discovering the rapidly growing ecosystem of prediction market tools. From trading terminals and analytics dashboards to news aggregators and automation bots, we track it all.

The directory is built with **SvelteKit** and designed to be fast, responsive, and community-driven.

## 🛠️ Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS
- **Deployment**: Firebase Hosting (Static)
- **Data**: Static JSON (`src/lib/data/tools.json`)

## 🤝 How to Contribute

We welcome contributions from the community!

### Add a New Tool
The fastest way to get a tool added is to open a Pull Request.

1.  **Fork** the repository.
2.  Edit `src/lib/data/tools.json`.
3.  Add your tool object to the array (see schema below).
4.  Submit a **Pull Request**.

Alternatively, you can [Open an Issue](https://github.com/tgel0/prediction-tools-directory/issues/new?template=tool_request.yml) and request a tool be added.

### Data Schema
```json
{
  "id": "tool-slug",
  "name": "Tool Name",
  "slug": "tool-slug",
  "shortDescription": "One-line summary for cards (max 120 chars)",
  "description": "2-3 sentence description of the tool",
  "category": "Platforms | Trading Terminals | AI Agents & Bots | Market Intelligence | Analysis Tools | Information & OSINT | Infrastructure & APIs",
  "url": "https://...",
  "xUrl": "https://x.com/handle",
  "xHandle": "@handle",
  "websiteName": "Human Readable Name",
  "tags": ["Tag1", "Tag2"],
  "pricing": "Free | Freemium | Paid | Custom",
  "pricingDetails": "Freeform description of the pricing model",
  "access": "Public | Waitlist | Invite-only",
  "status": "active | inactive | acquired | shut-down",
  "acquiredBy": "tool-id (if acquired)",
  "addedDate": "2026-03-01",
  "lastVerified": "2026-05-01",
  "blockchain": ["Polygon", "Solana"],
  "supportedMarkets": ["Polymarket", "Kalshi"],
  "platform": ["Web", "iOS", "Android", "Telegram", "Discord", "Twitter"],
  "features": ["Feature One", "Feature Two"],
  "isPromoted": false
}
```

## 🏃‍♂️ Running Locally

```bash
# Clone the repo
git clone https://github.com/tgel0/prediction-tools-directory.git

# Install dependencies
npm install

# Start dev server
npm run dev
```

## 📄 License

MIT © [Prediction Tools Directory](https://github.com/tgel0/prediction-tools-directory)
