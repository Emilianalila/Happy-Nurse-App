FROM maven:3.8.8-eclipse-temurin-21-alpine AS build


WORKDIR /backend
# Agrega esto antes de la línea RUN mvn clean package -DskipTests para verificar el contenido del directorio
RUN ls -la /backend

COPY . .
RUN mvn clean package -DskipTests

FROM amazoncorretto:21.0.3-alpine3.19

COPY --from=build /backend/target/HappyNurse-0.0.1-SNAPSHOT.jar Happy-Nurse.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","Happy-Nurse.jar"]