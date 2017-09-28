import os

# List of files that should not be updated by this script.
skipFiles = ['nav.html', 'index.html']

# Read the directory of the nav.html
currentDir = os.getcwd()
navFileAddress = currentDir + '//nav.html'
with open(navFileAddress, 'r') as navFile:
    navStr = navFile.read()

# Replace the headers in all of the html files.
for htmlFile in os.listdir(currentDir):
    if htmlFile.endswith('.html') and htmlFile not in skipFiles:
        htmlFileAddress = currentDir + '//' + htmlFile
        searchStr = ''
        navTrigger = False
        with open(htmlFileAddress, 'r') as webPageFile:
            # Find the text to replace
            for line in webPageFile:
                if line.startswith('  <nav'):
                    navTrigger = True
                    searchStr = searchStr + line
                elif line.startswith('  </nav>'):
                    navTrigger = False
                    searchStr = searchStr + line
                elif navTrigger == True:
                    searchStr = searchStr + line

        # Replace the text.
        with open(htmlFileAddress, 'r') as webPageFile:
            text = webPageFile.read()
        text = text.replace(searchStr, navStr)

        with open(htmlFileAddress, 'w') as f:
          f.write(text)
