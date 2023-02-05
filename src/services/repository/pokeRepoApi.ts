import { PokemonStructure } from '../../models/pokemon';

export class PokeRepoApi {
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon';
  }

  async getPokemons(url: string = this.url): Promise<PokemonStructure[]> {
    const resp = await (await fetch(url)).json();
    const data = resp.results as { name: string; url: string }[];
    return Promise.all(
      data.map(async (poke) => ({
        name: poke.name,
        img: await this.getPokeImg(poke.url),
      }))
    );
  }

  async getPokeImg(url: string): Promise<string> {
    const resp = await fetch(url);
    const data = (await resp.json()).sprites.front_default as string;
    return data;
  }
}
