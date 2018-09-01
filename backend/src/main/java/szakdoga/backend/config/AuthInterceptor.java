package szakdoga.backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import szakdoga.backend.Service.Annotation.Role;
import szakdoga.backend.Service.UserService;
import szakdoga.backend.app.module.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Component
public class AuthInterceptor extends HandlerInterceptorAdapter {


    private final UserService userService;

    @Autowired
    public AuthInterceptor(UserService userService) {
        this.userService = userService;
    }

    @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
            List<User.Role> routeRoles = getRoles((HandlerMethod) handler);
            User user = userService.getUser();

            // when there are no restrictions, we let the user through
            if (routeRoles.isEmpty() || routeRoles.contains(User.Role.GUEST)) {
                return true;
            }
            // check role
            if (userService.isLoggedIn() && routeRoles.contains(user.getRole())) {
                return true;
            }
            response.setStatus(401);
            return false;
        }

        private List<User.Role> getRoles(HandlerMethod handler) {
            Role role = handler.getMethodAnnotation(Role.class);
            return role == null ? Collections.emptyList() : Arrays.asList(role.value());
        }

}
