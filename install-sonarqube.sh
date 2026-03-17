#!/bin/bash

# ==============================================================================
# SonarQube Automated Installation Script
# System: Linux (Ubuntu/Debian recommended)
# Author: Antigravity (PetBook DevOps Engineer)
# ==============================================================================

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Starting PetBook SonarQube Automated Installation ===${NC}"

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# 1. Update system
echo -e "${YELLOW}[1/6] Updating system packages...${NC}"
sudo apt-get update -y > /dev/null

# 2. Check and Install Docker
if command_exists docker; then
    echo -e "${GREEN}[✔] Docker is already installed.${NC}"
else
    echo -e "${YELLOW}[2/6] Installing Docker...${NC}"
    sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update -y
    sudo apt-get install -y docker-ce
    sudo systemctl start docker
    sudo systemctl enable docker
    echo -e "${GREEN}[✔] Docker installed successfully.${NC}"
fi

# 3. Check and Install Docker Compose
if command_exists docker-compose; then
    echo -e "${GREEN}[✔] Docker Compose is already installed.${NC}"
else
    echo -e "${YELLOW}[3/6] Installing Docker Compose...${NC}"
    sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    echo -e "${GREEN}[✔] Docker Compose installed successfully.${NC}"
fi

# 4. Prepare directories for persistence
echo -e "${YELLOW}[4/6] Configuring directories for persistence...${NC}"
SONAR_DIR="/opt/sonarqube"
sudo mkdir -p $SONAR_DIR/data $SONAR_DIR/extensions $SONAR_DIR/logs $SONAR_DIR/conf
sudo chown -R 1000:1000 $SONAR_DIR

# 5. Increase vm.max_map_count (Required for Elasticsearch in SonarQube)
echo -e "${YELLOW}[5/6] Optimizing kernel parameters (Elasticsearch requirement)...${NC}"
sudo sysctl -w vm.max_map_count=524288
echo "vm.max_map_count=524288" | sudo tee -a /etc/sysctl.conf

# 6. Deploy SonarQube and PostgreSQL via Docker Compose
echo -e "${YELLOW}[6/6] Deploying SonarQube Infrastructure...${NC}"
cat <<EOF > docker-compose.yml
version: "3.8"

services:
  sonarqube:
    image: sonarqube:9.9-community
    container_name: sonarqube
    ports:
      - "9000:9000"
    networks:
      - sonarnet
    environment:
      - SONAR_JDBC_URL=jdbc:postgresql://db:5432/sonar
      - SONAR_JDBC_USERNAME=sonar
      - SONAR_JDBC_PASSWORD=sonar
    volumes:
      - $SONAR_DIR/data:/opt/sonarqube/data
      - $SONAR_DIR/extensions:/opt/sonarqube/extensions
      - $SONAR_DIR/logs:/opt/sonarqube/logs
    restart: always

  db:
    image: postgres:12
    container_name: sonar_db
    networks:
      - sonarnet
    environment:
      - POSTGRES_USER=sonar
      - POSTGRES_PASSWORD=sonar
      - POSTGRES_DB=sonar
    volumes:
      - postgresql_data:/var/lib/postgresql/data
    restart: always

networks:
  sonarnet:

volumes:
  postgresql_data:
EOF

sudo docker-compose up -d

echo -e "${GREEN}=== Installation Complete! ===${NC}"
echo -e "${BLUE}Access SonarQube at: http://$(hostname -I | awk '{print $1}'):9000${NC}"
echo -e "${YELLOW}Default credentials: admin / admin${NC}"
