create a new repository on the command line
    echo "# react_learning" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/avinsalunke/react_learning.git
    git push -u origin main

push an existing repository from the command line
    git remote add origin https://github.com/avinsalunke/react_learning.git
    git branch -M main
    git push -u origin main

How to install node js
    goto goodle and install node js, give all permission and install then reboot the system
    terminal -> node -v
                npm -v 

How to create first React project
        PS C:\FullStack_Course\html_css\GFG_Projects\ReactProjectLocalDirecory> npx create-react-app reactfirstapp
        Need to install the following packages:
        create-react-app@5.1.0
        Ok to proceed? (y) y


        Creating a new React app in C:\FullStack_Course\html_css\GFG_Projects\ReactProjectLocalDirecory\reactfirstapp.

        Installing packages. This might take a couple of minutes.
        Installing react, react-dom, and react-scripts with cra-template...


        added 1325 packages in 1m

        268 packages are looking for funding
        run `npm fund` for details

        Installing template dependencies using npm...

        added 18 packages, and changed 1 package in 4s

        268 packages are looking for funding
        run `npm fund` for details
        Removing template package using npm...


        removed 1 package, and audited 1343 packages in 4s

        268 packages are looking for funding
        run `npm fund` for details

        12 vulnerabilities (6 moderate, 6 high)

        To address all issues (including breaking changes), run:
        npm audit fix --force

        Run `npm audit` for details.

        Success! Created reactfirstapp at C:\FullStack_Course\html_css\GFG_Projects\ReactProjectLocalDirecory\reactfirstapp
        Inside that directory, you can run several commands:

        npm start
            Starts the development server.

        npm run build
            Bundles the app into static files for production.

        npm test
            Starts the test runner.

        npm run eject
            Removes this tool and copies build dependencies, configuration files
            and scripts into the app directory. If you do this, you can’t go back!

        We suggest that you begin by typing:

        cd reactfirstapp
        npm start

        Happy hacking!
        PS C:\FullStack_Course\html_css\GFG_Projects\ReactProjectLocalDirecory>

How to run 
    PS C:\FullStack_Course\html_css\GFG_Projects\ReactProjectLocalDirecory\reactfirstapp>  npm start
        Your branch is up to date with 'origin/main'.

        Changes not staged for commit:
        (use "git add <file>..." to update what will be committed)
        (use "git restore <file>..." to discard changes in working directory)
                modified:   ReadMe.txt

        Untracked files:
        (use "git add <file>..." to include in what will be committed)
        Compiled successfully!

        You can now view reactfirstapp in the browser.

        http://localhost:3000

        Note that the development build is not optimized.
        To create a production build, use npm run build.

        webpack compiled successfully