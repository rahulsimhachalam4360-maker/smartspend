package com.rahul.smart.spend.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityHeadersFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        // ✅ Stops MIME-type sniffing (basic protection)
        response.setHeader("X-Content-Type-Options", "nosniff");

        // ✅ Prevents your site from being embedded in iframes (clickjacking protection)
        response.setHeader("X-Frame-Options", "DENY");

        // ✅ Limits referrer info
        response.setHeader("Referrer-Policy", "no-referrer");

        filterChain.doFilter(request, response);
    }
}
