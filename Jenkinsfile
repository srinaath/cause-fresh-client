pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            // Run the container as `root` user
            // Note: you can run any official Docker image here
            withDockerContainer(args: "-u root", image: "${JOB_NAME}") {
                sh "npm install"
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
}
