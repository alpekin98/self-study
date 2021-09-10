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
        sh 'npm i -g allure-commandline'
        sh "echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' >>   /etc/apt/sources.list"
        sh 'apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 78BD65473CB3BD13'
        sh 'apt-get update'
        sh 'apt-get -y install libxpm4 libxrender1 libgtk2.0-0 libnss3 libgconf-2-4'
        sh 'apt-get -y install google-chrome-stable'
        sh 'apt-get -y install xvfb gtk2-engines-pixbuf'
        sh 'apt-get -y install xfonts-cyrillic xfonts-100dpi xfonts-75dpi xfonts-base xfonts-scalable'
        sh 'apt-get -y install imagemagick x11-apps'
        sh 'Xvfb -ac :99 -screen 0 1280x1024x16 &'
        sh 'export DISPLAY=:99'
        sh 'webdriver-manager version'
        sh 'webdriver-manager update'
        sh 'webdriver-manager version'
        sh 'npm -version'
        sh 'node --version'
        sh 'protractor --version'
        sh 'chromedriver --version'
        sh 'google-chrome --version'
        sh 'webdriver-manager start --detach --seleniumPort=8083 &'
        // sh 'ln -s /var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs/lib/node_modules/chromedriver /usr/bin/chromedriver'
      }
    }
    stage('Test') {
      parallel {
        stage('Static code analysis') {
          steps { sh 'ng e2e' }
        }
        stage('Unit tests') {
          steps { sh 'ng test self-study --watch=false' }
        }
      }
    }
    stage('Build') {
      steps { sh 'npm run build' }
    }
    stage('Show report'){
      steps { sh 'allure serve allure-results'}
    }
  }
}