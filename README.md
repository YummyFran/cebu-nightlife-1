# 🚀 Team Project: [Cebu Nightlife No.1]

Welcome to the team! This is the main repository for our collaborative project built using **[React / Vite / etc.]**.

This guide will help you get set up, contribute code, and stay in sync with the rest of the team.

---

## ✅ 1. Clone the Repository
Para ma clone nimo ang codebase ani nga repo padung sa local repo nimo sa computer.

```bash
git clone https://github.com/YummyFran/cebu-nightlife-1.git
cd cebu-nightlife-1
```


---

## 📦 2. Install Dependencies

Install all required packages.

```bash
npm install
```

---

## 🧪 3. Run the Project

Start the development server.
Diri na part, you should see the current version sa project.

```bash
npm run dev
```

This will start the project on `http://localhost:5173` (or the port you configured).

---

## 🌱 4. Create a Feature Branch

Before you make any changes, always create a new branch.
Branching sa git means mag buhat ra kag separate environment while mag code ka para changes sa project. This is to avoid bugs, in case nay ma sayop sa latest changes, pwede ra ma revert balik sa previous version sa project.

```bash
git checkout -b feature/your-feature-name
```

Examples:
- `feature/login-page`
- `fix/navbar-overlap`
- `refactor/header-component`

---

## 🛠️ 5. Make Changes & Commit

After ma implement imong changes sa code, require ni nga steps para ma save ang code.
`git add .` means i-set tanan changes nimo sa project for staging. But wala pani na save nga part.
`git commit -m "your custom message` means i save nimo imong changes sa project. Then pede ka mag add ug message to describe unsay changes nga imong gibuhat.

```bash
git add .
git commit -m "feat: Add login page"
```

Use commit message prefixes:
- `feat:` for new features
- `fix:` for bug fixes
- `style:` for CSS or formatting changes
- `refactor:` for code improvements

---

## 🔼 6. Push Your Changes

After ma save nimo imong changes using commit, next step is i-push nimo imong version sa project diri sa online/remote repository. Mura syag ipublish nimo imong code online.
Take note nga if unsay name sa branch nga gi buhat nimo, mao sad imong i-push. (If nakalimot ka, pede raka mo commang `git branch` para ma check nimo imong current branch)

```bash
git push origin feature/your-feature-name
```

---

## 🔁 7. Create a Pull Request

Diri nga part, ang pull request means mag request ka nako nga i apply imong changes sa main version sa project. Ari nga part ang pag code review. Pede nako i accept/merge imong change, pede sad nako i decline/close imong request.

1. Go to the GitHub repository.
2. Click "Compare & pull request" for your branch.
3. Add a clear title and description of what you did.
4. Click **Create Pull Request**.

Then mana. Next task/feature/changes napud.
---

# 🔄 Sync with the Latest Changes

Before ka mo start og new changes, i-make sure sa nga naka sync imong codebase sa latest version sa project (in case naay new changes and other team members)
`git pull origin main` mean I fetch nimo ang latest changes nga na publish online. Then pede naka magstart sa imong changes.

```bash
git checkout main
git pull origin main
```

Then create a new branch again from the updated main. (Same rani sa step 4)

```bash
git checkout -b feature/new-task
```

After ana, repeat nalang ang step 5,6, and 7, in every changes.
---

## 🧼 Coding Guidelines

- ✅ Use consistent naming for branches: `feature/`, `fix/`, `refactor/`
- ✅ Keep pull requests focused on one feature or fix
- ✅ Avoid committing directly to `main`
- ✅ Test your code before pushing
- ✅ Ask if you’re unsure — we’re here to help!

---

## 🙋 Need Help?

If you get stuck:
- Ask in our team chat group
- Create an issue in the repo
- Reach out to the team lead

---

Happy coding! 💻✨
Let's build something awesome together!
```

---

Let me know if you'd like to fill in the real **project name**, **GitHub link**, or include extra sections like `.env` setup or Firebase config instructions.
