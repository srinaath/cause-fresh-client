pipeline {
   agent {
        dockerfile {
            filename 'Dockerfile'
        }
    }
    stages {
        stage('Deploy to AWS') {
            steps {
                sh 'sh ./jenkins/scripts/test.sh'
            }
        }
    }
    post {
        always {
            echo 'I will always say Hello again!'
        }
    }
}


