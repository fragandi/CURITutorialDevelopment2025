var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "pr-abstract",
  "level": "1",
  "url": "pr-abstract.html",
  "type": "Preface",
  "number": "",
  "title": "Abstract",
  "body": " Abstract  Increasingly, the cyberinfrastructure of mathematics and mathematics education is built using GitHub to organize projects, courses, and their communities. The goal of this book is to help readers learn the basic features of GitHub available using only a web browser, and how to use these features to participate in GitHub-hosted mathematical projects with colleagues and\/or students.  "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "acknowledgements",
  "level": "1",
  "url": "acknowledgements.html",
  "type": "Preface",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements  Thanks to the following people who've contributed to this handbook.   The American Institute of Mathematics , for funding my travel to JMM 2024 and JMM 2025 to run professional enhancement programs based upon this handbook.    Jeremy Avigad, for adding Codespaces support to his book Mathematics in Lean in time for JMM 2024.    Francesca Gandini and Brandon Sisler, for co-organizing the JMM 2024 professional enrichment program that this book was written for originally.    Tien Chih and Oscar Levin for contributing chapters on AI and Manim, repsectively.     "
},
{
  "id": "ch-git-github",
  "level": "1",
  "url": "ch-git-github.html",
  "type": "Chapter",
  "number": "1",
  "title": "Intro to Git &amp; GitHub",
  "body": " Intro to Git & GitHub   What Is Git?    An illustration of Git history   An illustration of a project's history controlled by Git    Git is a distributed version control system that tracks changes in any set of computer files. This software was originally authored by Linus Torvalds in 2005 for development of the Linux kernel. Importantly, Git is free and open-source software, which means you have the legal and practical ability to use it however you want, and even modify it for your purposes if you wanted.  Two core concepts of Git are commits (illustrated in by circles) and branches (illustrated in by lines). A commit represents the state of your project at a particular point in its history. Branches allow this history to not be linear: you can branch off to experiment on a particular new feature, then merge this feature branch back into the main branch when it's complete. This is particularly useful when multiple people collaborate ( ) on a Git-managed project. Finally, a Git project is often called a repository , or repo for short.  Since you're reading GitHub for Mathematicians , I'm obligated to describe Git history as either a finite partial order, or a loopless directed graph, depending on your preferred flavor of mathematical models. In particular, you might consider the normal history of a file to be a linear order or directed path: article.tex , then article-dec-1.tex , then article-dec-1-fixed.tex , and so on. But with Git, you don't need to track your version history with filenames, you (and your colleagues) can branch your history into several timelines, you can merge them back together again, and look up the state of your project at any point where you committed your work.    What Is Git Hub ?  Another key feature of Git is the ability to share your project, along with its history, with other people. This is generally accomplished by hosting your repository on a service such as GitHub : GitHub.com . (Other such services include BitBucket.org and GitLab.com .)  Importantly, GitHub is not itself open-source software, but is a service owned and operated by Microsoft. However, Microsoft makes GitHub available for use at no cost to the public, with additional pro features available for free to instructors and researchers.  We'll use GitHub not only as a host for our repositories, but also to take advantage of all the tools it provides to author content using only a web browser. If you've looked into using Git in the past, you may have hesitated due to the apparent need for software developer experience to get started. However, using GitHub's web applications, there will be no need for complicated installations or memorizing command line incantations like git commit -m \"foobar\" to type into a terminal. (Of course, you still can choose to use such tools to get as much control over your Git project as you want, should the need ever arise: see )  Another reason to use GitHub: community! GitHub is often marketed as a social coding platform , because it not only provides tools to create and deliver digital content, but it also provides social features such as Following users, Starring repositories, participation in Discussions and Issues, and more. Particular in open-source, we like to work together and support each other, and GitHub provides much of the social cyberinfrastructure necessary to do so efficiently.    G4M on GitHub.com  An example of a project using Git and GitHub is the document you're reading right now! This book is open-sourced and shared at , and was authored completely in a web browser using only the GitHub features we will explore together in this handbook.   "
},
{
  "id": "fig-git-branches",
  "level": "2",
  "url": "ch-git-github.html#fig-git-branches",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "  An illustration of Git history   An illustration of a project's history controlled by Git  "
},
{
  "id": "sec-what-is-git-3",
  "level": "2",
  "url": "ch-git-github.html#sec-what-is-git-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Git "
},
{
  "id": "sec-what-is-git-4",
  "level": "2",
  "url": "ch-git-github.html#sec-what-is-git-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commits branches repository repo "
},
{
  "id": "sec-what-is-github-2",
  "level": "2",
  "url": "ch-git-github.html#sec-what-is-github-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "GitHub "
},
{
  "id": "ch-first-repo",
  "level": "1",
  "url": "ch-first-repo.html",
  "type": "Chapter",
  "number": "2",
  "title": "Your First Repository",
  "body": " Your First Repository   Making an Account  All the features of GitHub we'll be using are available using a free GitHub account.   Anyone can create a free GitHub account by visiting .   For additional free resources, you may also be eligible for a waiver.   Many students and faculty of schools, colleges, and universties are eligible to request an educator discount, providing Pro features at no cost, by visiting while logged into their GitHub account.   You do not need to wait for approval of your educator discount before continuing to the next section.    Creating the Repo  Once logged in, a new repository can be created by pressing the + button in the toolbar, or visiting .  The repository will need a name, which can be something like my-first-repo for this tutorial. (GitHub will also suggest a cute random name like ubiquitous-space-tribble if you have writer's block.)  Repositories can be public to everyone on the internet or private to only people you approved. I encourage you to work publicly, to make it easier to collaborate with the open-source community I can personally attest to publishing many garbage repositories on GitHub (along with my hopefully-useful ones), and no one has called me out for it yet!  The last option we'll make sure to select is to Initialize this repository with: Add a README file . Then click Create repository .    Editing README.md  While logged into GitHub.com , you have the ability to edit individual files on your repositories. (If your repository is public, others can see those files, but cannot edit them unless you make them a collaborator, see .)  An easy way to edit an individual file is just to click the pencil icon such as the one that appears on your README. This file is written in Markdown .     Markdown is a markup language that takes plain text like *this* and renders it like this . Sites like and offer more complete tutorials.    Try to edit your file to say something like I'm learning how to use GitHub! , perhaps adding a link back to this document using [this markup](https:\/\/g4m.clontz.org) . You can click the Preview tab to see what your README will look like. GitHub also provides a panel of several formatting options you can click on.  When you're happy with your updated README, click the Commit changes button. This will create a new commit , representing a new moment in your project's history. You should write a useful commit message summarizing the work you've done since your last commit (or perhaps keep the default Update README.md ) Doing this will update the README visible on your repository homepage on GitHub.com .   README files are important! If you ever want to share your repository source with someone else, it's the first thing they will read. Likewise, if you want to use someone else's repository, they will hopefully include first steps in their own README file.   Finally, you might be interested in visiting the Insights tab for your repository, and specifically the Network page. It should reveal a graphic similar to visualizing the history of your project across all GitHub collaborators. Right now you don't have any collaborators and just a couple commits, but keeping in mind this model for your project history will be useful as we juggle various commits and pushes and syncs and so on down the line.    Using GitHub.dev  Using the GitHub.com interface to author or edit just one file can be useful (I do this all the time to make quick typo fixes on my blog), but you will likely be using GitHub to manage projects that involve editing mulitple files at the same time, and likely you will have non-text files (such as images) that you need to include in your work as well.  One way to quickly be able to manage several files at once is to use the GitHub.dev service offered by GitHub. Try clicking that link - you should have a fully-functional VS Code text editor right inside your web browser.   It's best to use an updated version of Chrome, Edge, or Firefox when using GitHub. In particular, Safari tends to show off its rough edges when using advanced web applications like GitHub.dev , so it's best to choose an alternative.   You can create files, edit them, upload images, and do whatever you like at GitHub.dev . But this isn't your repository - it's just an example. So, we'll need a way to tell GitHub.dev we want to work on the repository we just made instead.   There are two very easy ways to access the GitHub.dev service. The first is to just change the address of your repository from GitHub.com to GitHub.dev in your browser. For example, if your repository lives at https:\/\/github.com\/YourUserName\/YourGreatRepo , you should visit https:\/\/github.dev\/YourUserName\/YourGreatRepo .  The other trick is even fancier. When you are visiting https:\/\/github.com\/YourUserName\/YourGreatRepo in your web browser and not writing in a text box, press the period ( . ) key.   Either way, you should now have a GitHub.dev window where you can manage all the files of your project. Using the Explorer sidebar ( ), you can create new files, rename files, move files, upload files, and more. Selecting a file opens it, and lets you edit it as needed. Your changes are saved automatically in GitHub.dev , but they won't show up at GitHub.com just yet.    Explorer sidebar and New File button     Commiting Your Work  After you're tried creating\/editing\/uploading a few files, now it's time to commit those changes to your repository. The easiest way to do this is to use the Source Control sidebar. You may have noticed that a numerical badge appeared by the Source Control icon as you created, edited, or deleted files. This number represents the number of files that have been changed in some way since the previous commit. By opening the Source Control panel, you'll see a list of these files.  Clicking these file names not only lets you open the file and edit it further, but you are shown a diff - a summary of the lines that have been altered since the previous commit. (This is a good reason to not write in a long continuous line, but to break lines every 80ish characters or so. That way you can easily see where exactly a change is made between each commit.)  The idea is this: edit as you see fit, knowing that your files are being saved at GitHub.dev and won't be lost if you accidentally refresh your web browser. However, you'll need to eventually commit those changes to the repository in order to share your work with anyone else, and to ensure that the work is preserved in the long term. The Source Control panel provides a place to write a commit message , a short phrase or sentence that summarizes the work you've done. (Writer's block? For now just type learning GitHub.dev .) Then once you click the Commit and Push button, your work will be logged as a permanent commit to the repository.  This is a good point to review your commit history again. You probably have three commits: the initial commit made when you created the repository, the README.md update you made using GitHub.com 's editing interface, and this more elaborate GitHub.dev commit involving possibly several files. To visualize this history, you can go to the Insights\/Network page described earlier, or click on the 3 commits link from your GitHub.com repository homepage to see a linearization of this history. From there you can click on each commit to see exactly what has changed from the previous commit across all files.    Next steps  Now that you've gotten the hang of the basics of committing and pushing changes to a repository, you can move on to using Codespaces to write and execute programs and code ( ) or setting up a webpage hosted by GitHub ( ).   "
},
{
  "id": "make-github-account",
  "level": "2",
  "url": "ch-first-repo.html#make-github-account",
  "type": "Note",
  "number": "2.1.1",
  "title": "",
  "body": " Anyone can create a free GitHub account by visiting .  "
},
{
  "id": "github-education-discount",
  "level": "2",
  "url": "ch-first-repo.html#github-education-discount",
  "type": "Note",
  "number": "2.1.2",
  "title": "",
  "body": " Many students and faculty of schools, colleges, and universties are eligible to request an educator discount, providing Pro features at no cost, by visiting while logged into their GitHub account.  "
},
{
  "id": "sec-creating-the-repo-4",
  "level": "2",
  "url": "ch-first-repo.html#sec-creating-the-repo-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "public private "
},
{
  "id": "def-markdown",
  "level": "2",
  "url": "ch-first-repo.html#def-markdown",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "   Markdown is a markup language that takes plain text like *this* and renders it like this . Sites like and offer more complete tutorials.   "
},
{
  "id": "sec-editing-readme-md-6",
  "level": "2",
  "url": "ch-first-repo.html#sec-editing-readme-md-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commit "
},
{
  "id": "remark-readme",
  "level": "2",
  "url": "ch-first-repo.html#remark-readme",
  "type": "Remark",
  "number": "2.3.2",
  "title": "",
  "body": " README files are important! If you ever want to share your repository source with someone else, it's the first thing they will read. Likewise, if you want to use someone else's repository, they will hopefully include first steps in their own README file.  "
},
{
  "id": "note-browser-github-dev",
  "level": "2",
  "url": "ch-first-repo.html#note-browser-github-dev",
  "type": "Note",
  "number": "2.4.1",
  "title": "",
  "body": " It's best to use an updated version of Chrome, Edge, or Firefox when using GitHub. In particular, Safari tends to show off its rough edges when using advanced web applications like GitHub.dev , so it's best to choose an alternative.  "
},
{
  "id": "opening-github-dev",
  "level": "2",
  "url": "ch-first-repo.html#opening-github-dev",
  "type": "Note",
  "number": "2.4.2",
  "title": "",
  "body": " There are two very easy ways to access the GitHub.dev service. The first is to just change the address of your repository from GitHub.com to GitHub.dev in your browser. For example, if your repository lives at https:\/\/github.com\/YourUserName\/YourGreatRepo , you should visit https:\/\/github.dev\/YourUserName\/YourGreatRepo .  The other trick is even fancier. When you are visiting https:\/\/github.com\/YourUserName\/YourGreatRepo in your web browser and not writing in a text box, press the period ( . ) key.  "
},
{
  "id": "sec-using-github-dev-7",
  "level": "2",
  "url": "ch-first-repo.html#sec-using-github-dev-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Explorer "
},
{
  "id": "fig-explorer",
  "level": "2",
  "url": "ch-first-repo.html#fig-explorer",
  "type": "Figure",
  "number": "2.4.3",
  "title": "",
  "body": "  Explorer sidebar and New File button  "
},
{
  "id": "sec-commiting-and-syncing-2",
  "level": "2",
  "url": "ch-first-repo.html#sec-commiting-and-syncing-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Source Control "
},
{
  "id": "sec-commiting-and-syncing-3",
  "level": "2",
  "url": "ch-first-repo.html#sec-commiting-and-syncing-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "diff "
},
{
  "id": "sec-commiting-and-syncing-4",
  "level": "2",
  "url": "ch-first-repo.html#sec-commiting-and-syncing-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commit message "
},
{
  "id": "ch-coding",
  "level": "1",
  "url": "ch-coding.html",
  "type": "Chapter",
  "number": "3",
  "title": "Writing and Running Code",
  "body": " Writing and Running Code   Codespaces  While the quick GitHub.dev interface we used to get started in is great for quick uploads or edits, many projects require the ability to run applications and execute code as you would on your personal computer. Fortunately, GitHub offers a service to run such programs on their servers.    A Codespace is a dev environment service offered by GitHub . Each codespace is essentially a personal virtual computer that runs in the cloud, that you access through your web browser.  Full documentation on Codespaces is available on docs.github.com .     To create a Codespace on any repository you own, use the green Code button, select the Codespaces tab, and press the green Create codespace on [branchname] button.   After the Codespace boots up, you'll have an interface similar to the GitHub.dev environment you learned about in .   Here are a few key differences between GitHub.dev and Codespaces.   A GitHub.dev URL looks like github.dev\/username\/reponame , while a Codespace URL looks like random-word-123randomcharacters789.github.dev .     GitHub.dev is quicker to load than a Codespace.     GitHub.dev has a much more limited selection of VS Code extensions to use.    You can only install applications and execute code on a Codespace.      One similarity between GitHub.dev and Codespaces (besides the obviously similar VS Code user interfaces), is that your work is still private to you and can only be shared with the public (and retained in the long term) by committing and pushing your progress every so often to your GitHub.com repository. The Source Control tool works slightly different in a Codespace, however.   One quick way to commit and push your changes from a Codespace is to use Source Control from the left toolbar.   Enter a short commit message describing your changes as a note to yourself. (This is required and can be a pain to fix if you forget to do so!)    Select Commit & Sync from the menu next to the green Commit button.    In the dialogs that follow, I suggest choosing to Always stage all your changes and commit them directly, then OK, Don't Show Again when told this action will pull and push commits from and to origin\/main , and finally Yes that you would like your Codespace to periodically run git fetch .        Writing and Running Code  Now that we've provisioned our Codespace virtual cloud computer, we can use it to write and execute code using our web browser for essentially any programming lanugage.  Our first example will be Python, a popular general-purpose programming language (and the same language we will use in for Jupyter notebooks). In your Codespace, right-click on the file Explorer to create a New File... . Name this file something.py so your Codespace recognizes the file as a Python script (due to the .py file extension). This should trigger the prompt shown in to install a Python extension - go ahead and do it.    A screenshot of the prompt that displays in a Codespace to install the Python extension.   Prompt to install the Python extension.   Add the line print(\"Hello world!\") to your file. A play icon ( ▶ ) should be displayed in the upper-right corner of the text editor (thanks to the Python extension you installed). Clicking this button should execute the code to print a greeting as in .    A screenshot of a Python script being executed within a Codespace.   Running a Python script in a Codespace.   Unless your Codespace has been customized via a .devcontainer.json file (which we won't get into here), you'll be using the default Codespace image provided by GitHub. This environment is ready to execute code from various standard programming lanugages, though for some of them you may need to run the script using the Terminal.    A terminal is a command-line prompt used to run programs that don't have a graphical user interface. Type the command and hit Enter to run it.      To open a terminal on demand in a Codespace, use the shortcut Ctrl\/Cmd + Shift + ` .    What do you think the programs in , , and will output? Copy-paste them into a file in your Codespace, then run to find out!    # name this Python file something.py # execute using the ▶ button or by running this in a terminal: # python something.rb a,b = 1,1 print(a) print(b) for _ in range(10): print(a+b) a,b = b,a+b   Sample Python code     # name this Ruby file something.rb # execute by running this in a terminal: # ruby something.rb a,b = 1,1 puts a puts b 10.times do puts a+b a,b = b,a+b end   Sample Ruby code     \/\/ name this Javascript file something.js \/\/ execute by running this in a terminal: \/\/ node something.js let a = 1, b = 1 console.log(a) console.log(b) Array.from({ length: 10 }, _ => { console.log(a+b) let _a = a a = b b = _a + b })   Sample Javascript code     Managing Your Codespaces  GitHub users are provided with a limited amount of free Codespace hours and storage each month, with additional resources available to Pro users, including those with the free GitHub Education benefit ( ). If needed, there is the option to pay for additional resources.  As a mathematician who almost exclusively uses GitHub Codespaces for doing the kinds of work described in this handbook (and does so for much longer periods of time than a typical mathematician), I've only surpassed GitHub's free quota on the rare occassion (and when I do, I've paid only - per month). I accomplish this by halting my Codespaces when I'm not actively working on them.   To manage your Codespace resources, visit . You can stop a Codespace temporarily to preserve your hourly quota, and delete a Codespace you don't plan to use for a while to save on your storage quota. While actively working in a Codespace, you can stop it by pressing Ctrl\/Cmd + Shift + P , typing stop current codespace , and confirming.  In any case, a stopped Codespace can be restarted later when you want to resume work, even if you haven't committed and pushed your changes. (But be warned: a stopped Codespace and its uncommitted changes may be deleted by GitHub after a few days of inactivity, so don't leave it alone for long.)  A deleted Codespace can always be recreated later based upon your most recent commit.     shows a screenshot of some settings available on github.com\/settings\/codespaces to adjust the default time your Codespace can idle before it times out (to save your compute time resources), and to adjust the default time your Codespace will be retained before it is deleted (to save your storage resources).    Screenshot of Codespace management settings    Screenshot of a web browser. Its text follows:  Default idle timeout  A codespace will suspend after a period of inactivity. You can specify a default idle timeout value, which will apply to all codespaces created after the default is changed. You will be charged for the entire time your codespace is running, even if it is idle. The maximum value is 240 minutes (4 hours).  Default retention period  Inactive codespaces are automatically deleted 30 days after the last time they were stopped. A shorter retention period can be set, and will apply to all codespaces created going forward. The default and maximum value is 30 days. Learn about retention setting     Putting it all together, we have seen three ways to access files on your repo. Going from the least easy to edit to the most editable we have: GitHub.com , GitHub.dev , random-codespace-string.github.dev . Here is what these environments look like.      Repo from different points of view.     Powering up your Codespce  As of January 2025, a default codespace will use a 2-core processor and 8GB of RAM, with a quota of 60 usage hours and 15GB storage per month. (This is increased to 90 usage hours and 20GB storage for Pro\/Education users.) This is fine for many tasks, but if you're doing data analysis ( ) or formalized mathematics ( ) you may want some more resources at your disposal.   You can double (or quadruple, or , etc.) your resources by changing the machine type . There are several ways to accomplish this, via , or by typing Change Machine Type in the Codespace command pallette (accessed via Ctrl\/Cmd + Shift + P ).  Note however, that if you double your resources, you are also doubling your usage time (e.g. running a 4-core machine uses one hour of your quota every 30 minutes).     Custom Codespaces  A key feature of Codespaces is that they can be customized by the use of a .devcontainer.json file (or .devcontainer directory). Such files describe the virtual machine that should be provisioned when creating a Codespace, allowing for the automatic installation of appropriate software\/libraries\/dependencies necessary for the use of a given repository.   Setting up a custom .devcontainer is a slick way to ensure you and your collaborators\/students are running exactly the same software (including versions, dependencies, etc.)! No more It works on my machine while I can't get it to work on my machine !  See VisualStudio.com\/docs\/devcontainers to learn more.    "
},
{
  "id": "def-codespaces",
  "level": "2",
  "url": "ch-coding.html#def-codespaces",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  A Codespace is a dev environment service offered by GitHub . Each codespace is essentially a personal virtual computer that runs in the cloud, that you access through your web browser.  Full documentation on Codespaces is available on docs.github.com .   "
},
{
  "id": "note-create-codespace",
  "level": "2",
  "url": "ch-coding.html#note-create-codespace",
  "type": "Note",
  "number": "3.1.2",
  "title": "",
  "body": " To create a Codespace on any repository you own, use the green Code button, select the Codespaces tab, and press the green Create codespace on [branchname] button.  "
},
{
  "id": "dev-codespace-contrast",
  "level": "2",
  "url": "ch-coding.html#dev-codespace-contrast",
  "type": "Note",
  "number": "3.1.3",
  "title": "",
  "body": " Here are a few key differences between GitHub.dev and Codespaces.   A GitHub.dev URL looks like github.dev\/username\/reponame , while a Codespace URL looks like random-word-123randomcharacters789.github.dev .     GitHub.dev is quicker to load than a Codespace.     GitHub.dev has a much more limited selection of VS Code extensions to use.    You can only install applications and execute code on a Codespace.     "
},
{
  "id": "note-commit-sync",
  "level": "2",
  "url": "ch-coding.html#note-commit-sync",
  "type": "Note",
  "number": "3.1.4",
  "title": "",
  "body": " One quick way to commit and push your changes from a Codespace is to use Source Control from the left toolbar.   Enter a short commit message describing your changes as a note to yourself. (This is required and can be a pain to fix if you forget to do so!)    Select Commit & Sync from the menu next to the green Commit button.    In the dialogs that follow, I suggest choosing to Always stage all your changes and commit them directly, then OK, Don't Show Again when told this action will pull and push commits from and to origin\/main , and finally Yes that you would like your Codespace to periodically run git fetch .     "
},
{
  "id": "fig-python-extension-screenshot",
  "level": "2",
  "url": "ch-coding.html#fig-python-extension-screenshot",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": "  A screenshot of the prompt that displays in a Codespace to install the Python extension.   Prompt to install the Python extension.  "
},
{
  "id": "fig-python-script-screenshot",
  "level": "2",
  "url": "ch-coding.html#fig-python-script-screenshot",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": "  A screenshot of a Python script being executed within a Codespace.   Running a Python script in a Codespace.  "
},
{
  "id": "def-terminal",
  "level": "2",
  "url": "ch-coding.html#def-terminal",
  "type": "Definition",
  "number": "3.2.3",
  "title": "",
  "body": "  A terminal is a command-line prompt used to run programs that don't have a graphical user interface. Type the command and hit Enter to run it.   "
},
{
  "id": "remark-terminal-shortcut",
  "level": "2",
  "url": "ch-coding.html#remark-terminal-shortcut",
  "type": "Remark",
  "number": "3.2.4",
  "title": "",
  "body": "  To open a terminal on demand in a Codespace, use the shortcut Ctrl\/Cmd + Shift + ` .   "
},
{
  "id": "listing-python-fib",
  "level": "2",
  "url": "ch-coding.html#listing-python-fib",
  "type": "Listing",
  "number": "3.2.5",
  "title": "",
  "body": "  # name this Python file something.py # execute using the ▶ button or by running this in a terminal: # python something.rb a,b = 1,1 print(a) print(b) for _ in range(10): print(a+b) a,b = b,a+b   Sample Python code  "
},
{
  "id": "listing-ruby-fib",
  "level": "2",
  "url": "ch-coding.html#listing-ruby-fib",
  "type": "Listing",
  "number": "3.2.6",
  "title": "",
  "body": "  # name this Ruby file something.rb # execute by running this in a terminal: # ruby something.rb a,b = 1,1 puts a puts b 10.times do puts a+b a,b = b,a+b end   Sample Ruby code  "
},
{
  "id": "listing-javascript-fib",
  "level": "2",
  "url": "ch-coding.html#listing-javascript-fib",
  "type": "Listing",
  "number": "3.2.7",
  "title": "",
  "body": "  \/\/ name this Javascript file something.js \/\/ execute by running this in a terminal: \/\/ node something.js let a = 1, b = 1 console.log(a) console.log(b) Array.from({ length: 10 }, _ => { console.log(a+b) let _a = a a = b b = _a + b })   Sample Javascript code  "
},
{
  "id": "note-manage-codespaces",
  "level": "2",
  "url": "ch-coding.html#note-manage-codespaces",
  "type": "Note",
  "number": "3.3.1",
  "title": "",
  "body": " To manage your Codespace resources, visit . You can stop a Codespace temporarily to preserve your hourly quota, and delete a Codespace you don't plan to use for a while to save on your storage quota. While actively working in a Codespace, you can stop it by pressing Ctrl\/Cmd + Shift + P , typing stop current codespace , and confirming.  In any case, a stopped Codespace can be restarted later when you want to resume work, even if you haven't committed and pushed your changes. (But be warned: a stopped Codespace and its uncommitted changes may be deleted by GitHub after a few days of inactivity, so don't leave it alone for long.)  A deleted Codespace can always be recreated later based upon your most recent commit.  "
},
{
  "id": "remark-adjusting-defaults",
  "level": "2",
  "url": "ch-coding.html#remark-adjusting-defaults",
  "type": "Remark",
  "number": "3.3.2",
  "title": "",
  "body": "  shows a screenshot of some settings available on github.com\/settings\/codespaces to adjust the default time your Codespace can idle before it times out (to save your compute time resources), and to adjust the default time your Codespace will be retained before it is deleted (to save your storage resources).  "
},
{
  "id": "figure-codespace-timeout-retention",
  "level": "2",
  "url": "ch-coding.html#figure-codespace-timeout-retention",
  "type": "Figure",
  "number": "3.3.3",
  "title": "",
  "body": " Screenshot of Codespace management settings    Screenshot of a web browser. Its text follows:  Default idle timeout  A codespace will suspend after a period of inactivity. You can specify a default idle timeout value, which will apply to all codespaces created after the default is changed. You will be charged for the entire time your codespace is running, even if it is idle. The maximum value is 240 minutes (4 hours).  Default retention period  Inactive codespaces are automatically deleted 30 days after the last time they were stopped. A shorter retention period can be set, and will apply to all codespaces created going forward. The default and maximum value is 30 days. Learn about retention setting    "
},
{
  "id": "fig-faces-of-github",
  "level": "2",
  "url": "ch-coding.html#fig-faces-of-github",
  "type": "Figure",
  "number": "3.3.4",
  "title": "",
  "body": "    Repo from different points of view.  "
},
{
  "id": "remark-change-machine-type",
  "level": "2",
  "url": "ch-coding.html#remark-change-machine-type",
  "type": "Remark",
  "number": "3.4.1",
  "title": "",
  "body": " You can double (or quadruple, or , etc.) your resources by changing the machine type . There are several ways to accomplish this, via , or by typing Change Machine Type in the Codespace command pallette (accessed via Ctrl\/Cmd + Shift + P ).  Note however, that if you double your resources, you are also doubling your usage time (e.g. running a 4-core machine uses one hour of your quota every 30 minutes).  "
},
{
  "id": "sec-custom-codespaces-3",
  "level": "2",
  "url": "ch-coding.html#sec-custom-codespaces-3",
  "type": "Remark",
  "number": "3.5.1",
  "title": "",
  "body": " Setting up a custom .devcontainer is a slick way to ensure you and your collaborators\/students are running exactly the same software (including versions, dependencies, etc.)! No more It works on my machine while I can't get it to work on my machine !  See VisualStudio.com\/docs\/devcontainers to learn more.  "
},
{
  "id": "ch-github-pages",
  "level": "1",
  "url": "ch-github-pages.html",
  "type": "Chapter",
  "number": "4",
  "title": "GitHub Pages",
  "body": " GitHub Pages   Creating a Simple Webpage  Having made your first repository in , and committed a few changes, you are now ready to share your work with the public. One way is to share a link to your repository at GitHub.com ; as long as you made it a public repository, anyone can see your files.  Another option is to use GitHub Pages to host a customizable website with your work. This can be done with any existing repository by manually authoring HTML files, so let's try it out with our existing example first. (Or, you can skip ahead to to create a portfolio website without using HTML.)  Use GitHub.dev ( ) to create three files in the root of a new or existing repository.   Create a file named .nojekyll (note the period at the start) but don't add any text to it. Simply creating this file will disable some advanced features of GitHub Pages we don't need right now.    Create an index.html file. This book won't discuss in depth how to author HTML, as we'll learn how to author our website content in Markdown in the next section, but for now add the following content:   <!-- index.html --> <html> <head> <title>My website!<\/title> <\/head> <body> <p>Thanks for visiting!<\/p> <img src=\".\/git-branches.png\"> <\/body> <\/html>     Download git-branches.png (used for ) and upload it to GitHub.dev .   You can alternatively use this ZIP file which has all three files created for you (be sure to unzip it first!).  Commit this update to your repository using Source Control, and confirm you see the two new files on your GitHub.com repository webpage.   To enable GitHub Pages, go to your repository Settings, and choose Pages from the sidebar. From there you can select to Deploy from a branch , using the main branch and the \/ (root) directory, and after a few moments your site will be enabled.   Settings to deploy a web page.     Once enabled, GitHub will provide a link to your public GitHub Pages website, hosted at GitHub.io . Click it and you'll see the content of your index.html file, which displays the image downloaded as git-branches.png . (It should look like this .)   It's good to remember how to distinguish the three GitHub domains:    GitHub.com is where your repository lives. It can be public or private.     GitHub.dev is where you can make changes to your repository through your web browser. This is private to you and you must commit and push your changes to the GitHub.com repository every so often. (See also .)     GitHub.io is your public GitHub Pages website, which you can edit by updating your repository files.      I recommend you add a link to your GitHub.io website from your GitHub.com repository page.   On your repository page, you can edit the About sidebar to add useful information about your project. In particular, there's a checkbox to automatically display your GitHub.io link to make it easy for others (and yourself!) to find your GitHub Pages site.      Using a Template  While you can create a custom website by authoring HTML, it'd be great to not have to! There are several templates available for GitHub Pages that allow you to author your content in Markdown, as well as providing nice themes, automatic linking between different sections of your website, and so on.      A template repository on GitHub provides other GitHub users the ability to easily obtain a shallow copy of the latest commit to the template, created as a new repository they control.    This is meant for situations like a GitHub Pages website, where you probably don't care about every single change that was made to create the template you're using, and you don't plan on contributing any of your changes back to the original repository. Instead, you just want the latest working files so you can insert your own content and get it online.  Visit this page and click Use this template , and Create a new repository . This creates a new repository you own on GitHub.com , and you can follow the instructions in to enable GitHub Pages.   Use this template button.  Once that's done, visit your new GitHub.io website to see the placeholder content of your new website (don't forget to add a link to your About sidebar, see ).   Deploying to GitHub Pages can take some time, so visiting the Actions tab on your repository page will let you see how this process is progressing. You can also see the status of this process by looking for the following icon next to your commit message: an orange dot (in progress), a green checkmark (deployed), or a red X (failure).    Actions tab on Github.com .      Customizing Your Site   Now that you have the template website hosted by GitHub Pages, you of course will want to customize it to yourself. For this book, I'll get you started by handling a few of the obvious first steps, assuming you're using the GitHub.dev service ( ).    Configuration  First things first, let's configure some basic elements of your site. These settings are found in \/_config.yml . There are several pieces of this file you likely aren't interested in editing (nor do you need to know at this point what they do), but you should at least find the title: and description: lines and edit them with your own information. The same goes for the author: name: and author: bio: entries as well.  To see that this worked, use Source Control to Commit and Push your edits. After a while ( ) you should be able to refresh your website and see your updated title, name, etc. (In , we will learn how to preview our edits more quickly, and without needing to push them to a live website, provided we're comfortable using a Codespace as explored in .) You can repeat this process after each of the edits described below to see your results reflected on the live website.    Photo  Next, let's add your photo. A placeholder is available at \/assets\/images\/bio-photo.jpg . You can drag your own JPG-format photo onto it in the File Explorer. Then you can delete the placeholder bio-photo.jpg and rename your photo to bio-photo.jpg .    Pages  By default you have five files in your \/_pages\/ directory. The 404.md file describes what visitors see when a page isn't found, and the three *-archive.md files can be used to customize pages that display certain blog posts.  The about.md file describes the content of your About page. The top few lines ( ) describe some metadata about the page. You can edit the permalink to change the web address that will be used for this page, and the title to change the title shown in the browser tab for this page.   About page metadata   --- permalink: \/about\/ title: \"About\" ---    Below the metadata is Markdown source that can be edited to include whatever content you'd like to appear within the page.  To create additional pages, copy-paste about.md to create new files in the \/_pages\/ directory, making sure to assign each page its own permalink. If you want these pages to appear in the navigation bar on top of your site, edit the \/_data\/navigation.yml configuration file to point to each permalink.  You can preview a compiled version of your markdown files ( .md ) on the web, without having to run any commands. It is enough to open a markdown file and split the screen.    Split screen to preview markdown file.     Posts  Posts are similar to pages, and live in the \/_posts\/ directory. To create a new post, copy-paste any of the existing post files and rename it into the form YYYY-MM-DD-my-new-post.md (where YYYY-MM-DD is the date you want associated with the post).  The content of your post is just Markdown, as with pages. However, you have slightly different metadata to edit ( ). In the date you can set the specific time of day you want your post to be associated with. You can also choose to assign each post categories and tags , which allow your posts to be sorted into appropriate category and tag pages, which are generated automatically for you.   Post metadata   --- title: \"Welcome to Jekyll!\" date: 2019-04-18T15:34:30-04:00 categories: - blog tags: - Jekyll - update ---       Previewing GitHub Pages  Another useful application of Codespaces is the ability to preview your GitHub Pages site created in . Return to that repository on GitHub.com and create a new Codespace ( ).  To spin up your live preview, open a terminal by using the shortcut noted in . To make sure the necessary software has been installed, type bundle and hit Enter . Then, you can enter jekyll serve to start the preview server.  You'll see some output, and eventually Server address: http:\/\/127.0.0.1:4000 . At that time an alert will appear that says Your application on port 4000 is available . You can use its Open in browser button, or hover over the http:\/\/127.0.0.1:4000 link to be given the same option.  This should open a URL such as random-words-123randomletters789-4000.app.github.dev , which will show a live preview of your GitHub Pages site in a new tab. As soon as you make edits in your Codespace tab, you can return to this tab to (within a second or two) see how your edits will update your live site. Note that this URL is private to you, and your public site won't be updated until you Commit & Sync your changes ( ).  Personally, I use GitHub.dev (or even just the GitHub.com edit button) rather than a full Codespace when adding a quick post or making a quick edit on many of my GitHub Pages websites. But the Codespace option is very handy for when bigger changes are necessary, and you want to make sure everything looks just right before pushing it live to the public.   "
},
{
  "id": "sec-upload-html-3",
  "level": "2",
  "url": "ch-github-pages.html#sec-upload-html-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "GitHub Pages "
},
{
  "id": "enable-github-pages",
  "level": "2",
  "url": "ch-github-pages.html#enable-github-pages",
  "type": "Note",
  "number": "4.1.1",
  "title": "",
  "body": " To enable GitHub Pages, go to your repository Settings, and choose Pages from the sidebar. From there you can select to Deploy from a branch , using the main branch and the \/ (root) directory, and after a few moments your site will be enabled.   Settings to deploy a web page.    "
},
{
  "id": "distinguishing-the-githubs",
  "level": "2",
  "url": "ch-github-pages.html#distinguishing-the-githubs",
  "type": "Note",
  "number": "4.1.3",
  "title": "",
  "body": " It's good to remember how to distinguish the three GitHub domains:    GitHub.com is where your repository lives. It can be public or private.     GitHub.dev is where you can make changes to your repository through your web browser. This is private to you and you must commit and push your changes to the GitHub.com repository every so often. (See also .)     GitHub.io is your public GitHub Pages website, which you can edit by updating your repository files.     "
},
{
  "id": "about-link-to-github-io",
  "level": "2",
  "url": "ch-github-pages.html#about-link-to-github-io",
  "type": "Note",
  "number": "4.1.4",
  "title": "",
  "body": " On your repository page, you can edit the About sidebar to add useful information about your project. In particular, there's a checkbox to automatically display your GitHub.io link to make it easy for others (and yourself!) to find your GitHub Pages site.  "
},
{
  "id": "def-template",
  "level": "2",
  "url": "ch-github-pages.html#def-template",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  A template repository on GitHub provides other GitHub users the ability to easily obtain a shallow copy of the latest commit to the template, created as a new repository they control.   "
},
{
  "id": "fig-pages-template",
  "level": "2",
  "url": "ch-github-pages.html#fig-pages-template",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": "  Use this template button.  "
},
{
  "id": "actions-progress",
  "level": "2",
  "url": "ch-github-pages.html#actions-progress",
  "type": "Note",
  "number": "4.2.3",
  "title": "",
  "body": " Deploying to GitHub Pages can take some time, so visiting the Actions tab on your repository page will let you see how this process is progressing. You can also see the status of this process by looking for the following icon next to your commit message: an orange dot (in progress), a green checkmark (deployed), or a red X (failure).    Actions tab on Github.com .   "
},
{
  "id": "about-page-metadata",
  "level": "2",
  "url": "ch-github-pages.html#about-page-metadata",
  "type": "Listing",
  "number": "4.3.1",
  "title": "",
  "body": " About page metadata   --- permalink: \/about\/ title: \"About\" ---   "
},
{
  "id": "fig-mdpreview",
  "level": "2",
  "url": "ch-github-pages.html#fig-mdpreview",
  "type": "Figure",
  "number": "4.3.2",
  "title": "",
  "body": "  Split screen to preview markdown file.  "
},
{
  "id": "post-metadata",
  "level": "2",
  "url": "ch-github-pages.html#post-metadata",
  "type": "Listing",
  "number": "4.3.3",
  "title": "",
  "body": " Post metadata   --- title: \"Welcome to Jekyll!\" date: 2019-04-18T15:34:30-04:00 categories: - blog tags: - Jekyll - update ---   "
},
{
  "id": "ch-copilot",
  "level": "1",
  "url": "ch-copilot.html",
  "type": "Chapter",
  "number": "5",
  "title": "Copilot and Other AI Assistants",
  "body": " Copilot and Other AI Assistants  Oscar Levin   In this chapter we will explore GitHub's Copilot features, as well as how other AI assistants can be used with GitHub and VS Code.  Note that almost everything in this chapter will likely be out of date almost immediately. The current suggestions here are up to date as of 2025-01-08 .    AI Assistant Options   Copilot is GitHub's AI assistant, tightly integrated with GitHub and VS Code through a pair of extensions. There is currently a free tier that allows for a limited number of interactions each month, as well as a $10\/month plan that provides unlimited interactions with Copilot (there is a free trial of the paid version as well).  Depending on what you want to do with your project, other AI assistants might be a better fit. One notable alternative that might work even better for coding projects is Codeium . In particular, Codeium has a free tier that appears to offer unlimited interactions. Like Copilot, Codeium also works with VS Code through an extension and the two use similar interfaces, so it should be relatively easy to switch between the two.  All of the specific commands described below will be those of Copilot, but often the same commands will work with Codeium. In any event, we will focus on general principles of how to use these coding assistants.    Setup  We will assume you want to use Copilot from inside VS Code, either on your own machine or in a Github Codespace. To get set up, follow the Quick Start Guide from the Copilot documentation.  In particular, make sure you have   Enabled Copilot in your Github account.    Installed the Copilot extension in VS Code.     That should be it.    Features  There are three main ways you can interact with Copilot from inside VS Code:   By accepting ghost text suggestions as you type. Copilot will will show you the most likely words to appear next to your cursor in light gray text. Hitting TAB will accept the current suggestion in full; CTRL+RightArrow will accept one word at a time.    Use Copilot Chat by clicking the Copilot icon at the top of the VS Code window, right of the search bar (see ). Select Open chat to open a panel on the right side of the window. This panel allows you to Ask Copilot questions, similar to using ChatGPT or another AI chatbot. The key difference is that Copilot uses your current file or workspace (or another selected source) as its context. You can also use voice commands to ask questions and have Copilot read its answers aloud.    By using Copilot's inline chat . While typing in the editor, or with a selection highlighted, you can use CTRL+I to get a floating chat window that can provide suggestions based on your cursor position or the current selection. You can accept or discard edits suggested by copilot easily from this interface.      The copilot icon at the top of VS Code.   screenshot of vs code with the copilot icon clicked.      Things to Try  Here are a few features of Copilot you might want to try out.   Suppose you are trying to write some code in a language you are not that familiar with. Copilot will suggest the next bit of code for you as you type. To get better suggestions, put in a comment describing what you want to do. (Hint: if you don't know the syntax for comments, hit CTRL+\/ to start a comment in most languages.)    Does the code do what you want it to? Is it confusing? Ask Copilot to explain the code to you. You can select the code, hit CTRL+I , and then type \/explain (note the forward slash).    Along these lines, try asking Copilot to document your code for you. Select the code, hit CTRL+I , and then type \/doc .    Here is something I just did while writing this. I realized that I wanted all the keyboard shortcuts to be displayed as code, which in PreTeXt is done by enclosing them in <c> tags. So I selected the entire document, hit CTRL+I and typed wrap all keyboard shortcuts here with <c> tags. Copilot then let me see where it made changes (line by line) and let me accept them or not.  A very new Copilot feature is Copilot Edits , which allow you to do such things for multiple files at the same time. I suspect this could also be useful for finding typos.    If you are working on a mathematical proof or a complex equation, you can ask Copilot to help you format it correctly in LaTeX. Simply type your equation or proof in plain text, select it, hit CTRL+I , and ask Copilot to convert it to LaTeX. This can save you a lot of time and ensure that your mathematical notation is accurate.  NOTE: I don't know if that's true, the above paragraph was generated by Copilot from the prompt Write a suggestion of something Copilot can do for a mathematician.      One final thing you might want to try: Turn off completions . It can be distracting to see what Copilot thinks you should type next; I have found that it often interrupts the idea I have in my head. You can turn off completions by clicking the Copilot icon at the bottom of the VS Code window and selecting Disable completions. You can also disable completions for particular types of files.   "
},
{
  "id": "ch-copilot-3-1",
  "level": "2",
  "url": "ch-copilot.html#ch-copilot-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Copilot "
},
{
  "id": "sec-options-2",
  "level": "2",
  "url": "ch-copilot.html#sec-options-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Copilot "
},
{
  "id": "sec-copilot-features-2",
  "level": "2",
  "url": "ch-copilot.html#sec-copilot-features-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inline chat "
},
{
  "id": "copilot-icon",
  "level": "2",
  "url": "ch-copilot.html#copilot-icon",
  "type": "Figure",
  "number": "5.3.1",
  "title": "",
  "body": " The copilot icon at the top of VS Code.   screenshot of vs code with the copilot icon clicked.   "
},
{
  "id": "sec-things-to-try-2",
  "level": "2",
  "url": "ch-copilot.html#sec-things-to-try-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Copilot Edits "
},
{
  "id": "ch-collaboration",
  "level": "1",
  "url": "ch-collaboration.html",
  "type": "Chapter",
  "number": "6",
  "title": "Collaborating with Others",
  "body": " Collaborating with Others   Collaborators and Pull Requests  A direct way to allow multiple people you trust to work on the same repository is to add these GitHub users as collaborators.    A collaborator for a GitHub repository has the ability to commit and sync changes to the project, as well as adjust certain settings of the repository. GitHub documentation provides some details on the different permissions\/abilities that owners have in comparison to collaborators.    Collaborators are added by going to your repository's Settings tab, using the Collaborators link in the sidebar. Each collaborator will need their own GitHub account, and must accept the invitation to collaborate before gaining access.  Once they have access, a collaborator can either use GitHub.dev ( ) or create their own Codespace ( ).   If two collaborators on the same repository make commits on the same branch, they will desynchronize your project's history: person A's history will think that commit X is followed by Y on branch main , but person B's history will think that commit X is followed by Z on branch main .  As seen in , Git is meant to support non-linear history. However, to support this, contributors must name their distinct branches.    Our recommendation to support multiple collaborators on the same repository is to never directly commit to the main branch , even if you're the owner.  To commit to an alternative branch in GitHub.dev or Codespaces, select main in the bottom toolbar, then type the name of your new branch, and select Create new branch . It's a good idea to name your branch in the form UserName\/short-description-of-topic , or if you're unsure of the topic, you can just use the current date: UserName\/YYYYMMDD . Note that prefixing with your UserName helps prevent two people from accidentally using the same branch name.   Once a collaborator is working on a branch, they are free to edit as they wish, and can (and should) commit and push\/sync with GitHub to persist their contributions to the team's repository.  To facilitate communication among collaborators working on different branches, it's good practice to open a draft pull request once a new branch is created.    A pull request (or PR for short) is a discussion thread for a branch that proposes changes to a different (often, the main ) branch. When the branch's changes are ready to be merged, this can be accomplished by pressing a button on the pull request webpage.  A PR can be marked as a draft or ready to review .     Depending on whether the collaborator is using GitHub.dev or Codespaces, they may be prompted to create a pull request when first pushing\/syncing changes. If not, a pull request can be created by navigating to the repository page on GitHub.com .  Recent pushes to a branch will reveal a prompt to create the pull request immediately. Otherwise, the PR can be created by using the Pull Requests tab of the page.  Unless the PR is for a single commit that's immediately ready for review , a new PR should be created as a draft.   With a draft pull request created, the contributor can continue to commit and push\/sync to the branch until it is ready for review. The discussion features of GitHub can allow contributors to discuss the proposed changes, whether they are in draft or review-ready status.   A draft pull request has a large button near the end of the discussion thread to mark the pull request as ready for review.  A ready for review pull request can be converted to a draft by using a small link on the right sidebar.   Depending on the complexity or maturity of the project, you may wish to develop a review process with your collaborators, or simply use the PR workflow to clearly communicate when changes are being made to the main branch, and ensure no two collaborators make incompatible changes to the same branch. Whatever you choose, you'll eventually want to incorporate these branched changes into your main branch.   There are several options for merging a branch's pull request. I recommend the Squash and Merge option, which converts all the branch's commits\/changes into a single new commit extending the target branch.   As long as contributions are made using appropriate branches and pull requests, you will have minimal problems with conflicting changes made between different collaborators, with GitHub handling the merging process automatically, even if two collaborators edit the same file. (But not always, see .)  But a common error that I frequently make myself: what if you forget to create a branch with your work, and you acccidentally commit to main directly? The first safety rail I recommend is to set up a policy on your repository that will prevent this accidental commit to be pushed to GitHub.   To prevent unintended changes to your main branch, follow the instructions at GitHub's documentation , using main as your Branch name pattern , and enabling required pull requests.     Undoing accidental commmits to main  Unfortunately, there's no button to push that will fix a commit made to the local copy of main accidentally, but there is a quick-enough fix nonetheless.   This fix must be done in a Codespace, not GitHub.dev.    With branch protection enabled, if you accidentally make updates directly to your personal main branch, attempting to push these from a Codespace will result in the error message Can't push refs to remote. Try running \"Pull\" first to integrate your changes.   To fix this, open a Terminal ( ) and type , changing my-new-branch to the branch name you want to create. Use Enter to execute the command.  Then, copy-paste and your local main branch will match the official repository, and any changes you've made will be reflected on the my-new-branch branch instead.     BRANCH=my-new-branch   Defining the name for a new branch     git stash git branch $BRANCH git reset --hard origin\/main git checkout $BRANCH git stash pop   Moving local changes to main to a branch     Forks  One great thing about working with open source on GitHub is that not only can you collaborate with your trusted colleagues, but you can also work with collaborators who do not have write access to your repository.    A fork for a public repository is a copy of the project's entire history, made either for the main branch or for all publicly shared branches.    Managing contributions from forked repositories is done using the same workflow as we recommend for collaborating with trusted colleagues that you've given write access to your repository ( ). The only difference is that an outside collaborator is creating branches and making commits on their forked copy of your project, not a branch of your original repository. But GitHub still gives essentially the same options for the outside collaborator to create a pull request to your project, without given them access to any data you aren't already sharing with the public.   To create a fork of a public repository, press the Fork button on its GitHub.com homepage. You can name this fork whatever you like, it will be tracked on GitHub as a fork of the original project, with the ability to make upstream contributions by way of pull requests.   Those of us who work in open source typically love getting pull requests from random collaborators. For example, if you find a typo in this book, you can fxi it by creating a fork at , editing the appropriate source\/*.ptx file to fix the word, and open a pull request.    Handling Merge Conflicts  Perhaps the most complicated scenario when collaborating on a Git repository is the dreaded merge conflict .    While Git is fairly good about merging together changes made by different contributors to different files within a project into a cohesive whole, a merge conflict can occur when two different contributors attempt to make changes to the same file (particularly, the same line) at the same time. When the second contributor opens a pull request, GitHub will warn about this conflict.    Handling merge conflicts can be tricky! Git\/GitHub have various tools to help you review and correct a merge conflict. If you're fortunate, you'll be able to resolve things on the pull request page: see Resolving a merge conflict on GitHub for full details.  You'll be presented with files with some strange markers as in . The lines between <<<<<<< HEAD and ======= were merged first, and the lines between ======= and >>>>>>> branch-a are the conflicting changes trying to be merged.    If you have questions, please <<<<<<< HEAD open an Issue ======= ask them in Discussions. >>>>>>> branch-a   A merge conflict   You can then choose which change to retain, deleting all the extra <<<<<<< HEAD , ======= , and >>>>>>> branch-a lines.  However, sometimes the merge conflict is too involved to be corrected using the web interface. In that situation, you will need to use a Codespace and follow the instructions at either Resolving a merge conflict using the command line or Using Git source control in VS Code | Merge conflicts .   "
},
{
  "id": "def-collabotors",
  "level": "2",
  "url": "ch-collaboration.html#def-collabotors",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  A collaborator for a GitHub repository has the ability to commit and sync changes to the project, as well as adjust certain settings of the repository. GitHub documentation provides some details on the different permissions\/abilities that owners have in comparison to collaborators.   "
},
{
  "id": "sec-collaborators-prs-6",
  "level": "2",
  "url": "ch-collaboration.html#sec-collaborators-prs-6",
  "type": "Warning",
  "number": "6.1.2",
  "title": "",
  "body": " If two collaborators on the same repository make commits on the same branch, they will desynchronize your project's history: person A's history will think that commit X is followed by Y on branch main , but person B's history will think that commit X is followed by Z on branch main .  As seen in , Git is meant to support non-linear history. However, to support this, contributors must name their distinct branches.  "
},
{
  "id": "sec-collaborators-prs-7",
  "level": "2",
  "url": "ch-collaboration.html#sec-collaborators-prs-7",
  "type": "Note",
  "number": "6.1.3",
  "title": "",
  "body": " Our recommendation to support multiple collaborators on the same repository is to never directly commit to the main branch , even if you're the owner.  To commit to an alternative branch in GitHub.dev or Codespaces, select main in the bottom toolbar, then type the name of your new branch, and select Create new branch . It's a good idea to name your branch in the form UserName\/short-description-of-topic , or if you're unsure of the topic, you can just use the current date: UserName\/YYYYMMDD . Note that prefixing with your UserName helps prevent two people from accidentally using the same branch name.  "
},
{
  "id": "def-pull-request",
  "level": "2",
  "url": "ch-collaboration.html#def-pull-request",
  "type": "Definition",
  "number": "6.1.4",
  "title": "",
  "body": "  A pull request (or PR for short) is a discussion thread for a branch that proposes changes to a different (often, the main ) branch. When the branch's changes are ready to be merged, this can be accomplished by pressing a button on the pull request webpage.  A PR can be marked as a draft or ready to review .   "
},
{
  "id": "sec-collaborators-prs-11",
  "level": "2",
  "url": "ch-collaboration.html#sec-collaborators-prs-11",
  "type": "Note",
  "number": "6.1.5",
  "title": "",
  "body": " Depending on whether the collaborator is using GitHub.dev or Codespaces, they may be prompted to create a pull request when first pushing\/syncing changes. If not, a pull request can be created by navigating to the repository page on GitHub.com .  Recent pushes to a branch will reveal a prompt to create the pull request immediately. Otherwise, the PR can be created by using the Pull Requests tab of the page.  Unless the PR is for a single commit that's immediately ready for review , a new PR should be created as a draft.  "
},
{
  "id": "sec-collaborators-prs-13",
  "level": "2",
  "url": "ch-collaboration.html#sec-collaborators-prs-13",
  "type": "Note",
  "number": "6.1.6",
  "title": "",
  "body": " A draft pull request has a large button near the end of the discussion thread to mark the pull request as ready for review.  A ready for review pull request can be converted to a draft by using a small link on the right sidebar.  "
},
{
  "id": "sec-collaborators-prs-15",
  "level": "2",
  "url": "ch-collaboration.html#sec-collaborators-prs-15",
  "type": "Note",
  "number": "6.1.7",
  "title": "",
  "body": " There are several options for merging a branch's pull request. I recommend the Squash and Merge option, which converts all the branch's commits\/changes into a single new commit extending the target branch.  "
},
{
  "id": "note-branch-protection",
  "level": "2",
  "url": "ch-collaboration.html#note-branch-protection",
  "type": "Note",
  "number": "6.1.8",
  "title": "",
  "body": " To prevent unintended changes to your main branch, follow the instructions at GitHub's documentation , using main as your Branch name pattern , and enabling required pull requests.  "
},
{
  "id": "sec-collaborators-undo-main-3",
  "level": "2",
  "url": "ch-collaboration.html#sec-collaborators-undo-main-3",
  "type": "Warning",
  "number": "6.2.1",
  "title": "",
  "body": " This fix must be done in a Codespace, not GitHub.dev.  "
},
{
  "id": "sec-collaborators-undo-main-4",
  "level": "2",
  "url": "ch-collaboration.html#sec-collaborators-undo-main-4",
  "type": "Note",
  "number": "6.2.2",
  "title": "",
  "body": " With branch protection enabled, if you accidentally make updates directly to your personal main branch, attempting to push these from a Codespace will result in the error message Can't push refs to remote. Try running \"Pull\" first to integrate your changes.   To fix this, open a Terminal ( ) and type , changing my-new-branch to the branch name you want to create. Use Enter to execute the command.  Then, copy-paste and your local main branch will match the official repository, and any changes you've made will be reflected on the my-new-branch branch instead.  "
},
{
  "id": "lst-branch-fix-1",
  "level": "2",
  "url": "ch-collaboration.html#lst-branch-fix-1",
  "type": "Listing",
  "number": "6.2.3",
  "title": "",
  "body": "  BRANCH=my-new-branch   Defining the name for a new branch  "
},
{
  "id": "lst-branch-fix-2",
  "level": "2",
  "url": "ch-collaboration.html#lst-branch-fix-2",
  "type": "Listing",
  "number": "6.2.4",
  "title": "",
  "body": "  git stash git branch $BRANCH git reset --hard origin\/main git checkout $BRANCH git stash pop   Moving local changes to main to a branch  "
},
{
  "id": "def-forks",
  "level": "2",
  "url": "ch-collaboration.html#def-forks",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  A fork for a public repository is a copy of the project's entire history, made either for the main branch or for all publicly shared branches.   "
},
{
  "id": "sec-forks-5",
  "level": "2",
  "url": "ch-collaboration.html#sec-forks-5",
  "type": "Note",
  "number": "6.3.2",
  "title": "",
  "body": " To create a fork of a public repository, press the Fork button on its GitHub.com homepage. You can name this fork whatever you like, it will be tracked on GitHub as a fork of the original project, with the ability to make upstream contributions by way of pull requests.  "
},
{
  "id": "def-merge-conflict",
  "level": "2",
  "url": "ch-collaboration.html#def-merge-conflict",
  "type": "Definition",
  "number": "6.4.1",
  "title": "",
  "body": "  While Git is fairly good about merging together changes made by different contributors to different files within a project into a cohesive whole, a merge conflict can occur when two different contributors attempt to make changes to the same file (particularly, the same line) at the same time. When the second contributor opens a pull request, GitHub will warn about this conflict.   "
},
{
  "id": "listing-merge-conflict",
  "level": "2",
  "url": "ch-collaboration.html#listing-merge-conflict",
  "type": "Listing",
  "number": "6.4.2",
  "title": "",
  "body": "  If you have questions, please <<<<<<< HEAD open an Issue ======= ask them in Discussions. >>>>>>> branch-a   A merge conflict  "
},
{
  "id": "ch-jupyter",
  "level": "1",
  "url": "ch-jupyter.html",
  "type": "Chapter",
  "number": "7",
  "title": "Jupyter Notebooks",
  "body": " Jupyter Notebooks   In you wrote and ran a few short scripts in various programming languages. But often, we want to not only be able to write and execute code, but do so piece-by-piece, and share the results with other people without requiring them to run the code themselves...    Intro to Jupyter    A Jupyter notebook is a file that stores commentary, code, and output in an all-in-one format suitable for sharing with other people.    Jupyter is a popular open-source tool used in data science, scientific computing, and computational journalism. GitHub provides a Codespace ready for running Jupyter notebooks out of the box: .    GitHub's Jupyter Codespace  Let's begin by going to github\/codespaces-jupyter directly. Before we dive into editing a notebook ourselves, we can first browse the notebooks directory on the repository page. We see three files, each with the extension *.ipynb (short for IPY thon N ote B ook , Jupyter's original name).  Clicking on each file, you'll note that while there's code, most of the file is actually narrative and visualization. That's the appeal of Jupyter for many people: it's about communicating stories , not just data or software.  Additionally, you'll see a data directory, which includes a *.csv  C omma S eparated V alues spreadsheet. This file can be read into a notebook for analysis.  Now, let's follow the instructions of the repository's README file ( ). As of writing, it recommends to just use the Code button to open a Codespace, without needing to fork ( ) the repository. This allows you to try out the Codespace without saving your work long-term, but you can still create a fork with your changes later if you decide to.    Kernels  At the core of any Jupyter notebook is its kernel .    The kernel of a Jupyter notebook is a process that wires up a notebook to a particular programming language.    Kernels for several different programming languages exist. We will use a Python kernel in this book, not least of which because it's one of the most commonly used kernels, and the kernel that's already set up for use with the GitHub Jupyter Codespace repo.  In your Codespace, use the Select kernel button, to choose a Python environment . You should be able to select the default global environment without needing to create a new one. Your notebook is ready once you see Python 3.x.y (for some values of ) in the upper-right corner of the notebook.    Cells  A notebook is composed of many consecutive parts, known as cells .    A cell of a notebook encapsulates either commentary\/documentation (as a Markdown cell ) or code (as a Code cell ). Cells can be rearranged, inserted, cut, pasted, and so on.    Each Markdown cell uses, well, Markdown ( ) to describe content that should be displayed to the reader, similar to a README file in your repository.  But it's the Code cells that set a notebook apart. Each Code cell in a notebook is run consecutively, with the result of the final line of code being displayed for the reader. Importantly, these outputs are saved to the notebook itself, meaning that by sharing the notebook with a colleague, they can see the output of your code without running it themselves! This is not only convenient, but it's essential when communicating the result of code that uses software your reader does not have installed themselves. Likewise, it allows for showing the results of code via a web browser, such as at this link .    A sample notebook  I've provided a sample notebook that you can upload to your Codespace to experiment with.    Handling big datasets  A (possible) disadvantage of using Codespaces compared to your own computer is that all processing happens in the cloud, so you're limited by the resources made available to you by GitHub. But describes how to beef up your Codespace with more resources, should you need to crunch a particularly large dataset.    Using R with Jupyter  To use R instead of Python with your Jupyter notebook, a custom dev container ( ) configured for R notebooks is available at .   "
},
{
  "id": "def-jupyter",
  "level": "2",
  "url": "ch-jupyter.html#def-jupyter",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": "  A Jupyter notebook is a file that stores commentary, code, and output in an all-in-one format suitable for sharing with other people.   "
},
{
  "id": "def-kernel",
  "level": "2",
  "url": "ch-jupyter.html#def-kernel",
  "type": "Definition",
  "number": "7.3.1",
  "title": "",
  "body": "  The kernel of a Jupyter notebook is a process that wires up a notebook to a particular programming language.   "
},
{
  "id": "def-cells",
  "level": "2",
  "url": "ch-jupyter.html#def-cells",
  "type": "Definition",
  "number": "7.4.1",
  "title": "",
  "body": "  A cell of a notebook encapsulates either commentary\/documentation (as a Markdown cell ) or code (as a Code cell ). Cells can be rearranged, inserted, cut, pasted, and so on.   "
},
{
  "id": "ch-projects",
  "level": "1",
  "url": "ch-projects.html",
  "type": "Chapter",
  "number": "8",
  "title": "Math Projects Powered by GitHub",
  "body": " Math Projects Powered by GitHub   PreTeXt authoring system   PreTeXt is an authoring and publishing system for scholarly documents, especially in STEM disciplines. Works authored in PreTeXt can be converted to HTML, PDF, braille, and many other formats. This book was written in PreTeXt!  PreTeXt is particularly well-suited for the creation of interactive and accessible Open Educational Resources in mathematics and computer science. Works authored in PreTeXt can be deployed to Runestone Academy , allowing students to log into their textbook and persist progress on exercises and activities.  The PROSE Consortium forms the broader ecosystem serving open-source STEM open educational resources and offers regular drop-in meetings for community members to learn more about its products, which also include WeBWorK and Doenet .   Getting Started with PreTeXt is a tutorial that uses GitHub Codespaces to get authors up and writing quickly, and helps them share their works on GitHub and GitHub Pages.     -Base Community Database of Topological Counterexamples  To paraphrase Mary Ellen Rudin, topology is a dense forest of counterexamples, and a usable map of the forest is a fine thing. . The -Base aims to serve as this atlas, turning the classic text Counterexamples in Topology into an open, living, and interactive database supported by a community of researchers, instructors, and students.  To learn how to contribute to the -Base, a tutorial is available to walk through the process of editing its data and previewing it in your own Codespace.    Lean Theorem Prover  The Lean theorem prover is an interactive proof assistant that allows mathematicians to formally verify their proofs by computer.  The textbook Mathematics in Lean provides an excellent introduction to authoring in Lean, with GitHub Codespaces support.  (For a more casual experience outside GitHub, the Lean game server has fun tutorials for both Peano axioms and naive set theory.)    code4math  In December 2023, the American Institute of Mathematics hosted a workshop of researchers to explore the future of sociotechnical infrastructure for mathematics. One outcome of this work was the establishment of , a community for mathematicians engaged in this work.    PROSE Consortium  The PROSE Consortium is a community of instructors, developers, and researchers focusd on open-source tools and resources for mathematics and computer science education. You can engage with this group by visiting their homepage at .   "
},
{
  "id": "ch-manim",
  "level": "1",
  "url": "ch-manim.html",
  "type": "Chapter",
  "number": "9",
  "title": "Manim",
  "body": " Manim   This chapter is co-authored by Tien Chih .    What Is Manim?   Manim stands for Math Animation . The Community Manim Python package is a publically maintained, open-source commmunity version of a custom Python package initially created by Grant Sanderson, more commonly known as 3Blue1Brown .    https:\/\/www.3blue1brown.com\/      https:\/\/www.youtube.com\/c\/3blue1brown      Manim provides tools that can bring mathematical ideas and concepts to life that static words and explanations may not capture. As an example, the TBIL.org Calculus I video series at this YouTube playlist was animated entirely by Tien Chih using Manim.    Creating a Manim Codespace  A turn-key repository for creating a Codespace ( ) for Manim is available at StevenClontz\/manim-workshop . Follow the instructions there to obtain an interface for authoring Manim content using just your web browser (Chrome\/Edge\/Firefox recommended).    Hello World!   Let's run our very first Manim animation.     Open main.py and look for the line class HelloWorld(Scene): .    Open a Terminal and execute the command manim render -ql main.py HelloWorld . (See the README file for other options to render Manim scenes.)    Open the file media\/videos\/main\/480p15\/HelloWorld.mp4 to view your newly rendered video.    See if you can add these lines to the code so the video ends by saying My name is YOUR NAME HERE .    name = MathTex(r\"\\text{My name is YOUR NAME HERE.}\")      self.play(Transform(hello, name))    Don't forget to re-run manim render -ql main.py HelloWorld to update your rendered video.    See if you can make the circle GREEN instead of PINK .      More Animations    Open main.py and look for the line class TanLine(Scene): .  Review the comments and the code within this block. This particular scene TanLine creates a curve, displays the algebraic work needed to find a tangent line, and then displays said tangent line.    Run manim render -ql main.py TanLine to produce a video file at media\/videos\/main\/480p15\/TanLine.mp4 .    Edit the code to find and display the line tangent to the curve when .    Change the window so that ranges from to .    Choose a function and value of your choice, and edit the code to find and display the line tangent to at your chosen value.     The web-based Desmos tool can be very helpful in determining appropriate window sizes and scaling.     Open main.py and look for the line class SinChange(Scene): .  This particular block of code plots a transformed sine function of the form . Where initially . We then adjust the values for and over time.    Run the code to produce a video file.    Edit the array a=[1,2, 2, 2, -1\/3] , and the rhs entries to adjust the vertical stretch.    Edit the array b=[1,1, 1\/2,1\/2,-2] , and the rhs entries to adjust the horizontal stretch.    Edit the array c=[0,0, 0, -3, 2] , and the rhs entries to adjust the vertical shift.      Open main.py and look for the lines class FindProduct(Scene): , class FindQuotient(Scene): , and class FindPower(Scene): .  The scene FindProduct displays a product rule computation, FindQuotient displays a quotient rule computation, and FindPower displays a faux-quotient rule computation using powers.   Run the function FindProduct to produce a video file.  Pick your favorite product of functions and edit the code to produce the appropriate derivation.  Copy and paste the FindProduct function and rename it FindChain .  Edit this new command to display an animation for your favorite chain rule derivation.     Open main.py and look for the line class Riemann(Scene): .  This code displays a Riemann sum for a funcion, and displays the ongoing sum for .    Run the code to see the output.    Change the function to a function of your choice. You may need to resize the window. Recall the identitites       Additional Resources:   Here are a list of helpful links regarding Manim authoring:    https:\/\/docs.manim.community\/en\/stable\/index.html . This is Tien's goto place for FAQ's, working examples etc..     https:\/\/www.youtube.com\/watch?v=KsemDUSJeWk&list=PLwXCBkIf7xBODPeQxULagMeWSK4YtLYog . This is a video playlist of Calculus I material authored by Tien.     https:\/\/www.youtube.com\/@MathVisualProofs . This the youtube video channel Mathematical Visual Proofs by Dr. Tom Edgar, an expert on Manim.     https:\/\/www.free-stock-music.com\/ . This is a website for royalty-free, Creative-Commons licensed stock music.     https:\/\/discord.com\/invite\/bYCyhM9Kz2 a Discord for Manim, people can help here and you can run Python code within the Discord.       "
},
{
  "id": "sec-hello-world-3",
  "level": "2",
  "url": "ch-manim.html#sec-hello-world-3",
  "type": "Activity",
  "number": "9.3.1",
  "title": "",
  "body": "  Open main.py and look for the line class HelloWorld(Scene): .    Open a Terminal and execute the command manim render -ql main.py HelloWorld . (See the README file for other options to render Manim scenes.)    Open the file media\/videos\/main\/480p15\/HelloWorld.mp4 to view your newly rendered video.    See if you can add these lines to the code so the video ends by saying My name is YOUR NAME HERE .    name = MathTex(r\"\\text{My name is YOUR NAME HERE.}\")      self.play(Transform(hello, name))    Don't forget to re-run manim render -ql main.py HelloWorld to update your rendered video.    See if you can make the circle GREEN instead of PINK .   "
},
{
  "id": "sec-more-animations-2",
  "level": "2",
  "url": "ch-manim.html#sec-more-animations-2",
  "type": "Activity",
  "number": "9.4.1",
  "title": "",
  "body": "  Open main.py and look for the line class TanLine(Scene): .  Review the comments and the code within this block. This particular scene TanLine creates a curve, displays the algebraic work needed to find a tangent line, and then displays said tangent line.    Run manim render -ql main.py TanLine to produce a video file at media\/videos\/main\/480p15\/TanLine.mp4 .    Edit the code to find and display the line tangent to the curve when .    Change the window so that ranges from to .    Choose a function and value of your choice, and edit the code to find and display the line tangent to at your chosen value.   "
},
{
  "id": "sec-more-animations-3",
  "level": "2",
  "url": "ch-manim.html#sec-more-animations-3",
  "type": "Remark",
  "number": "9.4.1",
  "title": "",
  "body": " The web-based Desmos tool can be very helpful in determining appropriate window sizes and scaling.  "
},
{
  "id": "sec-more-animations-4",
  "level": "2",
  "url": "ch-manim.html#sec-more-animations-4",
  "type": "Activity",
  "number": "9.4.2",
  "title": "",
  "body": "  Open main.py and look for the line class SinChange(Scene): .  This particular block of code plots a transformed sine function of the form . Where initially . We then adjust the values for and over time.    Run the code to produce a video file.    Edit the array a=[1,2, 2, 2, -1\/3] , and the rhs entries to adjust the vertical stretch.    Edit the array b=[1,1, 1\/2,1\/2,-2] , and the rhs entries to adjust the horizontal stretch.    Edit the array c=[0,0, 0, -3, 2] , and the rhs entries to adjust the vertical shift.   "
},
{
  "id": "sec-more-animations-5",
  "level": "2",
  "url": "ch-manim.html#sec-more-animations-5",
  "type": "Activity",
  "number": "9.4.3",
  "title": "",
  "body": "  Open main.py and look for the lines class FindProduct(Scene): , class FindQuotient(Scene): , and class FindPower(Scene): .  The scene FindProduct displays a product rule computation, FindQuotient displays a quotient rule computation, and FindPower displays a faux-quotient rule computation using powers.   Run the function FindProduct to produce a video file.  Pick your favorite product of functions and edit the code to produce the appropriate derivation.  Copy and paste the FindProduct function and rename it FindChain .  Edit this new command to display an animation for your favorite chain rule derivation.  "
},
{
  "id": "sec-more-animations-6",
  "level": "2",
  "url": "ch-manim.html#sec-more-animations-6",
  "type": "Activity",
  "number": "9.4.4",
  "title": "",
  "body": "  Open main.py and look for the line class Riemann(Scene): .  This code displays a Riemann sum for a funcion, and displays the ongoing sum for .    Run the code to see the output.    Change the function to a function of your choice. You may need to resize the window. Recall the identitites    "
},
{
  "id": "ch-latex",
  "level": "1",
  "url": "ch-latex.html",
  "type": "Chapter",
  "number": "10",
  "title": "LaTeX",
  "body": " LaTeX   This chapter is co-authored by Francesca Gandini, ADD    What Is   XXX stands for YYY . more commonly known as ZZZZ . For math . A sample list and links    https:\/\/www.3blue1brown.com\/      https:\/\/www.youtube.com\/c\/3blue1brown      Soething TBIL.org Calculus I video series at this YouTube playlist was animated entirely by Tien Chih using Manim.    Creating a LaTeX Codespace  A turn-key repository for creating a Codespace ( ) for LaTeX is available at fragandi\/latex-codespace . Below we provide detailed instructions. If you have some experience with codespaces, you might be able to follow directly the README in the repo. Otherwise, keep reading!    Hello World!   Let's run our very first Manim animation.     Open main.py and look for the line class HelloWorld(Scene): .    Open a Terminal and execute the command manim render -ql main.py HelloWorld . (See the README file for other options to render Manim scenes.)    Open the file media\/videos\/main\/480p15\/HelloWorld.mp4 to view your newly rendered video.    See if you can add these lines to the code so the video ends by saying My name is YOUR NAME HERE .    name = MathTex(r\"\\text{My name is YOUR NAME HERE.}\")      self.play(Transform(hello, name))    Don't forget to re-run manim render -ql main.py HelloWorld to update your rendered video.    See if you can make the circle GREEN instead of PINK .     "
},
{
  "id": "sec-hello-world2-3",
  "level": "2",
  "url": "ch-latex.html#sec-hello-world2-3",
  "type": "Activity",
  "number": "10.3.1",
  "title": "",
  "body": "  Open main.py and look for the line class HelloWorld(Scene): .    Open a Terminal and execute the command manim render -ql main.py HelloWorld . (See the README file for other options to render Manim scenes.)    Open the file media\/videos\/main\/480p15\/HelloWorld.mp4 to view your newly rendered video.    See if you can add these lines to the code so the video ends by saying My name is YOUR NAME HERE .    name = MathTex(r\"\\text{My name is YOUR NAME HERE.}\")      self.play(Transform(hello, name))    Don't forget to re-run manim render -ql main.py HelloWorld to update your rendered video.    See if you can make the circle GREEN instead of PINK .   "
},
{
  "id": "ax-related",
  "level": "1",
  "url": "ax-related.html",
  "type": "Appendix",
  "number": "A",
  "title": "Additional Reading",
  "body": " Additional Reading      Version Control with Git      Programming with Python      "
},
{
  "id": "ax-additional-topics",
  "level": "1",
  "url": "ax-additional-topics.html",
  "type": "Appendix",
  "number": "B",
  "title": "Additional Topics",
  "body": " Additional Topics   GitHub Desktop  TODO    VS Code Application  TODO    Using the Terminal  TODO   "
},
{
  "id": "ax-defs-notes",
  "level": "1",
  "url": "ax-defs-notes.html",
  "type": "Appendix",
  "number": "C",
  "title": "Definitions and Notes Quick Ref",
  "body": " Definitions and Notes Quick Ref   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
