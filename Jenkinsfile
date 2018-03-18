pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage("Install dependencies") {
            steps {
                sh "npm install"
            }
        }
        stage('Build Server Code') {
            steps {
                sh 'CI=false yarn build'
            }
        }
        stage('Test') {
            steps {
                sh 'CI=true npm test'
            }
        }
    }
    environment {
        npm_config_cache = 'npm-cache'
    }
}
