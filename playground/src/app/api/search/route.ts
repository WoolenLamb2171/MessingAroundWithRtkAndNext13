import { NextResponse } from "next/server";
import pokemon from "@/pokemon.json"

// /api/search/?name=THE_NAME

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const pokemonData = pokemon.filter(pokemon => 
        pokemon.name.toLowerCase().includes(name?.toLowerCase() ?? "")
    ).slice(0, 10)  
    return NextResponse.json(pokemonData)
}