node {
    checkout scm
    skip_build = sh (script: "git log -1 | grep '\\[ci skip\\]'", returnStatus: true)
    if(skip_build != 0) {
        try {
            pipeline {
                agent {
                    docker {
                        image 'node:8.9'
                        args '-p 3000:3000 --privileged -v /opt/docker-caches/.composer:/home/jenkins/.composer -v /opt/docker-caches/.npm:/home/jenkins/.npm -v /opt/docker-caches/.cache/yarn:/home/jenkins/.cache/yarn -v /opt/docker-caches/supercache:/home/jenkins/supercache'
                    }
                }
                environment {
                    APP_ENV = 'docker'
                }
                stages {
                    stage("prepare") {
                        steps {
                            echo 'Yarn install'
                            sh '''
                                rm -rf node_modules
                                export YARN_HASH=`sha1sum yarn.lock --text | awk \'{print $1}\'`
                                export YARN_CACHE_DIR="/home/jenkins/supercache/yarn/$YARN_HASH"
                                echo $YARN_HASH
                                echo $YARN_CACHE_DIR
                                if [ ! -d "$YARN_CACHE_DIR" ] ; then
                                    mkdir $YARN_CACHE_DIR
                                fi
                                if [ ! -d "$YARN_CACHE_DIR/installed" ] ; then
                                    rm -rf $YARN_CACHE_DIR
                                    mkdir $YARN_CACHE_DIR
                                    mkdir ./node_modules
                                    sudo mount --bind $YARN_CACHE_DIR ./node_modules
                                    yarn
                                    sudo chmod -R 0777 ./node_modules
                                    mkdir "$YARN_CACHE_DIR/installed"
                                else
                                    mkdir ./node_modules
                                    sudo mount --bind $YARN_CACHE_DIR ./node_modules
                                fi
                            '''
                        }
                    }
                    stage("build") {
                        steps {
                            sh 'CI=false yarn build'
                        }
                    }
                    stage("test") {
                        steps {
                            sh 'CI=true npm test'
                        }
                    }

                }
            }
        } catch (error) {
            currentBuild.result = "FAILED"
            sh '#sleep 1 HOURS'
            throw error
        } finally {

        }
    } else {
        pipeline {
            agent any
            stages {
                stage("prepare Jenkins") {
                    steps {
                        echo "Build skipped - automatic build"
                    }
                }
            }
        }
    }
}
