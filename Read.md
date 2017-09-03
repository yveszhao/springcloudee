1. Got spring boot start up failure and exception shows: NoSuchMethod on SpringApplicationBuilder <init>
Resolved by updating the top pom.xml and copy exactly from offcial spring cloud website, so it should be jar version issue.

2. To access the Eureka server page, open http://localhost:8080/Eurekaserver-1.0-SNAPSHOT/ when tomcat started.

3. client URL: http://localhost:8082/ while server is using out side tomcat URL: http://localhost:8080/Eurekaserver-1.0-SNAPSHOT/eureka/

4. To deploy both eureka server and eureka client on the same port of tomcat instance, we have to build two war and both should extends SpringBootServletInitializer
to be able to start standalone of springboot. And the client needs to be reloaded after tomcat server is up because.
The eureka server is not available until the whole tomcat server is up.


