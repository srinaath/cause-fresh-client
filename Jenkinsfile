pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
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
        stage('Posting build') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
    }
    post {
        always {
            echo 'I will always say Hello again!'
        }
    }
}
