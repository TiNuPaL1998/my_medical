pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo "Cloning repo..."
                git 'https://github.com/TiNuPaL1998/my_medical.git'
            }
        }

        stage('Verify') {
            steps {
                echo "Checking files..."
                sh 'ls -l'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying to Nginx..."

                sh '''
                sudo rm -rf /var/www/html/*
                sudo cp -r * /var/www/html/
                '''
            }
        }
    }
}