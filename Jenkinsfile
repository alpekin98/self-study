pipeline {
  agent any
  tools {nodejs "nodejs"}
  stages {
    stage('Install') {
      steps { 
        sh 'npm install'
        sh 'npm i -g @angular/cli'
        sh 'npm i -g protractor'
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