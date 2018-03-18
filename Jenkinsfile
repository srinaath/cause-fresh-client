pipeline {
  agent {
    node {
      label 'node'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn install'
        sh 'yarn build'
        sh 'yarn test'
      }
    }
  }
}