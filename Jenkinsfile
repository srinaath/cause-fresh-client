node('node') {

    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Build and run'){

         sh 'node -v'
         sh 'npm prune'
         sh 'yarn install'
         sh 'yarn test'
         sh 'yarn build'

       }
       stage('Cleanup'){

         echo 'prune and cleanup'
         sh 'npm prune'
         sh 'rm node_modules -rf'
       }

    }
    catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }

}
