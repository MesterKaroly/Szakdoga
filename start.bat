cd %~dp0\backend
start /wait mvn clean install -DskipTests
cd %~dp0\backend\target
call java -jar %~dp0\backend\target\backend-0.0.1-SNAPSHOT.jar
cd %~dp0\backend\etterem-frontend\src
call ng serve --o