pipeline {
    agent {
        docker {
            image 'node:9.8'
            args '-u root:root -p 3000:3000'
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
    }
    post {
        always {
            steps {
                sh '/home/sites/cause-fresh-client/test.sh'
            }
        }
    }
}
