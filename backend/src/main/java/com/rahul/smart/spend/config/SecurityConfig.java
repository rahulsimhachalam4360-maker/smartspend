package com.rahul.smart.spend.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
@Configuration
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                // ✅ Allows your CorsConfig to be applied even when Spring Security is present
                .cors(Customizer.withDefaults())

                // ✅ For REST APIs (React -> Spring Boot), CSRF is typically disabled unless using cookies/sessions
                .csrf(csrf -> csrf.disable())

                // ✅ Decide which endpoints are public/private
                .authorizeHttpRequests(auth -> auth
                        // Preflight requests (browser OPTIONS) must be allowed, otherwise Axios "Network Error"
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()

                        // If you use actuator health checks (optional)
                        .requestMatchers("/actuator/health").permitAll()

                        // For now keep everything open (since you haven't added login/JWT yet)
                        .anyRequest().permitAll()
                );

        return http.build();
    }
}
