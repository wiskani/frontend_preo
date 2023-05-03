import { rest } from "msw";

export const handlers = [
	rest.get('/api/sector_aspects/*', (req, res, ctx) => {
		console.log('entra a api aspects')
		return res(
			ctx.status(200),
			ctx.json({aspecto: 'aspecto 1', id: 1})
		)
	}),
	rest.get("/api/sector/list", (req, res, ctx) => {
    console.log('entra a api sector list')
    const token = req.headers.get("Authorization");

    if (!token) {
      return res(
        ctx.status(401),
        ctx.json({ error: "Authorization token is missing" })
      );
    }

    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "Sector 1" },
        { id: 2, name: "Sector 2" },
      ])
    );
  }),
]

