pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
        }
    }
    stages {
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

