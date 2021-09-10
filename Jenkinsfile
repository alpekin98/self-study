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
      }
    }

    stage('Unit tests') {
      steps { sh 'ng test self-study --watch=false' }
    }
    
    stage('e2e tests') {
      steps {
        script {
          try{
            sh 'ng e2e' 
          } catch (error) {
            echo 'Error occured at e2e testing: ' + error.getMessage()
          }
        }
      }
    }
    
    stage('Build') {
      steps { sh 'npm run build' }
    }

    stage('reports') {
      steps {
        script {
          allure([
            includeProperties: false,
            jdk: '',
            properties: [],
            reportBuildPolicy: 'ALWAYS',
            results: [[path: 'allure-results']]
          ])
        }
      }
    }

  }
}