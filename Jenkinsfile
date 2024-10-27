pipeline {
    agent any

    environment {
        NODE_VERSION = '16' // Specify the Node.js version you want to use
    }

    stages {
        stage('Checkout') {
            steps {
                
                git 'https://github.com/NVJKKartik/BlackJack_game.git' 
            }
        }
        stage('Install Dependencies'){
            steps {
                bat 'npm install'
            }
        }
        stage('Run Server For 1 Minute'){
            steps {
                script{
                    def server = bat(script: 'start /B npm start', returnStatus: true)
                    sleep(60)
                    bat 'taskkill /F /IM node.exe'
                }
            }
        }
        stage('Run tests'){
            steps{
                bat 'npm test'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
