## simple protractor tests for Jenkins

## configuration settings in jenkins:
1. Source Code Management (Git):
    Specify Repository URL
2. Add build step (Execute Windows batch command):
    npm install
    npm run webdriver-update
    npm run test
3. Post-build Actions (Archive the artifacts):
    Files to archive: reports/cucumber_report.html