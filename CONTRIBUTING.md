# Team Collaboration Guide & Contribution Workflow

Welcome to the **RAC KAHE** website project! Whether you are updating event descriptions, adding photos, fixing styling, or adding a new feature, please follow this standard workflow.

---

## 📌 Ground Rules
1. **Never work directly on the `main` branch.** Always create a branch for your feature or fix.
2. **Always pull the latest changes before starting work.**
3. **Always run `npm run build`** before pushing to make sure TypeScript and Next.js compile with zero errors.

---

## 🚀 Step-by-Step Workflow

### 1. First-Time Setup
If you haven't set up the repository on your computer yet:
```bash
# 1. Clone the repository
git clone https://github.com/safwaanshaikhconnect-wq/rac_kahe_site.git

# 2. Navigate into the project folder
cd rac_kahe_site

# 3. Install project dependencies
npm install

# 4. Start the local development server
npm run dev
```
Visit `http://localhost:3000` to see the live local site.

---

### 2. Daily Routine: Pull Latest Code
Before starting any new task, ensure your local copy is up-to-date with what others have merged:
```bash
# Switch to main branch
git checkout main

# Fetch and merge latest changes from GitHub
git pull origin main
```

---

### 3. Create a Feature Branch
Create a new branch with a short descriptive name:
```bash
# Format: git checkout -b feature/<your-topic> or fix/<your-topic>
# Examples:
git checkout -b feature/update-team-photos
# or
git checkout -b fix/events-date-typo
```

---

### 4. Make Your Changes & Test
Edit the code or data files (e.g. updating `src/lib/data.ts` or adding photos to `public/assets/`).

While you work, keep `npm run dev` running in your terminal to see live updates.

**Before committing, run a test build:**
```bash
npm run build
```
If there are any TypeScript or syntax errors, fix them until the build passes.

---

### 5. Commit and Push
Stage your changes, commit them with a clear message, and push your branch to GitHub:
```bash
# Check what files you changed
git status

# Stage the modified files
git add .

# Commit with a short message describing what you did
git commit -m "Update board members list and designation details"

# Push branch to GitHub
git push -u origin <your-branch-name>
# Example: git push -u origin feature/update-team-photos
```

---

### 6. Create a Pull Request (PR) on GitHub
1. Open the repository on GitHub.
2. You will see a banner: **"Compare & pull request"**. Click it.
3. Add a short summary of what you changed.
4. Click **Create pull request**.
5. Once reviewed and approved by the lead/admin, your branch will be merged into `main`!

---

### 7. Clean Up After Merge
Once your PR is merged, switch back to `main` and pull the updated codebase:
```bash
git checkout main
git pull origin main

# Delete your local completed branch (optional)
git branch -d <your-branch-name>
```

---

## ❓ Common Questions & Issues

### "How do I resolve merge conflicts?"
If someone else edited the same file as you, git will flag a conflict during `git pull` or merge. Open the file in VS Code, look for the highlighted conflict markers (`<<<<<<<` and `>>>>>>>`), choose the correct incoming change, save the file, then run:
```bash
git add <filename>
git commit -m "Resolve merge conflicts"
git push
```

### "Can I commit large videos or huge raw photos?"
No. Compress images before adding them (WebP or optimized JPEG/PNG, ideally under 300KB each). Place images inside `public/assets/`.
