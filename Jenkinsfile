pipeline {
    agent {
        docker {
            image 'node:8.9'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Build FE Code') {
            steps {
                sh 'yarn build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
