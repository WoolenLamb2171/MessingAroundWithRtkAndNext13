import { NextResponse } from "next/server";
import { pokemon } from "@/pokemon";

// /api/search/?name=THE_NAME
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    // const pokemonData = pokemon;
    const pokemonData = pokemon.filter((p) =>
        p.name.toLowerCase().includes(name?.toLowerCase() ?? "")
    );

    // to not overhelm use .slice(0, 10)
    return NextResponse.json(pokemonData.slice(0, 10));
}