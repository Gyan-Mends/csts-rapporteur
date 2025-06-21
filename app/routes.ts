import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/_layout.tsx", [
        route("/","routes/home.tsx"),
        route("/why-rapporteurs", "routes/why-rapporteurs.tsx"),
        route("/services", "routes/services.tsx"),
        route("/our-work", "routes/our-work.tsx"),
        route("/reports", "routes/report/index.tsx"),
        route("/contact", "routes/contact.tsx"),
    ]),
  

] satisfies RouteConfig;
