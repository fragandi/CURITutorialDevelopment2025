# PreTeXt Codespace

This repository is designed to help you quickly get started with [PreTeXt](https://pretextbook.org) by launching a GitHub Codespace. The following steps will guide you through building and deploying your PreTeXt project.

---

## 🚀 Quick Start Guide
Once the Codespace has finished creating, **check that PreTeXt is installed** by running:

```bash
pretext --version
```
If you see an error like **command not found**, follow these steps:

1. **Reload the VS Code Window**
   - Press `Ctrl+Shift+P` → type `Reload Window` → hit Enter.

2. **Kill the Existing Terminal (if open)**
   - Click the trash icon in the terminal panel or run `Terminal: Kill Terminal` from the command palette.

3. **Open a New Terminal**
   - Press `Ctrl+Shift+\`` (backtick) or go to *Terminal → New Terminal*.

4. **Build the Project**
   - Run:
     ```bash
     pretext build web
     ```

5. **Preview with CodeChat**
   - Use [CodeChat](https://github.com/PreTeXtBook/pretext-cli/wiki/Live-preview-with-CodeChat) for live preview:
     ```bash
     codechat serve
     ```

6. **Deploy to GitHub Pages**
   - Run:
     ```bash
     pretext deploy --pages
     ```
   - Deployment will also be triggered when changes are pushed to the  default (main) branch. 
   - If you encounter that github pages is not being deployed follow the instruction below:

---

## 🌐 GitHub Pages Configuration

Make sure to configure GitHub Pages to use **GitHub Actions** as the build and deployment source:

1. Go to your repository’s **Settings** → **Pages**.
2. Under **Build and deployment**, set the source to **GitHub Actions**.

<img src="README_images/image-pages_source.png" alt="GitHub Pages Source" style="border: 2px solid green;">

---

## 🛠 GitHub Environment Configuration

Go to your repository **Settings** → **Environments** → click on `github-pages`, and make sure it looks similar to the following:

<img src="README_images/image-environment-pages.png" alt="GitHub Pages Environment Setup" style="border: 2px solid green;">
<br>
<img src="README_images/image-environment.png" alt="Environment Overview" style="border: 2px solid green;">

---

## ⏱ Deployment Time

Deployment usually takes about **4 minutes**. After triggering the deployment, wait a few minutes and then visit your GitHub Pages URL.

<img src="README_images/image-actions-deployment.png" alt="GitHub Actions Deployment" style="border: 2px solid green;">
