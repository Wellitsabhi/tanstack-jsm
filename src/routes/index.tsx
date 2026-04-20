import { createFileRoute, useRouter } from "@tanstack/react-router";
import SkillCard from "#/components/SkillCard";
import { getPokemonFn } from "#/server/pokemon";

export const Route = createFileRoute("/")({
	component: App,
	pendingComponent: () => <div className="p-14 text-center">Loading data</div>,
	pendingMs: 300,
	loader: async () => {
		const data = await getPokemonFn();
		return data;
	},
	errorComponent: ({ error }) => {
		const router = useRouter();
		return (
			<div className="p-14 text-red-500">
				<p>Some eror appeared!!! {error.message}</p>
				<button onClick={() => router.invalidate()} type="button">
					Try Again
				</button>
			</div>
		);
	},
	notFoundComponent: () => <div className="p-12">Not Found</div>,
});

function App() {
	const data = Route.useLoaderData();
	return (
		<main className="page-wrap px-4 pb-8 pt-14">
			<h2> hi. world</h2>

			<ul className="mt-7 list-none p-0 space-y-5">
				{data.results.map((pokemon: { name: string }) => (
					<li key={pokemon.name}>
						<SkillCard name={pokemon.name} />
					</li>
				))}
			</ul>

			{/* <ul className='mt-7 list-none p-0 space-y-5'>
      <li><SkillCard name="React" /></li>
      <li><SkillCard name="TansStack" /></li>
      <li><SkillCard name="Nodejs" /></li>
     </ul> */}
		</main>
	);
}
