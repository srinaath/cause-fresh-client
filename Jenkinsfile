pipeline {
    agent {
        withEnv([
            /* Override the npm cache directory to avoid: EACCES: permission denied, mkdir '/.npm' */
            'npm_config_cache=npm-cache',
            /* set home to our current directory because other bower
            * nonsense breaks with HOME=/, e.g.:
            * EACCES: permission denied, mkdir '/.config'
            */
            'HOME=.',
        ])
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }
    stages {
        stage("Install dependencies") {
            steps {
                withDockerContainer(args: "-u root") {
                    sh "npm install"
                }
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
