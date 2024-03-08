import { fetchData } from "../controller/controllerArray";

export default function router(app) {
    app.get('/data', (req, res) => {
        const data = fetchData();
        res.json(data);
    });
};
