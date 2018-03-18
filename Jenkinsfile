pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }
    stages {
        stage("Prepare environment") {
            checkout scm
            // Build the Docker image from the Dockerfile located at the root of the project
            docker.build("${JOB_NAME}")
        }
        stage("Install dependencies") {
        // Run the container as `root` user
        // Note: you can run any official Docker image here
        withDockerContainer(args: "-u root", image: "${JOB_NAME}") {
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
}
