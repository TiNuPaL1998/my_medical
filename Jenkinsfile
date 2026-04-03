pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/your-username/explore-your-strengths.git'
            }
        }

        stage('Build') {
            steps {
                echo "Static website - no build required"
            }
        }

        stage('Test') {
            steps {
                sh 'ls -l'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy step (we will improve later)"
            }
        }
    }
}