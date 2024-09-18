FROM maven:3.8.8-eclipse-temurin-21-alpine AS build

WORKDIR /app

RUN echo "Contenido de /app antes de COPY:" && ls -la /app


COPY . .

RUN echo "Contenido de /app después de COPY:" && ls -la /app

WORKDIR /app/backend
RUN echo "Contenido de /app/backend antes de construir:" && ls -la /app/backend
RUN echo "Contenido de /app/backend antes de construir:" && ls -la /app/backend && cat /app/backend/pom.xml
RUN mvn clean package -DskipTests

RUN echo "Contenido de /app/backend/target después de construir:" && ls -la /app/backend/target
FROM amazoncorretto:21.0.3-alpine3.19

COPY --from=build /app/backend/target/HappyNurse-0.0.1-SNAPSHOT.jar Happy-Nurse.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","Happy-Nurse.jar"]