import express from "express";
import userRoutes from "./routes/userRoutes";
import tourDetailRoutes from "./routes/tourDetailsRoutes";
import cors from "cors";
import travelGuideRoutes from "./routes/travelGuideRoutes";
import testimonialsRouter from "./routes/testimonialRoutes";
import categoryRouter from "./routes/categoryRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
}));

app.use("/users", userRoutes);
app.use("/tourDetails", tourDetailRoutes);
app.use("/travelGuides", travelGuideRoutes);
app.use("/testimonials", testimonialsRouter);
app.use("/categories", categoryRouter);

export default app;