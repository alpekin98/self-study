pipeline {
  agent any
  tools {nodejs "nodejs"}
  stages {
    stage('Install') {
      steps { 
        sh 'npm install'
        sh 'npm i -g chromedriver'
        sh 'npm i -g @angular/cli'
        sh 'npm i -g protractor'
        sh 'apt-get update'
        sh 'apt-get install libxpm4 libxrender1 libgtk2.0-0 libnss3 libgconf-2-4'
        sh 'apt-get install google-chrome-stable'
        sh 'apt-get install xvfb gtk2-engines-pixbuf'
        sh 'apt-get install xfonts-cyrillic xfonts-100dpi xfonts-75dpi xfonts-base xfonts-scalable'
        sh 'apt-get install imagemagick x11-apps'
        sh 'webdriver-manager update'
        sh 'ln -s /var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs/lib/node_modules/chromedriver /usr/bin/chromedriver'
        sh 'npm -version'
        sh 'node --version'
        sh 'protractor --version'
        sh 'chromedriver --version'
        sh 'google-chrome --version'
        sh 'webdriver-manager --version'
        
      }
    }
    stage('Test') {
      parallel {
        stage('Static code analysis') {
          steps { sh 'ng e2e' }
        }
        stage('Unit tests') {
          steps { sh 'ng test' }
        }
      }
    }
    stage('Build') {
      steps { sh 'npm run build' }
    }
  }
}