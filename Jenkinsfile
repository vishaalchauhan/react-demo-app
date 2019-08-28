pipeline {
  environment {
    registry = "nishant002/react-app-demo"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  tools {nodejs "nodejs"}
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/nishantkhandelwal/react-demo-app.git'
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
        sh 'npm run coverage'
      }
    }
    stage('sonar-scanner') {
    steps{
      def sonarqubeScannerHome = tool name: 'sonartool', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
      withCredentials([string(credentialsId: 'sonartoken', variable: 'sonarLogin')]) {
        sh "ls -ltr"
        sh "${sonarqubeScannerHome}/bin/sonar-scanner -e -Dsonar.host.url=http://localhost:9000 -Dsonar.login=${sonarLogin} -Dsonar.projectName=react-demo -Dsonar.projectVersion=${env.BUILD_NUMBER} -Dsonar.projectKey=RDemo -Dsonar.sources=/src/ -Dsonar.tests=src/coverage/ -Dsonar.language=javascript -Dsonar.javascript.lcov.reportPaths=/coverage/clover.xml"
      }   
    }
    }
    
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + "v" + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}