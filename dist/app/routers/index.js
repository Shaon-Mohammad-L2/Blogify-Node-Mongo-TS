"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const routers = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth/',
        route: auth_route_1.AuthRoutes
    }
];
moduleRoutes.forEach(route => {
    routers.use(route.path, route.route);
});
exports.default = routers;
