import { createServerFn } from "@tanstack/react-start";

const POKE_API = "https://pokeapi.co/api/v2/pokemon";

export const getPokemonFn = createServerFn({ method: "GET" }).handler(
	async () => {
		console.log(" Executing secured API/Db call on server");
		const res = await fetch(POKE_API);
		const data = await res.json();
		console.log("Data fetched");

		return data;
	},
);

export const saveFavouritePokemonFn = createServerFn({ method: "POST" })
	.inputValidator((name: string) =>  name)
	.handler(async ({ data }) => {
		console.log(" ESavign data to Db");

		await new Promise((resolve) => setTimeout(resolve, 1000));
		return {
			success: true,
			saved: data,
		};
	});
