pipeline {
   agent {
        dockerfile {
            filename 'Dockerfile'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
                sh 'yarn build'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Deploy to AWS') {
            steps {
                sh 'sh ./jenkins/scripts/test.sh'
            }
        }
    }
    post {
        success {
            echo 'The client build was completed succesfully'
        }
        failure {
            echo 'An error occured in the client build'
        }
    }
}


