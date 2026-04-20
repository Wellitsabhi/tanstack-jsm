import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { saveFavouritePokemonFn } from "#/server/pokemon";

export const Route = createFileRoute("/favourite")({
	component: FavouritePage,
});

function FavouritePage() {
	const [name, setName] = useState("");
	const [status, setStatus] = useState("");
	const savePokemon = useServerFn(saveFavouritePokemonFn);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Saving...");
    await savePokemon({data: name});
    setStatus(`Saved  ${name}`);
    setName('');
  }

	return (
		<main className="page-wrap px-4 pb-8 pt-14">
			<h1>Favourite Pokemon</h1>
			<form onSubmit={handleSubmit} className="mt-6 space-x-4">
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="border p-2 rounded"
					placeholder="Pikachu"
				/>
				<button type="submit" className="bg-blue-500 text-whitep-2 rounded">
					Submit
				</button>
			</form>
			<p className="mt-4">{status} </p>
		</main>
	);
}
