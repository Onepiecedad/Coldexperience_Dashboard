import { http, HttpResponse } from "msw";
import kpi from "../data/kpi.json";
import notifications from "../data/notifications.json";
import economy from "../data/economy.json";
import today from "../data/slots.json";

export const handlers = [
  http.get("/api/kpi", () => HttpResponse.json(kpi)),
  http.get("/api/notifications", () => HttpResponse.json(notifications)),
  http.get("/api/economy/summary", () => HttpResponse.json(economy)),
  http.get("/api/today", () => HttpResponse.json(today)),
  http.post("/api/bookings/:id/mark-paid", ({ params }) =>
    HttpResponse.json({ success: true, id: params.id })
  ),
];
