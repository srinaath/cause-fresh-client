pipeline {
    agent {
        docker {
            image 'node:9.8'
            args '-u root -p 3000:3000'
        }
    }
    stages {
        stage('Install Dependancies') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Build Client Code') {
            steps {
                sh 'CI=false yarn build'
            }
        }
        stage('Test') {
            steps {
                sh 'CI=true npm test'
            }
        }
         stage('Deploy to AWS') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
    }
}
