pipeline {
  tools {nodejs "nodejs"}
  stages {
    stage('Install') {
      steps { sh 'npm install' }
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